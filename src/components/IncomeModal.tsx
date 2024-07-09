"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function IncomeModal({ setItems }) {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    source: "",
    amount: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleModalToggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setItems((prev) => [
      ...prev,
      {
        source: formValues.source,
        amount: formValues.amount,
      },
    ]);
    setFormValues({
      source: "",
      amount: "",
    });
    handleModalToggle();
  };

  return (
    <div>
      <button onClick={handleModalToggle} className="h-12 w-12">
        <FontAwesomeIcon icon={faPlus} className="h-6 text-center w-full" />
      </button>
      {modal && (
        <>
          <div
            onClick={handleModalToggle}
            className="fixed top-0 left-0 h-full w-full bg-black/10 z-50 backdrop-blur-sm"
          />
          <div className=" p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[450px] h-[500px] gradient rounded-md flex flex-col items-center">
            <h1 className="text-xl mb-4">Add Income Source</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-[500px] justify-around"
            >
              <div>
                <h1 className="text-3xl mb-2">Source</h1>
                <input
                  onChange={handleChange}
                  type="text"
                  name="source"
                  value={formValues.source}
                  className="border-[2px] border-black-50 w-80 h-16 rounded-md text-[25px] "
                  required
                />
              </div>
              <div>
                <h1 className="text-3xl mb-2">Amount</h1>
                <input
                  type="text"
                  name="amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  className="border-[2px] border-black-50 w-80 h-16 rounded-md text-[25px] "
                  required
                />
              </div>
              <button type="submit" className="h-16 w-80 p-2 text-2xl">
                Add Income Source
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
