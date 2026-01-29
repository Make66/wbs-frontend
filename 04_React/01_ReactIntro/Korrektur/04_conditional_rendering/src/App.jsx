import Student from "./components/Student";
import "./index.css";

const studentData = {
  id: 1,
  firstName: "Testy",
  lastName: "McTest",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
  gpa: 50,
  graduate: false,
};

const App = () => {
  return (
    <div>
      <Student {...studentData} />
    </div>
  );
};

export default App;
