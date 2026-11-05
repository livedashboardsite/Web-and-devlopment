const taskInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const textSpan = document.createElement('span');
        textSpan.classList.add('task-text');
        textSpan.innerText = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';

        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });


        taskItem.appendChild(textSpan);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = "";
        taskInput.focus();
    }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


