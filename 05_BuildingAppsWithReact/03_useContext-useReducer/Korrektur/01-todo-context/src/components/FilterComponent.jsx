import { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

// Component for filtering the to-do list using Context API
// Komponente zum Filtern der To-Do-Liste mittels Context API
const FilterComponent = () => {
  // Get setFilter from context instead of props
  // Holt setFilter aus dem Context statt aus den Props
  const { filter, setFilter } = useContext(TodosContext);

  // Updates the filter state based on user selection
  // Aktualisiert den Filter-Status basierend auf der Benutzerauswahl
  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  // Rendert Buttons zur Auswahl des Filtertyps
  return (
    <div className="mb-4 flex space-x-2">
      <button
        onClick={() => setFilterInView("all")}
        className={`bg-gray-200 px-3 py-1 rounded capitalize ${
          filter === "all" ? "bg-gray-400" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilterInView("active")}
        className={`bg-gray-200 px-3 py-1 rounded capitalize ${
          filter === "active" ? "bg-gray-400" : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilterInView("completed")}
        className={`bg-gray-200 px-3 py-1 rounded capitalize ${
          filter === "completed" ? "bg-gray-400" : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
