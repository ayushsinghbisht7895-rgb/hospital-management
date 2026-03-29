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

      let name = document.getElementById("pname").value;
      let date = document.getElementById("date").value;
      let doctor = document.getElementById("doctor").value;
      let time = document.getElementById("time").value;
      let priority = document.getElementById("priority").value;

      if(name == ""){
        alert("Enter Patient Name!");
        return;
      }

      if(date == ""){
        alert("Select Appointment Date!");
        return;
      }

      if(doctor == "Select Doctor"){
        alert("Select Doctor!");
        return;
      }

      if(time == "Select Time Slot"){
        alert("Select Time Slot!");
        return;
      }

      let appointment = {
        patientName: name,
        appointmentDate: date,
        doctorName: doctor,
        appointmentTime: time,
        priority: priority
      };

      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

      appointments.push(appointment);

      localStorage.setItem("appointments", JSON.stringify(appointments));

      document.getElementById("result").innerHTML = " Appointment Saved Successfully!";
      document.getElementById("result").style.color = "green";

      loadAppointments();

      document.getElementById("pname").value = "";
      document.getElementById("date").value = "";
      document.getElementById("doctor").value = "Select Doctor";
      document.getElementById("time").value = "Select Time Slot";
      document.getElementById("priority").value = "Normal";
    }

    function loadAppointments(){
      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      let tableBody = document.getElementById("tableBody");

      tableBody.innerHTML = "";

      appointments.forEach((app, index) => {
        tableBody.innerHTML += `
          <tr>
            <td>${index+1}</td>
            <td>${app.patientName}</td>
            <td>${app.appointmentDate}</td>
            <td>${app.doctorName}</td>
            <td>${app.appointmentTime}</td>
            <td>${app.priority}</td>
          </tr>
        `;
      });
    }
function clearAppointments(){

  let pass = prompt("Enter Admin Password to Clear Appointments:");

  if(pass === "lifesaver"){  
    localStorage.removeItem("appointments");
    document.getElementById("tableBody").innerHTML = "";
    document.getElementById("result").innerHTML = " All appointments cleared by Admin!";
    document.getElementById("result").style.color = "green";
  }
  else{
    alert(" Wrong Password! Only Admin can clear appointments.");
  }
}

    window.onload = loadAppointments;
    function bookAppointment(){

  let name = document.getElementById("pname").value;
  let date = document.getElementById("date").value;
  let doctor = document.getElementById("doctor").value;
  let time = document.getElementById("time").value;
  let priority = document.getElementById("priority").value;

  if(name == ""){
    alert("Enter Patient Name!");
    return;
  }

  if(date == ""){
    alert("Select Appointment Date!");
    return;
  }

  if(doctor == "Select Doctor"){
    alert("Select Doctor!");
    return;
  }

  if(time == "Select Time Slot"){
    alert("Select Time Slot!");
    return;
  }

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Check Duplicate Appointment (same doctor + date + time)
  let alreadyBooked = appointments.find(app =>
    app.doctorName === doctor &&
    app.appointmentDate === date &&
    app.appointmentTime === time
  );

  if(alreadyBooked){
    alert(" This Doctor is already booked at this Date & Time. Please select another slot!");
    return;
  }

 
  let token = appointments.length + 1;

  let appointment = {
    tokenNumber: token,
    patientName: name,
    appointmentDate: date,
    doctorName: doctor,
    appointmentTime: time,
    priority: priority
  };

  appointments.push(appointment);

  localStorage.setItem("appointments", JSON.stringify(appointments));

  document.getElementById("result").innerHTML =
    " Appointment Booked Successfully! <br>  Token Number: <b>" + token + "</b>";

  document.getElementById("result").style.color = "green";

  loadAppointments();

  // Clear Inputs
  document.getElementById("pname").value = "";
  document.getElementById("date").value = "";
  document.getElementById("doctor").value = "Select Doctor";
  document.getElementById("time").value = "Select Time Slot";
  document.getElementById("priority").value = "Normal";
}
  
  


 

