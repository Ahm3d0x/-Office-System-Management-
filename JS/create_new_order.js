let search_list_truck_name_for_order = document.querySelector(
  ".search_list_truck_name_for_order"
);
let search_list_truck_driver_name_for_order = document.querySelector(
  ".search_list_truck_driver_name_for_order"
);
let search_list_truck_price_for_order = document.querySelector(
  ".search_list_truck_price_for_order"
);
let close_list_truck_page = document.querySelector(".close_list_truck_page");
let search_list_truck_select_path_for_order = document.querySelector(
  ".search_list_truck_select_path_for_order"
);
let list_truck_Data_TableBody_for_order = document.querySelector(
  ".list_truck_Data_TableBody_for_order"
);
let search_truck_path_list_for_order = document.querySelector(
  ".search_truck_path_list_for_order"
);
let truck_for_order_alert = document.querySelector(".alert");
let truck_for_order_msg_contnet = document.querySelector(".msg_contnet");
let select_truck_for_order = document.querySelector(".select_truck_for_order");
let data_truck_for_order = document.querySelector(".data_truck_for_order");
let selected_truck_info_data_name = document.querySelector(
  ".selected_truck_info_data_name"
);
let selected_truck_info_data_id = document.querySelector(
  ".selected_truck_info_data_id"
);
let selected_truck_info_data_com_price = document.querySelector(
  ".selected_truck_info_data_com_price"
);
let selected_truck_info_data_driver_name = document.querySelector(
  ".selected_truck_info_data_driver_name"
);
let selected_truck_info_data_number = document.querySelector(
  ".selected_truck_info_data_number"
);
let selected_truck_info_data_address = document.querySelector(
  ".selected_truck_info_data_address"
);
let selected_truck_info_data_path = document.querySelector(
  ".selected_truck_info_data_path"
);
let selected_truck_info_data_price = document.querySelector(
  ".selected_truck_info_data_price"
);
let selected_truck_info_data_net_salary = document.querySelector(
  ".selected_truck_info_data_net_salary"
);
let selected_truck_info = document.querySelector(".selected_truck_info");
let input_order_id = document.querySelector(".input_order_id");
let input_order_date_time = document.querySelector(".input_order_date_time");
let input_order_number = document.querySelector(".input_order_number");
let input_order_binzen = document.querySelector(".input_order_binzen");
let input_order_fixing = document.querySelector(".input_order_fixing");
let input_order_cost = document.querySelector(".input_order_cost");
let input_order_net = document.querySelector(".input_order_net");
let input_order_note = document.querySelector(".input_order_note");
let save_new_order = document.querySelector(".save_new_order");
let search_list_truck_qr_for_order = document.querySelector(
  ".search_list_truck_qr_for_order"
);
let orders_table_TableBody = document.querySelector(".orders_table_TableBody");
let orders_registred_table = document.querySelector(".orders_registred_table");
let registr_new_orders_page = document.querySelector(
  ".registr_new_orders_page"
);
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let pay_page = document.querySelector(".pay_page");
let end_pariod_page = document.querySelector(".end_pariod_page");
let conector_switch_data = document.querySelector(".conector_switch_data");
let list_company_order = document.querySelector(".list_company_order");
let input_order_com_price = document.querySelector(".input_order_com_price");
let input_order_price = document.querySelector(".input_order_price");
let expenses_page = document.querySelector(".expenses_page");
let Expenses_data_input = document.querySelector(".Expenses_data_input");
let input_expenses_id = document.querySelector(".input_expenses_id");
let input_expenses_date_time = document.querySelector(
  ".input_expenses_date_time"
);
let input_expenses_com_price = document.querySelector(
  ".input_expenses_com_price"
);
let input_expenses_price = document.querySelector(".input_expenses_price");
let input_Expenses_number = document.querySelector(".input_Expenses_number");
let input_Expenses_binzen = document.querySelector(".input_Expenses_binzen");
let input_Expenses_all = document.querySelector(".input_Expenses_all");
let Expenses_table_TableBody = document.querySelector(
  ".Expenses_table_TableBody"
);
let input_expenses_driver_name = document.querySelector(
  ".input_expenses_driver_name"
);
let selected_truck_info_la_net_salary = document.querySelector(
  ".selected_truck_info_la_net_salary"
);
let input_order_name = document.querySelector(".input_order_name");
let input_pay_id = document.querySelector(".input_pay_id");
let input_pay_date_time = document.querySelector(".input_pay_date_time");
let input_pay_driver_name = document.querySelector(".input_pay_driver_name");
let input_pay_price = document.querySelector(".input_pay_price");
let pay_table_TableBody = document.querySelector(".pay_table_TableBody");
let input_pariod_id = document.querySelector(".input_pariod_id");
let input_pariod_date_time = document.querySelector(".input_pariod_date_time");
let input_pariod_driver_name = document.querySelector(
  ".input_pariod_driver_name"
);
let input_order_serial = document.querySelector(".input_order_serial");
let input_order_card1 = document.querySelector(".input_order_card1");
let input_order_card2 = document.querySelector(".input_order_card2");
let input_pariod_price = document.querySelector(".input_pariod_price");
let pariod_table_TableBody = document.querySelector(".pariod_table_TableBody");
let selected_truck_info_data_net_salary_pr = document.querySelector(
  ".selected_truck_info_data_net_salary_pr"
);
let pariod_table_TableBody0 = document.querySelector(
  ".pariod_table_TableBody0"
);
pariod_table_TableBody;
let selected_truck_com_id;
let path_selected_truck_id;
let path_selected_order_id;
let select_create_truck_mod_for_order = false;
let all_order_truck_data;
let select_truck_order_id;
let select_truck_order_mod = false;
let truck_order_save_mod = false;
let last_truck_order_qr;
let save_or_edit_truck_order = true;
let truck_order_data;
let select_truck_for_order_id;
let price_order;
let last_order_id_path;
let save_or_edit_truck_expenses = false;
let select_expenses_mod = false;
let select_truck_expenses_id;
async function msg_alert_for_order(msg) {
  truck_for_order_alert.style.right = "5px";
  truck_for_order_msg_contnet.innerHTML = msg;
  setTimeout(() => {
    create_truck_alert.style.right = "-330px";
  }, 3000);
}


async function open_list_orders_page() {
  data_truck_for_order.style.display = "none";
  orders_registred_table.style.display = "none";
  expenses_page.style.display = "block";
  // pay_page.style.display = "none";
  end_pariod_page.style.display = "none";
  // c3.style.display = "none";
  // c4.style.display = "none";
  input_expenses_date_time.value = today;
  c1.style.backgroundColor = "var(--color-2)";
  // c3.style.backgroundColor = "var(--color-2)";
  c4.style.backgroundColor = "var(--color-2)";
  c2.style.backgroundColor = "green";
  save_or_edit_truck_expenses = true;
  select_expenses_mod = true;
  select_pay_mod = false;
  select_pariod_mod = false;
  save_or_edit_truck_pariod = false;
  save_or_edit_truck_pay = false;
  // x;
  truck_order_save_mod = false;
  selected_truck_info_la_net_salary.innerHTML = "اجمالي المصروفات :";
  await get_last_qr_expenses_truck(select_truck_for_order_id);
  await list_expenses_for_selected_truck(select_truck_for_order_id);
  await _new_expenses();
  // console.log(last_expenses_truck_qr);
}
async function open_inputs_orders_data() {
  data_truck_for_order.style.display = "block";
  orders_registred_table.style.display = "block";
  expenses_page.style.display = "none";
  // // pay_page.style.display = "none";
  end_pariod_page.style.display = "none";
  save_or_edit_truck_expenses = false;
  select_expenses_mod = false;
  truck_order_save_mod = true;
  save_or_edit_truck_order = true;
  select_pay_mod = false;
  select_pariod_mod = false;
  save_or_edit_truck_pariod = false;
  save_or_edit_truck_pay = false;
  c1.style.backgroundColor = "green";
  c2.style.backgroundColor = "var(--color-2)";
  // c3.style.backgroundColor = "var(--color-2)";
  c4.style.backgroundColor = "var(--color-2)";
  selected_truck_info_la_net_salary.innerHTML = "صافى الشاحنه :";
  await list_order_for_selected_truck(select_truck_for_order_id);
  await _new_order(select_truck_for_order_id);
}

async function open_pay_page_page() {
  data_truck_for_order.style.display = "none";
  orders_registred_table.style.display = "none";
  expenses_page.style.display = "none";
  pay_page.style.display = "block";
  end_pariod_page.style.display = "none";
  save_or_edit_truck_expenses = false;
  select_expenses_mod = false;
  truck_order_save_mod = false;
  // c3.style.backgroundColor = "green";
  c2.style.backgroundColor = "var(--color-2)";
  c1.style.backgroundColor = "var(--color-2)";
  c4.style.backgroundColor = "var(--color-2)";
  input_pay_date_time.value = today;
  select_pay_mod = true;
  save_or_edit_truck_pariod = false;
  save_or_edit_truck_pay = true;
  select_pariod_mod = false;

  selected_truck_info_la_net_salary.innerHTML = "اجمالي المدفوع :";
  get_last_qr_pay_truck(select_truck_for_order_id);
  list_pay_for_selected_truck(select_truck_for_order_id);
  await _new_pay();
  // list_order_for_selected_truck(select_truck_for_order_id);
}
async function end_piriod_page() {
  data_truck_for_order.style.display = "none";
  orders_registred_table.style.display = "none";
  expenses_page.style.display = "none";
  // pay_page.style.display = "none";
  end_pariod_page.style.display = "block";
  save_or_edit_truck_expenses = false;
  select_expenses_mod = false;
  truck_order_save_mod = false;
  select_pay_mod = false;
  save_or_edit_truck_pariod = true;
  save_or_edit_truck_pay = false;
  input_pariod_date_time.value = today;
  c4.style.backgroundColor = "green";
  c2.style.backgroundColor = "var(--color-2)";
  c1.style.backgroundColor = "var(--color-2)";
  // c3.style.backgroundColor = "var(--color-2)";
  selected_truck_info_la_net_salary.innerHTML = "رصيد الشاحنه";
  get_last_qr_pariod_truck(select_truck_for_order_id);
  list_pariod_for_selected_truck(select_truck_for_order_id);
  select_pariod_mod = true;
  await _new_pariod();

}

function all_page_off() {
  select_expenses_mod = false;
  truck_order_save_mod = false;
  select_pay_mod = false;
  select_pariod_mod = false;
}


async function search_list_truck_data_by_qr_for_order() {
  create_truck_data = await read_truck_modle_data();
  let row = "";
  let get_it = false;
  list_truck_Data_TableBody_for_order.innerHTML = "";
  for (let i = 0; i < create_truck_data.length; i++) {
    if (search_list_truck_qr_for_order.value != "") {
      if (search_list_truck_qr_for_order.value == create_truck_data[i].qr) {
        try {
          row += `
                        <tr>
                        <td>${create_truck_data[i].qr}</td>
                        <td>${create_truck_data[i].truck_number_inp}</td>
                        <td>${create_truck_data[i].driver_name_inp}</td>
                        </tr>
                        `;
          get_it = true;
          list_truck_Data_TableBody_for_order.innerHTML = row;
          select_create_truck_mod_for_order = false;
          select_truck_model_for_order(i);
          clear_input_search_truck_feilds_for_order();
          break;
        } catch (error) {
          console.error("Error displaying store data:", error);
        }
      }
    } else {
      search_list_trucks_data_for_order();
    }
  }

  if (get_it == false) {
    clear_input_search_truck_feilds_for_order();
    msg_alert_for_order("لا يوجد شاحنه بهذا الكود");
    search_list_trucks_data_for_order();
  }
}
function list_truck_qr_empty_for_order() {
  if (search_list_truck_qr_for_order.value == "") {
    clear_input_search_truck_feilds_for_order();
    search_list_trucks_data_for_order();
  }
}

async function clear_input_search_truck_feilds_for_order() {
  search_list_truck_name_for_order.value = "";
  search_list_truck_driver_name_for_order.value = "";
}

async function search_list_trucks_data_for_order() {
  search_list_truck_select_path_for_order = document.querySelector(
    ".search_list_truck_select_path_for_order"
  );
  create_truck_data = await read_truck_modle_data();
  let row = "";
  list_truck_Data_TableBody_for_order.innerHTML = "";
  for (let i = 0; i < create_truck_data.length; i++) {
    if (
      search_list_truck_name_for_order.value == "" &&
      search_list_truck_driver_name_for_order.value == ""
    ) {
      row += `
                 <tr ondblclick="select_truck_model_for_order(${i})">
                <td>${create_truck_data[i].qr}</td>
                <td>${create_truck_data[i].truck_number_inp}</td>
                <td>${create_truck_data[i].driver_name_inp}</td>
                </tr>
                  `;
    } else if (
      search_list_truck_name_for_order.value != "" &&
      search_list_truck_driver_name_for_order.value == ""
    ) {
      if (
        create_truck_data[i].truck_number_inp.includes(
          search_list_truck_name_for_order.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_order(${i})">
                <td>${create_truck_data[i].qr}</td>
                <td>${create_truck_data[i].truck_number_inp}</td>
                <td>${create_truck_data[i].driver_name_inp}</td>
                  </tr>                `;
      } else {
        continue;
      }
    } else if (
      search_list_truck_name_for_order.value == "" &&
      search_list_truck_driver_name_for_order.value != ""
    ) {
      if (
        create_truck_data[i].driver_name_inp.includes(
          search_list_truck_driver_name_for_order.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_order(${i})">
                <td>${create_truck_data[i].qr}</td>
                <td>${create_truck_data[i].truck_number_inp}</td>
                <td>${create_truck_data[i].driver_name_inp}</td>
                  </tr>                `;
      } else {
        continue;
      }
    } else if (
      search_list_truck_name_for_order.value != "" &&
      search_list_truck_driver_name_for_order.value != ""
    ) {
      if (
        create_truck_data[i].truck_number_inp.includes(
          search_list_truck_name_for_order.value
        ) &&
        create_truck_data[i].driver_name_inp.includes(
          search_list_truck_driver_name_for_order.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_order(${i})">
                <td>${create_truck_data[i].qr}</td>
                <td>${create_truck_data[i].truck_number_inp}</td>
                <td>${create_truck_data[i].driver_name_inp}</td>
                  </tr>                `;
      } else {
        continue;
      }
    }
  }
  list_truck_Data_TableBody_for_order.innerHTML = row;
  select_create_truck_mod_for_order = false;
}

async function select_truck_model_for_order(i) {
  select_truck_for_order.style.display = "none";
  conector_switch_data.style.display = "block";
  truck_order_save_mod = true;

  fill_data_truck_model_for_order(i);
  await list_order_for_selected_truck(i);
  input_order_date_time.value = today;
  let drive_path_inp = document.querySelector(".drive_path_inp");

  open_inputs_orders_data();
  _new_expenses();
  // _new_pay();
  _new_pariod();
}

async function fill_data_truck_model_for_order(i) {
  // selected_truck_info_data_name.innerHTML = create_truck_data[i].truck_name_inp;
  selected_truck_info_data_id.innerHTML = create_truck_data[i].truck_number_inp;
  selected_truck_info_data_driver_name.innerHTML =
    create_truck_data[i].driver_name_inp;
  selected_truck_info_data_number.innerHTML =
    create_truck_data[i].driver_phone_inp;
  selected_truck_info_data_net_salary_pr.innerHTML =
    create_truck_data[i].truck_all_salary;

  select_truck_for_order_id = i;
  await get_last_qr_order_truck(i);

 
}


async function get_last_qr_order_truck(i) {
  if (save_or_edit_truck_order == true) {
    all_order_truck_data = await read_truck_modle_data();
    let process_id = all_order_truck_data[i].process.length - 1;

    truck_order_data = all_order_truck_data[i].process[process_id].orders;
    // console.log(all_order_truck_data);

    // console.log(truck_order_data);

    if (truck_order_data.length == 0) {
      last_order_truck_qr = 0;
    } else {
      last_order_truck_qr = truck_order_data[truck_order_data.length - 1].qr;
    }
    // console.log(last_order_truck_qr);
    input_order_id.value = last_order_truck_qr + 1;
  }
}



document.addEventListener("keydown", (event) => {
  if (truck_order_save_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_order_switch();
    }
  }
});

function edit_or_save_truck_order_switch() {
  if (save_or_edit_truck_order == true) {
    save_new_truck_order(select_truck_for_order_id);
  }
}
function get_net_value() {
  input_order_net.value = "";

  let cash = +input_order_com_price.value;
  let weight = +input_order_number.value;
  let price = +input_order_binzen.value;
  let cost = +input_order_cost.value;
  
  // حساب الراتب الكلي
  let all_salary = (price * weight).toFixed(0);
  
  // حساب الراتب الصافي
  let net_salary = (all_salary - (cash + cost)).toFixed(0);
  
  // تعيين قيمة الحقل للراتب الصافي
  input_order_net.value = net_salary
  
}
let sup_value = 0;
let sup_value_in = 0;
let sup_value_out = 0;

async function save_new_truck_order(i) {
  select_pariod_mod = false;
  let all_order_truck_data1 = await read_truck_modle_data();
  path_list_data1 = await read_path_data();

  if (
    input_order_date_time.value != "" &&
    input_order_number.value != "" &&
    input_order_price.value != ""
  ) {
    let process_id = all_order_truck_data[i].process.length - 1;


    order_data = "";

    get_net_value();
    await get_last_qr_order_truck(i);
    try {
      order_data = {
        qr: +last_order_truck_qr + 1,
        sup_id: selected_truck_com_id,
        date__time_order: input_order_date_time.value,
        card_num: `${input_order_card1.value}//${input_order_card2.value}`,
        input_order_name: input_order_name.value,
        order_com_price: input_order_com_price.value,
        order_price: input_order_price.value,
        order_number: input_order_number.value,
        order_binzen: input_order_binzen.value,
        input_order_serial: input_order_serial.value,
        order_cost: input_order_cost.value,
        order_net: input_order_net.value,
        sign: user_sign,
      };
      if (
        last_order_truck_qr == 0 &&
        all_order_truck_data1[i].process[process_id].start == ""
      ) {
        all_order_truck_data1[i].process[process_id].start =
          input_order_date_time.value;
      }
      all_order_truck_data1[i].process[process_id].orders.push(order_data);
      await write_truck_modle_Data(all_order_truck_data1);
      await list_order_for_selected_truck(i);
      await _new_order(i);
      msg_alert("تم تسجيل النقله");
      // await get_net_salary_truck_order(i);
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert_for_order("حدث خطأ عند حفظ النقله ");
    }
  } else {
    msg_alert_for_order(" اكمل  البيانات النقله");
  }
}


async function clear_input_order_feilds(i) {
  await get_last_qr_order_truck(select_truck_for_order_id);
  input_order_date_time.value = today;
  input_order_com_price.value = "";
  input_order_price.value = "";
  input_order_number.value = "";
  input_order_binzen.value = "";
  input_order_card1.value = "";
  input_order_card2.value = "";
  input_order_name.value = "";
  input_order_serial.value = "";
  input_order_cost.value = "";
  input_order_net.value = "";
}
async function _new_order(i) {
  await clear_input_order_feilds(i);
  save_or_edit_truck_order = true;
  select_truck_order_mod = false;
  save_new_order.style.display = "block";
  input_order_name.focus();
}

async function list_order_for_selected_truck(i) {
  all_order_truck_data = await read_truck_modle_data();
  let process_id = all_order_truck_data[i].process.length - 1;

  truck_order_data = all_order_truck_data[i].process[process_id].orders;
  // console.log(truck_order_data);
  let row = "";
  all_net_salary = 0;
  // let all_cost = 0;
  orders_table_TableBody.innerHTML = "";

  for (let h = 0; h <truck_order_data.length ; h++) {
    all_net_salary += +truck_order_data[h].order_net;
    try {
      row += `
        <tr ondblclick="selected_order_truck(${h})">
          <td>${truck_order_data[h].qr}</td>
          <td  >${truck_order_data[h].date__time_order}</td>
          <td  >${truck_order_data[h].input_order_name}</td>
          <td  >${truck_order_data[h].order_price}</td>
          <td  >${truck_order_data[h].input_order_serial}</td>
          <td  >${truck_order_data[h].card_num}</td>
          <td  >${truck_order_data[h].order_number}</td>
          <td  >${truck_order_data[h].order_binzen}</td>
          <td  >${
           ( +truck_order_data[h].order_number *
            +truck_order_data[h].order_binzen).toFixed(0)
          }</td>
          <td  >${truck_order_data[h].order_com_price}</td>
          <td  >${truck_order_data[h].order_cost}</td>
          <td  >${truck_order_data[h].order_net}</td>
          <td  >${truck_order_data[h].sign}</td>
        </tr>
      `;
    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }
  selected_truck_info_data_net_salary.innerHTML = all_net_salary.toFixed(0);
  orders_table_TableBody.innerHTML = row;
  select_create_truck_mod = false;
  save_new_order.style.display = "block";
}

async function selected_order_truck(i) {
  // open_inputs_orders_data();

  let drive_path_inp = document.querySelector(".drive_path_inp");

  all_order_truck_data = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id].orders;
  let card_num = truck_order_data[i].card_num;
  let cardParts = card_num.split("//");
  // الآن يمكنك الوصول إلى كل جزء على حدة
  let part1 = cardParts[0]; // الجزء الأول
  let part2 = cardParts[1];
  // console.log(part1); // يعرض الجزء الأول
  // console.log(part2); // يعرض الجزء الثاني
  input_order_id.value = truck_order_data[i].qr;
  input_order_date_time.value = truck_order_data[i].date__time_order;
  input_order_name.value = truck_order_data[i].input_order_name;
  input_order_com_price.value = truck_order_data[i].order_com_price;
  input_order_price.value = truck_order_data[i].order_price;
  input_order_number.value = truck_order_data[i].order_number;
  input_order_binzen.value = truck_order_data[i].order_binzen;
  input_order_cost.value = truck_order_data[i].order_cost;
  input_order_card1.value = part1;
  input_order_card2.value = part2;
  input_order_net.value = truck_order_data[i].order_net;
  save_new_order.style.display = "none";
  select_truck_order_mod = true;
  select_truck_order_id = i;
  // get_data_index_for_path_order(i);
}
async function readJsonFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to fetch JSON file");
    }
    return await response.json();
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}



async function _delete_order() {
  // get_data_index_for_path_order(select_truck_order_id);

  if (select_truck_order_mod) {
    try {
      all_order_truck_data = await read_truck_modle_data();
      // path_list_data = await read_path_data();
      let process_id =
        all_order_truck_data[select_truck_for_order_id].process.length - 1;

      let truck_order_data =
        all_order_truck_data[select_truck_for_order_id]?.process[process_id]
          .orders;
      // let path_list_data_select = path_list_data[path_selected_truck_id]?.out;

      if (!truck_order_data) {
        throw new Error("Selected truck or order not found.");
      }

      // Remove the selected order from both arrays
      truck_order_data.splice(select_truck_order_id, 1);
      // path_list_data_select.splice(path_selected_order_id, 1);

      // Update the modified arrays in the JSON data
      all_order_truck_data[select_truck_for_order_id].process[
        process_id
      ].orders = truck_order_data;
      // path_list_data[path_selected_truck_id].out = path_list_data_select;

      // Write the updated JSON data back to the files

      await write_truck_modle_Data(all_order_truck_data);
      // await write_path_Data(path_list_data);
      // Perform additional tasks
      await list_order_for_selected_truck(select_truck_for_order_id);
      select_truck_order_mod = false;
      save_or_edit_truck_order = true;
      await clear_input_order_feilds(select_truck_for_order_id);
      create_truck_msg_alert("تم حذف النقله");
      save_new_order.style.display = "block";
    } catch (error) {
      console.error("Error in _delete_order:", error);
    }
  }
}

//////////////////////////////////////////
let last_expenses_truck_qr;
async function get_last_qr_expenses_truck(i) {
  if (save_or_edit_truck_expenses == true) {
    all_order_truck_data = await read_truck_modle_data();
    let process_id = all_order_truck_data[i].process.length - 1;

    truck_order_data = all_order_truck_data[i].process[process_id].expenses;
    // console.log(all_order_truck_data);

    // console.log(truck_order_data);

    if (truck_order_data.length == 0) {
      last_expenses_truck_qr = 0;
    } else {
      last_expenses_truck_qr = truck_order_data[truck_order_data.length - 1].qr;
    }
    // console.log(last_order_truck_qr);
    input_expenses_id.value = last_expenses_truck_qr + 1;
  }
}

async function save_new_truck_expenses(i) {
 let  all_order_truck_data1 = await read_truck_modle_data();
  path_list_data1 = await read_path_data();
  let process_id = all_order_truck_data1[i].process.length - 1;

  let expenses_data = "";

  if (
    input_expenses_date_time.value != "" &&
    input_expenses_driver_name.value != "" &&
    (input_expenses_com_price.value != "" ||
      input_expenses_price.value != "" ||
      input_Expenses_number.value != "")
  ) {
    get_net_expenses();
    await get_last_qr_expenses_truck(i);
    try {
      expenses_data = {
        qr: +last_expenses_truck_qr + 1,
        date__time_expenses: input_expenses_date_time.value,
        input_expenses_driver_name: input_expenses_driver_name.value,
        expenses_com_price: input_expenses_com_price.value,
        expenses_price: input_expenses_price.value,
        expenses_number: input_Expenses_number.value,
        expenses_binzen: input_Expenses_binzen.value,
        expenses_net: sum.toFixed(0),
        sign: user_sign
      };
      // console.log(all_order_truck_data1);
      console.log(all_order_truck_data1[i].process[process_id]);

      all_order_truck_data1[i].process[process_id].expenses.push(expenses_data);

      await write_truck_modle_Data(all_order_truck_data1);
      await list_expenses_for_selected_truck(i);
      await clear_input_expenses_feilds(i);
      msg_alert_for_order("تم تسجيل المصروف");
      await get_last_qr_expenses_truck(select_truck_for_order_id);
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert_for_order("حدث خطأ عند حفظ المصروف ");
    }
  } else {
    msg_alert_for_order("اكمل  البيانات المصروف");
  }
}
let sum;
function get_net_expenses() {
  sum =
    +input_expenses_com_price.value +
    +input_expenses_price.value +
    +input_Expenses_number.value +
    +input_Expenses_binzen.value;
  input_Expenses_all.value = sum.toFixed(0);
}

async function clear_input_expenses_feilds() {
  await get_last_qr_expenses_truck(select_truck_for_order_id);
  input_expenses_date_time.value = today;
  input_expenses_com_price.value = "";
  input_expenses_price.value = "";
  input_Expenses_number.value = "";
  input_Expenses_binzen.value = "";
  input_expenses_driver_name.value = "";

  input_Expenses_all.value = "";
}
let all_net_expenses = 0;
let all_net_salary = 0;
async function list_expenses_for_selected_truck(i) {
  all_order_truck_data = await read_truck_modle_data();
  let process_id = all_order_truck_data[i].process.length - 1;
  all_net_expenses = 0;

  truck_order_data = all_order_truck_data[i].process[process_id].expenses;
  let row = "";
  Expenses_table_TableBody.innerHTML = "";
  for (let h =0; h <truck_order_data.length; h++) {
    all_net_expenses += +truck_order_data[h].expenses_net;
    try {
      row += `
        <tr ondblclick="selected_expenses_truck(${h})">
          <td>${truck_order_data[h].qr}</td>
          <td  >${truck_order_data[h].date__time_expenses}</td>
          <td  >${truck_order_data[h].input_expenses_driver_name}</td>
          <td  >${truck_order_data[h].expenses_com_price}</td>
          <td  >${truck_order_data[h].expenses_price}</td>
          <td  >${truck_order_data[h].expenses_number}</td>
          <td  >${truck_order_data[h].expenses_binzen}</td>
          <td  >${truck_order_data[h].expenses_net}</td>
          <td  >${truck_order_data[h].sign}</td>


        </tr>
      `;
    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }
  selected_truck_info_data_net_salary.innerHTML = all_net_expenses.toFixed(0);
  Expenses_table_TableBody.innerHTML = row;
  select_create_truck_mod_expenses = false;
  // save_new_order.style.display = "block";
}

document.addEventListener("keydown", (event) => {
  if (select_expenses_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_expenses_switch();
    }
  }
});

function edit_or_save_truck_expenses_switch() {
  if (save_or_edit_truck_expenses == true) {
    save_new_truck_expenses(select_truck_for_order_id);
  } else {
    edit_expenses_data(select_truck_expenses_id);
  }
}
async function _new_expenses() {
  save_new_expenses.innerHTML = "حفظ";
  save_or_edit_truck_expenses = true;
  await clear_input_expenses_feilds();
  input_expenses_driver_name.focus();
}

async function selected_expenses_truck(h) {
  save_or_edit_truck_expenses = false;
  save_new_expenses.innerHTML = "تعديل";
  select_expenses_mod = true;
  all_order_truck_data1 = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id]
      .expenses;
  input_expenses_id.value = truck_order_data[h].qr;
  input_expenses_date_time.value = truck_order_data[h].date__time_expenses;
  input_expenses_driver_name.value =
    truck_order_data[h].input_expenses_driver_name;
  input_expenses_com_price.value = truck_order_data[h].expenses_com_price;
  input_expenses_price.value = truck_order_data[h].expenses_price;
  input_Expenses_number.value = truck_order_data[h].expenses_number;
  input_Expenses_binzen.value = truck_order_data[h].expenses_binzen;
  input_Expenses_all.value = truck_order_data[h].expenses_net;
  select_truck_expenses_id = h;
}
let save_new_expenses = document.querySelector(".save_new_expenses");
let new_expenses = document.querySelector(".new_expenses");
let delete_expenses = document.querySelector(".delete_expenses");
async function edit_expenses_data(i) {
  all_order_truck_data1 = await read_truck_modle_data();
  let process_id =
    all_order_truck_data1[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data1[select_truck_for_order_id].process[process_id]
      .expenses;

  if (
    input_expenses_date_time.value != "" &&
    input_expenses_driver_name.value != "" &&
    (input_expenses_com_price.value != "" ||
      input_expenses_price.value != "" ||
      input_Expenses_number.value != "")
  ) {
    get_net_expenses();
    if (save_or_edit_truck_expenses == false) {
      try {
        (truck_order_data[i].date__time_expenses =
          input_expenses_date_time.value),
          (truck_order_data[i].input_expenses_driver_name =
            input_expenses_driver_name.value),
          (truck_order_data[i].expenses_com_price =
            input_expenses_com_price.value),
          (truck_order_data[i].expenses_price = input_expenses_price.value),
          (truck_order_data[i].expenses_number = input_Expenses_number.value),
          (truck_order_data[i].expenses_binzen = input_Expenses_binzen.value),
          (truck_order_data[i].expenses_net = sum.toFixed(0));
          (truck_order_data[i].sign = user_sign);
        all_order_truck_data1[select_truck_for_order_id].process[
          process_id
        ].expenses = truck_order_data;
        await write_truck_modle_Data(all_order_truck_data1);
        await list_expenses_for_selected_truck(select_truck_for_order_id);
        save_new_expenses.innerHTML = "حفظ";
        save_or_edit_truck_expenses = true;
        select_expenses_mod = false;
        create_truck_msg_alert("تم تعديل المصروف ");
        clear_input_expenses_feilds();
      } catch (error) {
        console.error("Error editing client data:", error);
        create_truck_msg_alert("حدث خطأ عند تعديل بيانات المصروف ");
      }
    } 
  } else {
    create_truck_msg_alert("اكمل بيانات المصروف");
  }
}

async function _delete_expenses() {
  if (select_expenses_mod == true) {
    all_order_truck_data = await read_truck_modle_data();
    let process_id =
      all_order_truck_data1[select_truck_for_order_id].process.length - 1;
    truck_order_data =
      all_order_truck_data[select_truck_for_order_id].process[process_id]
        .expenses;
    truck_order_data.splice(select_truck_expenses_id, 1);

    all_order_truck_data[select_truck_for_order_id].process[
      process_id
    ].expenses = truck_order_data;
    await write_truck_modle_Data(all_order_truck_data);
    save_new_expenses.innerHTML = "حفظ";
    create_truck_msg_alert("تم حذف المصروف");
    await list_expenses_for_selected_truck(select_truck_for_order_id);
    clear_input_expenses_feilds();
    select_expenses_mod = false;
    save_or_edit_truck_expenses = true;
  }
}
////////////////////////////////////////////////

let last_pay_truck_qr;
async function get_last_qr_pay_truck(i) {
  if (save_or_edit_truck_pay == true) {
    all_order_truck_data = await read_truck_modle_data();
    let process_id = all_order_truck_data[i].process.length - 1;

    truck_order_data = all_order_truck_data[i].process[process_id].pay;
    // console.log(all_order_truck_data);

    // console.log(truck_order_data);

    if (truck_order_data.length == 0) {
      last_pay_truck_qr = 0;
    } else {
      last_pay_truck_qr = truck_order_data[truck_order_data.length - 1].qr;
    }
    // console.log(last_order_truck_qr);
    input_pay_id.value = last_pay_truck_qr + 1;
  }
}

async function save_new_truck_pay(i) {
  all_order_truck_data1 = await read_truck_modle_data();
  path_list_data1 = await read_path_data();
  let process_id = all_order_truck_data1[i].process.length - 1;

  let pay_data = "";

  if (
    input_pay_date_time.value != "" &&
    input_pay_driver_name.value != "" &&
    input_pay_price.value != ""
  ) {
    let filter = parseFloat(input_pay_price.value) || 0; // Convert input to a number or default to 0

    // get_net_expenses();
    await get_last_qr_pay_truck(i);
    try {
      pay_data = {
        qr: +last_pay_truck_qr + 1,
        date_time_pay: input_pay_date_time.value,
        pay_driver_name: input_pay_driver_name.value,
        value: filter.toFixed(0),  // Now .toFixed(0) will work correctly
        sign: user_sign
      };

    
      // console.log(all_order_truck_data1);
      console.log(all_order_truck_data1[i].process[process_id]);

      all_order_truck_data1[i].process[process_id].pay.push(pay_data);

      await write_truck_modle_Data(all_order_truck_data1);
      await list_pay_for_selected_truck(i);
      await _new_pay();
      msg_alert_for_order("تم تسجيل المدفوع ");
      await get_last_qr_pay_truck(select_truck_for_order_id);
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert_for_order("حدث خطأ عند حفظ المدفوع  ");
    }
  } else {
    msg_alert_for_order("اكمل المدفوع ");
  }
}

async function clear_input_pay_feilds() {
  await get_last_qr_pay_truck(select_truck_for_order_id);
  input_pay_date_time.value = today;
  input_pay_driver_name.value = "";
  input_pay_price.value = "";
}
let all_net_pay = 0;

async function list_pay_for_selected_truck(i) {
  all_order_truck_data = await read_truck_modle_data();
  let process_id = all_order_truck_data[i].process.length - 1;
  all_net_pay = 0;
  truck_order_data = all_order_truck_data[i].process[process_id].pay;
  let row = "";
  Expenses_table_TableBody.innerHTML = "";
   
  for (let h =0; h <truck_order_data.length ; h++) {
    all_net_pay += +truck_order_data[h].value;
    try {
      row += `
        <tr ondblclick="selected_pay_truck(${h})">
          <td>${truck_order_data[h].qr}</td>
          <td  >${truck_order_data[h].date_time_pay}</td>
          <td  >${truck_order_data[h].pay_driver_name}</td>
          <td  >${truck_order_data[h].value}</td>
          <td  >${truck_order_data[h].sign}</td>

        </tr>
      `;
    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }
  selected_truck_info_data_net_salary.innerHTML = all_net_pay.toFixed(0);
  pay_table_TableBody.innerHTML = row;
  select_create_truck_mod_pay = false;
  // save_new_order.style.display = "block";
}

document.addEventListener("keydown", (event) => {
  if (select_pay_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_pay_switch();
    }
  }
});

function edit_or_save_truck_pay_switch() {
  if (save_or_edit_truck_pay == true) {
    save_new_truck_pay(select_truck_for_order_id);
  } else {
    edit_pay_data(select_truck_pay_id);
  }
}
// async function _new_pay() {
//   save_new_pay.innerHTML = "حفظ";
//   save_or_edit_truck_pay = true;
//   await clear_input_pay_feilds();
//   input_pay_driver_name.focus();
// }
let save_new_pay = document.querySelector(".save_new_pay");
let select_truck_pay_id;
async function selected_pay_truck(h) {
  save_or_edit_truck_pay = false;
  save_new_pay.innerHTML = "تعديل";
  select_pay_mod = true;
  all_order_truck_data1 = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id].pay;
  input_pay_id.value = truck_order_data[h].qr;
  input_pay_date_time.value = truck_order_data[h].date_time_pay;
  input_pay_driver_name.value = truck_order_data[h].pay_driver_name;
  input_pay_price.value = truck_order_data[h].value;

  select_truck_pay_id = h;
}
let save_or_edit_truck_pay = false;
let select_pay_mod = false;
async function edit_pay_data(i) {
  let all_order_truck_data1 = await read_truck_modle_data();
  let process_id =
    all_order_truck_data1[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data1[select_truck_for_order_id].process[process_id].pay;
    let filter = parseFloat(input_pay_price.value) || 0;
  if (
    input_pay_date_time.value != "" &&
    input_pay_driver_name.value != "" &&
    input_pay_price.value != ""
  ) {
    // get_net_expenses();
    if (save_or_edit_truck_pay == false) {
      try {
        (truck_order_data[i].date_time_pay = input_pay_date_time.value),
          (truck_order_data[i].pay_driver_name = input_pay_driver_name.value),
          (truck_order_data[i].value = filter.toFixed(0)),
          (truck_order_data[i].sign = user_sign),

          (all_order_truck_data1[select_truck_for_order_id].process[
            process_id
          ].pay = truck_order_data);
        await write_truck_modle_Data(all_order_truck_data1);
        await list_pay_for_selected_truck(select_truck_for_order_id);
        save_new_pay.innerHTML = "حفظ";
        save_or_edit_truck_pay = true;
        select_pay_mod = false;
        await get_last_qr_pay_truck(select_truck_for_order_id);

        create_truck_msg_alert("تم تعديل المدفوع ");
        await _new_pay();
      } catch (error) {
        console.error("Error editing client data:", error);
        create_truck_msg_alert("حدث خطأ عند تعديل بيانات المدفوع ");
      }
    } else {
      create_truck_msg_alert("هذه المدفوع موجوده بالفعل");
    }
  } else {
    create_truck_msg_alert("اكمل بيانات المدفوع");
  }
}

async function _delete_pay() {
  if (save_or_edit_truck_pay == false) {
    all_order_truck_data = await read_truck_modle_data();
    let process_id =
      all_order_truck_data1[select_truck_for_order_id].process.length - 1;
    truck_order_data =
      all_order_truck_data[select_truck_for_order_id].process[process_id].pay;
    truck_order_data.splice(select_truck_pay_id, 1);

    all_order_truck_data[select_truck_for_order_id].process[process_id].pay =
      truck_order_data;
    await write_truck_modle_Data(all_order_truck_data);
    // save_new_pay.innerHTML = "حفظ";
    create_truck_msg_alert("تم حذف المصروف");
    await list_pay_for_selected_truck(select_truck_for_order_id);
    // clear_input_pay_feilds();
    _new_pay();
    // await get_last_qr_pay_truck(select_truck_for_order_id);

    select_pay_mod = true;
    save_or_edit_truck_pay = true;
  }
}

//////////////////////////////////////////////

let last_pariod_truck_qr;

async function get_last_qr_pariod_truck(i) {
  if (save_or_edit_truck_pariod === true) {
    try {
      all_order_truck_data = await read_truck_modle_data();
      let process_id;
      if (all_order_truck_data[i].process.length === 1) {
        process_id = 0; // Adjusted to correctly get the last index
      } else {
        process_id = all_order_truck_data[i].process.length - 2;
      }

      // Retrieve truck order data
      truck_order_data = all_order_truck_data[i].process[process_id].finsh_pay;

      if (!truck_order_data || Object.keys(truck_order_data).length === 0) {
        last_pariod_truck_qr = 0;
      } else {
        last_pariod_truck_qr = truck_order_data.qr;
      }

      // console.log(last_pariod_truck_qr);

      // Ensure the value is a number before assigning it to the input
      if (!isNaN(last_pariod_truck_qr)) {
        input_pariod_id.value = last_pariod_truck_qr + 1;
      } else {
        console.error("last_pariod_truck_qr is not a number");
      }
    } catch (error) {
      console.error("Error in get_last_qr_pariod_truck:", error);
    }
  }
}


async function save_new_truck_pariod(i) {
  let all_order_truck_data1 = await read_truck_modle_data();
  let path_list_data1 = await read_path_data();
  let process_id = all_order_truck_data1[i].process.length - 1;

  await ast1();
  await ast2();
  await ast3();

  let net = +all_net_salary + +all_net_pay - +all_net_expenses;
  let salary = +all_order_truck_data1[i].truck_all_salary;
  let net_salary = +salary + +net - +input_pariod_price.value;

  if (
    input_pariod_date_time.value !== "" &&
    input_pariod_driver_name.value !== "" &&
    input_pariod_price.value !== ""
  ) {
    await get_last_qr_pariod_truck(i);

    try {
      let pariod_data = {
        qr: +last_pariod_truck_qr + 1,
        date_time_pariod: input_pariod_date_time.value,
        pariod_driver_name: input_pariod_driver_name.value,
        num_orders: all_order_truck_data1[i].process[process_id].orders.length,
        all_net_salary: all_net_salary,
        all_net_expenses: all_net_expenses,
        all_net_pay: all_net_pay,
        all_net: net,
        pr_money: salary,
        net: +input_pariod_price.value,
        af_money: net_salary,
        sign : user_sign
      };

      let new_data = {
        start: input_pariod_date_time.value,
        orders: [],
        expenses: [],
        pay: [],
        finsh_pay: {},
      };

      all_order_truck_data1[i].truck_all_salary = net_salary.toFixed(0);
      all_order_truck_data1[i].process[process_id].finsh_pay = pariod_data;
      all_order_truck_data1[i].process.push(new_data);

      await write_truck_modle_Data(all_order_truck_data1);
      all_order_truck_data1 = await read_truck_modle_data();

      await list_pariod_for_selected_truck(i);
      await _new_pariod();

      msg_alert_for_order("تم تسجيل الفتره ");
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert_for_order("حدث خطأ عند حفظ الفتره");
    }
  } else {
    msg_alert_for_order("اكمل بيانات الفتره");
  }
}

async function clear_input_pariod_feilds() {
  await get_last_qr_pariod_truck(select_truck_for_order_id);
  all_order_truck_data = await read_truck_modle_data();
  selected_truck_info_data_net_salary_pr.innerHTML =
    all_order_truck_data[select_truck_for_order_id].truck_all_salary;
  input_pariod_date_time.value = today;
  input_pariod_driver_name.value = "";
  input_pariod_price.value = "";
}
let all_net_pariod = 0;

async function ast1() {
  all_order_truck_data = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;

  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id].orders;
  all_net_salary = 0;
  let h = truck_order_data.length - 1;
  for (h; h >= 0; h--) {
    all_net_salary += +truck_order_data[h].order_net;
  }
  // return +all_net_salary;
}
async function ast2() {
  all_order_truck_data = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;
  all_net_expenses = 0;

  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id]
      .expenses;
  let h = truck_order_data.length - 1;
  for (h; h >= 0; h--) {
    all_net_expenses += +truck_order_data[h].expenses_net;
  }
  // return +all_net_expenses;
}
async function ast3() {
  all_order_truck_data = await read_truck_modle_data();
  let process_id =
    all_order_truck_data[select_truck_for_order_id].process.length - 1;
  all_net_pay = 0;
  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[process_id].pay;
  let h = truck_order_data.length - 1;
  for (h; h >= 0; h--) {
    all_net_pay += +truck_order_data[h].value;
  }
  // return +all_net_pay;
}
let net;
async function list_pariod_for_selected_truck(i) {
  await ast1();
  await ast2();
  await ast3();

  net = all_net_salary + all_net_pay - all_net_expenses;
  selected_truck_info_data_net_salary.innerHTML = Number(net).toFixed(0);
  

  all_order_truck_data = await read_truck_modle_data();
  // console.log(all_order_truck_data);
  let all_net;
  let process_id = all_order_truck_data[i].process.length - 1;
  all_net_pariod = 0;
  let data = all_order_truck_data[i].process;
  let row = "";
  let row1 = "";
  Expenses_table_TableBody.innerHTML = "";

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;
  let c7 = 0;
  // console.log(h);
let num =     all_order_truck_data[i].truck_all_salary;
  selected_truck_info_data_net_salary_pr.innerHTML = Number(num).toFixed(0)


    for (let h =0; h < all_order_truck_data[i].process.length - 1; h++) {
    try {
// تأكد من أن البيانات رقمية قبل استخدام toFixed
let truck_order_data = all_order_truck_data[i].process[h].finsh_pay;

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
c7 = Number(+c5 - +c6) || 0;
c1 = Number(c1.toFixed(3));
c2 = Number(c2.toFixed(0));
c3 = Number(c3.toFixed(0));
c4 = Number(c4.toFixed(0));
c5 = Number(c5.toFixed(0));
c6 = Number(c6.toFixed(0));
c7 = Number(c7.toFixed(0));
let net = Number(truck_order_data.all_net_salary.toFixed(0))

      row += `
        <tr ondblclick="selected_pariod_truck(${h})">
          <td>${truck_order_data.qr}</td>
          <td  >${data[h].start}</td>
          <td  >${truck_order_data.date_time_pariod}</td>
          <td  >${truck_order_data.pariod_driver_name}</td>
          <td  >${truck_order_data.num_orders}</td>
          <td  >${net}</td>
          <td  >${truck_order_data.all_net_expenses}</td>
          <td  >${all_net}</td>
          <td  >${truck_order_data.net}</td>
          <td  >${truck_order_data.sign}</td>
        </tr>
      `;

    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }

        row1 = `
        <tr>
          <td  >${c1}</td>
          <td  >${c2}</td>
          <td  >${c3}</td>
          <td  >${c5}</td>
          <td  >${c6}</td>
          <td  >${c7}</td>
        </tr>
      `;
  // selected_truck_info_data_net_salary.innerHTML = net;
  pariod_table_TableBody0.innerHTML = row1;
  pariod_table_TableBody.innerHTML = row;
  select_create_truck_mod_pariod = false;
  // save_new_order.style.display = "block";
}

document.addEventListener("keydown", (event) => {
  if (event.key == "F2") {
    if (select_pariod_mod == true) {
      edit_or_save_truck_pariod_switch();
    }
  }
});

function edit_or_save_truck_pariod_switch() {
  if (save_or_edit_truck_pariod == true) {
    save_new_truck_pariod(select_truck_for_order_id);
  } else {
    edit_pariod_data(select_truck_pariod_id);
  }
}
async function _new_pariod() {
  save_new_pariod.style.display = "block";
  save_or_edit_truck_pariod = true;
  select_pariod_mod = true;
  await clear_input_pariod_feilds();

  input_pariod_driver_name.focus();
}
let save_new_pariod = document.querySelector(".save_new_pariod");
let select_truck_pariod_id;
async function selected_pariod_truck(h) {
  select_pariod_mod = false;
  save_or_edit_truck_pariod = false;

  let m = h;
  // console.log(m);

  all_order_truck_data = await read_truck_modle_data();
  // let process_id =
  //   all_order_truck_data[select_truck_for_order_id].process.length - 1;
  truck_order_data =
    all_order_truck_data[select_truck_for_order_id].process[m].finsh_pay;
  // console.log(truck_order_data);

  input_pariod_id.value = truck_order_data.qr;
  input_pariod_date_time.value = truck_order_data.date_time_pariod;
  input_pariod_driver_name.value = truck_order_data.pariod_driver_name;
  input_pariod_price.value = truck_order_data.net;
  save_new_pariod.style.display = "none";

  select_truck_pariod_id = h;
}
let save_or_edit_truck_pariod = false;
let select_pariod_mod = false;


async function _delete_pariod() {
  if (save_or_edit_truck_pariod == false) {
    all_order_truck_data = await read_truck_modle_data();

    truck_order_data = all_order_truck_data[select_truck_for_order_id].process;
    truck_order_data.splice(select_truck_pariod_id, 1);

    all_order_truck_data[select_truck_for_order_id].process = truck_order_data;
    await write_truck_modle_Data(all_order_truck_data);
    if (truck_order_data.length == 0) {
      let new_data = {
        start: input_pariod_date_time.value,
        orders: [],
        expenses: [],
        pay: [],
        finsh_pay: {},
      };
      all_order_truck_data[select_truck_for_order_id].process.push(new_data);
    }

    create_truck_msg_alert("تم حذف الفتره");
    await list_pariod_for_selected_truck(select_truck_for_order_id);
    // clear_input_pariod_feilds();
    _new_pariod();
    // await get_last_qr_pariod_truck(select_truck_for_order_id);

    select_pariod_mod = true;
    save_or_edit_truck_pariod = true;
  }
}
