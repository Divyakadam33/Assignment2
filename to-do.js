document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            li.addEventListener("click", function() {
                li.classList.toggle("selected");
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", function(e) {
                e.stopPropagation(); // Prevent li click event from firing
                li.remove();
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a valid task!");
        }
    });

    deleteSelectedBtn.addEventListener("click", function() {
        const selectedItems = document.querySelectorAll("#taskList .selected");
        selectedItems.forEach(function(item) {
            item.remove();
        });
    });
});