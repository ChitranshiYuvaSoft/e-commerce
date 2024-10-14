import AreaChart from "@/app/components/AreaChart";
import LineChart from "@/app/components/LineChart";
import PieChart from "@/app/components/PieChart";
import RealTimeChart from "@/app/components/RealTimeChart";
import React from "react";

const page = () => {
  
  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <div className="w-[95%] h-[95%] flex items-center justify-between  flex-wrap  relative overflow-x-auto shadow-md sm:rounded-lg ">
        <div className="w-[100%] h-[22rem] flex items-center justify-center  my-2 p-2 bg-slate-900 border-2 border-slate-800">
          <LineChart />
        </div>
        <div className="w-[31%] h-[15rem] flex items-center justify-center flex-col my-2 p-2   bg-slate-900 border-2 border-slate-800">
          <div className="w-full h-[10%] flex items-center justify-start my-2">
            <h1 className="text-md text-slate-300 font-semibold">
              Monthly Expenses
            </h1>
          </div>
          <div className="w-full h-[80%] flex items-start justify-center">
            {" "}
            <PieChart />
          </div>
        </div>
        <div className="w-[31%] h-[15rem] flex items-center justify-center  my-2 p-2   bg-slate-900 border-2 border-slate-800">
          <AreaChart />
        </div>
        <div className="w-[31%] h-[15rem] flex items-center justify-center  my-2 p-2   bg-slate-900 border-2 border-slate-800">
          <AreaChart />
        </div>
        {/* <div className="w-[30%] h-[25rem] bg-white flex items-center justify-center my-2 p-2">
        <LineChart/>
       </div> */}
      </div>
    </div>
  );
};

export default page;
