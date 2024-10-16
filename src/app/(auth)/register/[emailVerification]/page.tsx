"use client";

import { emailVerification } from "@/app/Redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { RootState } from "@/app/Redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { MdVerified } from "react-icons/md";

interface data {
  emailVerificationTOken: string;
  id: string;
}

const page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { registerUser, verificationMessage, isSuccess, isError, message } =
    useAppSelector((state: RootState) => state.auth);
  const { emailVerificationTOken, id } = registerUser;
  const handleEmailVerification = ({ emailVerificationTOken, id }: data) => {
    dispatch(emailVerification({ emailVerificationTOken, id }));
  };

  useEffect(() => {
    if (verificationMessage && isSuccess) {
      router.push("/login");
    } else if (isError && message) {
      toast.error(message);
    }
  }, [verificationMessage, isSuccess, isError, message]);

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex items-center justify-center  text-white">
      <div className="w-[20%] h-[30%]  bg-slate-900 flex items-center justify-center flex-col">
        <div className="w-full h-[40%] flex items-center justify-center">
          <MdVerified className="text-5xl text-yellow-500 font-bold" />
        </div>
        <div className="w-full h-[50%] flex items-center justify-around flex-col">
          <h3 className="text-center">Verify Email</h3>
          <button
            className="bg-green-800 text-white px-4 py-1"
            onClick={() =>
              handleEmailVerification({ emailVerificationTOken, id })
            }
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
