"use client";
import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, email, password } = formValues;
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!response) {
        throw new Error("Failed to create user");
      }
      const data = await response.json();
      console.log(`New User: $`);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name: </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label> email: </label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <label> password: </label>
        <input
          type="text"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-white ml-2 text-black">
          Submit
        </button>
      </form>
    </div>
  );
}
