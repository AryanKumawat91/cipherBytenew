document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-button';
        completeButton.addEventListener('click', () => {
            completeTask(taskItem, taskText);
        });

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }

    function completeTask(taskItem, taskText) {
        taskItem.remove();

        const completedTaskItem = document.createElement('li');
        completedTaskItem.textContent = taskText;
        completedTaskItem.className = 'completed-task';
        
        const completionTime = document.createElement('span');
        completionTime.textContent = ` (Completed at: ${new Date().toLocaleString()})`;
        completedTaskItem.appendChild(completionTime);

        completedTaskList.appendChild(completedTaskItem);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-button';
        completeButton.addEventListener('click', () => {
            completeTask(taskItem, taskText);
        });

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }

    function completeTask(taskItem, taskText) {
        taskItem.remove();

        const completedTaskItem = document.createElement('li');
        completedTaskItem.textContent = taskText;
        completedTaskItem.className = 'completed-task';
        
        const completionTime = document.createElement('span');
        completionTime.textContent = ` (Completed at: ${new Date().toLocaleString()})`;
        completedTaskItem.appendChild(completionTime);

        completedTaskList.appendChild(completedTaskItem);
    }
});
