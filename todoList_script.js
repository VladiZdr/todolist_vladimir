const addButton = document.getElementById("add_task_id");
const container_tasks = document.getElementById('tasks');

addButton.addEventListener('click', function() {
    console.log("add task");

    const newTextBox = document.createElement('input');

    newTextBox.type = 'text';
    newTextBox.className = 'textbox';
    newTextBox.placeholder = 'Enter text here';

    container_tasks.appendChild(newTextBox);

    console.log("end_of_fun_added_task")

});