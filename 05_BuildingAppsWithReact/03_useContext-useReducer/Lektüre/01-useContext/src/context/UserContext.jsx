import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("John");
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const decrementAge = () => {
    setAge((prevAge) => prevAge - 1);
  };

  const value = {
    user,
    age,
    incrementAge,
    decrementAge,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

// Custom hook, um nicht in jeder Konsumenten Komponente "useContext", sowie "UserContext" importieren zu müssen.

// Zum Vergleich:
// - Siehe in ComponentC -> Hier muss nur useUser importiert werden und anschließend können in Zeile 4 die Daten aus dem Kontext verwendet werden.
// - Siehe im Ordner "0-useContext-original" in ComponentC -> Ohne custom Hook, welcher bereits "useContext", sowie "UserContext" verwendet, müssten wir in jeder Komponente, in welcher der Kontext genutzt werden soll, diese importieren.

// Der if-Check dient dazu, dass wir die Situation abdecken, in welcher wir versuchen, den Kontext in einer Komponente zu verwenden, welcher sich nicht im Kontext Provider befindet und daher keinen Zugriff auf den Kontext hat.
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser muss sich in einem UserProvider befinden!");
  }
  return context;
};

export { UserProvider };
