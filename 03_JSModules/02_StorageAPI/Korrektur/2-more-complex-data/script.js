const form = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

const createListItem = (newTask) => {
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLi.setAttribute("id", newTask.id);
  newLi.className = "flex gap-4 items-baseline px-4 justify-between";

  newP.textContent = newTask.content;

  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";

  deleteBtn.addEventListener("click", (event) => {
    const currentTasks = JSON.parse(localStorage.getItem("tasks") || []);

    const updatedTasks = currentTasks.filter((task) => task.id !== newTask.id);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    event.target.parentElement.remove();
  });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);
  return newLi;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!userInput.value) return alert("Cannot submit an empty task!");

  const newTask = {
    id: "task-" + crypto.randomUUID(),
    content: userInput.value,
  };

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const updatedTasks = [newTask, ...tasks];

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  const newLi = createListItem(newTask);
  ul.insertBefore(newLi, ul.firstChild);

  form.reset();
});

reloadBtn.addEventListener("click", () => {
  location.reload();
});

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((element) => {
    const newLi = createListItem(element);
    ul.appendChild(newLi);
  });
};

loadTasks();
