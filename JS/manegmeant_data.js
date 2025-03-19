let manegmeant_data_form = document.querySelector(".manegmeant_data_form");
let backup_restor_ptn_page = document.querySelector(".backup_restor_ptn_page");
let cleaning_data_ptn_page = document.querySelector(".cleaning_data_ptn_page");
let back_restor_page = document.querySelector(".back_restor_page");
let data_pass = document.querySelector(".data_pass");
let back_path = document.querySelector(".back_path");
let selected_backup_path = document.querySelector(".selected_backup_path");
let restor_path = document.querySelector(".restor_path");
let selected_restor_path = document.querySelector(".selected_restor_path");
async function _backup_restor_ptn_page() {
  back_restor_page.style.display = "block";
  backup_restor_ptn_page.style.backgroundColor = "green";
  cleaning_data_ptn_page.style.backgroundColor = "var(--color-2)";
  selected_backup_path.innerHTML = await read_backup_path_data();
  clear_res_data();
  data_pass.value = "";
  back_path.value = "";
}
function _cleaning_data_ptn_page() {
  back_restor_page.style.display = "none";
  backup_restor_ptn_page.style.backgroundColor = "var(--color-2)";
  cleaning_data_ptn_page.style.backgroundColor = "green";
}

async function readJsonFile(filePath) {
  const data = await readFile(filePath);
  return JSON.parse(data) || [];
}

async function writeJsonFile(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2));
}

async function read_backup_path_data() {
  let path = await window.electron.readData("__backup_path_data");
  if (path == undefined || path == null) {
    path = "E:\\office_system\\data\\Back_up";
  }
  return path;
}

async function write_backup_path_data(path_data) {
  await window.electron.write_Data("__backup_path_data", path_data);
}

async function path_back_selected() {
  let path = await read_backup_path_data();
  if (data_pass.value == path) {
    let path_data = back_path.value;
    await write_backup_path_data(path_data);
    msg_alert("تم تغير المسار");
    data_pass.value = "";
    back_path.value = "";
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
  selected_backup_path.innerHTML = await read_backup_path_data();
  selected_restor_path;
  console.log(path);
}

async function colect_path_truck_data_backup() {
  create_truck_data = await read_truck_modle_data();
  truck_path_data = await read_path_data();
  let all_data = [create_truck_data, truck_path_data];
  return all_data;
}

function getCurrentDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero based
  let day = String(now.getDate()).padStart(2, "0");
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let dateTime = `(${year}-${month}-${day})(${hours}-${minutes}-${seconds})`;
  return dateTime;
}

async function _backup_() {
  try {
    let path = await read_backup_path_data();
    let data = await colect_path_truck_data_backup();
    let dateTime = getCurrentDateTime();
    let path_name = `${path}/BackUp_app2_on_${dateTime}.json`;
    let data1 = JSON.stringify(data); // Convert to string if it's an object
    let encryptData = await window.electron.encryptData(data1);
    // console.log(encryptData);
    await writeJsonFile(path_name, encryptData);
    // await writeJsonFile(path_name, data);

    msg_alert("تم الاحتفاظ بنسخه ");
  } catch (error) {
    console.log(error);
    msg_alert("حدث خطأ اثناء النسخ");
  }
}
let res_Path;
async function path_restor_selected() {
  res_Path = restor_path.files[0].path;
  selected_restor_path.innerHTML = res_Path;
}

async function _restor_truck() {
  let restor_truck_pass = "back1";
  if (data_pass.value == restor_truck_pass) {
    let decryptedData = await readJsonFile(res_Path);
    let all_data1 = await window.electron.decryptData(decryptedData);
    let all_data = JSON.parse(all_data1);
    // console.log(all_data);

    if (all_data) {
      let truck_data = all_data[0];

      await write_truck_modle_Data(truck_data);

      msg_alert("تم استعادة بيانات الشاحنات");
    } else {
      msg_alert("ملف الاستعادة غير سليم");
    }
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
async function _restor_com() {
  let restor_com_pass = "back2";
  if (data_pass.value == restor_com_pass) {
    let decryptedData = await readJsonFile(res_Path);
    let all_data1 = await window.electron.decryptData(decryptedData);
    let all_data = JSON.parse(all_data1);

    console.log(all_data);
    if (all_data) {
      let path_data = all_data[1];
      await write_path_Data(path_data);
      msg_alert("تم استعادة بيانات الشركات");
    } else {
      msg_alert("ملف الاستعادة غير سليم");
    }
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
async function _restor_all() {
  let restor_all_pass = "back3";
  if (data_pass.value == restor_all_pass) {
    let decryptedData = await readJsonFile(res_Path);
    let all_data1 = await window.electron.decryptData(decryptedData);
    let all_data = JSON.parse(all_data1);
    // console.log(all_data);
    // if (decryptedData) {

    if (all_data) {
      let truck_data = all_data[0];
      let path_data = all_data[1];
      // let truck_data = decryptedData[0];
      // let path_data = decryptedData[1];
      await write_path_Data(path_data);
      await write_truck_modle_Data(truck_data);
      msg_alert("تم استعادة بيانات الشاحنات والشركات");
    } else {
      msg_alert("ملف الاستعادة غير سليم");
    }
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
function clear_res_data() {
  restor_path.value = "";
  selected_restor_path.innerHTML = "";
}
let lastBackupTime;
async function read_back_time() {
  let Data = await window.electron.readData("back_time");
  if (Data == undefined) {
    Data = 0;
  }
  return Data;
}
async function write_back_time(back_time) {
  await window.electron.write_Data("back_time", back_time);
}
window.onload = async function () {
  await scheduleBackup();
  await refresh_system_name();
  user_input.focus();
};
async function scheduleBackup() {
  lastBackupTime = await read_back_time();
  const currentTime = new Date();
  if (lastBackupTime == currentTime.getDate()) {
    console.log("backup had done");
  } else {
    await _backup_();
    console.log("backup has done");
  }
  // console.log(currentTime.getDate());
  lastBackupTime = currentTime.getDate();
  write_back_time(lastBackupTime);
}

// E:\office_system\data\Back_up

let emty = [];
async function reset_1() {
  let restor_all_pass = "remove1";
  if (data_pass.value == restor_all_pass) {
    await write_truck_modle_Data(emty);
    msg_alert("تم حذف بيانات الشاحنات");
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
async function reset_2() {
  let restor_all_pass = "remove2";
  if (data_pass.value == restor_all_pass) {
    await write_path_Data(emty);
    msg_alert("تم حذف بيانات المندوبين");
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
async function reset_3() {
  let restor_all_pass = "remove3";
  if (data_pass.value == restor_all_pass) {
    await write_path_Data(emty);
    await write_truck_modle_Data(emty);
    msg_alert("تم حذف بيانات الشاحنات والمندوبين");
  } else {
    msg_alert("كلمة المرور خاطئه");
  }
}
