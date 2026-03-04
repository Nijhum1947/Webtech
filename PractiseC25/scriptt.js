let wrongCount = 0;

function validateForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let count = document.getElementById("count");


    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    let valid = true;

   
    if (email.indexOf("@") == -1) {
        emailError.innerHTML = "Email must contain @";
        valid = false;
    }

   if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        valid = false;
    } 
    else if (password.indexOf("#") == -1) {
        passwordError.innerHTML = "Password must contain #";
        valid = false;
    }
    

if(valid==false){
    wrongCount++;
    count.innerHTML="Wrong submit count: "+wrongCount;
    return false;
}
    count.innerHTML = "Login Successful!";
    return false;  
}
