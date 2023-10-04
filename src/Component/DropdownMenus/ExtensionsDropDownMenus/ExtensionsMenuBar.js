import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

import ExtensionsNestedMenu from "./ExtensionNestedDDM/ExtensionsNestedMenu";

function ExtensionsMenuBar({
  isExtensionsOpen,
  isExtensionsNestedOpen,
  handleExtensionsMouseEnter,
  handleExtensionsMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isExtensionsOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-zinc-50 shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- Add ones */}
            <a
              onMouseEnter={handleExtensionsMouseEnter}
              onMouseLeave={handleExtensionsMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillExtensionsTextFill className="text-base" /> */}
                  <span className="text-sm ">Add ones</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <ExtensionsNestedMenu
                isExtensionsNestedOpen={isExtensionsNestedOpen}
              />
            </a>
            {/*Dropdown :- Add Script */}
            <a
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillExtensionsTextFill className="text-base" /> */}
                  <span className="text-sm ">Add Script</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExtensionsMenuBar;
