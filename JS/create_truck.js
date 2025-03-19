const { readFile_create_truck, writeFile_create_truck } = window.electron;
let add_create_truck_page = document.querySelector(".add_create_truck_page");
let qr_truck_inp = document.querySelector(".qr_truck_inp");
let date_inp = document.querySelector(".date_inp");
// let truck_name_inp = document.querySelector(".truck_name_inp");
let truck_number_inp = document.querySelector(".truck_number_inp");
let driver_name_inp = document.querySelector(".driver_name_inp");
let driver_phone_inp = document.querySelector(".driver_phone_inp");
let driver_address_inp = document.querySelector(".driver_address_inp");
let drive_path_inp;
let save_new_create_truck = document.querySelector(".save_new_create_truck");
let search_list_truck_qr = document.querySelector(".search_list_truck_qr");
let search_list_truck_name = document.querySelector(".search_list_truck_name");
let search_list_truck_driver_name = document.querySelector(
  ".search_list_truck_driver_name"
);
let office_info = document.querySelector(".office_info");
let list_truck_Data_TableBody = document.querySelector(
  ".list_truck_Data_TableBody"
);
let add_create_truck_path_page = document.querySelector(
  ".add_create_truck_path_page"
);
let search_path_qr = document.querySelector(".search_path_qr");
let search_path_name = document.querySelector(".search_path_name");
let path_qr = document.querySelector(".path_qr");
let office = document.querySelector(".office");
let sup_add = document.querySelector(".sup_add");
let first_money_block = document.querySelector(".first_money_block");
let save_new_path = document.querySelector(".save_new_path");
let path_Data_TableBody = document.querySelector(".path_Data_TableBody");
let create_truck_alert = document.querySelector(".alert");
let create_truck_msg_contnet = document.querySelector(".msg_contnet");
let create_truck_ptn_page = document.querySelector(".create_truck_ptn_page");
let truck_list_ptn_page = document.querySelector(".truck_list_ptn_page");
let create_path_ptn_page = document.querySelector(".create_path_ptn_page");
let name_info = document.querySelector(".name_info");
let addres_info = document.querySelector(".addres_info");
let num_info = document.querySelector(".num_info");
let info_name_data = document.querySelector(".info_name_data");
let info_add_data = document.querySelector(".info_add_data");
let info_num_data = document.querySelector(".info_num_data");
let office_name_bar = document.querySelector(".office_name");
let input_frist_money = document.querySelector(".input_frist_money");
let select_truck_path_id;
let select_truck_path_name;
let select_truck_path_mod = false;
let truck_path_save_mod = false;
let last_truck_path_qr;
let save_or_edit_truck_path = true;
let truck_path_data;

let select_create_truck_id;
let select_create_truck_name;
let select_create_truck_mod = false;
let create_truck_save_mod = false;
let last_create_truck_qr;
let save_or_edit_create_truck = true;
let create_truck_data;
let path_list_data;

// async function readJsonFile(filePath) {
//   const data = await readFile(filePath);
//   return JSON.parse(data) || [];
// }

// async function writeJsonFile(filePath, data) {
//   await writeFile(filePath, JSON.stringify(data, null, 2));
// }

async function read_truck_modle_data() {
  let Data = await window.electron.readData("truck_modle_data");
  if (Data == undefined) {
    Data = [];
    await write_truck_modle_Data(Data);
  }
  return Data;
}
async function write_truck_modle_Data(truck_modle_data) {
  await window.electron.write_Data("truck_modle_data", truck_modle_data);
}

async function create_truck_msg_alert(msg) {
  create_truck_alert.style.right = "5px";
  create_truck_msg_contnet.innerHTML = msg;
  setTimeout(() => {
    create_truck_alert.style.right = "-330px";
  }, 3000);
}

///////////////////////////// creatre new truck zone ////////////////////////

async function open_add_truck_page() {
  office_info.style.display = "none";
  add_create_truck_page.style.display = "block";
  add_create_truck_path_page.style.display = "none";
  create_truck_save_mod = true;
  truck_path_save_mod = false;
  first_money_block.style.display = "none";

  // await get_path_list()
  await _new_create_truck();
  // await get_truck_path_list()
  await search_list_trucks_data();
  // search_list_truck_qr.focus();
  await get_last_qr_create_truck();
  create_truck_ptn_page.style.backgroundColor = "green";
  truck_list_ptn_page.style.backgroundColor = "var(--color-2)";
  create_path_ptn_page.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "green";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
}

async function get_last_qr_create_truck() {
  if (save_or_edit_create_truck == true) {
    create_truck_data = await read_truck_modle_data();
    // console.log(create_truck_data);
    if (create_truck_data.length == 0 || create_truck_data == []) {
      last_create_truck_qr = 0;
    } else {
      last_create_truck_qr = create_truck_data[create_truck_data.length - 1].qr;
    }
    qr_truck_inp.value = last_create_truck_qr + 1;
  }
}
function edit_or_save_truck_switch() {
  if (save_or_edit_create_truck == true) {
    create_truck_save_Data();
  } else if (save_or_edit_create_truck == false) {
    edit_create_truck_data(select_create_truck_id);
  }
}

document.addEventListener("keydown", (event) => {
  if (create_truck_save_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_switch();
    }
  }
});

async function create_truck_save_Data() {
  drive_path_inp = document.querySelector(".drive_path_inp");
  create_truck_data = await read_truck_modle_data();
  let save_stat = true;
  if (
    date_inp.value != "" &&
    // truck_name_inp.value != "" &&
    driver_name_inp.value != "" &&
    driver_phone_inp.value != ""
  ) {
    for (let i = 0; i < create_truck_data.length; i++) {
      if (
        create_truck_data[i].truck_number_inp == truck_number_inp.value &&
        create_truck_data[i].driver_name_inp == driver_name_inp.value
      ) {
        create_truck_msg_alert("تم تسجيل هذه الشاحنه مسبقا");
        save_stat = false;
        break;
      } else {
        save_stat = true;
      }
    }

    if (save_stat) {
      await get_last_qr_create_truck();
      try {
        create_truck_data.push({
          qr: +last_create_truck_qr + 1,
          date_inp: date_inp.value,
          // truck_name_inp: truck_name_inp.value,
          truck_number_inp: truck_number_inp.value,
          driver_name_inp: driver_name_inp.value,
          driver_phone_inp: driver_phone_inp.value,
          truck_all_salary: 0,
          sign : user_sign,

          process: [
            {
              start: "",
              orders: [],
              expenses: [],
              pay: [],
              finsh_pay: {},
            },
          ],
        });
        await write_truck_modle_Data(create_truck_data);
        await search_list_trucks_data();

        create_truck_msg_alert("تم تسجيل بيانات الشاحنه");
        clear_input_create_truck_feilds();
      } catch (error) {
        console.error("Error adding item to the store:", error);
        create_truck_msg_alert("حدث خطأ عند حفظ بيانات الشاحنه");
      }
    }
  } else {
    create_truck_msg_alert("اكمل بيانات الشاحنه");
  }
}

async function edit_create_truck_data(i) {
  create_truck_data = await read_truck_modle_data();
  let edit_stat = true;
  if (
    date_inp.value != "" &&
    // truck_name_inp.value != "" &&
    driver_name_inp.value != "" &&
    driver_phone_inp.value != ""
  ) {
    for (let i = 0; i < create_truck_data.length; i++) {
      if (
        create_truck_data[i].truck_number_inp == truck_number_inp.value &&
        create_truck_data[i].driver_name_inp == driver_name_inp.value &&
        save_or_edit_create_truck
      ) {
        edit_stat = false;
        break;
      } else {
        edit_stat = true;
      }
    }
    if (edit_stat && save_or_edit_create_truck == false) {
      try {
        (create_truck_data[i].date_inp = date_inp.value),
          // (create_truck_data[i].truck_name_inp = truck_name_inp.value),
          (create_truck_data[i].truck_number_inp = truck_number_inp.value),
          (create_truck_data[i].driver_name_inp = driver_name_inp.value),
          (create_truck_data[i].driver_phone_inp = driver_phone_inp.value),
          (create_truck_data[i].sign = user_sign),

          
          await write_truck_modle_Data(create_truck_data);
        save_new_create_truck.innerHTML = "حفظ";
        save_or_edit_create_truck = true;
        await search_list_trucks_data();

        create_truck_msg_alert("تم تعديل الشاحنه ");
        clear_input_create_truck_feilds();
      } catch (error) {
        console.error("Error editing client data:", error);
        create_truck_msg_alert("حدث خطأ عند تعديل بيانات الشاحنه ");
      }
    } else {
      create_truck_msg_alert("هذه الشاحنه موجوده بالفعل");
    }
  } else {
    create_truck_msg_alert("اكمل بيانات الشاحنه");
  }
}

function clear_input_create_truck_feilds() {
  (async () => {
    await get_last_qr_create_truck();
  })();
  date_inp.value = today;

  truck_number_inp.value = "";
  driver_name_inp.value = "";
  driver_phone_inp.value = "";
  truck_number_inp.focus();

}
function _new_create_truck() {
  save_or_edit_create_truck = true;
  clear_input_create_truck_feilds();
  save_new_create_truck.innerHTML = "حفظ";
  truck_number_inp.focus();
  // first_money_block.style.display = "none";

}




async function add_frist_money_func(){
if (save_or_edit_create_truck == false) {
  // create_truck_data = await read_truck_modle_data();
  let main = create_truck_data[select_create_truck_id].truck_all_salary
let all =  +main + +input_frist_money.value
  create_truck_data[select_create_truck_id].truck_all_salary =  +all 
  await write_truck_modle_Data(create_truck_data);
  await search_list_trucks_data();
    input_frist_money.value = '';
    _new_create_truck();
    first_money_block.style.display = "none";
}else{
  create_truck_msg_alert("حدد الشاحنه ");
}
}










///////////////////////////// list truck zone ////////////////////////

function open_list_truck_page() {
  add_create_truck_page.style.display = "none";
  add_create_truck_path_page.style.display = "none";
  office_info.style.display = "block";
  create_truck_ptn_page.style.backgroundColor = "var(--color-2)";
  truck_list_ptn_page.style.backgroundColor = "green";
  create_path_ptn_page.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "green";
  s6.style.backgroundColor = "var(--color-2)";
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  show_system_info_data();
  first_money_block.style.display = "none";

}
let get_it;
async function search_list_truck_data_by_qr() {
  create_truck_data = await read_truck_modle_data();
  let row = "";
  get_it = false;
  list_truck_Data_TableBody.innerHTML = "";
  for (let i = 0; i < create_truck_data.length; i++) {
    if (search_list_truck_qr.value != "") {
      if (search_list_truck_qr.value == create_truck_data[i].qr) {
        try {
          row += `
                        <tr ondblclick="select_truck_model(${i})">
                        <td>${create_truck_data[i].qr}</td>
                        <td>${create_truck_data[i].date_inp}</td>
                        <td>${create_truck_data[i].truck_number_inp}</td>
                        <td>${create_truck_data[i].driver_name_inp}</td>
                        <td>${create_truck_data[i].driver_phone_inp}</td>
                        <td>${create_truck_data[i].sign}</td>
 
                        </tr>
                        `;
          get_it = true;
          list_truck_Data_TableBody.innerHTML = row;
          select_create_truck_mod = false;
          save_new_create_truck.innerHTML = "حفظ";
          clear_input_search_truck_feilds();
          select_truck_model(i);
          break;
        } catch (error) {
          console.error("Error displaying store data:", error);
        }
      }
    } else {
      search_list_trucks_data();
    }
  }

  if (get_it == false) {
    clear_input_search_qr_create_truck();
    clear_input_search_truck_feilds();
    create_truck_msg_alert("لا يوجد شاحنه بهذا الكود");
    search_list_trucks_data();
  }
}
function list_truck_qr_empty() {
  if (search_list_truck_qr.value == "") {
    clear_input_search_truck_feilds();
    search_list_trucks_data();
  }
}

function clear_input_search_truck_feilds() {
  search_list_truck_name.value = "";
  search_list_truck_driver_name.value = "";
}

async function search_list_trucks_data() {
  if (search_list_truck_qr.value == "") {
    create_truck_data = await read_truck_modle_data();
    let row = "";
    list_truck_Data_TableBody.innerHTML = "";

    for (let i = 0; i < create_truck_data.length; i++) {
      const truck = create_truck_data[i];
  // console.log(truck)

  // console.log(truck.process)
  // console.log(truck.truck_all_salary)

      if (matchesSearch(truck)) {
        row += createRow(truck, i);
      }
    }

    list_truck_Data_TableBody.innerHTML = row;
    select_create_truck_mod = false;
    save_new_create_truck.innerHTML = "حفظ";
  }
}
function clear_input_search_qr_create_truck() {
  search_list_truck_qr.value = "";
}

function matchesSearch(truck) {
  const truckName = search_list_truck_name.value;
  const driverName = search_list_truck_driver_name.value;
  return (
    (truckName === "" && driverName === "") ||
    (truckName &&
      truck.truck_number_inp.includes(truckName) &&
      driverName === "") ||
    (driverName &&
      truck.driver_name_inp.includes(driverName) &&
      truckName === "") ||
    (truckName &&
      truck.truck_number_inp.includes(truckName) &&
      driverName &&
      truck.driver_name_inp.includes(driverName))
  );
}

function createRow(truck, i) {
  return `
    <tr ondblclick="select_truck_model(${i})">
      <td>${truck.qr}</td>
      <td>${truck.date_inp}</td> 
      <td>${truck.truck_number_inp}</td>
      <td>${truck.driver_name_inp}</td>
      <td>${truck.driver_phone_inp}</td>
      <td>${truck.truck_all_salary}</td>

      <td>${truck.sign}</td>
    </tr>
  `;
}
async function select_truck_model(i) {
  first_money_block.style.display = "block";
  create_truck_data = await read_truck_modle_data();
  select_create_truck_id = i;
  // await open_add_truck_page();
  qr_truck_inp.value = create_truck_data[i].qr;
  date_inp.value = create_truck_data[i].date_inp;
  // truck_name_inp.value = create_truck_data[i].truck_name_inp;
  truck_number_inp.value = create_truck_data[i].truck_number_inp;
  driver_name_inp.value = create_truck_data[i].driver_name_inp;
  driver_phone_inp.value = create_truck_data[i].driver_phone_inp;

  create_truck_save_mod = true;
  select_create_truck_mod = true;
  save_or_edit_create_truck = false;
  save_new_create_truck.innerHTML = "تعديل";
}
// async function delete_truck_in_list_truck(i) {
//   create_truck_data = await read_truck_modle_data();
//   create_truck_data.splice(i, 1);
//   create_truck_msg_alert("تم حذف الشاحنه");
//   select_create_truck_mod = false;
//   save_or_edit_create_truck = true;
//   await write_truck_modle_Data(create_truck_data);
//   search_list_trucks_data();
// }
async function delete_create_truck() {
  if (select_create_truck_mod == true) {
    create_truck_data = await read_truck_modle_data();
    create_truck_msg_alert("تم حذف الشاحنه");
    create_truck_data.splice(select_create_truck_id, 1);
    await write_truck_modle_Data(create_truck_data);
    _new_create_truck();
    // open_list_truck_page();
    search_list_trucks_data();

    select_create_truck_mod = false;
    save_or_edit_create_truck = true;
  }
}
///////////////////////////// creatre new truck path zone ////////////////////////
function open_add_truck_path_page() {
  add_create_truck_page.style.display = "none";
  add_create_truck_path_page.style.display = "block";
  office_info.style.display = "none";
  // first_money_block.style.display = "none";

  truck_path_save_mod = true;
  create_truck_save_mod = false;
  office.focus();
  (async () => {
    search_truck_paths_data();
    await get_last_qr_truck_path();
  })();
  _new_path();
  create_truck_ptn_page.style.backgroundColor = "var(--color-2)";
  truck_list_ptn_page.style.backgroundColor = "var(--color-2)";
  create_path_ptn_page.style.backgroundColor = "green";
  s5.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "green";
}
async function read_path_data() {
  let Data = await window.electron.readData("sup_data");
  if (Data == undefined) {
    Data = [];
  }
  return Data;
}
async function write_path_Data(path_data) {
  await window.electron.write_Data("sup_data", path_data);
}

function _close_path_page() {
  add_create_truck_path_page.style.display = "none";
}
async function get_last_qr_truck_path() {
  truck_path_data = await read_path_data();
  if (truck_path_data.length == 0) {
    last_truck_path_qr = 0;
  } else {
    last_truck_path_qr = truck_path_data[truck_path_data.length - 1].qr;
  }
  path_qr.value = last_truck_path_qr + 1;
}

function edit_or_save_path_switch() {
  console.log(save_or_edit_truck_path);
  if (save_or_edit_truck_path == true) {
    truck_path_save_Data();
  } else if (save_or_edit_truck_path == false) {
    edit_truck_path_data(select_truck_path_id);
  }
}

document.addEventListener("keydown", (event) => {
  if (truck_path_save_mod == true) {
    if (event.key == "F2") {
      edit_or_save_path_switch();
    }
  }
});

async function truck_path_save_Data() {
  truck_path_data = await read_path_data();
  let save_stat = true;
  if (office.value != "") {
    for (let i = 0; i < truck_path_data.length; i++) {
      if (
        truck_path_data[i].office == office.value &&
        truck_path_data[i].sup_add == sup_add.value
      ) {
        create_truck_msg_alert("تم تسجيل هذا المندوب مسبقا");
        save_stat = false;
        break;
      } else {
        save_stat = true;
      }
    }

    if (save_stat) {
      await get_last_qr_truck_path();
      try {
        truck_path_data.push({
          qr: +last_truck_path_qr + 1,
          office: office.value,
          sup_add: sup_add.value,
          in: [],
          out: [],
          sign : user_sign

        });
        await write_path_Data(truck_path_data);

        await search_truck_paths_data();
        console.log(truck_path_data);
        create_truck_msg_alert("تم تسجيل  المندوب");
        clear_input_truck_path_feilds();
      } catch (error) {
        console.error("Error adding item to the store:", error);
        create_truck_msg_alert("حدث خطأ عند حفظ المندوب");
      }
    }
  } else {
    create_truck_msg_alert("اكمل بيانات المندوب");
  }
}

async function edit_truck_path_data(i) {
  truck_path_data = await read_path_data();
  let edit_stat = true;
  if (office.value != "") {
    for (let i = 0; i < truck_path_data.length; i++) {
      if (
        truck_path_data[i].office == office.value &&
        truck_path_data[i].sup_add == sup_add.value
      ) {
        edit_stat = false;
        break;
      } else {
        edit_stat = true;
      }
    }
    if (edit_stat && save_or_edit_truck_path == false) {
      try {
        truck_path_data[i].office = office.value;
        truck_path_data[i].sup_add = sup_add.value;
        truck_path_data[i].sign = user_sign;


        await write_path_Data(truck_path_data);
        save_or_edit_truck_path = true;
        create_truck_msg_alert("تم تعديل المندوب ");
        clear_input_truck_path_feilds();
        await search_truck_paths_data();
      } catch (error) {
        console.error("Error editing client data:", error);
        create_truck_msg_alert("حدث خطأ عند تعديل المندوب ");
      }
    } else {
      create_truck_msg_alert("هذه المندوب موجوده بالفعل");
    }
  } else {
    create_truck_msg_alert("اكمل بيانات المندوب");
  }
}

function clear_input_truck_path_feilds() {
  (async () => {
    await get_last_qr_truck_path();
  })();
  office.value = "";
  sup_add.value = "";
  office.focus();
}

function _new_path() {
  clear_input_truck_path_feilds();
  save_new_path.innerHTML = "حفظ";
  select_truck_path_mod = false;
  save_or_edit_truck_path = true;
}

async function search_truck_paths_data() {
  search_path_qr.value = "";
  const truck_path_data = await read_path_data();
  let row = "";
  path_Data_TableBody.innerHTML = "";
  try {
    for (let i = 0; i < truck_path_data.length; i++) {
      if (search_path_name.value == "") {
        row += `
              <tr onclick="select_truck_path(${i})" >
              <td>${truck_path_data[i].qr}</td>
              <td>${truck_path_data[i].office}</td>
              <td>${truck_path_data[i].sup_add}</td>
              <td>${truck_path_data[i].sign}</td>
              </tr>
          `;
      } else if (truck_path_data[i].office.includes(search_path_name.value)) {
        row += `
                <tr onclick="select_truck_path(${i})" >
                <td>${truck_path_data[i].qr}</td>
                <td>${truck_path_data[i].office}</td>
                <td>${truck_path_data[i].sup_add}</td>
              <td>${truck_path_data[i].sign}</td>

                </tr>
            `;
      }
    }
    path_Data_TableBody.innerHTML = row;
    select_truck_path_mod = false;
    save_new_path.innerHTML = "حفظ";
  } catch (error) {
    console.error("Error displaying store data:", error);
  }
}

async function search_path_data_by_qr() {
  search_path_name.value = "";
  const truck_path_data = await read_path_data();
  let row = "";
  get_it = false;
  path_Data_TableBody.innerHTML = "";
  for (let i = 0; i < truck_path_data.length; i++) {
    if (search_path_qr.value != "") {
      if (search_path_qr.value == truck_path_data[i].qr) {
        try {
          row += `
                          <tr onclick="select_truck_path(${i})" >
                          <td>${truck_path_data[i].qr}</td>
                          <td>${truck_path_data[i].office}</td>
                          <td>${truck_path_data[i].sup_add}</td>
              <td>${truck_path_data[i].sign}</td>

                          </tr>
                          `;
          get_it = true;
          path_Data_TableBody.innerHTML = row;
          select_truck_path_mod = false;
          save_new_path.innerHTML = "حفظ";
          select_truck_path(i);
          break;
        } catch (error) {
          console.error("Error displaying store data:", error);
        }
      }
    } else {
      clear_input_truck_path_feilds();
      search_truck_paths_data();
    }
  }

  if (get_it == false) {
    search_path_qr.value = "";
    clear_input_truck_path_feilds();
    create_truck_msg_alert("لا يوجد مندوب بهذا الكود");
    search_truck_paths_data();
  }
}
function truck_path_qr_empty() {
  if (search_path_qr.value == "") {
    clear_input_truck_path_feilds();
    search_truck_paths_data();
  }
}

async function select_truck_path(i) {
  truck_path_data = await read_path_data();
  select_truck_path_id = i;
  select_truck_path_name =
    truck_path_data[i].office + "-" + truck_path_data[i].com_price;
  path_qr.value = truck_path_data[i].qr;
  office.value = truck_path_data[i].office;
  sup_add.value = truck_path_data[i].sup_add;

  truck_path_save_mod = true;
  select_truck_path_mod = true;
  save_or_edit_truck_path = false;
  save_new_path.innerHTML = "تعديل";
  console.log(save_or_edit_truck_path);
}

async function delete_path() {
  if (select_truck_path_mod == true) {
    truck_path_data = await read_path_data();
    create_truck_msg_alert("تم حذف المندوب");
    truck_path_data.splice(select_truck_path_id, 1);
    await write_path_Data(truck_path_data);
    save_new_path.innerHTML = "حفظ";

    clear_input_truck_path_feilds();
    search_truck_paths_data();
    select_truck_path_mod = false;
    save_or_edit_truck_path = true;
  }
}

async function read_office_info() {
  let Data = await window.electron.readData("office_info_data");
  if (Data == undefined) {
    Data = [
      {
        office_name: "OFFICE SYSTEM",
        office_num: "------------",
        office_add: "-------------",
      },
    ];
    await write_office_info(Data);
  }
  return Data;
}

async function write_office_info(office_info) {
  await window.electron.write_Data("office_info_data", office_info);
}

async function office_info_save_Data() {
  let office_info = await read_office_info();
  console.log(office_info);
  // if (office.value != "") {
  // for (let i = 0; i < truck_path_data.length; i++) {
  try {
    if (name_info.value !== "") {
      office_info[0].office_name = name_info.value;
      create_truck_msg_alert("تم تسجيل  بيانات المكتب");
    }
    if (addres_info.value !== "") {
      office_info[0].office_num = addres_info.value;
      create_truck_msg_alert("تم تسجيل  بيانات المكتب");
    }
    if (num_info.value !== "") {
      office_info[0].office_add = num_info.value;
      create_truck_msg_alert("تم تسجيل  بيانات المكتب");
    }

    await write_office_info(office_info);
    show_system_info_data();
    clear_input_info_system_feilds();
  } catch (error) {
    console.error("Error adding item to the store:", error);
    create_truck_msg_alert("حدث خطأ عند حفظ المكتب");
    // }
  }
  // } else {
  //   create_truck_msg_alert("اكمل بيانات المكتب");
  // }
}

function clear_input_info_system_feilds() {
  name_info.value = "";
  addres_info.value = "";
  num_info.value = "";
}

async function show_system_info_data() {
  let office_info = await read_office_info();

  info_name_data.innerHTML = office_info[0].office_name;
  info_add_data.innerHTML = office_info[0].office_num;
  info_num_data.innerHTML = office_info[0].office_add;

  office_name_bar.innerHTML = office_info[0].office_name;
}

async function refresh_system_name() {
  let office_info = await read_office_info();

  office_name_bar.innerHTML = office_info[0].office_name;
}
