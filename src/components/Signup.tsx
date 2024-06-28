"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import background from "../../public/main-photo.jpg";
import Image from "next/image";

export const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { currUserData, signup } = useAuth();

  useEffect(() => {
    console.log(currUserData);
  }, [currUserData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { firstName, lastName, email, password, confirmPassword } =
        formValues;
      if (password != confirmPassword) {
        throw new Error("Passwords did not match");
      }

      signup(email, password).then(async ({ id }) => {
        console.log(id);
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, email, firstName, lastName }),
        });
        if (!response) {
          throw new Error("Failed to create user");
        }
        const data = await response.json();
        console.log(`New User: ${JSON.stringify(data)}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen relative bg-[#264653]">
      <div className="h-2/3 overflow-hidden relative">
        <Image
          src={background}
          alt=""
          className="object-cover h-full w-full transform scale-150"
          style={{ objectPosition: "left 30%" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[600px] rounded-md w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around items-center"
        >
          <div>
            <label> First Name: </label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label> Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label> email: </label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label> password: </label>
            <input
              type="text"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm Password: </label>
            <input
              type="text"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-white ml-2 text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
