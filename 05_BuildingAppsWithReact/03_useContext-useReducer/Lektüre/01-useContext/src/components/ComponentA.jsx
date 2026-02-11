import ComponentB from "./ComponentB";
import { UserProvider } from "../context/UserContext";

const ComponentA = () => {
  return (
    <UserProvider>
      <div className="m-1 p-4 border-black border-2">
        <h1 className="font-bold">ComponentA</h1>
        <ComponentB />
      </div>
    </UserProvider>
  );
};

export default ComponentA;
