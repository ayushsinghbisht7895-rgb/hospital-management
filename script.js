  function appointment(){

    
  window.location.href="appoinment.html";
  
  
 }



    function drportfolia(){
      window.location.href="drportfolia.html";
  

  }
  function Gynaecologist(){
    window.location.href="Gynaecologist.html"
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


// Register Patient
function patientregistration(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let patient = {
name:name,
email:email,
password:password
};

let patients = JSON.parse(localStorage.getItem("patients")) || [];

patients.push(patient);

localStorage.setItem("patients", JSON.stringify(patients));

alert("Registration Successful");

window.location.href="login.html";
}


// Patient Login
function Login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let patients = JSON.parse(localStorage.getItem("patients")) || [];

let found = false;

for(let i=0;i<patients.length;i++){

if(email === patients[i].email && password === patients[i].password){

localStorage.setItem("patientLogin", email);

found = true;

window.location.href=".html";

break;

}

}

if(!found){
document.getElementById("msg").innerHTML="Invalid Email or Password";
}

}
