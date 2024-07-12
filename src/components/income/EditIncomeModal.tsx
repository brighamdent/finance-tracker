import React, { useState } from "react";

export function EditIncomeModal({
  item,
  items,
  setItems,
}: EditIncomeModalProps) {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    source: item.source,
    amount: item.amount,
  });

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleModalToggle = () => {
    setModal(!modal);
    setFormValues({
      source: item.source,
      amount: item.amount,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newArray = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          source: formValues.source,
          amount: formValues.amount,
        };
      } else return i;
    });

    setItems(newArray);
    handleModalToggle();
  };

  const handleDelete = () => {
    const newArray = items.filter((i) => i.id !== item.id);

    setItems(newArray);
    handleModalToggle();
  };

  return (
    <>
      <div
        onClick={handleModalToggle}
        className="bg-[#559CB9] h-8 text-center border-4 grid grid-cols-subgrid col-span-4 border-transparent rounded-md"
      >
        <p className="text-left ml-4">{item.source}</p>
        <p>{item.amount}</p>
      </div>
      {modal && (
        <>
          <div
            onClick={handleModalToggle}
            className="fixed top-0 left-0 h-full w-full bg-black/10 z-50 backdrop-blur-sm"
          />
          <div className=" p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[450px] h-[500px] gradient rounded-md flex flex-col items-center">
            <h1 className="text-xl mb-4">Edit Income Source</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-[500px] justify-around"
            >
              <div>
                <h1 className="text-2xl text-left pl-2 mb-2">Source</h1>
                <input
                  onChange={handleChange}
                  type="text"
                  name="source"
                  value={formValues.source}
                  className="border-[2px] text-[#264653] border-black-50 w-80 h-16 rounded-md text-[25px] "
                  required
                />
              </div>
              <div>
                <h1 className="text-2xl text-left pl-2 mb-2">Amount</h1>
                <input
                  type="number"
                  name="amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  className="border-[2px] border-black-50 w-80 h-16 rounded-md text-[#264653] text-[25px] "
                  required
                />
              </div>
              <div className="flex w-full justify-around">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="h-18 w-36 p-2 text-xl "
                >
                  Delete Source
                </button>
                <button type="submit" className="h-18 w-36 p-2 text-xl">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
