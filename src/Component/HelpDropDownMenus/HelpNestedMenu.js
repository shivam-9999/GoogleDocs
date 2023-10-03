import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";

function HelpNestedMenu({ isHelpNestedOpen }) {
  return (
    <div>
      {" "}
      {isHelpNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-white shadow-slate-300"
          style={{ left: "100%" }}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- Serach the menus*/}
            <li
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <BsFillFileTextFill className="text-base text-blue-500" />
                <div>Serach the menus</div>
              </div>
            </li>
            {/*NestedDropdown :- From template gallery*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiPaint className="text-base" />
                <div>From template gallery</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HelpNestedMenu;
