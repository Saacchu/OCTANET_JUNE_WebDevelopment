document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskInput.value} (Due: ${dueDateInput.value || 'No due date'}, Priority: ${priorityInput.value})</span>
        <div class="task-actions">
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';

    taskItem.querySelector('.complete').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
