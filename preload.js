const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openNewWindow: () => {
    ipcRenderer.send("open-calc-window");
  },

  print: (name) => ipcRenderer.invoke("print", name),

  encryptData: (data) => ipcRenderer.invoke("encrypt-data", data),
  getMotherboardSerial: () => ipcRenderer.invoke('get-motherboard-serial'),

  decryptData: (encryptedData) =>
    ipcRenderer.invoke("decrypt-data", encryptedData),

  readFile: async (filePath) => {
    try {
      const content = await ipcRenderer.invoke("readFile", filePath);
      return content;
    } catch (error) {
      console.error("Error reading file:", error);
      throw error;
    }
  },

  write_Data: async (key, data) => {
    try {
      await ipcRenderer.invoke("write_Data", key, data);
    } catch (error) {
      console.error("Error saving data:", error);
      throw error;
    }
  },

  readData: async (key) => {
    try {
      return await ipcRenderer.invoke("readData", key);
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  },

  writeFile: async (filePath, data) => {
    try {
      await ipcRenderer.invoke("writeFile", filePath, data);
    } catch (error) {
      console.error("Error writing file:", error);
      throw error;
    }
  },
});
