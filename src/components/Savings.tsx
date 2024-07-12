import React from "react";

export default function Savings() {
  return (
    <div className="gradient relative m-4 flex h-[725px] w-[300px] flex-col items-center justify-between rounded-md p-2">
      <h1 className="mb-4 text-center text-3xl">Savings</h1>
      <div className="flex w-full flex-col items-center">
        <h1 className="mb-2 text-xl">Monthy Contributions</h1>
        <div className="w-[90%] rounded-md bg-[#559CB9] p-2">
          <h1 className="w-full text-center text-4xl">$125</h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <h1 className="mb-2 text-xl">Contributions To Date</h1>
        <div className="w-[90%] rounded-md bg-[#559CB9] p-2">
          <h1 className="w-full text-center text-4xl">$325</h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <h1 className="mb-2 text-xl">Savings Goal</h1>
        <div className="w-[90%] rounded-md bg-[#559CB9] p-2">
          <h1 className="w-full text-center text-4xl">$125</h1>
        </div>
        <h3>Edit Savings Goal</h3>
      </div>
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-2 text-xl">You will reach your goal in:</h2>
        <div className="w-[90%] rounded-md bg-[#559CB9] p-2">
          <h1 className="w-full text-center text-4xl">4 Months</h1>
        </div>
      </div>
      <div className="mt-8 h-48 w-48 bg-red-300"></div>
    </div>
  );
}
