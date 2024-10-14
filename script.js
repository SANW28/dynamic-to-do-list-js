document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the DOM
    function addTaskToDOM(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        listItem.classList.add('task-item');


        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTaskToDOM(taskText);

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        saveTasks(tasks);

        taskInput.value = ''; // Clear input field
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            addTaskToDOM(taskText);
        });
    }

    // Save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        saveTasks(tasks);
    }

    // Add event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key in task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});

