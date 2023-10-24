let tasks = [];

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));

        const removeButton = document.createElement('button');
        removeButton.innerHTML = '❌';
        removeButton.onclick = function () {
            removeTask(index);
        };


        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value !== '') {
        tasks.push(taskInput.value);
        taskInput.value = '';
        displayTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
