import ComponentA from "./components/ComponentA";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        useReducer mit Prop Drilling (ohne Context)
      </h1>
      <ComponentA />
    </div>
  );
};

export default App;
