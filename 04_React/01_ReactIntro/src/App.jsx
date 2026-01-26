import Student from "./components/Student";

const students = [
  { name: "John", age: 25, city: "New York", graduate: true },
  { name: "Jane", age: 30, city: "Boston", graduate: false },
  { name: "Jack", age: 25, city: "Washington", graduate: true },
  { name: "Jil", age: 26, city: "New York", graduate: false },
];

const App = () => {
  const handleClick = (e) => {
    console.log("Clicked button — SyntheticEvent:", e);
  };

  return (
    <>
      <h1
        style={{ backgroundColor: "#ff8a00", padding: "0.75rem 1.25rem" }}
        className="text-3xl font-bold underline"
      >
        React Intro
      </h1>
      {students.map((element, index) => (
        <Student
          key={index}
          id={index}
          name={element.name}
          age={element.age}
          city={element.city}
          graduate={element.graduate}
        />
      ))}
      <button
        onClick={handleClick}
        className="w-full py-2 bg-red-400 text-white rounded hover:bg-red-700"
      >
        Click me (and check the console)
      </button>
    </>
  );
};

export default App;
