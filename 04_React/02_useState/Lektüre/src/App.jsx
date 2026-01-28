import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Mario");
  // let variableName = "Mario";

  const toggleName = () => {
    setName((prev) => (prev === "Mario" ? "Luigi" : "Mario"));
    console.log(`Innerhalb der Funktion: ${name}`);
  };

  console.log(`Außerhalb der Funktion: ${name}`);

  return (
    <>
      <h1>State: {name}</h1>
      {/* <h1>variableName: {variableName}</h1> */}
      <button onClick={toggleName}>Toggle state</button>
    </>
  );
};

export default App;
