const signupButton = document.getElementById("signup");

let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
console.log("Usernames in DB:")
all_usernames.forEach(u=>{
    console.log(u);
})

signupButton.addEventListener("click",function (){
    let new_uname = document.getElementById("uname").value;
    const all_unames = JSON.parse(localStorage.getItem("unames")) || [];
    let bool = 1;

    const usernameInput = document.getElementById('uname');
    const errorMessage = document.getElementById('error-message');

    all_unames.forEach(username => {
        if (new_uname === username) {
            usernameInput.classList.add('error');

            errorMessage.style.display = 'inline';
            bool = 0;
            return 0;
        }
    });

    if(bool !== 0){
    all_unames.push(new_uname);
    localStorage.setItem('unames', JSON.stringify(all_unames));


        window.location.href = "login_page.html";
    }

})