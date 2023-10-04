import React from "react";

import { BiSolidRightArrow } from "react-icons/bi";

import { AiOutlineCheck } from "react-icons/ai";

import { MdOutlineModeEdit } from "react-icons/md";
import { FaExpand } from "react-icons/fa";

import ViewNestedMenu from "./ViewNestedMenu";

function ViewMenuBar({
  isViewOpen,
  isViewNestedOpen,
  handleViewMouseEnter,
  handleViewMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isViewOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-zinc-50 shadow-slate-300">
          <ul
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- Mode bar */}
            <li
              onMouseEnter={handleViewMouseEnter}
              onMouseLeave={handleViewMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineModeEdit className="text-base" />
                  <span className="text-sm ">Mode</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <ViewNestedMenu isViewNestedOpen={isViewNestedOpen} />
            </li>
            {/*Dropdown :- Show print layout */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <AiOutlineCheck className="text-base" />
                  <span className="text-sm ">Show print layout</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Show ruler */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <AiOutlineCheck className="text-base" />
                  <span className="text-sm ">Show ruler</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Show outline */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <AiOutlineCheck className="text-base" />
                  <span className="text-sm ">Show outline</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Show equation toolbar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <AiOutlineCheck className="text-base" />
                  <span className="text-sm ">Show equation toolbar</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Show non printing character */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <div className="text-base mr-4" />
                  <span className="text-sm ">Show non printing character</span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Show Full Screen */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <FaExpand className="text-base" />
                  <span className="text-sm ">Show Full Screen</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewMenuBar;
