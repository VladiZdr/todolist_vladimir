const addButton = document.getElementById("add_task_id");
const container_tasks = document.getElementById("tasks");
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || JSON.stringify("Default");

let cnt = 0;
let key_tasks_content = currentUser + 'tasks_content';

console.log("current user is: "+currentUser);

function createRow(value = ''){
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
    newMarkButton.id = cnt.toString();


    newDeleteButton.type = "button";
    newDeleteButton.className = "deleteButton";
    newDeleteButton.id = cnt.toString();

    newTask.appendChild(newMarkButton);
    newTask.appendChild(newTextBox);
    newTask.appendChild(newDeleteButton);

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

    newDeleteButton.addEventListener("click",function(){
        localStorage.removeItem('rows');
        newTask.remove();
        cnt--;
        localStorage.setItem('cnt', JSON.stringify(cnt));
        if(cnt === 0){
            let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
            all_usernames = all_usernames.filter(e => e !== currentUser);
            localStorage.setItem("unames",JSON.stringify(all_usernames));
        }
        saveTasks();
    });

    container_tasks.appendChild(newTask);
    cnt++;
    localStorage.setItem('cnt', JSON.stringify(cnt));

    if(cnt===1){
        let all_usernames = JSON.parse(localStorage.getItem("unames")) || [];
        if(!all_usernames.includes(currentUser)){
            all_usernames.push(currentUser);
            localStorage.setItem("unames",JSON.stringify(all_usernames));
        }
    }

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
    console.log("load old tasks");
    document.getElementById("header").innerText = currentUser + "'s TODO List";
    loadRows();
});