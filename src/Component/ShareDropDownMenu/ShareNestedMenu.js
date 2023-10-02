import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";

function ShareNestedMenu({ isNestedOpen }) {
  return (
    <div>
      {isNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-white shadow-slate-300"
          style={{ left: "100%" }}
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- Document*/}
            <a
              // href="#"
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <BsFillFileTextFill className="text-base" />
                <div>Document</div>
              </div>
            </a>
            {/*NestedDropdown :- From template gallery*/}
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BsFillFileTextFill className="text-base" />
                <div>From template gallery</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareNestedMenu;
