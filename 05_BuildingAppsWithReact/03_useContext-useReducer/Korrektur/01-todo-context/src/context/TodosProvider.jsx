import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  // Initialize todos from localStorage or empty array if nothing is stored
  // Initialisiert Todos aus dem localStorage oder als leeres Array, wenn nichts gespeichert ist
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });
  const [filter, setFilter] = useState("all");

  // Update localStorage whenever todos change
  // Aktualisiert den localStorage, wann immer sich die Todos ändern
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Functions to manipulate state
  // Funktionen zum Bearbeiten des Status
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      { id: Date.now(), text, completed: false },
      ...prevTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Context value with state and functions
  // Kontext-Wert mit Status und Funktionen
  const contextValue = {
    todos,
    filter,
    addTodo,
    toggleTodo,
    setFilter,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
