import React, { useState } from "react";
import Logo from "../components/Assets/Logo/Logo.svg"
import Dropdown from "./Dropdown";
import Subscription from "./Subscription";

function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <svg
          onClick={() => setOpen(!isOpen)}
          className="fixed ml-6  z-30 flex items-center cursor-pointer  top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      ) : (
        <div
          className={`top0 left-0 fixed bg-mainBg z-50 text-white w-[vw] h-full text-xm md:w-[30vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[16vw]`}
        >
          <button
            className="text-xl text-white fixed top-4 mt-5  ml-[50vw] sm:ml-[10vw] md:left-[15vw] lg:left-[10vw] xl:left-[5vw] "
            onClick={() => setOpen(!isOpen)}
          >
            x
          </button>
          {/* LOGO */}

          <div className="content-center w-full mx-auto ">
            <img src={Logo} alt="" className="ml-5 mt-10" />
          </div>
          {/* LOGO END */}
{/* 
          SUBSCRIPTION MODULE START */}
           
           <Subscription></Subscription>
          {/* SUBSCRIPTION MODULE END */}
          <Dropdown></Dropdown>
      
        </div>
      )}
    </>
  );
}

export default Sidebar;
