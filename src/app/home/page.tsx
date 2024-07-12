import React from "react";
import background from "../../../public/main-photo.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "src/components/Navbar";

const page = () => {
  return (
    <div className="relative h-screen bg-white">
      <Navbar />
      <Image src={background} alt="" className="h-2/3 object-cover" />
      <div className="absolute inset-20 mt-10 flex flex-col font-bold">
        <h1 className="text-[4rem]">Dream Big and Enjoy Life</h1>
        <h2 className="w-96 text-[2rem]">
          Say goodbye to financial stress with our powerful budgeting tools.
        </h2>
        <button className="mt-8 flex h-12 w-48 items-center justify-around p-2">
          <FontAwesomeIcon className="h-6" icon={faLock} />
          <h1 className="text-xl">Sign Up Free</h1>
        </button>
      </div>
      <div className="mt-4 flex w-full justify-around text-xl text-[#264653]">
        <h1>Budget Builder</h1>
        <h1>Expense Tracker</h1>
        <h1>Income Logger</h1>
      </div>
      <div className="gradient absolute bottom-0 h-14 w-full"></div>
    </div>
  );
};

export default page;
