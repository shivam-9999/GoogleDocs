import React from "react";
import { BsFillFileTextFill, BsGlobeAmericas } from "react-icons/bs";
import { RiUserSharedLine } from "react-icons/ri";

function LanguagesNestedMenu({ isLanguagesNestedOpen }) {
  return (
    <div>
      {isLanguagesNestedOpen && (
        <div
          className="absolute bottom-0  w-56 rounded-md shadow-lg bg-white shadow-slate-300"
          style={{ left: "100%" }}
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              // href="#"
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <span className="text-sm ">English </span>
              </div>
            </a>

            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm "> Hindi</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm "> Gujarati</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm ">French</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm ">Spenish</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguagesNestedMenu;
