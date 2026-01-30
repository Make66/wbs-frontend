import "./style.css";
import LightBulb from "./components/LightBulb";
import { useState } from "react";

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const limit = 3;

  const handleToggle = () => {
    if (!isLightOn && counter >= limit) {
      alert(
        "Du hast das Limit erreicht! Bitte Reset drücken, um den Counter zurückzusetzen!"
      );
      return;
    }

    if (!isLightOn) {
      setCounter((prev) => prev + 1);
    }

    setIsLightOn((prev) => !prev);
  };

  const handleReset = () => {
    setCounter(0);
    setIsLightOn(false);
  };

  const buttonLabel =
    !isLightOn && counter >= limit
      ? "Locked"
      : isLightOn
      ? "Turn off"
      : "Turn on";

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button onClick={handleToggle}>{buttonLabel}</button>
        <button onClick={handleReset}>Reset</button>
        <LightBulb isLightOn={isLightOn} />
      </div>
    </>
  );
};

export default App;
