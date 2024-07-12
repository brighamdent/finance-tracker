"use client";
import background from "../../public/main-photo.jpg";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const { login } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { email, password } = formValues;
      login(email, password).then(() => {
        router.push("/app");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gradient relative h-screen">
      <div className="relative h-2/3 overflow-hidden">
        <Image
          src={background}
          alt=""
          className="h-full w-full scale-150 transform object-cover"
          style={{ objectPosition: "left 30%" }}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-[600px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-md bg-white p-8 text-[#264653]">
        <form
          onSubmit={handleSubmit}
          className="flex h-[90%] flex-col items-center justify-around"
        >
          <h1 className="self-start text-[40px] text-[#264653]">Login</h1>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className="border-black-50 h-16 w-96 rounded-md border-[2px] p-2 text-[25px]"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className="border-black-50 h-16 w-96 rounded-md border-[2px] p-2 text-[25px]"
            />
          </div>
          <div className="self-start">
            <Link href={"/signup"}>
              <h1>Don't have an account? Sign Up</h1>
            </Link>
            <h1 className="mt-2">Forgot Password?</h1>
          </div>
          <button
            type="submit"
            className="flex h-16 w-96 items-center justify-center p-2 text-3xl text-white"
          >
            <FontAwesomeIcon className="mr-4 h-6" icon={faLock} />
            <h1>Login</h1>
          </button>
        </form>
      </div>
    </div>
  );
};
