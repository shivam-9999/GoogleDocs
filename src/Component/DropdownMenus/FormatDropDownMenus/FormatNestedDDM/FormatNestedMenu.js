import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";

function FormatNestedMenu({ isFormatNestedOpen }) {
  return (
    <div>
      {" "}
      {isFormatNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-zinc-50 shadow-slate-300"
          style={{ left: "100%" }}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- semibold*/}
            <li
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                {/* <BsFillFileTextFill className="text-base text-blue-500" /> */}
                <div className="font-semibold">Bold</div>
              </div>
            </li>
            {/*NestedDropdown :- Italic*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div className="font-semibold">Italic</div>
              </div>
            </li>
            {/*NestedDropdown :- Underline*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div className="font-semibold">Underline</div>
              </div>
            </li>
            {/*NestedDropdown :- Strike Through*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div className="font-semibold">Strike Through</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormatNestedMenu;
