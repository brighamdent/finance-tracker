"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> First Name: </label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <label> Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
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
