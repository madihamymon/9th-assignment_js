//task: 1
// var a= new Date();
// document.write(a)

//task: 2
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// alert(n)

//task: 3
// var days = [
//     "Sun",
//     "Mon",
//     "Tue",
//     "Sat","Wed","Thu", "Fri"
// ];

// document.write("Today is: "+days[new Date().getDay()]);



//task: 4
// var days = [
//     "Sun",
//     "Mon",
//     "Tue",
//     "Sat","Wed","Thu", "Fri"
// ];
// if(days[new Date().getDay()]==="Sat" || days[new Date().getDay()]==="Sun")
// alert("it is Fun Day")
// else
// alert("it is not fun day")



//task: 7
// var d = new Date();
// var n = d.toLocaleString();
// alert(n)

//task: 8
// var fa = new Date(new Date().getFullYear(), 11, 31)
// document.write("Later Date: "+fa)



//task: 9
// var date1 = new Date("06/16/2020"); 
// var date2 = new Date("07/29/2020"); 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// document.write( Difference_In_Days+" Days have passed since 1st Ramadan, 2020"); 




//task: 14

// var name= prompt("enter your name")
// var month= prompt("enter month")
// var units=+prompt("enter number of units")
// var chargeper=+prompt("enter number of charges per unit")
// var late=+prompt("enter late payment surcharges")
// var netamount= units* chargeper;
// var gross= netamount + late;
// document.write("<h1>"+"K-ELECTRIC BILL: " +"</h1>")
// document.write("Customer Name: "+"<b>" + name +"</b>")
// document.write("<br>"+"Month: "+"<b>" + month +"</b>")
// document.write("<br>"+"Number of Units: "+"<b>" + units +"</b>")
// document.write("<br>"+"Charges per Units: " +"<b>"+ chargeper +"</b>")
// document.write("<br>"+"Net Amount Payable(within due date): " +"<b>"+ netamount +"</b>")
// document.write("<br>"+"Late Payment Surcharges: " +"<b>"+ late +"</b>")
// document.write("<br>"+"Gross Amount Payable (after due date): "+"<b>" + gross +"</b>")