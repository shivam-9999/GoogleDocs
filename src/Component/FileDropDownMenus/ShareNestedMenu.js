import React from "react";
import { BsFillFileTextFill, BsGlobeAmericas } from "react-icons/bs";
import { RiUserSharedLine } from "react-icons/ri";

function ShareNestedMenu({ isShareNestedOpen }) {
  return (
    <div>
      {isShareNestedOpen && (
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
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <RiUserSharedLine className="text-base" />
                <span className="text-sm ">Share With Others</span>
              </div>
            </a>
            {/*NestedDropdown :- From template gallery*/}
            <a
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BsGlobeAmericas className="text-base" />
                <span className="text-sm ">Publish to Web</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareNestedMenu;
