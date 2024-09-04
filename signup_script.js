const signupButton = document.getElementById("signup");

//localStorage.clear();

let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
console.log("Usernames in DB:")
all_usernames.forEach(u=>{
    const l_credentials = JSON.parse(localStorage.getItem(u)) || [JSON.stringify("error!"),JSON.stringify("error!")];
    console.log("User: " + l_credentials[0] + " with password: " + l_credentials[1]);
})

signupButton.addEventListener("click",function (){

    const usernameInput = document.getElementById('uname');
    const errorMessageU = document.getElementById('error-message');

    const passwordInput = document.getElementById('password');
    const errorMessageP = document.getElementById('error-message-pass');

    const new_uname = usernameInput.value;
    const all_unames = JSON.parse(localStorage.getItem("unames")) || [];
    let bool = 1;

    all_unames.forEach(username => {
        if (new_uname === username) {
            usernameInput.classList.add('error');
            errorMessageU.style.display = 'inline';

            bool = 0;
            return 0;
        }
    });

    if(bool === 1){
        usernameInput.classList.remove("error");
        errorMessageU.style.display = 'none';
    }

    if(passwordInput.value === ""){
        bool = 0;

        passwordInput.classList.add("error");
        errorMessageP.style.display = 'inline';
    }
    else{
        passwordInput.classList.remove("error");
        errorMessageP.style.display = 'none';
    }



    if(bool !== 0){
        all_unames.push(new_uname);

        localStorage.setItem('unames', JSON.stringify(all_unames));
        localStorage.setItem(new_uname, JSON.stringify([new_uname,passwordInput.value]));

        window.location.href = "login_page.html";
    }

})

document.getElementById("back_to_login").addEventListener("click", function () {
    window.location.href = "login_page.html";
})