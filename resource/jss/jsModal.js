

const user = "evidex"
const pass = "admin"

let username = document.getElementById("username");
let password = document.getElementById("password");
let login_btn = document.getElementById("login_btn");
let overlay = document.getElementByClassName(".overlay");
let message = document.getElementByClassName(".modalMessage");

function displayModal(){
    // alert("Welcome to me Website");
    if(username===user.value && password===pass.value){
        overlay.style.display="block";        
    }else{
        overlay.style.display="block";
    }
}

function cancel(){
    overlay.style.display = "block";
    alert("Checking");
}
