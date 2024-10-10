"use client";
import { users } from "@/app/Redux/data/dataSlice";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { RootState } from "@/app/Redux/store";
import React, { useEffect } from "react";

interface data {
  name: string;
  email: string;
  id: string;
}

const page = () => {
  const dispatch = useAppDispatch();
  const { allUsers } = useAppSelector((state: RootState) => state.data);

  const data = allUsers;
  console.log(data, "from Users Page");

  useEffect(() => {
    dispatch(users({ page: "1", size: "10" }));
  }, []);

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <div className="w-[90%] h-[80%] flex items-center justify-center flex-col relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-400 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((item: any, index: number) => {
              return (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600">{item.email}</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};

export default page;
