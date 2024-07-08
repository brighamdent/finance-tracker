"use client";
import React from "react";
import Image from "next/image";
import background from "../../../public/main-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Budget from "src/components/Budget";
import Income from "src/components/Income";
import Expenses from "src/components/Expenses";
import Savings from "src/components/Savings";
import { useAuth } from "src/context/AuthContext";

export default function page() {
  const { currUserData } = useAuth();
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt=""
          layout="fill"
          objectFit="cover"
          priority={true}
          className="transform scale-[3]"
          style={{ objectPosition: "top" }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className=" pl-20 pr-20 p-2 h-16 items-center w-full bg-[#25264653] absolute top-0 flex justify-between">
          <h1>{currUserData?.email}</h1>
          <h1 className="text-2xl">PennyArc</h1>
          <div className="flex justify-around items-center w-44">
            <h1 className="text-5xl">June</h1>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="h-6" icon={faCaretUp} />
              <FontAwesomeIcon className="h-6" icon={faCaretDown} />
            </div>
          </div>
          <div className="flex items-center">
            <button className="h-8 flex items-center justify-center p-2 ml-4">
              <FontAwesomeIcon className="h-6" icon={faGauge} />
              <h1 className="text-xl ml-4">Dashboard</h1>
            </button>
          </div>
        </div>
        <div className="flex absolute top-24">
          <Budget />
          <div className="flex flex-col">
            <Income />
            <Expenses />
          </div>
          <Savings />
        </div>
      </div>
    </div>
  );
}
