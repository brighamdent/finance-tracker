import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute top-0 flex h-16 w-full items-center justify-between bg-[#25264653] p-2 pl-20 pr-20">
      <h1 className="text-2xl">PennyArc</h1>
      <div className="flex items-center">
        <Link href={"/login"}>
          <div className="flex items-center">
            <FontAwesomeIcon className="h-5" icon={faLock} />
            <h1 className="ml-4 text-xl">Login</h1>
          </div>
        </Link>
        <Link href={"/signup"}>
          <button className="ml-4 flex h-8 w-36 items-center justify-center p-2">
            <FontAwesomeIcon className="h-5" icon={faLock} />
            <h1 className="ml-4 text-xl">Sign Up</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
