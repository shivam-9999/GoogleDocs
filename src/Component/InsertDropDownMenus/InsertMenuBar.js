import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import InsertNestedMenu from "./InsertNestedMenu";

function InsertMenuBar({
  isInsertOpen,
  isInsertNestedOpen,
  handleInsertMouseEnter,
  handleInsertMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isInsertOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-white shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- New bar */}
            <a
              onMouseEnter={handleInsertMouseEnter}
              onMouseLeave={handleInsertMouseLeave}
              // href="#"
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  {/* <BsFillInsertTextFill className="text-base" /> */}
                  <span className="text-sm ">New</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default InsertMenuBar;
