import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export function EditBudgetModal({
  item,
  items,
  setItems,
}: EditBudgetModalProps) {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    priority: item.priority,
    item: item.item,
    cost: item.cost,
    spent: item.spent,
  });

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleModalToggle = () => {
    setModal(!modal);
    setFormValues({
      priority: item.priority,
      item: item.item,
      cost: item.cost,
      spent: item.spent,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newArray = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          priority: formValues.priority,
          item: formValues.item,
          cost: formValues.cost,
          spent: formValues.spent,
        };
      } else return i;
    });
    const [movedElement] = newArray.splice(item.priority - 1, 1);

    newArray.splice(formValues.priority - 1, 0, movedElement);
    setItems(newArray);
    rewritePriority();
    handleModalToggle();
  };

  const handleDelete = () => {
    const newArray = items.filter((i) => i.id !== item.id);

    setItems(newArray);
    handleModalToggle();
    rewritePriority();
  };

  const rewritePriority = () => {
    setItems((prev) =>
      prev.map((i, index) => {
        return {
          ...i,
          priority: index + 1,
        };
      }),
    );
  };

  return (
    <>
      <div
        onClick={handleModalToggle}
        className="col-span-4 grid h-8 grid-cols-subgrid rounded-md border-4 border-transparent bg-[#559CB9] text-center"
      >
        <p>{item.priority}</p>
        <p className="text-left">{item.item}</p>
        <p>{item.cost}</p>
        <p>{item.spent}</p>
      </div>
      {modal && (
        <>
          <div
            onClick={handleModalToggle}
            className="fixed left-0 top-0 z-50 h-full w-full bg-black/10 backdrop-blur-sm"
          />
          <div className="gradient fixed left-1/2 top-1/2 z-50 flex h-[600px] w-[450px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-md p-4">
            <FontAwesomeIcon
              icon={faX}
              className="absolute right-4 top-4 rounded-md p-2 hover:bg-white/10"
              onClick={handleModalToggle}
            />
            <h1 className="mb-4 text-xl">Edit Budget Item</h1>
            <form
              onSubmit={handleSubmit}
              className="flex h-[500px] flex-col justify-around"
            >
              <div className="flex w-40 items-center pl-2">
                <h1 className="text-2xl">Prority</h1>
                <select
                  name="priority"
                  value={formValues.priority}
                  onChange={handleChange}
                  className="ml-6 h-10 w-10 rounded-md bg-white text-center text-xl text-[#264653]"
                >
                  {items.map((_, index) => (
                    <option value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <h1 className="mb-2 pl-2 text-left text-2xl">Item</h1>
                <input
                  onChange={handleChange}
                  type="text"
                  name="item"
                  value={formValues.item}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <div>
                <h1 className="mb-2 pl-2 text-left text-2xl">Cost</h1>
                <input
                  type="number"
                  name="cost"
                  value={formValues.cost}
                  onChange={handleChange}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <div>
                <h1 className="mb-2 pl-2 text-left text-2xl">Spent</h1>
                <input
                  type="number"
                  name="spent"
                  value={formValues.spent}
                  onChange={handleChange}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <div className="flex w-full justify-around mt-4">
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
