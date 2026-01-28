import Address from "./Address";

const Student = (props) => {
  //   console.log(props);

  return (
    <div>
      <section>
        <h2>Student</h2>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Status: {props.graduate ? "Abgeschlossen" : "Student"}</p>
      </section>
      <Address city={props.city} />
    </div>
  );
};

export default Student;
