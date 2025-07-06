import Link from "next/link";
import React from "react";
import { toast } from "sonner";

function IncomeItem({ budget, onDelete }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  const handleDelete = () => {
    onDelete(budget.id);
    toast.success("Income source deleted");
  };
  return (
    <div
      className="p-5 border rounded-2xl
    hover:shadow-md cursor-pointer h-[170px] relative"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg"> ${budget.amount}</h2>
      </div>
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={handleDelete}
        title="Delete Income Source"
      >
        &#10006;
      </button>
    </div>
  );
}

export default IncomeItem;
