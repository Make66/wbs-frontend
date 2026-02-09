import { useUser } from "../context/UserContext";

const ComponentC = () => {
  const { user, age, incrementAge, decrementAge } = useUser();

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentC (mit Context)</h1>

      <div className="my-3 p-3 bg-gray-50 rounded">
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700">Benutzerprofil:</p>
          <p className="text-sm">Name: {user}</p>
          <p className="text-sm">Alter: {age}</p>
          <p className="text-sm">Geburtsjahr: {birthYear}</p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={decrementAge}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 border border-blue-200"
          >
            -1 Jahr
          </button>
          <button
            onClick={incrementAge}
            className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100 border border-green-200"
          >
            +1 Jahr
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentC;
