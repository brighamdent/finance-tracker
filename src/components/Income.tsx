import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Income() {
  const items = [
    {
      source: "English Classes",
      amount: 1500,
    },
    {
      source: "Mug Company",
      amount: 300,
    },
  ];
  return (
    <div className=" gradient w-[700px] h-[250px] flex items-center rounded-md relative m-4">
      <div className="bg-red-400 h-40 w-40">Chart</div>
      <div className="w-full h-full">
        <div className="flex flex-col items-center  ">
          <div className="w-[90%] mt-5 mb-2 flex justify-between">
            <h1 className="text-left text-3xl ">Income</h1>
            <button className="h-12 w-12">
              <FontAwesomeIcon
                icon={faPlus}
                className="h-6 text-center w-full"
              />
            </button>
          </div>
          <div className="grid col-span-2 gap-3 w-[90%] text-center">
            <h1 className="text-left ml-4">Source</h1>
            <h1 className="">Amount</h1>
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"
              >
                <p className="text-left ml-4">{item.source}</p>
                <p>{item.amount}</p>
              </div>
            ))}
            <div className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
