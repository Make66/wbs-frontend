import ComponentC from "./ComponentC";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

const ComponentB = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentB</h1>
      <h2>{user}</h2>
      <h3>{theme}</h3>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
