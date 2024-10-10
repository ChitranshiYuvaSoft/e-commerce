"use client";

import { RootState } from "@/app/Redux/store";
import Link from "next/link";

import { useSelector } from "react-redux";

const page = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex items-center justify-center  text-white">
      <div className="w-80 h-[60%] rounded-2xl bg-slate-900 flex items-center justify-center flex-col">
        <div className="h-[10%] space-y-2 text-center mt-3">
          <h1 className="text-3xl font-bold">Register</h1>
        </div>

        <div className="flex h-[90%] flex-col gap-2 p-8 items-center justify-around">
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Name"
            type="text"
          />

          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Email"
            type="email"
          />
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Password"
            type="password"
          />

          <button className="w-full inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            Register
          </button>

          <h6 className="text-center text-sm font-bold flex flex-col align-center justify-around">You have already account , <Link href="/login" className="text-blue-600">Login</Link></h6>
        </div>
      </div>
    </div>
  );
};

export default page;
