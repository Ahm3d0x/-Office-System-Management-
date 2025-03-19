// const { Body } = require("node-fetch");

let create_truck_form_sw = document.querySelector(".create_truck_form");
let add_create_truck_page_sw = document.querySelector(".add_create_truck_page");
let add_create_truck_path_page_sw = document.querySelector(
  ".add_create_truck_path_page"
);
let body1 = document.querySelector("body");
let registra_new_order_sw = document.querySelector(".registra_new_order");
let check_truck_form = document.querySelector(".check_truck_form");
let check_com_truck_form = document.querySelector(".check_com_truck_form");
let print_page = document.querySelector(".print_page");
let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let t3 = document.querySelector(".t3");
let t4 = document.querySelector(".t4");
let t5 = document.querySelector(".t5");
// let t6 = document.querySelector(".t6");
// let t7 = document.querySelector(".t7");
let t8 = document.querySelector(".t8");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let s4 = document.querySelector(".s4");
let s5 = document.querySelector(".s5");
let s6 = document.querySelector(".s6");
let s7 = document.querySelector(".s7");
let s8 = document.querySelector(".s8");
let s9 = document.querySelector(".s9");
let s10 = document.querySelector(".s10");
let current_date = document.querySelector(".current_date");
t8.style.backgroundColor = "#42a5bd";
s7.style.backgroundColor = "#42a5bd";
const today = getCurrentDateTime()
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // الأشهر تبدأ من 0 لذا نضيف 1
  const day = String(now.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

async function open_create_truck_page() {
  create_truck_form_sw.style.display = "block";
  add_create_truck_page_sw.style.display = "block";
  add_create_truck_path_page_sw.style.display = "none";

  registra_new_order_sw.style.display = "none";
  // check_truck_form.style.display = "none";
  // check_com_truck_form.style.display = "none";
  registra_new_money.style.display = "none";
  // registra_new_com_money.style.display = "none";
  regist_truck_money_save_mod = false;
regist_truck_money_out_save_mod = false;

  truck_order_save_mod = false;
  signupForm.style.display = "none";
  user_save_mod = false;
  regist_truck_com_money_save_mod = false;
  manegmeant_data_form.style.display = "none";
  all_page_off();
  Reports_page.style.display = "none";

  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "green";
  t3.style.backgroundColor = "var(--color-2)";
  t4.style.backgroundColor = "var(--color-2)";
  t5.style.backgroundColor = "var(--color-2)";
  // t6.style.backgroundColor = "var(--color-2)";
  // t7.style.backgroundColor = "var(--color-2)";ذ
  s1.style.backgroundColor = "green";
  s2.style.backgroundColor = "var(--color-2)";
  s3.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";
  s9.style.backgroundColor = "var(--color-2)";
}

function _close_create_truck_page() {
  create_truck_form_sw.style.display = "none";
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  t2.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "2" && signed == true) {
    open_create_truck_page();
    open_add_truck_page();
  }
});

async function open_create_new_order() {
  create_truck_form_sw.style.display = "none";
  registra_new_order_sw.style.display = "block";
  await search_list_trucks_data_for_order();
  // check_truck_form.style.display = "none";
  // check_com_truck_form.style.display = "none";
  // registra_new_com_money.style.display = "none";
regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  regist_truck_com_money_save_mod = false;
  Reports_page.style.display = "none";
  registra_new_money.style.display = "none";
  search_list_truck_qr_for_order.focus();
  signupForm.style.display = "none";
  user_save_mod = false;
  select_truck_for_order.style.display = "block";
  conector_switch_data.style.display = "none";
  input_order_date_time.value = "";
  input_order_com_price.value = "";
  input_order_price.value = "";
  input_order_number.value = "";
  input_order_binzen.value = "";
  // input_order_fixing.value = "";
  // input_order_cost.value = "";
  input_order_net.value = "";
  // input_order_note.value = "";
  search_list_truck_qr_for_order.focus();
  manegmeant_data_form.style.display = "none";

  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "var(--color-2)";
  t3.style.backgroundColor = "green";
  t4.style.backgroundColor = "var(--color-2)";
  t5.style.backgroundColor = "var(--color-2)";
  // t6.style.backgroundColor = "var(--color-2)";
  // t7.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "green";
  s3.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";

  s9.style.backgroundColor = "var(--color-2)";
}

function _close_list_truck_page_for_order() {
  registra_new_order_sw.style.display = "none";
  truck_order_save_mod = false;
  t3.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "var(--color-2)";
}
function _data_truck_for_order() {
  registra_new_order_sw.style.display = "none";
  conector_switch_data.display = "none";
  select_create_truck_mod_for_order = false;
  select_truck_order_mod = false;
  truck_order_save_mod = false;
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "3" && signed == true) {
    open_create_new_order();
  }
});

async function Reports_page_func() {
  Reports_page.style.display = "block";
  add_create_truck_page_sw.style.display = "none";
  add_create_truck_path_page_sw.style.display = "none";
  registra_new_order_sw.style.display = "none";
  create_truck_form_sw.style.display = "none";
  manegmeant_data_form.style.display = "none";
  sea_1.focus();
  registra_new_money.style.display = "none";
  // registra_new_com_money.style.display = "none";
  // search_list_truck_qr_for_check.focus();
  signupForm.style.display = "none";
  user_save_mod = false;
  // _close_create_truck_page();
  // _close_list_truck_page_for_order();
  // _data_truck_for_order();
  // back_select_truck_model_for_check();
regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = false;
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  regist_truck_com_money_save_mod = false;
  manegmeant_data_form.style.display = "none";
  all_page_off();
  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "var(--color-2)";
  t3.style.backgroundColor = "var(--color-2)";
  t4.style.backgroundColor = "var(--color-2)";
  t5.style.backgroundColor = "green";
  // t6.style.backgroundColor = "var(--color-2)";
  // t7.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "var(--color-2)";
  s3.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "green";
  s5.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";

  s8.style.backgroundColor = "var(--color-2)";
  s9.style.backgroundColor = "var(--color-2)";
}
function _close_list_truck_page_for_check() {
  check_truck_form.style.display = "none";
  t5.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "var(--color-2)";
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "5" && signed == true) {
    Reports_page_func();
  }
});

// async function open_check_com_truck_form() {
//   check_truck_form.style.display = "none";
//   registra_new_money.style.display = "none";
//   signupForm.style.display = "none";
//   user_save_mod = false;
//   _close_create_truck_page();
//   _close_list_truck_page_for_order();
//   _data_truck_for_order();
//   regist_truck_money_save_mod = false;
//   truck_order_save_mod = false;
//   create_truck_save_mod = false;
//   truck_path_save_mod = false;
//   regist_truck_com_money_save_mod = false;
//   create_truck_save_mod = false;
//   truck_path_save_mod = false;
//   back_select_truck_model_for_check_com();
//   // search_list_truck_qr_for_check_com.focus();
//   registra_new_com_money.style.display = "none";
//   manegmeant_data_form.style.display = "none";
//   all_page_off();
//   t1.style.backgroundColor = "var(--color-2)";
//   t2.style.backgroundColor = "var(--color-2)";
//   t3.style.backgroundColor = "var(--color-2)";
//   t4.style.backgroundColor = "var(--color-2)";
//   t5.style.backgroundColor = "var(--color-2)";
//   // t6.style.backgroundColor = "var(--color-2)";
//   // t7.style.backgroundColor = "green";
//   s1.style.backgroundColor = "var(--color-2)";
//   s2.style.backgroundColor = "var(--color-2)";
//   s3.style.backgroundColor = "var(--color-2)";
//   s4.style.backgroundColor = "var(--color-2)";
//   // s5.style.backgroundColor = "var(--color-2)";
//   // s6.style.backgroundColor = "green";
//   s9.style.backgroundColor = "var(--color-2)";
//   s8.style.backgroundColor = "var(--color-2)";
//   check_com_truck_form.style.display = "block";
//   search_list_trucks_data_for_check_com();
// }
function _close_list_truck_page_for_check_com() {
  check_com_truck_form.style.display = "none";
  t7.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";
}

// document.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.key == "7" && signed == true) {
//     open_check_com_truck_form();
//   }
// });
async function open_registra_new_money_page() {
  registra_new_money.style.display = "block";
  create_truck_form_sw.style.display = "none";
  registra_new_order_sw.style.display = "none";
  // check_truck_form.style.display = "none";
  // check_com_truck_form.style.display = "none";
  // registra_new_com_money.style.display = "none";
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  regist_truck_com_money_save_mod = false;
  regist_truck_money_save_mod = true;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  back_select_truck_model_for_money();
  await search_list_trucks_data_for_money();
  search_list_truck_qr_for_money.focus();
  signupForm.style.display = "none";
  user_save_mod = false;
  manegmeant_data_form.style.display = "none";
  all_page_off();
  Reports_page.style.display = "none";

  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "var(--color-2)";
  t3.style.backgroundColor = "var(--color-2)";
  t4.style.backgroundColor = "green";
  t5.style.backgroundColor = "var(--color-2)";
  // t6.style.backgroundColor = "var(--color-2)";
  // t7.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "var(--color-2)";
  s3.style.backgroundColor = "green";
  s4.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "var(--color-2)";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";

  s9.style.backgroundColor = "var(--color-2)";

  // select_truck_for_money.style.display = 'none';
}
function back_print_page() {
  select_pariod_mod = true;
  topplatform.style.display = "flex";
  sideMenu.style.display = "block";
  print_page.style.display = "none";
  select_truck_for_order.style.display = "none";
  data_truck_for_order.style.display = "none";
  orders_registred_table.style.display = "none";
  expenses_page.style.display = "none";
  // pay_page.style.display = "none";
  registra_new_order_sw.style.display = "block";
  conector_switch_data.style.display = "block";
  Reports_page.style.display = "none";

  end_pariod_page.style.display = "block";
  save_or_edit_truck_expenses = false;
  select_expenses_mod = false;
  truck_order_save_mod = false;
  select_pay_mod = false;

  c4.style.backgroundColor = "green";
  c2.style.backgroundColor = "var(--color-2)";
  c1.style.backgroundColor = "var(--color-2)";
  // c3.style.backgroundColor = "var(--color-2)";
  selected_truck_info_la_net_salary.innerHTML = "رصيد الشاحنه";
  // get_last_qr_pariod_truck(select_truck_for_order_id);
  // list_pariod_for_selected_truck(select_truck_for_order_id);
  select_pariod_mod = true;
}

let a2 = document.querySelector(".a2");
let a4 = document.querySelector(".a4");
let a8 = document.querySelector(".a8");
let a10 = document.querySelector(".a10");
let invoice_date = document.querySelector(".invoice_date");
let invoice_date1 = document.querySelector(".invoice_date1");
let invoice_id = document.querySelector(".invoice_id");
let pr_orders_table_TableBody = document.querySelector(
  ".pr_orders_table_TableBody"
);
let pr_Expenses_table_TableBody = document.querySelector(
  ".pr_Expenses_table_TableBody"
);
let pr_pay_table_TableBody = document.querySelector(".pr_pay_table_TableBody");
let pr_sub_table_TableBody = document.querySelector(".pr_sub_table_TableBody");
async function _print_page() {
  registra_new_money.style.display = "none";
  create_truck_form_sw.style.display = "none";
  print_page.style.display = "block";
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  regist_truck_com_money_save_mod = false;
regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = true;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  signupForm.style.display = "none";
  user_save_mod = false;
  manegmeant_data_form.style.display = "none";
  create_truck_form_sw.style.display = "none";
  registra_new_order_sw.style.display = "none";

  create_truck_save_mod = false;
  truck_path_save_mod = false;
  regist_truck_com_money_save_mod = false;

  registra_new_money.style.display = "none";
  signupForm.style.display = "none";
  user_save_mod = false;
  select_truck_for_order.style.display = "none";
  conector_switch_data.style.display = "none";
  select_pariod_mod = false;
  all_page_off();
  // info_print(select_truck_pariod_id);
  topplatform.style.display = "none";
  sideMenu.style.display = "none";

  let office_info = await read_office_info();
  let e = select_truck_pariod_id;
  let all_order_truck_data = await read_truck_modle_data();
  let data;
  let data_order;
  let data_expenses;
  let data_pay;
  let money;
  let after_mo
  let row = "";
  let sub = 0;
  let sub1 = 0;
  let sub2 = 0;
  let sub3 = 0;
  let sub4 = 0;
  let row1 = "";
  let sub5 = 0;
  let sub7 = 0;
  let sub8 = 0;
  let sub9 = 0;
  let sub10 = 0;


  if (save_or_edit_truck_pariod == false) {
    data = all_order_truck_data[select_truck_for_order_id].process[e];
    money = data.finsh_pay.pr_money;
    data_order =
      all_order_truck_data[select_truck_for_order_id].process[e].orders;
    data_expenses =
      all_order_truck_data[select_truck_for_order_id].process[e].expenses;
    data_pay = all_order_truck_data[select_truck_for_order_id].process[e].pay;
    a10.innerHTML = data.finsh_pay.pariod_driver_name;
    invoice_date.innerHTML = `من  : ${data.start}`;
    invoice_date1.innerHTML = `الى : ${data.finsh_pay.date_time_pariod}`;
    invoice_id.innerHTML = `on : ${data.finsh_pay.qr}`;




  } else {
    let process_id =
      all_order_truck_data[select_truck_for_order_id].process.length - 1;
    data = all_order_truck_data[select_truck_for_order_id].process[process_id];
    money = all_order_truck_data[select_truck_for_order_id].truck_all_salary;

    data_order =
      all_order_truck_data[select_truck_for_order_id].process[process_id]
        .orders;
    data_expenses =
      all_order_truck_data[select_truck_for_order_id].process[process_id]
        .expenses;

    data_pay =
      all_order_truck_data[select_truck_for_order_id].process[process_id].pay;
    let truck_data_name =
      all_order_truck_data[select_truck_for_order_id].driver_name_inp;
    a10.innerHTML = truck_data_name;
    invoice_date.innerHTML = `من  : ${data.start}`;
    // invoice_date1.innerHTML = `الى : ${data.finsh_pay.date_time_pariod}`;
    invoice_id.innerHTML = `on : ${+last_pariod_truck_qr + 1}`;

    



  }




  // console.log(all_order_truck_data);

  // console.log(i);

  // a2.innerHTML = office_info[0].office_name;
  // a4.innerHTML = office_info[0].office_num;
  // a8.innerHTML = office_info[0].office_add;

  current_date.innerHTML = today;
  pr_orders_table_TableBody.innerHTML = "";
  for (let h = 0; h < data_order.length; h++) {
    sub += +data_order[h].order_cost;
    sub1 += +data_order[h].order_number;
    sub2 += +data_order[h].order_number * +data_order[h].order_binzen;
    sub3 += +data_order[h].order_com_price;
    sub4 += +data_order[h].order_net;

    row += `  <tr>
          <td>${data_order[h].qr}</td>
          <td  >${data_order[h].date__time_order}</td>
          <td  >${data_order[h].input_order_name}</td>
          <td  >${data_order[h].order_price}</td>
          <td  >${data_order[h].input_order_serial}</td>
          <td  >${data_order[h].card_num}</td>
          <td  >${(+data_order[h].order_number).toFixed(3)}</td>
          <td  >${data_order[h].order_binzen}</td>
          <td  >${
          (+data_order[h].order_number * +data_order[h].order_binzen).toFixed(0)
          }</td>
          <td>${Number(data_order[h].order_com_price || 0).toFixed(0)}</td>
          <td>${Number(data_order[h].order_cost || 0).toFixed(0)}</td>
          <td>${Number(data_order[h].order_net || 0).toFixed(0)}</td>
        </tr>
      `;
  }
  // <td  >${data_order[h].order_path}</td>

  row += `  <tr>
          <td>مجموع</td>
          <td  >---------</td>
          <td  >---------</td>
          <td  >------------</td>
          <td  >-------------</td>
          <td  >-------------</td>
          <td  > ${sub1.toFixed(3)}</td>
          <td  >-----------</td>
          <td  >${sub2.toFixed(0)}</td>
          <td  >${sub3.toFixed(0)}</td>
          <td  >${sub.toFixed(0)}</td>
          <td  >${sub4.toFixed(0)}</td>
        </tr>
      `;

  pr_orders_table_TableBody.innerHTML = row;


  pr_Expenses_table_TableBody.innerHTML = "";
  // console.log(data_expenses.length);

  for (let h = 0; h < data_expenses.length; h++) {
    sub5 += +data_expenses[h].expenses_net;
    sub7 += +data_expenses[h].expenses_com_price;
    sub8 += +data_expenses[h].expenses_price;
    sub9 += +data_expenses[h].expenses_number;
    sub10 += +data_expenses[h].expenses_binzen;
    try {
      row1 += `
        <tr>
          <td>${data_expenses[h].qr}</td>
          <td>${data_expenses[h].date__time_expenses}</td>
          <td>${data_expenses[h].input_expenses_driver_name}</td>
          <td>${(+data_expenses[h].expenses_com_price).toFixed(0)}</td>
          <td>${(+data_expenses[h].expenses_price).toFixed(0)}</td>
          <td>${(+data_expenses[h].expenses_number).toFixed(0)}</td>
          <td>${(+data_expenses[h].expenses_binzen).toFixed(0)}</td>
          <td>${(+data_expenses[h].expenses_net).toFixed(0)}</td>
        </tr>
      `;
    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }

  row1 += `
        <tr>
          <td>مجموع</td>
          <td>-----------</td>
          <td>------------</td>
          <td>${(+sub7).toFixed(0)}</td>
          <td>${(+sub8).toFixed(0)}</td>
          <td>${(+sub9).toFixed(0)}</td>
          <td>${(+sub10).toFixed(0)}</td>
          <td>${(+sub5).toFixed(0)}</td>
        </tr>
      `;
  pr_Expenses_table_TableBody.innerHTML = row1;

  // let sub6 = 0;
  // let row2 = "";
  // for (let h = 0; h < data_pay.length; h++) {
  //   sub6 += +data_pay[h].value;
  //   try {
  //     row2 += `
  //       <tr>
  //         <td>${data_pay[h].qr}</td>
  //         <td  >${data_pay[h].date_time_pay}</td>
  //         <td  >${data_pay[h].pay_driver_name}</td>
  //         <td  >${data_pay[h].value}</td>
  //       </tr>
  //     `;
  //   } catch (error) {
  //     console.error("Error displaying store data:", error);
  //   }
  // }
  // row2 += `
  //       <tr>
  //         <td>مجموع</td>
  //         <td>---------</td>
  //         <td>------------</td>
  //         <td> ${sub6}</td> 
  //       </tr>
  //     `;
  // pr_pay_table_TableBody.innerHTML = row2;

  let row3 = "";

  row3 += `
        <tr>
          <td>${data_order.length}</td>
          <td>${sub1.toFixed(3)}</td>
          <td  >${sub4}</td>
          <td  >${sub5}</td>
        </tr>
      `;
  row3 += `
              <tr>
              <th>صافى الفتره</th>
              <th>رصيد سابق</th>
              <th> المبلغ المدفوع</th>
              <th>الرصيد الباقي</th>
            </tr>`;

// let after_mo = +data.finsh_pay.af_money
// console.log(main);
// console.log(money)
// console.log(payed_price)
// data.finsh_pay.net

let payed_price
let main = +sub4 - +sub5 


if (save_or_edit_truck_pariod == false) {
  after_mo = +data.finsh_pay.af_money
  payed_price=  data.finsh_pay.net
} else {
  payed_price = 0;
  after_mo = ( +main + +money).toFixed(0)
}
  row3 += `
        <tr>
          <td> ${main.toFixed(0)}</td> 
          <td>${money}</td>
          <td  >${payed_price}</td>
          <td  >${after_mo}</td>
        </tr>
      `;
  pr_sub_table_TableBody.innerHTML = row3;
}
async function writeJsonFile_pr(filePath, data_pr) {
  await writeFile(filePath, JSON.stringify(data_pr, null, 2));
}
let print_type ;
async function print_invoice() {
  print_type = "invoice"
  await print_pdf()
}
async function print_report() {
  print_type = "report"
  await print_pdf()
}
async function print_pdf() {
    let all_order_truck_data = await read_truck_modle_data();
  let office_info = await read_office_info();
   office_info = [print_type ,office_info]

  let e = select_truck_pariod_id;

  let money;
  let path_pr = `./print.json`;
  if (print_type == "invoice") {



  if (save_or_edit_truck_pariod == false) {
    let data = all_order_truck_data[select_truck_for_order_id].process[e];
    money = data.finsh_pay.pr_money;
    let data_pr = [data, office_info, "on", money];
    await writeJsonFile_pr(path_pr, data_pr);
    // console.log(data_pr);
    let data_1;
    let name;
    data_1 = all_order_truck_data[select_truck_for_order_id].process[e];
    name = data_1.finsh_pay.pariod_driver_name;
    // console.log(data_1);
    // console.log(name);

    window.electron.print(name);

  } else {
    let process_id =
      all_order_truck_data[select_truck_for_order_id].process.length - 1;
    let data =
      all_order_truck_data[select_truck_for_order_id].process[process_id];
    let truck_data_name =
      all_order_truck_data[select_truck_for_order_id].driver_name_inp;
    let id = +last_pariod_truck_qr + 1;
    money = all_order_truck_data[select_truck_for_order_id].truck_all_salary;
    // await readJSONFile("../../print.json");
    let data_pr = [data, office_info, "off", money, truck_data_name, id];
    await writeJsonFile_pr(path_pr, data_pr);
    let data_1;
    let name;
    data_1 = all_order_truck_data[select_truck_for_order_id];
    name = data_1.driver_name_inp;
    console.log(name);
    window.electron.print(name);
  }
  msg_alert_for_order("جاري الطباعه");





}else if (print_type == "report"){
  await ast1();
  await ast2();
  await ast3();
  net = all_net_salary + all_net_pay - all_net_expenses;

  all_net_pariod = 0;
  let data_proces = all_order_truck_data[select_truck_for_order_id].process;
  Expenses_table_TableBody.innerHTML = "";

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;



for (let h =0; h < all_order_truck_data[select_truck_for_order_id].process.length - 1; h++) {
    try {
// تأكد من أن البيانات رقمية قبل استخدام toFixed
let truck_order_data = all_order_truck_data[select_truck_for_order_id].process[h].finsh_pay;

// تحويل القيم إلى أرقام والتحقق منها قبل استخدام toFixed
let all_net_salary = Number(truck_order_data.all_net_salary) || 0;
let all_net_pay = Number(truck_order_data.all_net_pay) || 0;
let all_net_expenses = Number(truck_order_data.all_net_expenses) || 0;
let all_net = (all_net_salary + all_net_pay - all_net_expenses).toFixed(0);

c1 += Number(truck_order_data.num_orders) || 0;
c2 += Number(all_net_salary) || 0;
c3 += Number(all_net_expenses) || 0;
c4 += Number(all_net_pay) || 0;
c5 += Number(all_net) || 0;
c6 += Number(truck_order_data.net) || 0;


// let net = Number(truck_order_data.all_net_salary.toFixed(0))

      // row += `
      //   <tr ondblclick="selected_pariod_truck(${h})">
      //     <td>${truck_order_data.qr}</td>
      //     <td  >${data[h].start}</td>
      //     <td  >${truck_order_data.date_time_pariod}</td>
      //     <td  >${truck_order_data.pariod_driver_name}</td>
      //     <td  >${truck_order_data.num_orders}</td>
      //     <td  >${net}</td>
      //     <td  >${truck_order_data.all_net_expenses}</td>
      //     <td  >${truck_order_data.all_net_pay}</td>
      //     <td  >${all_net}</td>
      //     <td  >${truck_order_data.net}</td>
      //     <td  >${truck_order_data.sign}</td>
      //   </tr>
      // `;

    } catch (error) {
      console.error("Error displaying store data:", error);
    }
    
  }

c2 = Number(c2.toFixed(0));
c3 = Number(c3.toFixed(0));
c4 = Number(c4.toFixed(0));
c5 = Number(c5.toFixed(0));
c6 = Number(c6.toFixed(0));

let data_sum = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
];
console.log(net)
let data = [data_proces ,data_sum,net]
console.log(data)

let truck_data_name =
  all_order_truck_data[select_truck_for_order_id].driver_name_inp;

money = all_order_truck_data[select_truck_for_order_id].truck_all_salary;
// await readJSONFile("../../print.json");
let data_pr = [data, office_info, "off", money, truck_data_name,];
await writeJsonFile_pr(path_pr, data_pr);
console.log(truck_data_name)
window.electron.print(truck_data_name)
  
  msg_alert_for_order("جاري الطباعه");
}
}


function close_registra_new_money_page() {
  registra_new_money.style.display = "none";
  t4.style.backgroundColor = "var(--color-2)";
regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = false;
  s3.style.backgroundColor = "var(--color-2)";
}
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "4" && signed == true) {
    open_registra_new_money_page();
  }
});

async function open_registra_new_com_money_page() {
  registra_new_money.style.display = "none";
  registra_new_com_money.style.display = "block";
  create_truck_form_sw.style.display = "none";
  registra_new_order_sw.style.display = "none";
  check_truck_form.style.display = "none";
  check_com_truck_form.style.display = "none";
  await search_list_trucks_data_for_com_money();
regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  back_select_truck_model_for_com_money();
  // search_list_truck_qr_for_com_money.focus();
  signupForm.style.display = "none";
  Reports_page.style.display = "none";

  user_save_mod = false;
  manegmeant_data_form.style.display = "none";
  all_page_off();
  t1.style.backgroundColor = "var(--color-2)";
  t2.style.backgroundColor = "var(--color-2)";
  t3.style.backgroundColor = "var(--color-2)";
  t4.style.backgroundColor = "var(--color-2)";
  t5.style.backgroundColor = "var(--color-2)";
  t6.style.backgroundColor = "green";
  t7.style.backgroundColor = "var(--color-2)";
  s1.style.backgroundColor = "var(--color-2)";
  s2.style.backgroundColor = "var(--color-2)";
  s3.style.backgroundColor = "var(--color-2)";
  s4.style.backgroundColor = "var(--color-2)";
  s5.style.backgroundColor = "green";
  s10.style.backgroundColor = "var(--color-2)";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";

  s9.style.backgroundColor = "var(--color-2)";
}
function close_registra_new_com_money_page() {
  registra_new_com_money.style.display = "none";
  s6.style.backgroundColor = "var(--color-2)";
  s8.style.backgroundColor = "var(--color-2)";
  regist_truck_com_money_save_mod = false;
}
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "6" && signed == true) {
    electron.openNewWindow();
  }
});

async function open_data_maneagment() {
  registra_new_money.style.display = "none";
  // registra_new_com_money.style.display = "none";
  create_truck_form_sw.style.display = "none";
  registra_new_order_sw.style.display = "none";
  // check_truck_form.style.display = "none";
  // check_com_truck_form.style.display = "none";
  Reports_page.style.display = "none";

regist_truck_money_out_save_mod = false;
regist_truck_money_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  truck_order_save_mod = false;
  create_truck_save_mod = false;
  truck_path_save_mod = false;
  signupForm.style.display = "none";
  user_save_mod = false;
  manegmeant_data_form.style.display = "block";
  selected_backup_path.innerHTML = await read_backup_path_data();
  clear_res_data();
  data_pass.value = "";
  back_path.value = "";
  s8.style.backgroundColor = "green";
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
  all_page_off();
  s9.style.backgroundColor = "var(--color-2)";
}
function _close_manegmeant_data__page() {
  manegmeant_data_form.style.display = "none";
  s8.style.backgroundColor = "var(--color-2)";
}

// document.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.key == "8" && signed == true) {
//     electron.openNewWindow();
//   }
// });
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    document.activeElement === search_list_truck_qr_for_order
  ) {
    search_list_truck_data_by_qr_for_order();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    document.activeElement === search_list_truck_qr
  ) {
    search_list_truck_data_by_qr();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement === search_path_qr) {
    search_path_data_by_qr();
  }
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    document.activeElement === search_list_truck_qr_for_money
  ) {
    search_list_truck_data_by_qr_for_money();
  }
});
// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "Enter" &&
//     document.activeElement === search_list_truck_qr_for_com_money
//   ) {
//     search_list_truck_data_by_qr_for_com_money();
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "Enter" &&
//     document.activeElement === search_list_truck_qr_for_check
//   ) {
//     search_list_truck_data_by_qr_for_check();
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "Enter" &&
//     document.activeElement === search_list_truck_qr_for_check_com
//   ) {
//     search_list_truck_data_by_qr_for_check_com();
//   }
// });
