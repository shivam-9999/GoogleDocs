import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

import HelpNestedMenu from "./HelpNestedDDM/HelpNestedMenu";

function HelpMenuBar({ isHelpOpen, isHelpNestedOpen }) {
  return (
    <div>
      {" "}
      {isHelpOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg  bg-zinc-50 shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- New bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Search the menus</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </a>
            {/*Dropdown :- Help bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Help</span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Trainning bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Trainning </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Updates bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Updates </span>
                </div>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Help Docs Imporove bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Help Docs Imporove </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Report abuse bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Report abuse </span>
                </div>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Privacy Policy bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Privacy Policy </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Terms of Service bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Terms of Service </span>
                </div>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Keyboard shortcuts bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillHelpTextFill className="text-base" /> */}
                  <span className="text-sm ">Keyboard shortcuts </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpMenuBar;
