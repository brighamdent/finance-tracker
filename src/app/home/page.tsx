import React from "react";
import background from "../../../public/main-photo.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "src/components/Navbar";

const page = () => {
  return (
    <div className="h-screen bg-white relative">
      <Navbar />
      <Image src={background} alt="" className="object-cover h-2/3" />
      <div className="absolute inset-20 flex flex-col font-bold mt-10">
        <h1 className="text-[4rem]">Dream Big and Enjoy Life</h1>
        <h2 className="text-[2rem] w-96">
          Say goodbye to financial stress with our powerful budgeting tools.
        </h2>
        <button className="h-12 flex items-center justify-around w-48 p-2 mt-8">
          <FontAwesomeIcon className="h-6" icon={faLock} />
          <h1 className="text-xl">Sign Up Free</h1>
        </button>
      </div>
      <div className="flex justify-around text-[#264653] w-full mt-4 text-xl">
        <h1>Budget Builder</h1>
        <h1>Expense Tracker</h1>
        <h1>Income Logger</h1>
      </div>
      <div className="bg-[#264653]  h-14 absolute w-full bottom-0"></div>
    </div>
  );
};

export default page;
