const todoListElement = document.getElementById("todo-list");

const fetchTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    if (!response.ok) {
      throw new Error(`Etwas ist schiefgelaufen. Status: ${response.status}`);
    }

    const todos = await response.json();
    console.log(todos);

    displayTodos(todos);
  } catch (error) {
    console.error(error);
  }
};

const displayTodos = (todos) => {
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoItem.classList.add("mb-2");

    if (todo.completed) {
      todoItem.classList.add("line-through", "text-green-500");
    } else {
      todoItem.classList.add("text-red-500");
    }

    todoListElement.appendChild(todoItem);
  });
};

fetchTodos();
