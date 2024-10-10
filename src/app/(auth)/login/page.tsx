"use client";

import { login } from "@/app/Redux/auth/authSlice";
import { useAppSelector } from "@/app/Redux/hooks";
import { AppDispatch, RootState } from "@/app/Redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface UserData {
  email: string;
  password: string;
}

const page = () => {
  const { token } = useAppSelector((state: RootState) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginUser = (e: any) => {
    e.preventDefault();
    console.log("userLogin");
    dispatch(login(userData));
    if (localStorage.getItem("token")) {
      // router.refresh();
      window.location.reload();
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex items-center justify-center  text-white">
      <div className="w-80 h-[60%] rounded-2xl bg-slate-900 flex items-center justify-center flex-col">
        <div className="h-[30%] space-y-2 text-center mt-3">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            By logging in, you accept our&nbsp;
            <a className="text-blue-500 hover:text-blue-700" href="#">
              terms&nbsp;
            </a>
            and &nbsp;
            <a className="text-blue-500 hover:text-blue-700" href="#">
              privacy policy &nbsp;
            </a>
            .
          </p>
        </div>

        <div className="flex h-[70%] flex-col gap-2 p-8 items-center justify-around">
          <form
            action=""
            className="w-full h-[100%] flex items-center justify-around flex-col"
            onSubmit={handleLoginUser}
          >
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              className="bg-slate-900 mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />

            <button className="w-full inline-block mt-2 cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
              Login
            </button>
          </form>
          <h6 className="text-center text-sm font-bold flex flex-col align-center justify-around">
            You have already account ,{" "}
            <Link href="/register" className="text-blue-600">
              Register
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default page;
