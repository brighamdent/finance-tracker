import React, { useEffect, useState } from "react";
import IncomeModal from "./IncomeModal";
import useRowCountSetter from "src/hooks/useRowCountSetter";
import useScrollToBottom from "src/hooks/useScrollToBottom";

export default function Income() {
  const [items, setItems] = useState([
    {
      source: "English Classes",
      amount: 1500,
    },
    {
      source: "Mug Company",
      amount: 300,
    },
  ]);
  const [rowCount, setRowCount] = useState(0);

  useRowCountSetter(3, items, setRowCount);

  useScrollToBottom("items", items);

  return (
    <div className=" gradient w-[700px] h-[250px] flex items-center rounded-md relative m-4">
      <div className="bg-red-400 h-40 w-40">Chart</div>
      <div className="w-full h-full">
        <div className="flex flex-col items-center  ">
          <div className="w-[90%] mt-5 mb-2 flex justify-between">
            <h1 className="text-left text-3xl ">Income</h1>
            <IncomeModal setItems={setItems} />
          </div>
          <div className="grid col-span-2 gap-3 w-[90%]  text-center">
            <h1 className="text-left ml-4">Source</h1>
            <h1 className="">Amount</h1>
            <div
              id="items"
              className="grid grid-cols-subgrid col-span-4 gap-3 h-32 overflow-scroll hide-scrollbar"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"
                >
                  <p className="text-left ml-4">{item.source}</p>
                  <p>{item.amount}</p>
                </div>
              ))}
              {Array.from({ length: rowCount }).map((_, index) => (
                <div className="bg-[#559CB950] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
