import { useUser } from "../context/UserContext";
import { useEffect } from "react";

const ComponentC = () => {
  const { user, setUser } = useUser();

  // const userUpperCase = user.toUpperCase();
  // useEffect(() => setUser("Jsdgnfghgt"));

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentC</h1>
      <h2>{user}</h2>
    </div>
  );
};

export default ComponentC;
