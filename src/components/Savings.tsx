import React from "react";

export default function Savings() {
  return (
    <div className="gradient w-[300px] h-[725px] flex flex-col items-center rounded-md relative m-4 p-2">
      <h1 className="text-center text-3xl mb-1">Savings</h1>
      <div>
        <h1>Monthy Contributions</h1>
        <div className="w-[90%] h-96 p-2">
          <h1 className="text-4xl bg-[#559CB9]">$125</h1>
        </div>
      </div>
    </div>
  );
}
