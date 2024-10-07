import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { SiBitcoinsv } from "react-icons/si";
import { FaUsers } from "react-icons/fa6";
import { SiSkillshare } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { FaMicroblog } from "react-icons/fa6";
import { MdContactEmergency } from "react-icons/md";

import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-[98%] bg-slate-950 rounded-xl flex flex-col items-center justify-between">
      <div className="w-full h-[15%] rounded-xl border-t-2 border-l-2 border-r-2 border-slate-800 shadow-inner flex items-center justify-between">
        <div className="w-[23%] h-[70%] bg-slate-900 rounded-full ml-1">
          <Image src={"/user.png"} width={100} height={100} alt="noUser" />
        </div>
        <div className="w-[73%] h-[70%] flex items-start justify-around flex-col pl-1">
          <h6 className="text-white text-sm">Chitranshi Gourana</h6>
          <p className="text-slate-300 text-sm">chitranshigorana@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-[30%] shadow-inner flex items-center justify-between pl-5">
        <ul className="w-full h-[100%] flex items-start justify-around flex-col">
          <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
            <span className="mr-5">
              <SiSkillshare className="text-xl" />
            </span>{" "}
            Skills
          </li>
          <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
            <span className="mr-5">
              <GoProjectRoadmap className="text-xl" />
            </span>{" "}
            Projects
          </li>

          <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
            <span className="mr-5">
              <FaMicroblog className="text-xl" />
            </span>{" "}
            Blog
          </li>
          <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
            <span className="mr-5">
              <MdContactEmergency className="text-xl" />
            </span>{" "}
            Contact
          </li>
        </ul>
      </div>
      <div className="w-full h-[30%] shadow-inner flex items-center justify-between pl-5">
        <ul className="w-full h-[100%] flex items-start justify-around flex-col">
          <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
            <span className="mr-5">
              <IoSettingsOutline className="text-xl" />
            </span>{" "}
            Setting
          </li>
          <li className="text-slate-200 font-semibold text-sm flex items-center justify-around">
            <span className="mr-5">
              <FaRegUser className="text-xl" />
            </span>{" "}
            Profile
          </li>
         
          <li className="text-slate-200 font-semibold text-sm  flex items-center justify-around">
            <span className="mr-5">
              <MdLogout className="text-xl" />
            </span>{" "}
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
