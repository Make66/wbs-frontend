import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 text-sm text-blue-600 hover:underline"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default Home;
