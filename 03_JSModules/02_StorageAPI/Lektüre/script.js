// ========================================================================
// ======================= LOCAL STORAGE BASICS ===========================
// ========================================================================

localStorage.setItem("myKey", "Das ist ein Wert");
// localStorage.setItem("myKey", "Das ist der neue Wert");

const key = localStorage.getItem("myKey");
// console.log(key);
// const key2 = localStorage.getItem("myKey2");
// console.log(typeof key2);

localStorage.removeItem("myKey");

// localStorage.setItem("myKey2", "Das ist ein Wert");
// localStorage.setItem("myKey3", "Das ist ein Wert");
// localStorage.setItem("myKey4", "Das ist ein Wert");

// localStorage.clear();

// ========================================================================
// ======================= JSON/String-Formatierung ===========================
// ========================================================================

// localStorage.setItem("tasksObject", { text: "Aufräumen" });

// const tasksObject = localStorage.getItem("tasksObject");
// console.log(tasksObject);

// localStorage.setItem("tasksArray", [1, 2, 3]);

// const tasksArray = localStorage.getItem("tasksArray");
// console.log(tasksArray);

localStorage.setItem("tasksObject", JSON.stringify({ text: "Aufräumen" }));
const tasksObject = JSON.parse(localStorage.getItem("tasksObject"));
// const parsedTasksObject = JSON.parse(tasksObject);
// console.log(tasksObject);

localStorage.setItem("tasksArray", JSON.stringify([1, 2, 3]));
const tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
// const parsedTasksArray = JSON.parse(tasksArray);
// console.log(tasksArray);

// ========================================================================
// ======================= SPREAD OPERATOR Beispiel =======================
// ========================================================================

const sum = (x, y, z) => {
  console.log(x, y, z);

  return x + y + z;
};

const numbers = [1, 2, 3, 4];

// console.log(sum(...numbers));

// ========================================================================
// =================== TODO LIST Applikation ==============================
// ========================================================================

const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemsList = document.getElementById("itemsList");

// ========================================================================
// Funktion zur Erstellung eines Listenelements
// ========================================================================

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center py-2 px-3 border-b last:border-0";

  const textElement = document.createElement("p");
  textElement.textContent = item.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-red-500 hover:text-red-700 ml-2";
  deleteBtn.innerHTML = "&times;";

  const itemId = item.id;

  deleteBtn.addEventListener("click", () => {
    const items = JSON.parse(localStorage.getItem("todoItems")) || [];

    const updatedItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));

    li.remove();
  });

  li.appendChild(textElement);
  li.appendChild(deleteBtn);

  return li;
};

// ========================================================================
// Formular Event-Handler
// ========================================================================

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  const items = JSON.parse(localStorage.getItem("todoItems")) || [];

  const newItem = {
    id: items.length + 1,
    text: itemText,
  };

  items.push(newItem);

  localStorage.setItem("todoItems", JSON.stringify(items));

  const li = createListItem(newItem);
  itemsList.appendChild(li);

  itemInput.value = "";
  itemInput.focus();
});

// ========================================================================
// Items laden und darstellen
// ========================================================================

const loadItems = () => {
  const items = JSON.parse(localStorage.getItem("todoItems")) || [];
  items.forEach((item) => {
    const li = createListItem(item);
    itemsList.appendChild(li);
  });
};

loadItems();
