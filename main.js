const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require("electron");
const fs = require("fs").promises;
const path = require("path");
const os = require("os");
const windowStateKeeper = require("electron-window-state");
const Store = require("electron-store");
const crypto = require("crypto");
const si = require('systeminformation');

// Encryption settings
const algorithm = "aes-256-cbc";
const key = Buffer.from("12345678901234567890123456789012", "utf8"); // Key for AES encryption (32 bytes)

// Initialize persistent storage
const store = new Store();
let mainWindow;
let newWindow;
let minwim = false;
let active_win = false;

// IPC handlers for interacting with data storage
ipcMain.handle("readData", (event, key) => {
  try {
    return store.get(key);
  } catch (error) {
    console.error("Error reading data:", error);
    throw error;
  }
});


ipcMain.handle("write_Data", (event, key, data) => {
  try {
    store.set(key, data);
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
});

// IPC handlers for reading and writing files
ipcMain.handle("readFile", async (event, filePath) => {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
});

ipcMain.handle("writeFile", async (event, filePath, data) => {
  try {
    await fs.writeFile(filePath, data);
  } catch (error) {
    console.error("Error writing file:", error);
    throw error;
  }
});

// Encryption and decryption handlers
ipcMain.handle("encrypt-data", (event, data) => {
  const iv = crypto.randomBytes(16); // Generate random initialization vector (IV)
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), data: encrypted };
});

ipcMain.handle("decrypt-data", (event, encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(encryptedData.iv, "hex"));
  let decrypted = decipher.update(encryptedData.data, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
});

// Create and set the application menu
const template = [];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Function to create the main application window
function createWindow() {
  // Restore window size and position from previous session
  const mainWindowState = windowStateKeeper({ defaultWidth: 1000, defaultHeight: 600 });

  if (!minwim) {
    mainWindow = new BrowserWindow({
      minWidth: 800,
      minHeight: 600,
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, "preload.js"),
      },
    });
    minwim = true;

    // Function to print a PDF from the loaded HTML file
    async function print(name) {
      // Use a default name if none is provided
      if (!name || name.trim() === "") {
        name = "default_document";
      }

      // Sanitize the file name to remove invalid characters
      // name = name.replace(/[^a-zA-Z0-9_\-\.]/g, "_");

      const appDir = path.resolve(__dirname);
      const htmlFilePath = path.join(appDir, "print.html");
      const desktopDir = path.join(os.homedir(), "Desktop");
      const outputFilePath = path.join(desktopDir, `${name}.pdf`);

      // Ensure the Desktop directory exists
      try {
        await fs.mkdir(desktopDir, { recursive: true });
      } catch (err) {
        console.error("Error creating Desktop directory:", err);
      }

      // Create a new BrowserWindow to render the printable content
      let win = new BrowserWindow({ width: 1150, height: 600, webPreferences: { contextIsolation: true } });
      win.loadURL(`file://${htmlFilePath}`);

      // Handle unwanted console messages
      win.webContents.on("console-message", (e, level, message) => {
        if (message.includes("'Autofill.enable' wasn't found")) {
          e.preventDefault();
        }
      });

      // Generate the PDF once the content is fully loaded
      win.webContents.on("did-finish-load", () => {
        setTimeout(() => {
          win.webContents
            .printToPDF({ landscape: true, pageSize: "A4", printBackground: true, color: false })
            .then((data) => {
              fs.writeFile(outputFilePath, data)
                .then(() => console.log("PDF saved successfully to:", outputFilePath))
                .catch((err) => console.error("Error saving PDF:", err));
            })
            .then(() => win.close())
            .catch((error) => console.error("Error generating PDF:", error));
        }, 4000);
      });

      // Log a message when the print window is closed
      win.on("closed", () => console.log("Print window closed."));
    }

    // IPC handler to trigger the print function
    ipcMain.handle("print", async (event, name) => {
      if (name) await print(name);
    });
  }

  // Open the DevTools for debugging
  // mainWindow.webContents.openDevTools();

  // Manage window state and load the main HTML file
  mainWindowState.manage(mainWindow);
  mainWindow.loadFile("index.html");

  // Show the window when it's ready
  mainWindow.once("ready-to-show", () => mainWindow.show());

  // Reset window state when closed
  mainWindow.on("closed", () => {
    minwim = false;
    mainWindow = null;
  });

  // Register global shortcuts for zooming in and out
  globalShortcut.register("CommandOrControl+=", () => {
    const currentZoomFactor = mainWindow?.webContents.getZoomFactor() || 1;
    mainWindow?.webContents.setZoomFactor(Math.min(currentZoomFactor + 0.1, 3.0));
  });

  globalShortcut.register("CommandOrControl+-", () => {
    const currentZoomFactor = mainWindow?.webContents.getZoomFactor() || 1;
    mainWindow?.webContents.setZoomFactor(Math.max(currentZoomFactor - 0.1, 0.1));
  });
}
ipcMain.handle('get-motherboard-serial', async () => {
  const data = await si.baseboard();
  return data.serial; // إرجاع السيريال
});

// Handler to open a calculator window
ipcMain.on("open-calc-window", () => {
  if (!active_win) {
    newWindow = new BrowserWindow({
      modal: true,
      maxWidth: 360,
      maxHeight: 590,
      width: 360,
      height: 590,
      minWidth: 360,
      minHeight: 590,
      show: false,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
      },
    });

    newWindow.loadFile("./calc/index.html");
    newWindow.once("ready-to-show", () => newWindow.show());
    newWindow.on("closed", () => {
      active_win = false;
      newWindow = null;
    });
  }
});

// Create the main window when the app is ready
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
