"use client";
import React, { useState } from "react";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import { useAppDispatch } from "../Redux/hooks";
import { createChartValue } from "../Redux/chart/chartSlice";

interface SalesInfo {
  sales: number | null;
  purchase: number | null;
  month: string;
}

const Page = () => {

  const dispatch = useAppDispatch();


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [salesInfo, setSalesInfo] = useState<SalesInfo>({
    sales: null,
    purchase: null,
    month: "",
  });

  const { sales, purchase, month } = salesInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSalesInfo({
      ...salesInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createChartValue({
      // id : crypto.randomUUID(),
      sales : sales,
      purchase : purchase,
      month : month
    }));
    setSalesInfo({
      sales : null,
      purchase : null,
      month : ""
    })
    console.log("set Values");
  };

  console.log(salesInfo, "Info");
  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <div className="w-[95%] h-[95%] flex items-center justify-between  flex-wrap  relative overflow-x-auto shadow-md sm:rounded-lg ">
        <div className="w-[100%] h-[25rem] flex items-center justify-center flex-col my-2 p-2 bg-slate-900 border-2 border-slate-800">
          <div className="w-[100%] h-[15%] flex items-center justify-end my-2 p-2">
            <button
              className="px-5 py-2 bg-slate-400 text-black"
              onClick={togglePopup}
            >
              Add
            </button>
          </div>
          <div className="w-[100%] h-[85%] flex items-center justify-center pb-2">
            {" "}
            <LineChart />
          </div>
        </div>
        <div className="w-[31%] h-[20rem] flex items-center justify-center flex-col my-2 p-2 bg-slate-900 border-2 border-slate-800">
          <div className="w-full h-[10%] flex items-center justify-start my-2">
            <h1 className="text-md text-slate-300 font-semibold">
              Monthly Expenses
            </h1>
          </div>
          <div className="w-full h-[70%] flex items-center justify-center">
            <PieChart />
          </div>
        </div>
        <div className="w-[65%] h-[20rem] flex items-center justify-center my-2 p-2 bg-slate-900 border-2 border-slate-800">
          <BarChart />
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-[25rem] h-[25rem] shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Data</h2>

            <div>
              <label className="block mb-2 text-gray-700">
                Sales (Select 0 to 20)
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Sales value"
                name="sales"
                value={sales ?? ""}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-gray-700">
                Purchase (Select 0 to 20)
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Purchase value"
                name="purchase"
                value={purchase ?? ""}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-gray-700">Select Month</label>
              <select
               
                id=""
                className="w-full p-2 border border-gray-300 rounded-md"
                name="month"
                value={month}
                onChange={handleChange}
              >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded mr-2"
                onClick={togglePopup}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
