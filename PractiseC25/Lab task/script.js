let registrations = [];
let virtual = 0;
let inperson = 0;

document.getElementById("regForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let company = document.getElementById("company").value;

let attendance = document.querySelector('input[name="attendance"]:checked');

let valid = true;

if(name.length < 6 || name.length > 100){
document.getElementById("nameError").innerHTML =
"Name must be between 6 and 100 characters.";
valid = false;
}
else{
document.getElementById("nameError").innerHTML = "";
}

if(!email.includes("@") || !email.includes(".")){
document.getElementById("emailError").innerHTML =
"Please enter a valid professional email address.";
valid = false;
}
else{
document.getElementById("emailError").innerHTML = "";
}


if(company.length > 100){
document.getElementById("companyError").innerHTML =
"Maximum 100 characters allowed.";
valid = false;
}
else{
document.getElementById("companyError").innerHTML = "";
}

if(!attendance){
document.getElementById("attendanceError").innerHTML =
"Please select your attendance type.";
valid = false;
}
else{
document.getElementById("attendanceError").innerHTML = "";
}



if(valid){

let type = attendance.value;

registrations.push({
name:name,
email:email,
company:company,
attendance:type
});


if(type === "Virtual"){
virtual++;
}
else{
inperson++;
}

updateStats();

alert("Registration Successful!");

document.getElementById("regForm").reset();

}

});
function updateStats(){

document.getElementById("total").innerHTML = registrations.length;
document.getElementById("virtualCount").innerHTML = virtual;
document.getElementById("inpersonCount").innerHTML = inperson;

}


function toggleAnalytics(){

let panel = document.getElementById("analyticsPanel");
let button = document.getElementById("analyticsBtn");

if(panel.style.display === "none"){

panel.style.display = "block";
button.innerHTML = "Hide Event Analytics";

}
else{

panel.style.display = "none";
button.innerHTML = "Show Event Analytics";

}

}