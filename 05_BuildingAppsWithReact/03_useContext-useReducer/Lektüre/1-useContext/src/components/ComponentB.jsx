import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentB</h1>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
