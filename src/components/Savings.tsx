import React from "react";

export default function Savings() {
  return (
    <div className="gradient w-[300px] h-[725px] flex flex-col items-center justify-between rounded-md relative m-4 p-2 ">
      <h1 className="text-center text-3xl mb-4">Savings</h1>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl mb-2">Monthy Contributions</h1>
        <div className="w-[90%] bg-[#559CB9] rounded-md p-2">
          <h1 className="text-4xl w-full text-center ">$125</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl mb-2">Contributions To Date</h1>
        <div className="w-[90%] bg-[#559CB9] rounded-md p-2">
          <h1 className="text-4xl w-full text-center ">$325</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl mb-2">Savings Goal</h1>
        <div className="w-[90%] bg-[#559CB9] rounded-md p-2">
          <h1 className="text-4xl w-full text-center ">$125</h1>
        </div>
        <h3>Edit Savings Goal</h3>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-xl mb-2">You will reach your goal in:</h2>
        <div className="w-[90%] bg-[#559CB9] rounded-md p-2">
          <h1 className="text-4xl w-full text-center ">4 Months</h1>
        </div>
      </div>
      <div className="bg-red-300 w-48 h-48 mt-8"></div>
    </div>
  );
}
