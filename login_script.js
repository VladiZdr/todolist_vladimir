const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");

loginButton.addEventListener("click", function (){

    console.log("clicked on login")

    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("password").value;
    const login_data = JSON.parse(localStorage.getItem(uname)) || [JSON.stringify("Default"),JSON.stringify("Default")];


    if(uname===login_data[0] && pass === login_data[1]){
        localStorage.setItem("currentUser",JSON.stringify(uname));

        window.location.href = "to_do_list.html";

        console.log("logged in with username " + uname);
    }
    else{
        document.getElementById("uname").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById('error-message').style.display = 'inline';
        console.log("wrong login credentials");
    }

    /*const all_unames = JSON.parse(localStorage.getItem("unames")) || [];
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
   }*/
});

signupButton.addEventListener("click", function (){

    window.location.href = "signup_page.html";

})

