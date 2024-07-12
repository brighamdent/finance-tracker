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
        className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"
      >
        <p className="ml-4 text-left">{item.source}</p>
        <p>{item.amount}</p>
      </div>
      {modal && (
        <>
          <div
            onClick={handleModalToggle}
            className="fixed left-0 top-0 z-50 h-full w-full bg-black/10 backdrop-blur-sm"
          />
          <div className="gradient fixed left-1/2 top-1/2 z-50 flex h-[500px] w-[450px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-md p-4">
            <h1 className="mb-4 text-xl">Edit Income Source</h1>
            <form
              onSubmit={handleSubmit}
              className="flex h-[500px] flex-col justify-around"
            >
              <div>
                <h1 className="mb-2 pl-2 text-left text-2xl">Source</h1>
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
                <h1 className="mb-2 pl-2 text-left text-2xl">Amount</h1>
                <input
                  type="number"
                  name="amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <div className="flex w-full justify-around">
                <button
                  type="button"
                  onClick={handleDelete}
                  className="h-18 w-36 p-2 text-xl"
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
