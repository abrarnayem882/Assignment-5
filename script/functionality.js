const completedButtons = document.querySelectorAll("#btn-Completed");
const taskAssignedElement = document.getElementById("task-box"); 
const navbarCountElement = document.getElementById("nav-Counter"); 
const activityContainer = document.getElementById("activity-container");
const clearHistoryButton = document.getElementById("clear-History");

let taskAssignedCount = parseInt(taskAssignedElement.innerText.trim()) || 0;
let navbarCount = parseInt(navbarCountElement.innerText.trim()) || 0;

completedButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("Completed button clicked!");

        if (taskAssignedCount > 0) {
            taskAssignedCount--;
            navbarCount++;
        }

        taskAssignedElement.innerText = taskAssignedCount;
        navbarCountElement.innerText = navbarCount;

        button.disabled = true;
        button.classList.add("opacity-50", "cursor-not-allowed");
        alert("Board updated Successfully");

        if (taskAssignedCount === 0) {
            alert("Congrats!!! You have completed all the current tasks!");
        }

        console.log("Updated Task Count:", taskAssignedCount);
        console.log("Updated Navbar Count:", navbarCount);

        const completedTime = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const taskDiv = button.closest(".rounded-xl");
        const taskTitle = taskDiv.querySelector("h3").innerText;
        const div = document.createElement("div");
        div.innerHTML = `<h2 class="bg-slate-200 rounded-sm text-xs p-4 mb-4">You have completed
              <strong>${taskTitle}</strong>  at ${completedTime}
        </h2>`;
        activityContainer.appendChild(div);
    });
});

clearHistoryButton.addEventListener("click", function () {
    activityContainer.innerHTML = "";
});

const dateElement = document.getElementById("update-Date");

function getFormattedDate() {
    const today = new Date();
    const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
    return today.toLocaleDateString("en-US", options).replace(",", ""); // Format: Wed Jul 28 2025
}

if (dateElement) {
    dateElement.innerText = getFormattedDate();
}

const newPageButton = document.getElementById("newPage");

newPageButton.addEventListener("click", function () {
    window.location.href = "newPage.html";
});
