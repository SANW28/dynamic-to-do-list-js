// Step 1: Add event listener for DOMContentLoaded to ensure script runs after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Step 2: Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Define the addTask function
    function addTask() {
        // Step 4: Get the value from the input field and trim it
        const taskText = taskInput.value.trim();
        
        // Step 5: Check if taskText is empty, prompt the user if it is
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Stop the function if no task is entered
        }
        
        // Step 6: Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 7: Create a button to remove the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 8: Add an event listener to the remove button to delete the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Step 9: Append the remove button to the list item, and the list item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 10: Clear the input field after the task is added
        taskInput.value = '';
    }

    // Step 11: Attach an event listener to the addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Step 12: Allow adding tasks by pressing the 'Enter' key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

