import React from "react";
import { BiSolidRightArrow, BiNotepad, BiHash } from "react-icons/bi";
import { BsImage, BsEmojiLaughing } from "react-icons/bs";
import { ImTable2, ImDrawer } from "react-icons/im";
import { AiOutlineBarChart } from "react-icons/ai";
import { PiSigmaThin } from "react-icons/pi";
import { TbMathPi } from "react-icons/tb";
import {
  MdHorizontalRule,
  MdArrowDropDownCircle,
  MdOutlineNotes,
} from "react-icons/md";

import { LiaMicrochipSolid } from "react-icons/lia";
import { TbSection } from "react-icons/tb";
import { MdOutlineInsertPageBreak } from "react-icons/md";
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
          <ul
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- Image */}
            <li
              onMouseEnter={handleInsertMouseEnter}
              onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BsImage className="text-base" />
                  <span className="text-sm ">Image</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} />
            </li>
            {/*Dropdown :- Table */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <ImTable2 className="text-base" />
                  <span className="text-sm ">Table</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :- Drawing */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <ImDrawer className="text-base" />
                  <span className="text-sm ">Drawing</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :- Chart */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <AiOutlineBarChart className="text-base" />
                  <span className="text-sm ">Chart</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :- Horizontal Line */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdHorizontalRule className="text-base" />
                  <span className="text-sm ">Horizontal Line</span>
                </div>

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- Emoji */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BsEmojiLaughing className="text-base" />
                  <span className="text-sm ">Emoji</span>
                </div>

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- SmartChips */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <LiaMicrochipSolid className="text-base" />
                  <span className="text-sm ">Smart Chips</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :-DropDown */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdArrowDropDownCircle className="text-base" />
                  <span className="text-sm ">DropDown</span>
                </div>

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :-Footnotes */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineNotes className="text-base" />
                  <span className="text-sm ">Footnotes</span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Building Blocks */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BiNotepad className="text-base" />
                  <span className="text-sm ">Building Blocks</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            <hr className="my-2 border-gray-200"></hr>

            {/*Dropdown :-Special Characters */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <PiSigmaThin className="text-base" />
                  <span className="text-sm ">-Special Characters</span>
                </div>
              </div>
            </li>
            {/*Dropdown :-Equations */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <TbMathPi className="text-base" />
                  <span className="text-sm "> Equations</span>
                </div>
              </div>
            </li>

            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Headers and Footer */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <TbSection className="text-base" />
                  <span className="text-sm ">Headers and Footer</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :- Page Numbers */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BiHash className="text-base" />
                  <span className="text-sm ">Page Numbers</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            {/*Dropdown :- Breaks */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineInsertPageBreak className="text-base" />
                  <span className="text-sm ">Breaks</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Table of Contents */}
            <li
              // onMouseEnter={handleInsertMouseEnter}
              // onMouseLeave={handleInsertMouseLeave}
              href="#"
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineInsertPageBreak className="text-base" />
                  <span className="text-sm ">Table of Contents</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              {/* <InsertNestedMenu isInsertNestedOpen={isInsertNestedOpen} /> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InsertMenuBar;
