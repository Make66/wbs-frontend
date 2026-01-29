import "./index.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, color, recommend, button } = e.target.elements;

    try {
      button.disabled = true;

      if (!name.value.trim()) throw new Error("Name is required");
      if (name.value.trim().length < 3)
        throw new Error("Name must be at least 2 characters long");
      if (!age.value.trim()) throw new Error("Age is required");
      if (age.value < 5 || age.value > 120)
        throw new Error("Age must be between 5 and 120");

      const surveyData = {
        name: name.value.trim(),
        age: age.value.trim(),
        color: color.value,
        recommend: recommend.checked,
      };

      console.log(surveyData);

      e.target.reset();
    } catch (error) {
      alert(error.message);
    } finally {
      button.disabled = false;
    }
  };

  return (
    <div className="app">
      <h1>Mini Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name <input type="text" name="name" id="name" />
        </label>
        <label>
          Age
          <input
            type="text"
            name="age"
            id="age"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>
        <label>
          Favorite Color
          <select name="color" defaultValue="">
            <option value="" disabled>
              --Select--
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <fieldset>
          <legend>Would you recommend our site?</legend>
          <label className="checkbox">
            <input type="checkbox" name="recommend" value="yes" />
            Yes / No
          </label>
        </fieldset>
        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
