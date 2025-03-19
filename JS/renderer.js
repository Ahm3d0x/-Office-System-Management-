const { readFile, writeFile } = window.electron;
let sideMenu = document.querySelector(".side-menu");
let toggleButton = document.querySelector(".top-platform button");
let topplatform = document.querySelector(".top-platform");
let password = document.querySelector("#password");
let username = document.querySelector("#username");
let con_pass = document.querySelector(".con_pass");
let signupForm = document.querySelector("#signupForm");
let user_input = document.querySelector(".user-input");
let pass_input = document.querySelector(".pass-input");
let signinForm = document.querySelector("#signinForm");
let activeForm = document.querySelector("#activeForm");
let active_input = document.querySelector(".active-input");
let background = document.querySelector(".background");
let table_USER_Body = document.querySelector(".user_Data_TableBody");
let table_USER_Body_tr = document.querySelector("table tbody tr");
let alert = document.querySelector(".alert");
let msg_contnet = document.querySelector(".msg_contnet");
let save_new_user = document.querySelector(".save-new-user");
let body = document.querySelector("body");
let copy_right = document.querySelector(".copy_right");
let select_user_id;
let select_user_name;
let select_user_mod = false;
let user_save_mod = false;
let save_or_edit_user = true;
let user_sign = "admin";
let last_id;

function get_current_Date() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  let date = year + "-" + month + "-" + day;
  return date;
}

function _copy_right() {
  let date = new Date();
  let year = date.getFullYear();
  copy_right.innerHTML = `جميع الحقوق محفوظة © ${year} _ فريق سبارك `;
}
_copy_right();
// Show the body after 5 seconds
// setTimeout((body.style.display = "block"), 3000);
activeForm.style.display = "none";
topplatform.style.display = "none";
sideMenu.style.display = "none";
async function read_user_data() {
  let Data = await window.electron.readData("user_data");
  if (Data == undefined || Data.length == 0) {
    Data = [
      {
        id: 1,
        date: "----------",
        username: "admin",
        password: "admin",
      },
    ];

    pass_input.value = "admin";
    user_input.value = "admin";
  }

  return Data;
}
async function write_user_Data(user_data) {
  await window.electron.write_Data("user_data", user_data);
}

////////////////////////
async function msg_alert(msg) {
  alert.style.right = "5px";
  msg_contnet.innerHTML = msg;

  setTimeout(() => {
    alert.style.right = "-330px";
  }, 3000);
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "1" && signed == true) {
    sideMenu.style.left = sideMenu.style.left === "0px" ? "-310px" : "0px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector(".side-menu");
  const toggleButton = document.querySelector(".top-platform button");

  toggleButton.addEventListener("click", () => {
    // Toggle the side menu in and out
    sideMenu.style.left = sideMenu.style.left === "0px" ? "-310px" : "0px";
  });

  document.addEventListener("click", (event) => {
    const targetElement = event.target;

    // Check if the clicked element is not inside the side menu
    if (!sideMenu.contains(targetElement) && targetElement !== toggleButton) {
      // Close the side menu
      sideMenu.style.left = "-310px";
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (user_save_mod === true) {
    if (event.key === "F2" && signed == true) {
      edit_or_save_user_switch();
    }
  }
});
function edit_or_save_user_switch() {
  if (save_or_edit_user == true) {
    saveUserData();
  } else if (save_or_edit_user == false) {
    edit_user_data(select_user_id);
  }
}

async function saveUserData() {
  userdata = await read_user_data();
  let save_stat = false;
  if (username.value != "" && password.value != "") {
    for (let i = 0; i < userdata.length; i++) {
      if (userdata[i].username == username.value) {
        msg_alert("تم تسجيل هذا المستخدم مسبقا");
        save_stat = false;
        break;
      } else {
        save_stat = true;
      }
    }
    if (userdata.length <= 0) {
      last_id = 0;
    } else {
      last_id = userdata[userdata.length - 1].id;
    }
    if (save_stat) {
      if (con_pass.value == prosces_key) {
        try {
          userdata.push({
            id: +last_id + 1,
            date: get_current_Date(),
            username: username.value,
            password: password.value,
          });
          await write_user_Data(userdata);

          show_user_data();
          msg_alert("تم تسجيل مستخدم بأسم" + `( ${username.value} )`);
          username.value = "";
          password.value = "";
          con_pass.value = "";
        } catch (error) {
          console.error("Error adding item to the store:", error);
          msg_alert("حدث خطأ عند حفظ المستخدم");
        }
      } else if (con_pass.value != prosces_key) {
        msg_alert("مفتاح الدخول غير صحيح");
      }
    }
  } else {
    msg_alert("اكمل بيانات المستخدم");
  }
}

async function edit_user_data(i) {
  userdata = await read_user_data();

  let edit_stat = true;

  if (username.value !== "" && password.value !== "") {
    for (let i = 0; i < userdata.length; i++) {
      if (userdata[i].username === username.value) {
        msg_alert("تم تسجيل هذا المستخدم مسبقا");
        edit_stat = false;
        break; // Exit the loop early if the user is found more than once
      } else {
        edit_stat = true;
      }
    }
    if (edit_stat && save_or_edit_user === false) {
      if (con_pass.value == prosces_key) {
        try {
          userdata[i].username = username.value;
          userdata[i].password = password.value;
          await write_user_Data(userdata);

          show_user_data();
          save_or_edit_user = true;
          msg_alert("تم تعديل بيانات المستخدم " + `( ${username.value} )`);
          username.value = "";
          password.value = "";
          con_pass.value = "";
        } catch (error) {
          console.error("Error editing user data:", error);
          msg_alert("حدث خطأ عند تعديل بيانات المستخدم");
        }
      } else if (con_pass.value != prosces_key) {
        msg_alert("مفتاح الدخول غير صحيح");
      }
    } else {
      msg_alert("تم تسجيل هذا المستخدم مسبقا");
    }
  } else {
    msg_alert("اكمل بيانات المستخدم");
  }
}
function openLink(url) {
  window.open(url, '_blank'); 
}

function add_new_user() {
  signupForm.style.display = "block";
  create_truck_form_sw.style.display = "none";
  
  show_user_data();
  user_save_mod = true;
  regist_truck_money_save_mod = false;
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  regist_truck_com_money_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  manegmeant_data_form.style.display = "none";
  Reports_page.style.display = "none";

  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "var(--color-2)";
  t3.style.backgroundColor = "var(--color-2)";
  t4.style.backgroundColor = "var(--color-2)";
  t5.style.backgroundColor = "var(--color-2)";
  // t6.style.backgroundColor = "var(--color-2)";
  // t7.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "var(--color-2)";
  s3.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";
  s9.style.backgroundColor = "green";
}
function hide_new_user() {
  signupForm.style.display = "none";
  user_save_mod = false;
  s9.style.backgroundColor = "var(--color-2)";
}

////////////////////////
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "n" && signed == true) {
    show_user_data();
    user_save_mod = true;
    create_truck_form_sw.style.display = "none";
    registra_new_order_sw.style.display = "none";
    // check_truck_form.style.display = "none";
    // check_com_truck_form.style.display = "none";
    // registra_new_com_money.style.display = "none";
    registra_new_money.style.display = "none";
    manegmeant_data_form.style.display = "none";
    Reports_page.style.display = "none";

    signupForm.style.display = "block";
    t1.style.backgroundColor = "var(--color-2)";
    t2.style.backgroundColor = "var(--color-2)";
    t3.style.backgroundColor = "var(--color-2)";
    t4.style.backgroundColor = "var(--color-2)";
    t5.style.backgroundColor = "var(--color-2)";
    // t6.style.backgroundColor = "var(--color-2)";
    // t7.style.backgroundColor = "var(--color-2)";
    t8.style.backgroundColor = "var(--color-2)";
    s1.style.backgroundColor = "var(--color-2)";
    s2.style.backgroundColor = "var(--color-2)";
    s3.style.backgroundColor = "var(--color-2)";
    s4.style.backgroundColor = "var(--color-2)";
    s5.style.backgroundColor = "var(--color-2)";
    s10.style.backgroundColor = "var(--color-2)";
    s6.style.backgroundColor = "var(--color-2)";
    s8.style.backgroundColor = "var(--color-2)";

    s9.style.backgroundColor = "green";
  }
});

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////



let serial_num = document.querySelector('.serial_num')
async function get_KEY(){
let serial  = await window.electron.getMotherboardSerial();
serial_num.innerHTML = serial
// console.log(serial) 
    const numberArray = serial.match(/\d+/g); 
    const numbers = numberArray ? Number(numberArray.join('')) : null;
// console.log(numbers)
activecode = (((((numbers*2005)-2)*2010)-2)*(11/10)).toFixed(0)
console.log(activecode)
}


let active_key;
let activecode 
let active_code;
async function chek_actve_code() {
  try {
    await get_KEY()   
    active_code = await read_active_code();
    //// oredy activated
    // active_code = "2005211a7medattia";
    if (active_code != null && active_code == activecode) {
      console.log("Activeted");
      active_key = active_code;
      chek_singin_page();
      await read_user_data();
    } else {
      activeForm.style.display = "none";
      topplatform.style.display = "none";
      sideMenu.style.display = "none";
      activeForm.style.display = "block";
    }
    // if (active_key === activecode) {
    //   activeForm.style.display = "none";
    //   sideMenu.style.disp  lay = "block";
    // } else {
    // }
  } catch (error) {
    console.error("Error adding item to the store:", error);
    // messageElement.textContent = 'An error occurred. Please try again.';
  }
}
chek_actve_code();




////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
/////////////////////////////
// let active_key;
// let active_key = "#basemofficesystem#";
let prosces_key = "newu";
// let active_code;
// async function chek_actve_code() {
//   try {
//     active_code = await read_active_code();

//     //// oredy activated
//     // active_code = "2005211a7medattia";
//     if (active_code != null) {
//       console.log("Activeted");
//       active_key = active_code;
//       chek_singin_page();
//       await read_user_data();
//       msg_alert("Activeted");
//     } else {
//       activeForm.style.display = "none";
//       topplatform.style.display = "none";
//       sideMenu.style.display = "none";
//       activeForm.style.display = "block";
//       msg_alert("not Activeted");
//     }
//     // if (active_key === active_code) {
//     //   activeForm.style.display = "none";
//     //   sideMenu.style.dispalay = "block";
//     // } else {
//     // }
//   } catch (error) {
//     console.error("Error adding item to the store:", error);
//     // messageElement.textContent = 'An error occurred. Please try again.';
//   }
// }

// chek_actve_code();
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

async function read_active_code() {
  let Data = await window.electron.readData("active_code");
  if (Data == undefined) {
    Data = null;
  }
  return Data;
}
async function write_active_code_Data(active_code) {
  await window.electron.write_Data("active_code", active_code);
}

async function active() {
  try {
    let activeInputValue = active_input.value;
    console.log(activeInputValue);
    if (activecode == activeInputValue) {
      let active_code = await read_active_code();

      active_code = activecode;
      await write_active_code_Data(active_code);

      chek_actve_code();
      msg_alert("actived");
      console.log(activeInputValue);
    } else {
      console.log("Invalid activation code");
      msg_alert("Invalid activation code")
      // Handle the case where the activation code is incorrect
    }
  } catch (error) {
    console.error("Error processing activation:", error);
    // Handle the error appropriately
  }
}

function chek_singin_page() {
  activeForm.style.display = "none";
  topplatform.style.display = "none";
  sideMenu.style.display = "none";
  signinForm.style.display = "block";
  user_input.focus();
  // chek_singin_data();
}
let signed = false;
async function chek_singin_data() {
  userdata = await read_user_data();

  let user;
  let pass;
  // pass_input.value = 1;
  // user_input.value = 1;
  for (let i = 0; i < userdata.length; i++) {
    user = userdata[i].username;
    pass = userdata[i].password;
    if (pass == pass_input.value && user == user_input.value) {
      signinForm.style.display = "none";
      topplatform.style.display = "flex";
      sideMenu.style.display = "block";
      msg_alert(`اهلا ${user}`);
      user_sign = user;
      signed = true;

      break;
    } else if (user != user_input.value && pass == pass_input.value) {
      msg_alert(" اسم المستخدم غير صحيحه");
    } else if (pass != pass_input.value && user == user_input.value) {
      msg_alert("كلمة المرور غير صحيحه");
    }
    signinForm.style.display = "none";
    topplatform.style.display = "flex";
    sideMenu.style.display = "block";
    msg_alert(`اهلا ${user}`);
    user_sign = user;
    signed = true;

    if (user != user_input.value && pass != pass_input.value) {
      msg_alert("هذا المستخدم غير موجود");
    }
  }
}

async function show_user_data() {
  try {
    let row = "";
    table_USER_Body.innerHTML = "";
    userdata = await read_user_data();

    for (let i = 0; i < userdata.length; i++) {
      row = `
        <tr onclick="select_user(${i})" >
          <td>${userdata[i].id}</td>
          <td>${userdata[i].date}</td>
          <td>${userdata[i].username}</td>
 </tr>
      `;
      // console.log(userdata[i].role);
      table_USER_Body.innerHTML += row;
      select_user_mod = false;
      save_new_user.innerHTML = "حفظ";
    }
  } catch (error) {
    console.error("Error displaying store data:", error);
  }
}

//
async function select_user(i) {
  userdata = await read_user_data();

  select_user_id = i;
  select_user_name = userdata[i].username;
  username.value = userdata[i].username;
  password.value = userdata[i].password;
  select_user_mod = true;
  save_or_edit_user = false;
  save_new_user.innerHTML = "تعديل";
}

async function delet_user() {
  if (select_user_mod == true) {
    if (con_pass.value == prosces_key) {
      userdata = await read_user_data();
      userdata.splice(select_user_id, 1);
      await write_user_Data(userdata);
      show_user_data();
      select_user_mod = false;
      save_or_edit_user = true;
      username.value = "";
      password.value = "";
      con_pass.value = "";
      msg_alert(` تم حذف العميل (${select_user_name})`);
    } else if (con_pass.value != prosces_key) {
      msg_alert("مفتاح الدخول غير صحيح");
    }
  }
}
