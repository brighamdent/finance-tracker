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
    <div className="gradient relative m-4 flex h-[725px] w-[500px] flex-col items-center rounded-md">
      <AgCharts
        className="h-1/3 bg-transparent text-blue-50"
        options={chartOptions}
      />
      <div className="flex w-full flex-col items-center">
        <h1 className="mb-1 text-center text-3xl">Budget</h1>
        <div className="col-span-4 grid w-[90%] gap-3 text-center">
          <h1 className="">Priority</h1>
          <h1 className="text-left">Item</h1>
          <h1 className="">Cost</h1>
          <h1 className="">Spent TD</h1>
          {items.map((item, index) => (
            <div
              key={index}
              className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"
            >
              <p>{item.priority}</p>
              <p className="text-left">{item.item}</p>
              <p>{item.cost}</p>
              <p>{item.amountspent}</p>
            </div>
          ))}
          <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"></div>
          <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"></div>
          <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"></div>
          <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"></div>
        </div>
      </div>
      <div className="absolute bottom-2 flex h-24 w-[90%] items-center justify-around">
        <div className="flex h-full w-[100%] flex-col items-center justify-around">
          <div className="flex h-9 w-full items-center rounded-md bg-[#559CB9] p-2 text-center">
            <h1>Total Budgeted Expenses: $1,235</h1>
          </div>
          <div className="flex h-9 w-full items-center rounded-md bg-[#559CB9] p-2 text-center">
            <h1>Income - Budgeted Expenses: $142</h1>
          </div>
        </div>
        <button className="ml-4 h-20 w-20">
          <FontAwesomeIcon icon={faPlus} className="h-1/2 w-full text-center" />
        </button>
      </div>
    </div>
  );
}
