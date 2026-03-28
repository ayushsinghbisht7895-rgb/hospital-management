  function appointment(){  
  window.location.href="appoinment.html";
  
  
 }

    function drportfolia(){
      window.location.href="drportfolia.html";
  

  }

  function openForm() {
     
    document.getElementById("appointmentForm").style.display = "block";
}

function closeForm() {
  
    document.getElementById("appointmentForm").style.display = "none";
}

function emergence(){
   window.location.href="emergence.html";
}

function machinesss(){
  window.location.href="machines.html";
}
function generateBill(){

let patientId = document.getElementById("patientId").value;
let name = document.getElementById("pname").value;
let date = document.getElementById("date").value;

let consultation = Number(document.getElementById("consultation").value);
let medicine = Number(document.getElementById("medicine").value);
let lab = Number(document.getElementById("lab").value);
let room = Number(document.getElementById("room").value);
if( patientId===""|| name===""|| date===""|| consultation===""|| medicine===""|| lab==="" || room===""){
  alert("all the enter shoud be mandatory  ")
  return false;

}

let subtotal = consultation + medicine + lab + room;

let gst = subtotal * 0.18;

let total = subtotal + gst;

let bill = `
Patient ID: ${patientId} 
Patient Name: ${name} 
Date: ${date} 
Consultation Fee: ₹${consultation} 
Medicine Cost: ₹${medicine}
Lab Test Cost: ₹${lab} 
Room Charges: ₹${room} 
Subtotal: ₹${subtotal} 
GST (18%): ₹${gst.toFixed(2)} 

<b>Total Bill: ₹${total.toFixed(2)}
`;

document.getElementById("billOutput").innerHTML = bill;


// Save in localStorage

let billData = {
patientId,
name,
date,
consultation,
medicine,
lab,
room,
subtotal,
gst,
total
};

localStorage.setItem("hospitalBill", JSON.stringify(billData));

}


function printBill(){

window.print();
}

function bookAppointment(){

let name = document.getElementById("name").value.trim();
let date = document.getElementById("date").value.trim();
let doctor = document.getElementById("doctor").value.trim();
let time = document.getElementById("time").value.trim();
let priority = document.getElementById("priority").value.trim();

if( name==="" || date===""|| doctor===""|| time===""|| priority===""){
  alert("all the entery are mandatory:")
  return false;
}

let appointmentId = "APT" + Math.floor(Math.random()*1000);



let room = Math.floor(Math.random()*100)+1;



let floor = Math.ceil(room/10);


let appointment = {
id:appointmentId,
name:name,
date:date,
doctor:doctor,
time:time,
priority:priority,
room:room,
floor:floor
};





showAppointments();

}






showAppointments();




