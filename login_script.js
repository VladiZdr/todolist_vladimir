const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");

loginButton.addEventListener("click", function (){

    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("password").value;
    const login_data = JSON.parse(localStorage.getItem(uname)) || [JSON.stringify("Default"),JSON.stringify("Default")];


    if(uname===login_data[0] && pass === login_data[1]){

        localStorage.setItem("currentUser",JSON.stringify(uname));

        window.location.href = "to_do_list.html";

    }
    else{

        document.getElementById("uname").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById('error-message').style.display = 'inline';

        console.log("wrong login credentials");

    }

});

signupButton.addEventListener("click", function (){
    window.location.href = "signup_page.html";
})