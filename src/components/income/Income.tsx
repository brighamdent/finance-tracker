"use client";
import React, { useEffect, useState } from "react";
import useRowCountSetter from "src/hooks/useRowCountSetter";
import useScrollToBottom from "src/hooks/useScrollToBottom";
import { AddIncomeModal } from "./AddIncomeModal";
import { EditIncomeModal } from "./EditIncomeModal";

export default function Income() {
  const [items, setItems] = useState([
    {
      id: 1,
      source: "English Classes",
      amount: 1500,
    },
    {
      id: 2,
      source: "Mug Company",
      amount: 300,
    },
  ]);
  const [rowCount, setRowCount] = useState(0);

  useRowCountSetter(3, items, setRowCount);

  useScrollToBottom("items", items);

  return (
    <div className="gradient relative m-4 flex h-[250px] w-[700px] items-center rounded-md">
      <div className="h-40 w-40 bg-red-400">Chart</div>
      <div className="h-full w-full">
        <div className="flex flex-col items-center">
          <div className="mb-2 mt-5 flex w-[90%] justify-between">
            <h1 className="text-left text-3xl">Income</h1>
            <AddIncomeModal setItems={setItems} />
          </div>
          <div className="col-span-2 grid w-[90%] gap-3 text-center">
            <h1 className="ml-4 text-left">Source</h1>
            <h1 className="">Amount</h1>
            <div
              id="items"
              className="hide-scrollbar col-span-4 grid h-32 grid-cols-subgrid gap-3 overflow-scroll"
            >
              {items.map((item, index) => (
                <EditIncomeModal
                  items={items}
                  item={item}
                  setItems={setItems}
                />
              ))}
              {Array.from({ length: rowCount }).map((_, index) => (
                <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB950] text-center"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
