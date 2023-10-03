import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

import ToolsNestedMenu from "./ToolsNestedMenu";

function ToolsMenuBar({
  isToolsOpen,
  isToolsNestedOpen,
  handleToolsMouseEnter,
  handleToolsMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isToolsOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-white shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- New bar */}
            <a
              onMouseEnter={handleToolsMouseEnter}
              onMouseLeave={handleToolsMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Spelling and Grammer</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <ToolsNestedMenu isToolsNestedOpen={isToolsNestedOpen} />
            </a>
            {/*Dropdown :- Spelling and Grammer bar */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Word Count</span>
                </div>

                {/* Nested Dropdown  */}
              </div>
            </a>
            {/*Dropdown :- Review Suggested Edites */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Review Suggested Edites </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Compare Documents */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Compare Documents </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Citations */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Citations </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Line Numbers */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Line Numbers </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Expore */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Expore </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Linked Objects */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Linked Objects </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Dictionary */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Dictionary </span>
                </div>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Translate Doceuments */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Translate Doceuments </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Voice Typing */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Voice Typing </span>
                </div>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Notification Settings */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Notification Settings </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Preferenes */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Preferenes </span>
                </div>
              </div>
            </a>
            {/*Dropdown :- Accessibility */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillToolsTextFill className="text-base" /> */}
                  <span className="text-sm ">Accessibility </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolsMenuBar;
