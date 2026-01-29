import Grade from "./Grade";

const Student = ({
  firstName,
  lastName,
  age,
  course,
  city,
  picture,
  graduate,
  gpa,
}) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={picture}
        alt={`${firstName} ${lastName}`}
      />
      <div className="card-body">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Course: {course}</p>
        <p>Status: {graduate ? "Alumni" : "Student"}</p>
        <Grade gpa={gpa} />
      </div>
    </div>
  );
};

export default Student;
