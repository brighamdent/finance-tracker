"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPriority } from "os";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

export default function Budget() {
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
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
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: "pie", angleKey: "cost" }],
    background: {
      visible: false,
    },
  });
  const items = [
    {
      priority: 1,
      item: "Rent",
      cost: "$200",
      amountspent: "$0",
    },
    {
      priority: 2,
      item: "Groceries",
      cost: "$150",
      amountspent: "$75",
    },
    {
      priority: 3,
      item: "Electricity",
      cost: "$50",
      amountspent: "$50",
    },
  ];
  return (
    <div className="gradient w-[500px] h-[725px] flex flex-col items-center rounded-md relative m-4">
      <AgCharts
        className="h-1/3 bg-transparent text-blue-50"
        options={chartOptions}
      />
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-center text-3xl">Budget</h1>
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
          <div className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"></div>
        </div>
      </div>
      <div className="w-[90%] h-24 absolute bottom-2 flex items-center justify-around">
        <div className="flex-col flex items-center justify-around h-full w-[75%] ">
          <div className="bg-[#559CB9] text-center rounded-md w-full h-9 flex items-center p-2">
            <h1>Total Budgeted Expenses: $1,235</h1>
          </div>
          <div className="bg-[#559CB9] text-center rounded-md w-full h-9 flex items-center p-2">
            <h1>Income - Budgeted Expenses: $142</h1>
          </div>
        </div>
        <button className="h-[80%] w-20">
          <FontAwesomeIcon icon={faPlus} className="h-1/2 text-center w-full" />
        </button>
      </div>
    </div>
  );
}
