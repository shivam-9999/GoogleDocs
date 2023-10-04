import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { TbZoomReplace } from "react-icons/tb";
import { MdOutlineContentPaste, MdOutlineContentPasteGo } from "react-icons/md";
import { IoCutSharp } from "react-icons/io5";
import { RiFileCopyLine, RiDeleteBin6Line } from "react-icons/ri";
import { PiSelectionAll } from "react-icons/pi";
import EditNestedMenu from "./EditNestedMenu";

function EditMenuBar({
  isEditOpen,
  isEditNestedOpen,
  handleEditMouseEnter,
  handleEditMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isEditOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-zinc-50 shadow-slate-300">
          <ul
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- Undo bar */}
            <li
              onMouseEnter={handleEditMouseEnter}
              onMouseLeave={handleEditMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <LuUndo2 className="text-sm" />
                  <span className="text-sm ">Undo</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <EditNestedMenu isEditNestedOpen={isEditNestedOpen} />
            </li>

            {/*Dropdown :- Redo bar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <LuRedo2 className="text-sm" />
                  <span className="text-sm font-medium">Redo</span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Cut bar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <IoCutSharp className="text-sm" />
                  <span className="text-sm font-medium">Cut</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Copy bar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <RiFileCopyLine className="text-sm" />
                  <span className="text-sm font-medium">Copy</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Paste bar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineContentPaste className="text-sm" />
                  <span className="text-sm font-medium">Paste</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- Paste without formatting - bar */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineContentPasteGo className="text-sm" />
                  <span className="text-sm font-medium">
                    Paste without formatting
                  </span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Select all */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <PiSelectionAll className="text-sm" />
                  <span className="text-sm font-medium">Select all</span>
                </div>
              </div>
            </li>
            {/*Dropdown :- delete */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <RiDeleteBin6Line className="text-sm" />
                  <span className="text-sm font-medium">delete</span>
                </div>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/*Dropdown :- Find and Replace */}
            <li
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <TbZoomReplace className="text-sm" />
                  <span className="text-sm font-medium">Find and Replace</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default EditMenuBar;
