// let a2 = document.querySelector(".a2");
// let a4 = document.querySelector(".a4");
// let a8 = document.querySelector(".a8");
let a10 = document.querySelector(".a10");
let invoice_date = document.querySelector(".invoice_date");
let invoice_date1 = document.querySelector(".invoice_date1");
let invoice_id = document.querySelector(".invoice_id");
let pr_orders_table_TableBody = document.querySelector(
  ".pr_orders_table_TableBody"
);
let print_pariod_table_TableBody = document.querySelector('.print_pariod_table_TableBody')
let print_pariod_table_TableBody0 = document.querySelector('.print_pariod_table_TableBody0')
let print_pariod_table_TableBody00 = document.querySelector('.print_pariod_table_TableBody00')
let print_invoice = document.querySelector('.print_invoice')
let print_report = document.querySelector('.print_report')
// let pr_Expenses_table_TableBody = document.querySelector(
//   ".pr_Expenses_table_TableBody"
// );
// let pr_pay_table_TableBody = document.querySelector(".pr_pay_table_TableBody");
let pr_sub_table_TableBody = document.querySelector(".pr_sub_table_TableBody");
let current_date = document.querySelector(".current_date");
let current_date1 = document.querySelector(".current_date1");

let data_0 = [];
async function readJSONFile(file) {
  await fetch(file)
    .then((response) => response.json())
    .then((data) => {
      // return data;
      data_0 = data;
    })
    .catch((error) => console.error("خطأ في قراءة الملف:", error));
}
const today = getCurrentDateTime()
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
current_date.innerHTML = today;
current_date1.innerHTML = today;

async function info_print() {
  //  await readJSONFile("./print.json");
  await readJSONFile("../../print.json");
  let office_info = data_0[1][1];
  // console.log(data_0) 
  // console.log(office_info[0])
  let print_type =  data_0[1][0]
  // console.log(print_type)
  let data = data_0[0];

if (print_type == 'invoice'){
  print_report.style.display = "none";
  let data_order = data_0[0].orders;
  // a2.innerHTML = office_info[0].office_name;
  // a4.innerHTML = office_info[0].office_num;
  // a8.innerHTML = office_info[0].office_add;
  // console.log(data);
  if (data_0[2] == "on") {
    a10.innerHTML = data.finsh_pay.pariod_driver_name;
    invoice_date.innerHTML = `من  : ${data.start}`;
    invoice_date1.innerHTML = `الى : ${data.finsh_pay.date_time_pariod}`;
    invoice_id.innerHTML = `on : ${data.finsh_pay.qr}`;
  } else if (data_0[2] == "off") {
    a10.innerHTML = data_0[4];
    invoice_date.innerHTML = `من  : ${data.start}`;
    // invoice_date1.innerHTML = `الى : ${data.finsh_pay.date_time_pariod}`;
    invoice_id.innerHTML = `on : ${data_0[5]}`;
  }
  let row = "";
  let row3 = "";

  let sub1 = 0;
  let sub2 = 0;
  let sub3 = 0;
  let sub4 = 0;
  let sub = 0;
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
          <td  >${(+data_order[h].order_binzen).toFixed(0)}</td>
          <td  >${
            (+data_order[h].order_number * +data_order[h].order_binzen).toFixed(0)
          }</td>
          <td  >${(+data_order[h].order_com_price).toFixed(0)}</td>
          <td  >${(+data_order[h].order_cost).toFixed(0)}</td>
          <td  >${(+data_order[h].order_net).toFixed(0)}</td>
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

  let data_expenses = data_0[0].expenses;

  let row1 = "";
  let sub5 = 0;
  let sub7 = 0;
  let sub8 = 0;
  let sub9 = 0;
  let sub10 = 0;
  // pr_Expenses_table_TableBody.innerHTML = "";
  console.log(data_expenses.length);

  for (let h = 0; h < data_expenses.length; h++) {
    sub5 += +data_expenses[h].expenses_net;
    sub7 += +data_expenses[h].expenses_com_price;
    sub8 += +data_expenses[h].expenses_price;
    sub9 += +data_expenses[h].expenses_number;
    sub10 += +data_expenses[h].expenses_binzen;

    // row1 += `
    //     <tr>
    //       <td>${data_expenses[h].qr}</td>
    //       <td>${data_expenses[h].date__time_expenses}</td>
    //       <td>${data_expenses[h].input_expenses_driver_name}</td>
    //       <td>${data_expenses[h].expenses_com_price}</td>
    //       <td>${data_expenses[h].expenses_price}</td>
    //       <td>${data_expenses[h].expenses_number}</td>
    //       <td>${data_expenses[h].expenses_binzen}</td>
    //       <td>${data_expenses[h].expenses_net}</td>
    //     </tr>
    //   `;
  }
  // row3 +=`

  // ` 
  row3 += `
        <tr>
          <td>${(+sub7).toFixed(0)}</td>
          <td>${(+sub8).toFixed(0)}</td>
          <td>${(+sub9).toFixed(0)}</td>
          <td>${(+sub10).toFixed(0)}</td>
        </tr>
      `;
                // <td>${sub5}</td>
  // pr_Expenses_table_TableBody.innerHTML = row1;

  let data_pay = data_0[0].pay;
  let sub6 = 0;
  // let row2 = "";
  for (let h = 0; h < data_pay.length; h++) {
    sub6 += +data_pay[h].value;
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
  }

  row3 += `
            <tr>
              <th>عدد النقلات</th> 
              <th>الوزن</th>
              <th>صافي مصاريف</th>
              <th>صافى النقلات</th>
            </tr>
`;
  row3 += `
        <tr>
          <td>${data_order.length}</td>
          <td>${sub1.toFixed(3)}</td>
          <td>${(+sub5).toFixed(0)}</td>
          <td>${(+sub4).toFixed(0)}</td>
        </tr>
      `;
  row3 += `
              <tr>
              <th>صافى الفتره</th>
              <th>رصيد سابق</th>
              <th> المبلغ المدفوع</th>
              <th>الرصيد الباقي</th>
            </tr>`;
  console.log(data);
  let main =+sub4 - +sub5 + +sub6
  let after_mo = +data.finsh_pay.af_money

 if (data.finsh_pay.net == undefined ) {
  data.finsh_pay.net =0
  after_mo = +main + +data_0[3]
 }


  row3 += `
        <tr>
          <td> ${main.toFixed(0)}</td> 
          <td>${data_0[3]}</td>
          <td>${data.finsh_pay.net}</td>
          <td>${ after_mo.toFixed(0)}</td>
        </tr>
      `;
  pr_sub_table_TableBody.innerHTML = row3;
}else if(print_type == 'report'){
  print_invoice.style.display = "none";
let row7 = '';
let row8 = '';
let row9 = '';

  let data = data_0[0][0];
  let data1 = data_0[0];
  a10.innerHTML = data_0[4];
    invoice_date.innerHTML = ``;
    invoice_date1.innerHTML = ``;
    invoice_id.innerHTML = ``;


    row7 = `
    <tr>
      <td>${data1[1][0]}</td>
      <td>${data1[1][1]}</td>
      <td>${data1[1][2]}</td>
      <td>${data1[1][4]}</td>
      <td>${data1[1][5]}</td>
    </tr>
  `;


  print_pariod_table_TableBody0.innerHTML = row7
  for (let h =0; h < data.length - 1; h++) {
    let all_net_salary = Number(data[h].finsh_pay.all_net_salary) || 0;
    let all_net_pay = Number(data[h].finsh_pay.all_net_pay) || 0;
    let all_net_expenses = Number(data[h].finsh_pay.all_net_expenses) || 0;
    let all_net = (all_net_salary + all_net_pay - all_net_expenses).toFixed(0);
    let net = Number(all_net_salary.toFixed(0))

    try {

      row8 += `
        <tr ondblclick="selected_pariod_truck(${h})">
          <td>${data[h].finsh_pay.qr}</td>
          <td  >${data[h].start}</td>
          <td  >${data[h].finsh_pay.date_time_pariod}</td>
          <td  >${data[h].finsh_pay.pariod_driver_name}</td>
          <td  >${data[h].finsh_pay.num_orders}</td>
          <td  >${net}</td>
          <td  >${data[h].finsh_pay.all_net_expenses}</td>
          <td  >${all_net}</td>
          <td  >${data[h].finsh_pay.net}</td>
          <td  >${data[h].finsh_pay.sign}</td>
        </tr>
      `;

    } catch (error) {
      console.error("Error displaying store data:", error);
    }
  }
console.log(data1)
  row9 = `
  <tr>
    <td>${data_0[3]}</td>
    <td>${data1[2]}</td>
    <td>${+data_0[3] + +data1[2]}</td>

  </tr>
`;
  print_pariod_table_TableBody.innerHTML = row8
  print_pariod_table_TableBody00.innerHTML = row9
}
  window.print();
}
