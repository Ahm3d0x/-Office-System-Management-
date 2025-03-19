let Reports_page = document.querySelector(".Reports_page");
let Reports_text = document.querySelector(".Reports_text");
let Reports_truck_table_TableBody1 = document.querySelector(".Reports_truck_table_TableBody1");
let Reports_truck_table_TableBody2 = document.querySelector(".Reports_truck_table_TableBody2");
let Reports_truck_table_TableBody22 = document.querySelector(".Reports_truck_table_TableBody22");
let Reports_truck_table_TableBody3 = document.querySelector(".Reports_truck_table_TableBody3");
let sea_1 = document.querySelector(".sea_1");
let sea_2 = document.querySelector(".sea_2");
let infinite = 999999999999999999999999999999999999999999999999999;
let office_money;
let most_order;
let most_oeder_id = 0;
let least_order;
let least_order_id = 0;
let most_expenses;
let most_expenses_id = 0;
let least_expenses;
let least_expenses_id = 0;
let most_net;
let most_net_id = 0;
let least_net;
let least_net_id = 0;
let truck_num = 1;
let sub_num = 1;
  let data;
let most_sup_out = 0;
let most_sup_out_id = 0;
let least_sup_out = infinite;
let least_sup_out_id = 0;
let most_sup_in = 0;
let most_sup_in_id = 0;
let least_sup_in_id = 0;
let least_sup_in = infinite;
let g1 = 0;
let g3 = 0;
let g2 = 0;
let g4 = 0;
let g5 = 0;
let g6 = 0;
let b;
let c;
let data_in;
let data_out;
let office_selected_id;
let all_mon_off_1;
let all_mon_off_2;
let all_mon_off_3;
  let b4 = 0;
async function calc_b5(i) {

  b4 = 0

  // data = await all_order_truck_data[i].process;
    // console.log(data)
      for (let h = 0; h < data.length - 1; h++) {
        let aa = data[h].finsh_pay.date_time_pariod;
        let a = new Date(aa);
        if (a <= c && a >= b) {

          let all_net = + data[h].finsh_pay.all_net
          b4 += Number(all_net.toFixed(0));
        }
    
      }
      // console.log(b4)
}
async function fill_report_office_tables_data() {
  all_order_truck_data = await read_truck_modle_data();
  truck_path_data = await read_path_data();

  if (!all_order_truck_data || all_order_truck_data.length === 0) {
    console.error("Error: No order truck data found.");
    return;
  }

  if (!truck_path_data || truck_path_data.length === 0) {
    console.error("Error: No truck path data found.");
    return;
  }

  all_mon_off_1 = 0;
  all_mon_off_2 = 0;
  all_mon_off_3 = 0;
  all_net_pariod = 0;


  most_oeder_id = 0;
  least_order_id = 0;
  most_expenses_id = 0;
  least_expenses_id = 0;
  most_net_id = 0;
  least_net_id = 0;
  let order_num = 0;
  office_money = 0;
  most_order = 0;
  least_order = infinite;
  most_expenses = 0;
  least_expenses = infinite;
  most_net = 0;
  least_net = infinite;
  let a1 = 0;
  let a2 = 0;
  let a3 = 0;

  b = new Date(sea_1.value);
  c = new Date(sea_2.value);

  for (let i = 0; i < all_order_truck_data.length; i++) {
    data = all_order_truck_data[i].process;

    if (!data || data.length === 0) {
      console.warn(`No process data for truck index ${i}`);
      continue;
    }

    a1 = 0;
    a2 = 0;
    a3 = 0;

    for (let j = 0; j < data.length; j++) {
      if (!data[j].orders || !Array.isArray(data[j].orders)) {
        console.warn(`No orders array for process index ${j} in truck index ${i}`);
        continue;
      }

      if (!data[j].expenses || !Array.isArray(data[j].expenses)) {
        console.warn(`No expenses array for process index ${j} in truck index ${i}`);
        continue;
      }

      if (!data[j].pay || !Array.isArray(data[j].pay)) {
        console.warn(`No pay array for process index ${j} in truck index ${i}`);
        continue;
      }

      // console.log("Orders length:", data[j].orders.length);
      // console.log("Expenses length:", data[j].expenses.length);
      // console.log("Pay length:", data[j].pay.length);

      for (let kr = 0; kr < data[j].orders.length; kr++) {
        let aa = data[j].orders[kr].date__time_order;
        let a = new Date(aa);
        if (a <= c && a >= b) {
          order_num++;
          office_money += +data[j].orders[kr].order_cost;
        }
      }
      office_money = parseFloat(office_money.toFixed(0));

      for (q = 0; q < data[j].orders.length; q++) {
        let aa = data[j].orders[q].date__time_order;
        let a = new Date(aa);
        if (a <= c && a >= b) {
          a1++;
        }
      }

      if (a1 > most_order) {
        most_order = a1;
        most_oeder_id = i;
      }
      if (a1 <= least_order) {
        least_order = a1;
        least_order_id = i;
      }

      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
            await  calc_b5(j)
      let pro_id = all_order_truck_data[i].process.length -1
      if (data[pro_id].orders.length ==0 &&
        data[pro_id].expenses.length == 0 &&
         data[pro_id].pay.length == 0) {
        a3 = b4;
      } else {
      


        for (let e = 0; e < data[pro_id].orders.length; e++) {
          let aa = data[pro_id].orders[e].date__time_order;
          let a = new Date(aa);

          if (a <= c && a >= b) {
            b1 += +data[pro_id].orders[e].order_net;
          }
        }
        b1 = parseFloat(b1.toFixed(0));

        for (let f = 0; f < data[pro_id].expenses.length; f++) {
          let aa = data[pro_id].expenses[f].date__time_expenses;
          let a = new Date(aa);
          if (a <= c && a >= b) {
            b2 += +data[pro_id].expenses[f].expenses_net;
          }
        }
        b2 = parseFloat(b2.toFixed(0));

        for (let g = 0; g < data[pro_id].pay.length; g++) {
          let aa = data[pro_id].pay[g].date_time_pay;
          let a = new Date(aa);

          if (a <= c && a >= b) {
            b3 += +data[pro_id].pay[g].value;
          }
        } 
        b3 = parseFloat(b3.toFixed(0));

// console.log('------------------------------------')
//       console.log(b4);
//       console.log(b1 + b3 - b2);

// console.log('------------------------------------')

          a3 = b1 + b3 - b2 + b4 ;
          a3 = parseFloat(a3.toFixed(0));
    }

      if (a3 > most_net) {
        most_net = a3;
        most_net_id = i;
      }
      if (a3 <= least_net) {
        least_net = a3;
        least_net_id = i;
      }


      for (let n = 0; n < data[j].expenses.length; n++) {
        let aa = data[j].expenses[n].date__time_expenses;
        let a = new Date(aa);
        if (a <= c && a >= b) {
          a2 += +data[j].expenses[n].expenses_net;
          a2 = parseFloat(a2.toFixed(0));
        }
      }

      if (a2 > most_expenses) {
        most_expenses = a2;
        most_expenses_id = i;
      }
      if (a2 <= least_expenses) {
        least_expenses = a2;
        least_expenses_id = i;
      }
    }
  }

  most_sup_out = 0;
  most_sup_out_id = 0;
  least_sup_out = Infinity;
  least_sup_out_id = 0;
  most_sup_in = 0;
  most_sup_in_id = 0;
  least_sup_in = Infinity;
  least_sup_in_id = 0;
  g3 = 0;
  g4 = 0;
  g5 = 0;
  g6 = 0;
  let h1 = 0;
  let h2 = 0;

  for (let i = 0; i < truck_path_data.length; i++) {
    g1 = 0;
    g2 = 0;
    h1 = 0;
    h2 = 0;
    data_in = truck_path_data[i].in;
    data_out = truck_path_data[i].out;

    if (!data_in || !data_out) {
      console.warn(`No data in or out for truck path index ${i}`);
      continue;
    }

    for (let j = 0; j < data_out.length; j++) {
      let a = new Date(data_out[j].date_time);
      if (a >= b && a <= c) {
        g2++;
        h1 += +parseFloat(data_out[j].money_value);
        h1 = parseFloat(h1.toFixed(0));
        all_mon_off_2 += +data_out[j].money_value;
        all_mon_off_2 = parseFloat(all_mon_off_2.toFixed(0));
      }
    }

    if (h1 > most_sup_out) {
      most_sup_out = h1;
      most_sup_out_id = i;
      g3 = g2;
    }

    if (h1 <= least_sup_out) {
      least_sup_out = h1;
      least_sup_out_id = i;
      g4 = g2;
    }

    for (let j = 0; j < data_in.length; j++) {
      let a = new Date(data_in[j].date_time);
      if (a >= b && a <= c) {
        g1++;
        h2 += parseFloat(data_in[j].money_value);
        h2 = parseFloat(h2.toFixed(0));
        all_mon_off_1 += +data_in[j].money_value;
        all_mon_off_1 = parseFloat(all_mon_off_1.toFixed(0));
      }
    }

    if (h2 > most_sup_in) {
      most_sup_in = h2;
      most_sup_in_id = i;
      g5 = g1;
    }

    if (h2 <= least_sup_in) {
      least_sup_in = h2;
      least_sup_in_id = i;
      g6 = g1;
    }
  }

  all_net_pariod = all_mon_off_1 - all_mon_off_2 + office_money;
  all_net_pariod = parseFloat(all_net_pariod.toFixed(0));
  all_mon_off_3 = all_mon_off_1 - all_mon_off_2;
  all_mon_off_3 = parseFloat(all_mon_off_3.toFixed(0));

  let row = "";
  row += `
        <tr>
          <td>${all_order_truck_data.length}</td>
          <td>${truck_path_data.length}</td>
          <td>${order_num}</td>
          <td>${office_money}</td>
        </tr>
      `;

  Reports_truck_table_TableBody3.innerHTML = row;
  await fill_report_truck_tables_data();
  await fill_report_suplier_tables_data();
}


async function fill_report_truck_tables_data() {
  // Logic to fetch and populate report tables data

  let row = "";
  row += `
        <tr>
          <td>اكثر شاحنه عملت نقلات</td>
          <td>${+most_oeder_id + 1}</td>
          <td>${all_order_truck_data[most_oeder_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[most_oeder_id].driver_name_inp}.</td>
          <td>${most_order}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اقل شاحنه عملت نقلات</td>
          <td>${+least_order_id + 1}</td>
          <td>${all_order_truck_data[least_order_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[least_order_id].driver_name_inp}.</td>
          <td>${least_order}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اكثر شاحنه عملت مصروفات</td>
          <td>${+most_expenses_id + 1}</td>
          <td>${all_order_truck_data[most_expenses_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[most_expenses_id].driver_name_inp}.</td>
          <td>${most_expenses}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اقل شاحنه عملت مصروفات</td>
          <td>${+least_expenses_id + 1}</td>
          <td>${all_order_truck_data[least_expenses_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[least_expenses_id].driver_name_inp}.</td>
          <td>${least_expenses}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اكثر شاحنه عملت صافى اموال </td>
          <td>${+most_net_id + 1}</td>
          <td>${all_order_truck_data[most_net_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[most_net_id].driver_name_inp}.</td>
          <td>${most_net}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اقل شاحنه عملت صافى اموال </td>
          <td>${+least_net_id + 1}</td>
          <td>${all_order_truck_data[least_net_id].truck_number_inp}.</td>
          <td>${all_order_truck_data[least_net_id].driver_name_inp}.</td>
          <td>${least_net}</td>
        </tr>
      `;
  Reports_truck_table_TableBody1.innerHTML = row;
}





async function fill_report_suplier_tables_data() {
  // Logic to fetch and populate report tables data
  data_in = truck_path_data;
  data_out = truck_path_data;
  // console.log(data_out);
  // console.log(data_in);
  let row = "";
  row += `
        <tr>
          <td>اكثر مندوب عمل عهدات</td>
          <td>${data_out[most_sup_out_id].qr}</td>
          <td>${data_out[most_sup_out_id].office}</td>
          <td>${data_out[most_sup_out_id].sup_add}</td>
          <td>${g3}</td>
          <td>${most_sup_out}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اقل مندوب عمل عهدات</td>
          <td>${data_out[least_sup_out_id].qr}</td>
          <td>${data_out[least_sup_out_id].office}</td>
          <td>${data_out[least_sup_out_id].sup_add}</td>
          <td>${g4}</td>
          <td>${least_sup_out}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اكثر مندوب استلم فلوس</td>
          <td>${data_in[most_sup_in_id].qr}</td>
          <td>${data_in[most_sup_in_id].office}</td>
          <td>${data_in[most_sup_in_id].sup_add}</td>
          <td>${g5}</td>
          <td>${most_sup_in}</td>
        </tr>
      `;
  row += `
        <tr>
          <td>اقل مندوب استلم فلوس</td>
          <td>${data_in[least_sup_in_id].qr}</td>
          <td>${data_in[least_sup_in_id].office}</td>
          <td>${data_in[least_sup_in_id].sup_add}</td>
          <td>${g6}</td>
          <td>${least_sup_in}</td>
        </tr>
      `;
  // row += `
  //       <tr>
  //         <td>اكثر مندوب سلم فلوس</td>

  //         <td></td>
  //         <td></td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //     `;
  // row += `
  //       <tr>
  //         <td>اقل مندوب سلم فلوس</td>
  //         <td></td>
  //         <td></td>
  //         <td></td>
  //         <td></td>
  //       </tr>
  //     `;
  Reports_truck_table_TableBody2.innerHTML = row;

  let row1 = "";
  row1 = `
        <tr>
          <td>${all_mon_off_1}</td>
          <td>${all_mon_off_2}</td>
          <td>${all_mon_off_3}</td>
        </tr>
      `;
  Reports_truck_table_TableBody22.innerHTML = row1;
}
