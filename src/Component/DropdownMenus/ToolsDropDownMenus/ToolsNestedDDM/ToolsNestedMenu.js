import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { BiPaint } from "react-icons/bi";

function ToolsNestedMenu({ isSpellingNGrammerNestedOpen }) {
  return (
    <div>
      {" "}
      {isSpellingNGrammerNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-zinc-50 shadow-slate-300"
          style={{ left: "100%" }}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*NestedDropdown :- Spelling and Grammer check*/}
            <li
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                {/* <BsFillFileTextFill className="text-base text-blue-500" /> */}
                <div>Spelling and Grammer check</div>
              </div>
            </li>
            {/*NestedDropdown :- Show Spelling Suggestions*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Show Spelling Suggestions</div>
              </div>
            </li>
            {/*NestedDropdown :- Show Grammer Suggestions*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Show Grammer Suggestions</div>
              </div>
            </li>
            {/*NestedDropdown :- Personal Dictionary*/}
            <li
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <BiPaint className="text-base" /> */}
                <div>Personal Dictionary</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ToolsNestedMenu;
