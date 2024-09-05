const signupButton = document.getElementById("signup");
const max_number_of_users = 2;

//localStorage.clear();

//Show Users login credential's
let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
console.log("Users in DB:")
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
    let all_unames = JSON.parse(localStorage.getItem("unames")) || [];
    let bool = 1;

    //If there is already a user with the same username don't allow registration
    all_unames.forEach(username => {
        if (new_uname === username) {
            usernameInput.classList.add('error');
            errorMessageU.style.display = 'inline';

            bool = 0;
            return 0;
        }
    });

    //If the username is changed to an original username after error message is shown => remove error message
    if(bool === 1){
        usernameInput.classList.remove("error");
        errorMessageU.style.display = 'none';
    }

    //If there is no input for password => error message
    if(passwordInput.value === ""){
        bool = 0;

        passwordInput.classList.add("error");
        errorMessageP.style.display = 'inline';
    }
    else{
        passwordInput.classList.remove("error");
        errorMessageP.style.display = 'none';
    }



    //if uname and pass are valid => update DB | max number of users reached => delete first one
    if(bool !== 0){

        if(all_unames.length >= max_number_of_users){
            const removed_user = all_unames.shift();
            localStorage.removeItem(removed_user);
            localStorage.removeItem(removed_user + 'tasks_content')
        }

        all_unames.push(new_uname);

        localStorage.setItem('unames', JSON.stringify(all_unames));
        localStorage.setItem(new_uname, JSON.stringify([new_uname,passwordInput.value]));

        window.location.href = "login_page.html";
    }

})

document.getElementById("back_to_login").addEventListener("click", function () {
    window.location.href = "login_page.html";
})