const addButton = document.getElementById("add_task_id");
const container_tasks = document.getElementById("tasks");
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || JSON.stringify("Default");

//number of tasks
let cnt = 0;
//key for DB saving currentUser's tasks
let key_tasks_content = currentUser + 'tasks_content';

function createRow(value = ''){
    //change_color: boolean for whether the task is completed (to change the style)
    let change_color = 0;

    const newTask = document.createElement("div");
    const newTextBox = document.createElement("input");
    const newMarkButton = document.createElement("button");
    const newDeleteButton = document.createElement("button");

    newTask.type = "div";
    newTask.className = "row";

    newTextBox.type = "text";
    newTextBox.className = "textbox";
    newTextBox.placeholder = "Enter task here";
    newTextBox.value = value;

    newMarkButton.type = "button";
    newMarkButton.className = "markButton";
    newMarkButton.id = cnt.toString()+"mark";


    newDeleteButton.type = "button";
    newDeleteButton.className = "deleteButton";
    newDeleteButton.id = cnt.toString()+"delete";

    newTask.appendChild(newMarkButton);
    newTask.appendChild(newTextBox);
    newTask.appendChild(newDeleteButton);

    container_tasks.appendChild(newTask);
    cnt++;

    newMarkButton.addEventListener("click",function (){
        if(change_color === 0 ){
            newMarkButton.style.backgroundColor = "red";
            newTextBox.style.color = "red";
            newTextBox.style.backgroundColor = "beige";
            newTextBox.classList.add('strikethrough');
            change_color++;

        }
        else {
            newMarkButton.style.backgroundColor = "darkolivegreen";
            newTextBox.style.color = "black";
            newTextBox.style.backgroundColor = "white";
            newTextBox.classList.remove('strikethrough');
            change_color = 0;

        }

        newMarkButton.value = change_color.toString();
    });

    let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
    newDeleteButton.addEventListener("click",function(){

        localStorage.removeItem('rows');
        newTask.remove();
        cnt--;

        //if user has no tasks remove him from DB
        if(cnt === 0){

            all_usernames = all_usernames.filter(e => e !== currentUser);
            localStorage.setItem("unames",JSON.stringify(all_usernames));

        }

        saveTasks();

    });

    //if user has deleted all his tasks but adds a new one => add him back to the DB
    if(cnt===1){

        if(!all_usernames.includes(currentUser)){
            all_usernames.push(currentUser);
            localStorage.setItem("unames",JSON.stringify(all_usernames));
        }
    }

    localStorage.setItem(currentUser+'cnt', JSON.stringify(cnt));

    return undefined;
}

addButton.addEventListener("click", function (){
    createRow();
    saveTasks();
});

function saveTasks(){
    const tasks_content = document.querySelectorAll("#tasks input");
    const all_tasks = [];

    tasks_content.forEach(task => {
        all_tasks.push(task.value);
    });

    localStorage.setItem(key_tasks_content, JSON.stringify(all_tasks));
}

container_tasks.addEventListener('input', function() {
    saveTasks();
});

function loadRows() {

    const savedTasks = JSON.parse(localStorage.getItem(key_tasks_content)) || [];

    savedTasks.forEach(task => {
        createRow(task);
    });
}

window.addEventListener('load', function() {
    document.getElementById("header").innerText = currentUser + "'s Monthly Tasks";
    loadRows();
});


document.getElementById("login-page").addEventListener("click",function () {
    window.location.href = "login_page.html";
})
