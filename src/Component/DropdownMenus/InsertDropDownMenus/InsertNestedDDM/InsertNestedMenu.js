import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";

function InsertNestedMenu({ isInsertNestedOpen }) {
  return (
    <div>
      {" "}
      {isInsertNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-zinc-50 shadow-slate-300"
          style={{ left: "100%" }}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- Upload from Computer*/}
            <li
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                {/* <BsFillFileTextFill className="text-base text-blue-500" /> */}
                <div>Upload from Computer</div>
              </div>
            </li>
            {/*NestedDropdown :- Search the web*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Search the web</div>
              </div>
            </li>
            <hr className="my-2 border-gray-200" />
            {/*NestedDropdown :- Drive*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Drive</div>
              </div>
            </li>
            {/*NestedDropdown :- By Url*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>By Url</div>
              </div>
            </li>
            {/*NestedDropdown :- Camera*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Camera</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InsertNestedMenu;
