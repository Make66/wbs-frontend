import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentB</h1>
      <ComponentC
        user={props.user}
        age={props.age}
        incrementAge={props.incrementAge}
        decrementAge={props.decrementAge}
        doubleAge={props.doubleAge}
      />
    </div>
  );
};

export default ComponentB;
