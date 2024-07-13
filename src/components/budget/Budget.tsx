"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPriority } from "os";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import useRowCountSetter from "src/hooks/useRowCountSetter";
import useScrollToBottom from "src/hooks/useScrollToBottom";
import { AddBudgetModal } from "./AddBudgetModal";
import { EditBudgetModal } from "./EditBudgetModal";

export default function Budget() {
  const [items, setItems] = useState([
    {
      id: 1,
      priority: 1,
      item: "Rent",
      cost: 200,
      spent: 0,
    },
    {
      id: 2,
      priority: 2,
      item: "Groceries",
      cost: 150,
      spent: 75,
    },
    {
      id: 3,
      priority: 3,
      item: "Electricity",
      cost: 50,
      spent: 50,
    },
  ]);
  const [rowCount, setRowCount] = useState(0);
  const [chartOptions, setChartOptions] = useState({
    data: items,
    // Series: Defines which chart type and data to use
    series: [{ type: "pie", angleKey: "cost" }],
    background: {
      visible: false,
    },
  });

  useRowCountSetter(7, items, setRowCount);

  useScrollToBottom("items", items);

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
          <div
            id="items"
            className="hide-scrollbar col-span-4 grid h-[300px] grid-cols-subgrid gap-3 overflow-scroll"
          >
            {items.map((item, index) => (
              <EditBudgetModal item={item} items={items} setItems={setItems} />
            ))}
            {Array.from({ length: rowCount }).map((_, index) => (
              <div className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB950] text-center"></div>
            ))}
          </div>
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
        <AddBudgetModal items={items} setItems={setItems} />
      </div>
    </div>
  );
}
