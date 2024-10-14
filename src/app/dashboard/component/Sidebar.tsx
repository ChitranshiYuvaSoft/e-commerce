"use client";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { SiSkillshare } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { FaMicroblog } from "react-icons/fa6";
import { MdContactEmergency } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import { useAppSelector } from "@/app/Redux/hooks";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  // const { user } = useSelector((state: RootState) => state.auth);

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-[20%] h-[98%] bg-slate-950 rounded-xl flex flex-col items-center justify-between">
      <div className="w-full h-[13%] rounded-xl border-t-2 border-l-2 border-r-2 border-slate-800 shadow-inner flex items-center justify-between">
        <div className="w-[20%] h-[70%] bg-slate-900 rounded-full ml-1">
          <Image src={"/user.png"} width={100} height={100} alt="noUser" />
        </div>
        <div className="w-[73%] h-[50%] flex items-start justify-around flex-col pl-1">
          <h6 className="text-white text-xs">{name}</h6>
          <p className="text-slate-300 text-xs">{email}</p>
        </div>
      </div>
      <div className="w-full h-[30%] shadow-inner flex items-center justify-between pl-5">
        <ul className="w-full h-[100%] flex items-start justify-around flex-col">
          <Link href="/dashboard/users">
            <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
              <span className="mr-5">
                <FaUsers className="text-xl" />
              </span>{" "}
              Users
            </li>
          </Link>
          <Link href="/dashboard/coins">
            <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
              <span className="mr-5">
                <FaCoins className="text-xl" />
              </span>{" "}
              Coins
            </li>
          </Link>

          <Link href="/dashboard/chart">
            <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
              <span className="mr-5">
                <FaMicroblog className="text-xl" />
              </span>{" "}
               Chart
            </li>
          </Link>
          <Link href="/dashboard/contact">
            <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
              <span className="mr-5">
                <MdContactEmergency className="text-xl" />
              </span>{" "}
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-full h-[30%] shadow-inner flex items-center justify-between pl-5">
        <ul className="w-full h-[100%] flex items-start justify-around flex-col">
          <Link href="/dashboard/setting">
            <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
              <span className="mr-5">
                <IoSettingsOutline className="text-xl" />
              </span>{" "}
              Setting
            </li>
          </Link>
          <Link href="/dashboard/profile">
            <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
              <span className="mr-5">
                <FaRegUser className="text-xl" />
              </span>{" "}
              Profile
            </li>
          </Link>

          <button
            className="w-[95%]  py-3 px-3 text-slate-200 font-semibold text-sm bg-red-800 flex items-center justify-center"
            onClick={logoutUser}
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
