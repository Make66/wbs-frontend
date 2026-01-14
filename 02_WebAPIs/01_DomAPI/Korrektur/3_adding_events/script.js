const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

// Select the buttons and the ul element
const addItemBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");

// Attach event to add a new li to the ul
addItemBtn.addEventListener("click", () => {
  const taskItem = document.createElement("li");
  taskItem.textContent = tasks[Math.trunc(Math.random() * tasks.length)];
  itemList.appendChild(taskItem);
  taskItem.scrollIntoView();
  //   itemList.scrollTop = itemList.scrollHeight;
});

// Attach event to display an alert
alertBtn.addEventListener("click", () => alert("This is an alert message!"));

// Attach event to output a message to the console
consoleBtn.addEventListener("click", () => console.log("Text!"));
