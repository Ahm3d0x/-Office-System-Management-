// const path = require("path");

let list_truck_Data_TableBody_for_get_money = document.querySelector(
  ".list_truck_Data_TableBody_for_get_money"
);
let search_list_truck_qr_for_money = document.querySelector(
  ".search_list_truck_qr_for_money"
);
let search_list_truck_name_for_money = document.querySelector(
  ".search_list_truck_name_for_money"
);
let search_list_truck_driver_name_for_money = document.querySelector(
  ".search_list_truck_driver_name_for_money"
);

let truck_info_table_TableBody_get_money = document.querySelector(
  ".truck_info_table_TableBody_get_money"
);
let truck_info_table_Data_TableBody_get_money = document.querySelector(
  ".truck_info_table_Data_TableBody_get_money"
);
let regist_money_Data_TableBody = document.querySelector(
  ".regist_money_Data_TableBody"
);
let qr_regist_money_inp = document.querySelector(".qr_regist_money_inp");
let regist_money_from = document.querySelector(".regist_money_from");
let regist_money_value_inp = document.querySelector(".regist_money_value_inp");
let regist_money_date_inp = document.querySelector(".regist_money_date_inp");

let save_regist_money = document.querySelector(".save_regist_money");
let registra_new_money = document.querySelector(".registra_new_money");
let select_truck_for_money = document.querySelector(".select_truck_for_money");
let selected_get_money_form = document.querySelector(
  ".selected_get_money_form"
);
let ptn_sup1 = document.querySelector(".ptn_sup1");
let ptn_sup2 = document.querySelector(".ptn_sup2");
let la_sup_sea_3 = document.querySelector('.la_sup_sea_3')
let la_sup_sea_2 = document.querySelector('.la_sup_sea_2')
let regist_money = document.querySelector(".regist_money");
let sup_search = document.querySelector('.sup_search')
let sup_sea_1 = document.querySelector('.sup_sea_1')
let sup_sea_2 = document.querySelector('.sup_sea_2')
let sup_sea_3 = document.querySelector('.sup_sea_3')
let selected_sup_for_money_id;
let regist_truck_money_save_mod = false;
let regist_truck_money_out_save_mod = false;

let save_or_edit_truck_money = true;
let select_truck_money_id;
let select_money_truck_mod = false;
let save_or_edit_truck_money_out = false;
let select_truck_money_out_id;
let select_money_out_truck_mod = false;
let last_money_truck_qr;
let out_number_money = 0;
let out_value_money = 0;
let in_num_money = 0;
let in_value_money = 0;
let net_sup_money = 0;

async function search_list_truck_data_by_qr_for_money() {
  path_list_data = await read_path_data();

  let row = "";
  let get_it = false;
  list_truck_Data_TableBody_for_get_money.innerHTML = "";
  for (let i = 0; i < path_list_data.length; i++) {
    if (search_list_truck_qr_for_money.value != "") {
      if (search_list_truck_qr_for_money.value == path_list_data[i].qr) {
        try {
          row = `
                        <tr>
                        <td>${path_list_data[i].qr}</td>
                        <td>${path_list_data[i].office}</td>
                        <td>${path_list_data[i].sup_add}</td>
                        </tr>
                        `;
          get_it = true;
          list_truck_Data_TableBody_for_get_money.innerHTML = row;
          await select_truck_model_for_money(i);
          clear_input_search_truck_feilds_for_money();
          break;
        } catch (error) {
          console.error("Error displaying store data:", error);
        }
      }
    } else {
      search_list_trucks_data_for_money();
    }
  }

  if (get_it == false) {
    clear_input_search_truck_feilds_for_money();
    msg_alert_for_order("لا يوجد شاحنه بهذا الكود");
    search_list_trucks_data_for_money();
  }
}

function list_truck_qr_empty_for_money() {
  if (search_list_truck_qr_for_money.value == "") {
    clear_input_search_truck_feilds_for_money();
    search_list_trucks_data_for_money();
  }
}

async function clear_input_search_truck_feilds_for_money() {
  search_list_truck_name_for_money.value = "";
  search_list_truck_driver_name_for_money.value = "";
}

async function search_list_trucks_data_for_money() {
  path_list_data = await read_path_data();

  // console.log(create_truck_data);

  let row = "";
  list_truck_Data_TableBody_for_get_money.innerHTML = "";
  for (let i = 0; i < path_list_data.length; i++) {
    if (
      search_list_truck_name_for_money.value == "" &&
      search_list_truck_driver_name_for_money.value == ""
    ) {
      row += `
                 <tr ondblclick="select_truck_model_for_money(${i})">
                        <td>${path_list_data[i].qr}</td>
                        <td>${path_list_data[i].office}</td>
                        <td>${path_list_data[i].sup_add}</td>
                </tr>
                  `;
    } else if (
      search_list_truck_name_for_money.value != "" &&
      search_list_truck_driver_name_for_money.value == ""
    ) {
      if (
        path_list_data[i].office.includes(
          search_list_truck_name_for_money.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_money(${i})">
                        <td>${path_list_data[i].qr}</td>
                        <td>${path_list_data[i].office}</td>
                        <td>${path_list_data[i].sup_add}</td>
                  </tr>                `;
      } else {
        continue;
      }
    } else if (
      search_list_truck_name_for_money.value == "" &&
      search_list_truck_driver_name_for_money.value != ""
    ) {
      if (
        path_list_data[i].sup_add.includes(
          search_list_truck_driver_name_for_money.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_money(${i})">
                        <td>${path_list_data[i].qr}</td>
                        <td>${path_list_data[i].office}</td>
                        <td>${path_list_data[i].sup_add}</td>
                  </tr>                `;
      } else {
        continue;
      }
    } else if (
      search_list_truck_name_for_money.value != "" &&
      search_list_truck_driver_name_for_money.value != ""
    ) {
      if (
        path_list_data[i].office.includes(
          search_list_truck_name_for_money.value
        ) &&
        path_list_data[i].sup_add.includes(
          search_list_truck_driver_name_for_money.value
        )
      ) {
        row += `
                 <tr ondblclick="select_truck_model_for_money(${i})">
                        <td>${path_list_data[i].qr}</td>
                        <td>${path_list_data[i].office}</td>
                        <td>${path_list_data[i].sup_add}</td>
                  </tr>                `;
      } else {
        continue;
      }
    }
  }
  list_truck_Data_TableBody_for_get_money.innerHTML = row;
}

async function select_truck_model_for_money(r) {
  select_truck_for_money.style.display = "none";
  selected_get_money_form.style.display = "block";
  regist_truck_money_save_mod = true;
  selected_sup_for_money_id = r;
  await money_sup_in();
  await fill_data_truck_model_for_money(r);
  await _new_regist_money();

  // regist_money_date_inp.focus();
}

function back_select_truck_model_for_money() {
  select_truck_for_money.style.display = "block";
  selected_get_money_form.style.display = "none";
  search_list_truck_qr_for_money.focus();
  regist_truck_money_save_mod = false;
  regist_truck_money_out_save_mod = false;
}

async function fill_data_truck_model_for_money(r) {
  path_list_data = await read_path_data();

  let row1 = `
                 <tr>
                <td>${path_list_data[r].qr}</td>
                <td>${path_list_data[r].office}</td>
                <td>${path_list_data[r].sup_add}</td>
                  </tr>                `;
  truck_info_table_TableBody_get_money.innerHTML = row1;
  await updated_table_data(r);
  // await list_order_for_selected_truck_money(r);
}
async function updated_table_data(r) {
  try {
    if (r >= 0) {
      path_list_data = await read_path_data();
      let path_data_out = path_list_data[r].out;
      let path_data_in = path_list_data[r].in;


      out_value_money = 0;
      in_value_money = 0;
      net_sup_money = 0;
      in_num_money = path_data_in.length;

      for (let i = 0; i < path_data_in.length; i++) {
        in_value_money += +path_data_in[i].money_value;
      }
      out_number_money = path_data_out.length;

      for (let i = 0; i < path_data_out.length; i++) {
        out_value_money += +path_data_out[i].money_value;
      }

// Ensure they are numbers
in_value_money = Number(in_value_money);
out_value_money = Number(out_value_money);

// Format to one decimal place
in_value_money = in_value_money.toFixed(0);
out_value_money = out_value_money.toFixed(0);
net_sup_money = (in_value_money - out_value_money).toFixed(0);
// Convert back to number for calculations
in_value_money = Number(in_value_money);
out_value_money = Number(out_value_money);

// Calculate net money



      let row = `
            <tr>
                <td>${out_number_money}</td>
                <td>${out_value_money}</td>
                <td>${in_num_money}</td>
                <td>${in_value_money}</td>
                <td>${net_sup_money}</td>

            </tr>
        `;
      truck_info_table_Data_TableBody_get_money.innerHTML = row;
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
}
async function clear_input_rigist_money_feilds(r) {
  await get_last_qr_money_truck(r);
  let office_info = await read_office_info();

  // regist_money_type_inp.value = "سلفه";
  // regist_money_value_inp.removeAttribute("readonly");
  regist_money_value_inp.value = "";
  regist_money_from.value = office_info[0].office_name;
  regist_money_date_inp.value = today;
}

async function get_last_qr_money_truck(r) {
  if (save_or_edit_truck_money == true) {
    path_list_data = await read_path_data();
    path_data = path_list_data[selected_sup_for_money_id].in;

    if (path_data.length == 0) {
      last_money_truck_qr = 0;
    } else {
      last_money_truck_qr = path_data[path_data.length - 1].qr;
    }

    qr_regist_money_inp.value = last_money_truck_qr + 1;
  }
}

document.addEventListener("keydown", (event) => {
  if (regist_truck_money_save_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_money_switch();
    }
  }
});

function edit_or_save_truck_money_switch() {
  if (save_or_edit_truck_money == true) {
    save_truck_money(selected_sup_for_money_id);
  } else {
    edit_truck_money_data(selected_sup_for_money_id, select_truck_money_id);
  }
}

async function save_truck_money(i) {
  path_list_data = await read_path_data();
  await get_last_qr_money_truck(i);
  // await updated_table_data(i);
  let path_data_out = path_list_data[i].out;
  let path_data_in = path_list_data[i].in;

  sup_value = +sup_value_in - +sup_value_out;
  money_data = "";
  // let salary_after = +all_in_money - +regist_money_value_inp.value;
  if (regist_money_date_inp.value != "" && regist_money_value_inp.value != "") {
    await get_last_qr_money_truck(i);
    try {
      money_data = {
        qr: +last_money_truck_qr + 1,
        date_time: regist_money_date_inp.value,
        input_order_name: path_list_data[i].office,
        driver_name: "-------",
        order_path: regist_money_from.value,
        money_value: regist_money_value_inp.value,
        type: "in",
        sign: user_sign,
      };

      // async () => {
      path_data_in.push(money_data);
      path_list_data[i].in = path_data_in;
      await write_path_Data(path_list_data);

      // console.log(path_list_data);
      await clear_input_rigist_money_feilds(i);
      await updated_table_data(i);
      await money_sup_in(i);
      // };

      msg_alert_for_order(" تم تسجيل العمليه الاستلام");
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert_for_order("حدث خطأ عند حفظ العمليه الاستلام");
    }
  } else {
    msg_alert_for_order("اكمل البيانات الاستلام");
  }
}

async function edit_truck_money_data(a, b) {
  path_list_data = await read_path_data();
  path_data = path_list_data[a].in;

  await updated_table_data(a);

  sup_value = net_sup_money - +path_data[b].money_value;

  if (regist_money_date_inp.value != "" && regist_money_value_inp.value != "") {
    if (save_or_edit_truck_money == false) {
      try {
        path_data[b].date_time = regist_money_date_inp.value;
        path_data[b].order_path = regist_money_from.value;
        // path_data[b].salary_befor = sup_value;
        path_data[b].money_value = regist_money_value_inp.value;
        // (path_data[b].salary_after =
        //   +sup_value + +regist_money_value_inp.value),
          (path_data[b].sign = user_sign);

        path_list_data[a].in = path_data;
        await write_path_Data(path_list_data);
        // await write_path_Data(path_list_data);

        await updated_table_data(a);
        await _new_regist_money();
        await money_sup_in();
        save_or_edit_truck_money = true;
        select_money_truck_mod = false;
        await updated_table_data(a);

        create_truck_msg_alert(" تم تعديل العمليه الاستلام");
      } catch (error) {
        console.error("Error editing client data:", error);
        create_truck_msg_alert("حدث خطأ عند تعديل العمليه الاستلام");
      }
    }
  }

  else {
    create_truck_msg_alert(" اكمل بيانات العمليه الاستلام");
  }
}

async function selected_money_truck(h) {
  path_list_data = await read_path_data();
  // console.log(selected_sup_for_money_id);
  path_data = path_list_data[selected_sup_for_money_id].in;
  select_truck_money_id = h;
  // regist_money_type_inp_onchange();

  qr_regist_money_inp.value = path_data[h].qr;
  regist_money_date_inp.value = path_data[h].date_time;
  regist_money_from.value = path_data[h].order_path;
  regist_money_value_inp.value = path_data[h].money_value;
  select_money_truck_mod = true;
  save_or_edit_truck_money = false;
  save_regist_money.innerHTML = "تعديل";
}
async function _new_regist_money() {
  save_or_edit_truck_money = true;
  select_money_truck_mod = false;
  await clear_input_rigist_money_feilds(selected_sup_for_money_id);
  save_regist_money.innerHTML = "حفظ";
  regist_money_value_inp.focus();
}

async function _delete_regist_money() {
  if (select_money_truck_mod == true) {
    path_list_data = await read_path_data();
    path_data = path_list_data[selected_sup_for_money_id].in;
    console.log(path_data);
    // if (path_data[select_truck_money_id].type == "in") {
    select_money_truck_mod = false;
    save_or_edit_truck_money = true;

    path_data.splice(select_truck_money_id, 1);
    console.log(path_data);
    path_list_data[selected_sup_for_money_id].process = path_data;
    await write_path_Data(path_list_data);

    clear_input_rigist_money_feilds(selected_sup_for_money_id);
    money_sup_in();
    await updated_table_data(selected_sup_for_money_id);
    save_regist_money.innerHTML = "حفظ";
    create_truck_msg_alert("تم حذف لعمليه الاستلام");
    // }
    // else if (path_data[select_truck_money_id].type == "out") {
    //   create_truck_msg_alert("يتم العهده حذف  عن طريق حزف النقله الخاصه بها  ");
    // }
  }
}


let type_name;

async function money_sup_in() {
  regist_money_tools.style.display = 'block'
regist_money_out_tools.style.display = 'none'
regist_money.style.display = 'block'
regist_money_out.style.display = 'none'
regist_truck_money_save_mod = true;
regist_truck_money_out_save_mod = false;
select_money_truck_mod =false;
 save_or_edit_truck_money = true;
 let date1 = new Date(sup_sea_1.value);
 in_value_money = 0;
 in_num_money  = 0;
// regist_money.style.top ='150px'
// sup_search.style.display = 'none'
  type_name = "استلام";
  path_list_data = await read_path_data();
  path_data = path_list_data[selected_sup_for_money_id].in;
  ptn_sup1.style.backgroundColor = "green";
  sup_sea_2.style.display = 'none'
  sup_sea_3.style.display = 'none'
  la_sup_sea_3.style.display = 'none'
  la_sup_sea_2.style.display = 'none'
  ptn_sup2.style.backgroundColor = "var(--color-2)";
  let row = "";
  regist_money_Data_TableBody.innerHTML = "";

  for (let h =0 ; h < path_data.length; h++) {
 let date2 = new Date(path_data[h].date_time);
    if (sup_sea_1.value === '' || date1 <= date2) {
      in_value_money += +path_data[h].money_value;
      in_num_money ++;
    row += `
        <tr ondblclick="selected_money_truck(${h})">
          <td>${path_data[h].qr}</td>
          <td  >${path_data[h].date_time}</td>
          <td  >${path_data[h].order_path}</td>
          <td  >${path_data[h].input_order_name}</td>
          <td  >${path_data[h].money_value}</td>
            <td>${path_data[h].sign}</td>
        </tr>
      `;
    }
  }
  regist_money_Data_TableBody.innerHTML = row;
  select_money_truck_mod = false;
  save_regist_money.innerHTML = "حفظ";
}

let out14 = document.querySelector('.out14')
let out1 = document.querySelector('.out1')
let out2 = document.querySelector('.out2')
let out3 = document.querySelector('.out3')
let out5 = document.querySelector('.out5')
let out6 = document.querySelector('.out6')
let out8 = document.querySelector('.out8')
let regist_money_tools = document.querySelector('.regist_money_tools')
let regist_money_out_tools = document.querySelector('.regist_money_out_tools')
let save_regist_money_out = document.querySelector('.save_regist_money_out');

let regist_money_out = document.querySelector('.regist_money_out')

async function all_truck() {
  try {


    let all_order_truck_data = await read_truck_modle_data();


    if (!Array.isArray(path_list_data)) {
      throw new Error("path_list_data is not an array");
    }

    let options = "";
    all_order_truck_data.forEach((item) => {
      options += `
        <option value="${item.driver_name_inp}">${item.driver_name_inp}</option>
      `;
    });

    const truck_list = `
      <label class="outl4" for="out4">اسم المالك</label>
      <select onchange="selcte_out(this)" id="out4" class="out4">
        <option value="none">----------</option>
        ${options}
      </select>
    `;

    out14.innerHTML = truck_list;
  } catch (error) {
    console.error("Error fetching or populating path_list list:", error);
  }
}

async function selcte_out(selectElement) {
  try {
      let all_order_truck_data = await read_truck_modle_data();
    let selectedIndex = selectElement.selectedIndex - 1; // Subtract 1 for zero-based indexing

    if (selectedIndex >= 0 && selectedIndex < all_order_truck_data.length) {
      selected_truck_com_id = selectedIndex;
      out5.value = all_order_truck_data[selectedIndex].truck_number_inp
  out6.focus();


    } else {
      msg_alert("يجب تحديد شاحنه");

    }
    console.log(selected_truck_com_id);
  } catch (error) {
    console.error("Error filling input_order_com_price:", error);
  }
}


async function _sup_sea_1() {
  regist_truck_money_out_save_mod = true;
  regist_truck_money_save_mod = false;
  select_money_out_truck_mod = false
  save_or_edit_truck_money_out = true;
  regist_money.style.display = 'none'
regist_money_out.style.display = 'block'
    regist_money_tools.style.display = 'none'
regist_money_out_tools.style.display = 'block'
  out2.value = today
  await all_truck()
  // regist_money.style.top = '200px';
  // sup_search.style.display = 'flex';
  type_name = "عهده";
  let out4 = document.querySelector(".out4");
  ptn_sup2.style.backgroundColor = "green";
  ptn_sup1.style.backgroundColor = "var(--color-2)"
    sup_sea_2.style.display = 'block'
  sup_sea_3.style.display = 'block'
  la_sup_sea_3.style.display = 'block'
  la_sup_sea_2.style.display = 'block'

  await out_table()
  await new_out ()

}
let regist_money_out_Data_TableBody = document.querySelector('.regist_money_out_Data_TableBody')


async function out_table() {
  // الحصول على تاريخ من حقل الإدخال
  let date1 = new Date(sup_sea_1.value);
  // قراءة بيانات المسار
  const path_list_data = await read_path_data();
  const path_data = path_list_data[selected_sup_for_money_id].out;
  const path_data_in = path_list_data[selected_sup_for_money_id].in;


  let row = "";
  let row1 = "";
  // دالة لفحص تطابق القيمة مع النص المطلوب
  const includesValue = (value, searchString) => {
    return searchString === '' || (value && value.includes(searchString));
  };
  out_value_money = 0;
  net_sup_money = 0;
  out_number_money = 0;
  // التكرار عبر بيانات المسار لإضافة الصفوف إلى الجدول
  for (let h = 0; h < path_data.length; h++) {
    let date2 = new Date(path_data[h].date_time);

    if (sup_sea_1.value === '' || date1 <= date2) {
      if (includesValue(path_data[h].truck_number, sup_sea_2.value) &&
          includesValue(path_data[h].owner, sup_sea_3.value)) {
    out_value_money += +path_data[h].money_value;
    ++out_number_money
        row += `
          <tr ondblclick="selected_money_out_truck(${h})">
            <td>${path_data[h].qr}</td>
            <td>${path_data[h].date_time}</td>
            <td>${path_data[h].owner}</td>
            <td>${path_data[h].truck_number}</td>
            <td>${path_data[h].card_num}</td>
            <td>${path_data[h].to}</td>
            <td>${path_data[h].money_value}</td>
            <td>${path_data[h].sign}</td>
          </tr>
        `;
      }
    }
  }
// Ensure they are numbers
in_value_money = Number(in_value_money);
out_value_money = Number(out_value_money);

// Format to one decimal place
in_value_money = in_value_money.toFixed(0);
out_value_money = out_value_money.toFixed(0);

// Convert back to number for calculations
in_value_money = Number(in_value_money);
out_value_money = Number(out_value_money);

// Calculate net money
net_sup_money = in_value_money - out_value_money;


   row1 = `
        <tr>
            <td>${out_number_money}</td>
            <td>${out_value_money}</td>
            <td>${in_num_money}</td>
            <td>${in_value_money}</td>
            <td>${net_sup_money.toFixed(0)}</td>

        </tr>
    `;
  truck_info_table_Data_TableBody_get_money.innerHTML = row1;

  // إضافة الصفوف إلى الجدول في واجهة المستخدم
  regist_money_out_Data_TableBody.innerHTML = row;
  // await updated_table_data(selected_sup_for_money_id);

}


async function get_last_qr_money_out_truck() {
  if (save_or_edit_truck_money == true) {
    path_list_data = await read_path_data();
    path_data = path_list_data[selected_sup_for_money_id].out;

    if (path_data.length == 0) {
      last_money_truck_qr = 0;
    } else {
      last_money_truck_qr = path_data[path_data.length - 1].qr;
    }

    out1.value = last_money_truck_qr + 1;
  }
}



async function save_out(i) {
  await get_last_qr_money_out_truck()

  let out4 = document.querySelector(".out4");
  let all_order_truck_data = await read_truck_modle_data();

  let path_list_data = await read_path_data();
  let path_data_out = path_list_data[selected_sup_for_money_id].out;
  let path_data_in = path_list_data[selected_sup_for_money_id].in;
  sup_value = 0;
  for (let i = 0; i < path_data_out.length; i++) {
    sup_value_out += +path_data_out[i].money_value;
  }
  for (let i = 0; i < path_data_in.length; i++) {
    sup_value_in += +path_data_in[i].money_value;
  }

  sup_value = +sup_value_in - +sup_value_out;
  out_data = "";

  if (
    out3.value != "" &&
    out4.value != "none" &&
    out2.value != "" &&
    out5.value != "" &&
    out6.value != ""&&
    out8.value != ""

  ) {
    try{
      out_data = {
        qr: +last_money_truck_qr + 1,
        date_time: out2.value,
        card_num : out3.value,
        owner:out4.value,
        truck_number: out5.value,
        // from: path_list_data[selected_sup_for_money_id].office,
        to: out6.value,
        money_value: out8.value,
        sign: user_sign,
         }
      ;

      path_data_out.push(out_data);
      await write_path_Data(path_list_data);
      msg_alert("تم تسجيل العهده");
  await out_table()
await new_out ()
      
      // await get_net_salary_truck_order(i);
    } catch (error) {
      console.error("Error adding item to the store:", error);
      msg_alert("حدث خطأ عند حفظ العهده ");
    }
  } else {
    msg_alert("اكمل البيانات العهده");
  }
}
document.addEventListener("keydown", (event) => {
  if ( regist_truck_money_out_save_mod == true) {
    if (event.key == "F2") {
      edit_or_save_truck_money_out_switch();
    }
  }
});
async function edit_or_save_truck_money_out_switch() {
  if (save_or_edit_truck_money_out == true) {
    await save_out(selected_sup_for_money_id);
  }else {
    await edit_out(selected_sup_for_money_id, select_truck_money_out_id);
  }
}


async function out_clear_input (){
  await get_last_qr_money_out_truck()
  out3.value = "" 
  out4.value = "none" 
  out2.value = today 
  out5.value = "" 
  out6.value = ""
  out8.value = ""
}
async function new_out (){
  await out_clear_input()
  out3.focus();
  select_money_out_truck_mod = false;
  save_or_edit_truck_money_out = true;
  save_regist_money_out .innerHTML = "حفظ";


}
async function selected_money_out_truck(h) {
  path_list_data = await read_path_data();
  select_truck_money_out_id = h
  path_data = path_list_data[selected_sup_for_money_id].out;

  out1.value = path_data[h].qr;
  out2.value = path_data[h].date_time;
  out3.value = path_data[h].card_num
  out4.value = path_data[h].owner
  out5.value = path_data[h].truck_number
  out6.value = path_data[h].to
  out8.value = path_data[h].money_value
  select_money_out_truck_mod = true;
  save_or_edit_truck_money_out = false;
  save_regist_money_out.innerHTML = "تعديل";
}



async function edit_out(a, b) {
  path_list_data = await read_path_data();
  path_data = path_list_data[a].out;

  await updated_table_data(a);

  sup_value = net_sup_money + +path_data[b].money_value;

  if (out2.value != "" && out4.value != "none" && out5.value != "" && out6.value != "" &&out8.value != "") {
    if (save_or_edit_truck_money_out == false) {
      try {
        path_data[b].date_time = out2.value;
        path_data[b].card_num = out3.value;
        path_data[b].owner = out4.value;
        path_data[b].truck_number = out5.value;
        path_data[b].to = out6.value;
        path_data[b].money_value = +out8.value;

          (path_data[b].sign = user_sign);

        path_list_data[a].out = path_data;
        await write_path_Data(path_list_data);

        await updated_table_data(a);
        await out_table()
        await new_out ()
        save_or_edit_truck_money_out = true;
        select_money_out_truck_mod = false;
        await updated_table_data(a);

        msg_alert(" تم تعديل  العهده");
      } catch (error) {
        console.error("Error editing client data:", error);
        msg_alert("حدث خطأ عند تعديل العهده");
      }
    }
  }

  else {
    msg_alert(" اكمل بيانات  العهده");
  }
}



async function _delete_regist_money_out() {
  if (select_money_out_truck_mod == true) {
    path_list_data = await read_path_data();
    path_data = path_list_data[selected_sup_for_money_id].out;
      select_money_out_truck_mod = false;
      save_or_edit_truck_money_out = true;
    path_data.splice(select_truck_money_out_id, 1);
    path_list_data[selected_sup_for_money_id].process = path_data;
    await write_path_Data(path_list_data);
    await updated_table_data(selected_sup_for_money_id);
    await out_table()
    await new_out ()
    msg_alert("تم حذف  العهده");
  }
}

