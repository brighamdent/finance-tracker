import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" pl-20 pr-20 p-2 h-16 items-center w-full bg-[#25264653] absolute top-0 flex justify-between">
      <h1 className="text-2xl">PennyArc</h1>
      <div className="flex items-center">
        <Link href={"/login"}>
          <div className="flex items-center">
            <FontAwesomeIcon className="h-5" icon={faLock} />
            <h1 className="ml-4 text-xl">Login</h1>
          </div>
        </Link>
        <Link href={"/signup"}>
          <button className="h-8 flex items-center justify-center w-36 p-2 ml-4">
            <FontAwesomeIcon className="h-5" icon={faLock} />
            <h1 className="text-xl ml-4">Sign Up</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
