const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");

loginButton.addEventListener("click", function (){

    console.log("clicked on login")

    let uname = document.getElementById("uname").value;
    const all_unames = JSON.parse(localStorage.getItem("unames")) || [];
    let bool = 0;

    all_unames.forEach(username=>{
        if(uname === username){
            bool = 1;
            return 1;
        }
    })

    if(bool===0){
        all_unames.push(uname);
        localStorage.setItem('unames', JSON.stringify(all_unames));
    }

    localStorage.setItem("currentUser",JSON.stringify(uname));

    window.location.href = "to_do_list.html";

    console.log("logged in with username " + uname);
});

signupButton.addEventListener("click", function (){

    window.location.href = "signup_page.html";

})

