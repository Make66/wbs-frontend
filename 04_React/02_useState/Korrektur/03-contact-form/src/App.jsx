import { useState } from "react";

const defaultFormData = {
  fullName: "",
  email: "",
  tel: "",
  msg: "",
};

const App = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.tel ||
      !formData.msg
    ) {
      alert("Alle Felder werden benötigt!");
      return;
    }

    setFormData(defaultFormData);
  };

  return (
    <div>
      <h1>Kontaktformular</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: " .5rem",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            name="fullName"
            type="text"
            onChange={handleChange}
            value={formData.fullName}
          />
        </label>

        <label>
          E-Mail:
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={formData.email}
          />
        </label>

        <label>
          Telefon:
          <input
            name="tel"
            type="text"
            onChange={handleChange}
            value={formData.tel}
          />
        </label>

        <label>
          Nachricht:
          <textarea name="msg" onChange={handleChange} value={formData.msg} />
        </label>

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default App;
