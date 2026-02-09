import { createContext, useContext, useState } from "react";

// 1. Kontext erstellen
const ThemeContext = createContext(null);

// 2. Provider Komponente erstellen
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

// 3. Den Provider/Kontext exportieren
// export default ThemeContext;

// 4. Custom Hook für den Kontext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context == undefined) {
    throw new Error(
      "useUser muss innerhalb eines UserProviders benutzt werden."
    );
  }
  return context;
};
