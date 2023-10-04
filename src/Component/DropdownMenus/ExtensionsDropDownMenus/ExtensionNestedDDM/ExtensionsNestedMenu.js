import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";

function ExtensionsNestedMenu({ isExtensionsNestedAddOnesOpen }) {
  return (
    <div>
      {" "}
      {isExtensionsNestedAddOnesOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-zinc-50 shadow-slate-300"
          style={{ left: "100%" }}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- Get add ones*/}
            <li
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                {/* <BsFillFileTextFill className="text-base text-blue-500" /> */}
                <div>Get add ones</div>
              </div>
            </li>
            {/*NestedDropdown :- Manage Add Ones*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Manage Add Ones</div>
              </div>
            </li>
            {/*NestedDropdown :- View Document Add Ones*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>View Document Add Ones</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExtensionsNestedMenu;
