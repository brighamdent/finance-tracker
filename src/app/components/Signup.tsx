"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";

export const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signup } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { email, password, confirmPassword } = formValues;
      if (password != confirmPassword) {
        throw new Error("Passwords did not match");
      }
      signup(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <label>Confirm Password: </label>
        <input
          type="text"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="bg-white ml-2 text-black">
          Submit
        </button>
      </form>
    </div>
  );
};
