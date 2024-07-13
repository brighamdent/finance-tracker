import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export function AddBudgetModal({ items, setItems }: AddBudgetModalProps) {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    priority: items.length + 1,
    item: "",
    cost: "",
    spent: "",
  });

  const handleModalToggle = () => {
    setModal(!modal);
    setFormValues({
      priority: items.length + 1,
      item: "",
      cost: "",
      spent: "",
    });
  };

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formValues.priority);
    setItems((prev: BudgetItem[]) => {
      const newItems = [...prev];

      // Insert the new item at the specified priority index
      newItems.splice(formValues.priority - 1, 0, {
        id: newItems.length ? newItems[newItems.length - 1].id + 1 : 1,
        priority: formValues.priority,
        item: formValues.item,
        cost: parseFloat(formValues.cost),
        spent: parseFloat(formValues.spent),
      });

      return newItems;
    });
    rewritePriority();
    setFormValues({
      priority: items.length + 1,
      item: "",
      cost: "",
      spent: "",
    });
    handleModalToggle();
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
    <div>
      <button onClick={handleModalToggle} className="ml-4 h-20 w-20">
        <FontAwesomeIcon icon={faPlus} className="h-1/2 w-full text-center" />
      </button>
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
            <h1 className="mb-4 text-xl">Add Budget Item</h1>
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
                  {Array.from({ length: items.length + 1 }).map((_, index) => (
                    <option value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <h1 className="mb-2 pl-2 text-2xl">Item</h1>
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
                <h1 className="mb-2 pl-2 text-2xl">Cost</h1>
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
                <h1 className="mb-2 pl-2 text-2xl">Spent</h1>
                <input
                  type="number"
                  name="spent"
                  value={formValues.spent}
                  onChange={handleChange}
                  className="border-black-50 h-16 w-80 rounded-md border-[2px] text-[25px] text-[#264653]"
                  required
                />
              </div>
              <button type="submit" className="mt-4 h-16 w-80 p-2 text-2xl">
                Add Budget Item
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
