import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-[100%]  flex items-center justify-between flex-col">
        <div className="w-full h-[30%] bg-gradient-to-r from-orange-600  to-orange-400">
          <div className="w-[5rem] h-[5rem] rounded-full border relative mt-5 top-24 left-10 shadow-lg shadow-slate-900">
            <Image src={"/user.png"} width={100} height={100} alt="noUser" />
          </div>
        </div>
        <div className="w-full h-[70%]">
          <div className="w-[40%] h-[50%] border flex items-center justify-end shadow-inner">
            <div className="w-[70%] h-[70%] flex items-start justify-around flex-col">
              <h3 className="text-sm font-semibold text-slate-300">
                <span className="font-bold text-slate-500">User :</span>{" "}
                Chitranshi Gourana
              </h3>
              <h3 className="text-sm font-semibold text-slate-300">
                <span className="font-bold text-slate-500">Email :</span>{" "}
                chitranshiyuvasoft448@gmail.com
              </h3>
              <h3 className="text-sm font-semibold text-slate-300">
                <span className="font-bold text-slate-500">Address :</span>{" "}
                Ratlam, M.P.
              </h3>
              <h3 className="text-sm font-semibold text-slate-300">
                <span className="font-bold text-slate-500">Profession :</span>
                React JS Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
