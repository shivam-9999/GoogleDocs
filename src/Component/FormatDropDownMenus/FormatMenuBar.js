import React from "react";
import { BiSolidRightArrow, BiHash } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import { PiTextColumns, PiListBullets } from "react-icons/pi";
import { ImTable2, ImDrawer } from "react-icons/im";
import { BsImage } from "react-icons/bs";
import { RiFormatClear } from "react-icons/ri";
import { MdHorizontalRule, MdOutlineRestorePage } from "react-icons/md";
import { TbSection } from "react-icons/tb";

import { FaBold } from "react-icons/fa";
import { RxTextAlignTop } from "react-icons/rx";

import FormatNestedMenu from "./FormatNestedMenu";

function FormatMenuBar({
  isFormatOpen,
  isFormatNestedOpen,
  handleFormatMouseEnter,
  handleFormatMouseLeave,
}) {
  console.log(isFormatOpen);
  return (
    <div>
      {" "}
      {isFormatOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-white shadow-slate-300">
          <ul
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- Text */}
            <li
              onMouseEnter={handleFormatMouseEnter}
              onMouseLeave={handleFormatMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <FaBold className="text-sm " />
                  <span className="text-sm ">Text</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <FormatNestedMenu isFormatNestedOpen={isFormatNestedOpen} />
            </li>
            {/*Dropdown :- Paragraph Styles */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BsTextParagraph className="text-base" />
                  <span className="text-sm ">Paragraph Styles</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- Align and ident */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BsTextParagraph className="text-base" />
                  <span className="text-sm ">Align and ident</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- Line & Paragraph spacing */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <RxTextAlignTop className="text-base" />
                  <span className="text-sm ">Line & Paragraph spacing</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- Columns */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <PiTextColumns className="text-base" />
                  <span className="text-sm ">Columns</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>
            {/*Dropdown :- Bullets and Numbering */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <PiListBullets className="text-base" />
                  <span className="text-sm ">Bullets and Numbering</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Headers and footers */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <TbSection className="text-base" />
                  <span className="text-sm ">Headers and footers</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Page numbers */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BiHash className="text-base" />
                  <span className="text-sm ">Page numbers</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Page orientation */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineRestorePage className="text-base" />
                  <span className="text-sm ">Page orientation</span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Table */}
            <li
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
            </li>

            {/*Dropdown :- Image */}
            <li
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
            </li>

            {/*Dropdown :- Borders and Line */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdHorizontalRule className="text-base" />
                  <span className="text-sm ">Borders and Line</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
            </li>

            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Clear Formatting */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <RiFormatClear className="text-base" />
                  <span className="text-sm ">Clear Formatting</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormatMenuBar;
