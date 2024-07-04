import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Expenses() {
  const items = [
    {
      priority: 1,
      item: "Rent",
      cost: 200,
      amountspent: 0,
    },
    {
      priority: 2,
      item: "Groceries",
      cost: 150,
      amountspent: "$75",
    },
    {
      priority: 3,
      item: "Electricity",
      cost: 50,
      amountspent: "$50",
    },
  ];
  return (
    <div className="gradient w-[700px] h-[443px] flex flex-col items-center rounded-md relative m-4">
      <h1 className="text-center text-3xl mb-2">Expenses</h1>
      <div className="grid col-span-4 gap-3 w-[90%] text-center">
        <h1 className="">Priority</h1>
        <h1 className="text-left">Item</h1>
        <h1 className="">Cost</h1>
        <h1 className="">Spent TD</h1>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"
          >
            <p>{item.priority}</p>
            <p className="text-left">{item.item}</p>
            <p>{item.cost}</p>
            <p>{item.amountspent}</p>
          </div>
        ))}
        <div className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
        <div className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
        <div className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
      </div>
      <div className="w-[90%] h-24 absolute bottom-2 flex items-center justify-around">
        <div className="flex-col flex items-center justify-around h-full w-[90%] ">
          <div className="bg-[#559CB9] text-center rounded-md w-full h-9 flex items-center p-2">
            <h1>Total Budgeted Expenses: $1,235</h1>
          </div>
          <div className="bg-[#559CB9] text-center rounded-md w-full h-9 flex items-center p-2">
            <h1>Income - Budgeted Expenses: $142</h1>
          </div>
        </div>
        <button className="h-[80%] w-20 ml-4">
          <FontAwesomeIcon icon={faPlus} className="h-1/2 text-center w-full" />
        </button>
      </div>
    </div>
  );
}
