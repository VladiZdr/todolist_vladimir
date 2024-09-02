const addButton = document.getElementById("add_task_id");
const markButtons =   document.querySelectorAll(".markButton");
const container_tasks = document.getElementById("tasks");

let arr = [];
let cnt = 0;

addButton.addEventListener("click", function() {

    let change_color = 0;

    const newTask = document.createElement("div");
    const newTextBox = document.createElement("input");
    const newMarkButton = document.createElement("button");

    newTask.type = "div";
    newTask.className = "row";

    newTextBox.type = "text";
    newTextBox.className = "textbox";
    newTextBox.placeholder = "Enter text here";

    newMarkButton.type = "button";
    newMarkButton.className = "markButton";
    newMarkButton.id = cnt.toString();

    newTask.appendChild(newMarkButton);
    newTask.appendChild(newTextBox);

    newMarkButton.addEventListener("click",function (){
        if(change_color === 0 ){
            newMarkButton.style.backgroundColor = "red";
            newTextBox.style.color = "red";
            newTextBox.style.backgroundColor = "beige";
            newTextBox.classList.toggle('strikethrough');
            change_color++;
        }
        else {
            newMarkButton.style.backgroundColor = "darkolivegreen";
            newTextBox.style.color = "black";
            newTextBox.style.backgroundColor = "white";
            newTextBox.style.fontStyle = "normal";
            change_color = 0;
        }
    });

    container_tasks.appendChild(newTask);

    arr.push(cnt++);

    console.log("end_of_fun_added_task");

});

markButtons.forEach(function (button){
    button.addEventListener("click",function (){

        const r = Number(button.id);

    });
});
