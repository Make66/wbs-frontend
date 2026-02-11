// Import des useReducer Hooks von React
import { useReducer } from "react";
import ComponentB from "./ComponentB";

// Initialer State des Reducers
const initialState = {
  user: "John", // Initialwert des Benutzers
  age: 30, // Initialwert des Alters
};

// Reducer-Funktion
// Nimmt den aktuellen State und eine Action entgegen
// Gibt den neuen State zurück
const userReducer = (state, action) => {
  // Prüft den Typ der übergebenen Action
  switch (action.type) {
    case "INCREMENT_AGE":
      // Erstellt eine Kopie des States und erhöht das Alter um 1
      return { ...state, age: state.age + 1 };
    case "DECREMENT_AGE":
      // Erstellt eine Kopie des States und verringert das Alter um 1
      return { ...state, age: state.age - 1 };
    case "DOUBLE_AGE":
      // Erstellt eine Kopie des States und verringert das Alter um 1
      return { ...state, age: state.age * 2 };
    default:
      // Gibt den unveränderten State zurück, falls die Action nicht erkannt wird
      return state;
  }
};

// Hauptkomponente, die den useReducer verwendet
const ComponentA = () => {
  // Initialisierung des useReducer
  // state: aktueller State
  // dispatch: Funktion zum Auslösen von Aktionen
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Destrukturierung des States in einzelne Variablen
  const { user, age } = state;

  // Funktion zum Erhöhen des Alters
  const incrementAge = () => {
    // Dispatch an useReducer mit der INCREMENT_AGE Aktion
    dispatch({ type: "INCREMENT_AGE" });
  };

  // Funktion zum Verringern des Alters
  const decrementAge = () => {
    // Dispatch an useReducer mit der DECREMENT_AGE Aktion
    dispatch({ type: "DECREMENT_AGE" });
  };

  // Funktion zum Verringern des Alters
  const doubleAge = () => {
    // Dispatch an useReducer mit der DECREMENT_AGE Aktion
    dispatch({ type: "DOUBLE_AGE" });
  };

  // Rendern der Komponente
  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentA (mit useReducer)</h1>
      {/* Übergabe der Props an die Child-Komponente */}
      <ComponentB
        user={user}
        age={age}
        incrementAge={incrementAge}
        decrementAge={decrementAge}
        doubleAge={doubleAge}
      />
    </div>
  );
};

export default ComponentA;
