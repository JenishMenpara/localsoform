
function save(){

    let email = document.getElementById('mail').value;
    let passwords = document.getElementById('pass').value;
    
    localStorage.setItem("Email", email)
    localStorage.setItem("Password" ,passwords)
}

/* function clr(){
    let email = document.getElementById('mail').value;
    let passwords = document.getElementById('pass').value;

    email.value. = "";
    passwords.value ="";
} */