"use client";
import { getCoinData } from "@/app/Redux/coin/coinSlice";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { RootState } from "@/app/Redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const { coins, isLoading, isError, isSuccess } = useAppSelector(
    (state: RootState) => state.coin
  );

  if(!coins){
    return (
      <>
      No Coins Yet!!
      </>
    )
  }

  useEffect(() => {
    dispatch(getCoinData());
  }, []);
  console.log(coins, "coin page");

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <div className="w-[95%] h-[95%] flex items-center justify-center  flex-wrap relative overflow-x-auto shadow-md sm:rounded-lg ">
        {isLoading ? (
          <>
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="loader border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
              >
                £
              </div>
            </div>
          </>
        ) : (
          <>
            {coins.map((item: any, index: number) => {
              return (
                <div
                  className="max-w-[20%] mx-6 my-2 h-[60%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <a
                    href="#"
                    className="h-[40%] w-full flex items-center justify-center"
                  >
                    <img
                      src={item?.image}
                      alt="noCoins"
                      className="w-[50%] h-[40%}"
                    />
                  </a>
                  <div className="p-5 w-full h-[60%] flex items-center justify-around flex-col">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-justify">
                        {item.id}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.symbol}
                    </p>
                    <Link
                      href={`/dashboard/coins/${item.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default page;
