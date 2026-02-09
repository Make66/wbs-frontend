import { createContext, useContext, useState } from "react";

// 1. Kontext erstellen
const UserContext = createContext(null);

// 2. Provider Komponente erstellen
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("John");

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};

// 3. Den Provider/Kontext exportieren
// export default UserContext;

// 4. Custom Hook für den Kontext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error(
      "useUser muss innerhalb eines UserProviders benutzt werden."
    );
  }
  return context;
};
