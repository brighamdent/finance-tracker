"use client";
import background from "../../public/main-photo.jpg";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
    <div className="h-screen relative bg-[#264653]">
      <div className="h-2/3 overflow-hidden relative">
        <Image
          src={background}
          alt=""
          className="object-cover h-full w-full transform scale-150"
          style={{ objectPosition: "left 30%" }}
        />
      </div>
      <div className="absolute flex flex-col items-center text-[#264653] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[600px] rounded-md w-[500px] p-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around items-center h-[90%] "
        >
          <h1 className="self-start text-[#264653] text-[40px]">Login</h1>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className="border-[2px] border-black-50 w-96 h-16 rounded-md p-2 text-[25px] "
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className="border-[2px] border-black-50 w-96 h-16 rounded-md p-2 text-[25px] "
            />
          </div>
          <div className="self-start">
            <h1>Don't have an account? Sign Up</h1>
            <h1 className="mt-2">Forgot Password?</h1>
          </div>
          <button
            type="submit"
            className=" flex items-center justify-center h-16 w-96 p-2 text-3xl text-white"
          >
            <FontAwesomeIcon className="h-6 mr-4" icon={faLock} />
            <h1>Login</h1>
          </button>
        </form>
      </div>
    </div>
  );
};
