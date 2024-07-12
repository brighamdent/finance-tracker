import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export function AddIncomeModal({ setItems }: AddIncomeModalProps) {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    source: "",
    amount: "",
  });

  const handleModalToggle = () => {
    setModal(!modal);
    setFormValues({
      source: "",
      amount: "",
    });
  };

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setItems((prev: IncomeItem[]) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        source: formValues.source,
        amount: parseFloat(formValues.amount),
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
        <FontAwesomeIcon icon={faPlus} className="h-6 w-full text-center" />
      </button>
      {modal && (
        <>
          <div
            onClick={handleModalToggle}
            className="fixed left-0 top-0 z-50 h-full w-full bg-black/10 backdrop-blur-sm"
          />
          <div className="gradient fixed left-1/2 top-1/2 z-50 flex h-[500px] w-[450px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-md p-4">
            <h1 className="mb-4 text-xl">Add Income Source</h1>
            <form
              onSubmit={handleSubmit}
              className="flex h-[500px] flex-col justify-around"
            >
              <div>
                <h1 className="mb-2 text-2xl">Source</h1>
                <input
                  onChange={handleChange}
                  type="text"
                  name="source"
                  value={formValues.source}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <div>
                <h1 className="mb-2 text-2xl">Amount</h1>
                <input
                  type="number"
                  name="amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
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
