const addButton = document.getElementById("add_task_id");
const container_tasks = document.getElementById("tasks");

let cnt = 0;

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
    newTextBox.placeholder = "Enter text here";
    newTextBox.value = value;

    newMarkButton.type = "button";
    newMarkButton.className = "markButton";
    newMarkButton.id = cnt.toString();
    newMarkButton.value = change_color.toString();


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
    });

    container_tasks.appendChild(newTask);
    cnt++;
    localStorage.setItem('cnt', JSON.stringify(cnt));
    return undefined;
}

addButton.addEventListener("click", function (){
    createRow();
    saveRow();
});

function saveRow(){
    const tasks_content = document.querySelectorAll("#tasks input");
    const all_tasks = [];

    tasks_content.forEach(task => {
        all_tasks.push(task.value);
    });

    localStorage.setItem('tasks_content', JSON.stringify(all_tasks));
}

container_tasks.addEventListener('input', function() {
    saveRow();
});

function loadRows() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks_content')) || [];

    savedTasks.forEach(task => {
        createRow(task);
    });
}

window.addEventListener('load', function() {
    console.log("load old tasks");
    loadRows();
});