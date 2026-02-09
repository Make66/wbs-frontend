import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "../context/ThemeContext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="m-1 p-4 border-black border-2">
          <h1 className="font-bold">ComponentA</h1>
          <ComponentB />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default ComponentA;
