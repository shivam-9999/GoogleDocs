import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import {
  MdOutlineFileCopy,
  MdOutlineEmail,
  MdOutlineDriveFileRenameOutline,
  MdHistory,
  MdOutlineOfflinePin,
  MdDetails,
  MdOutlineLanguage,
} from "react-icons/md";

import { AiOutlineFileText } from "react-icons/ai";

import { BiTrash, BiSolidPrinter } from "react-icons/bi";
import { RiUserSharedLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import FileNestedMenu from "./FileDropDownMenus/FileNestedMenu";

function FileMenuBar({
  handleMouseEnter,
  handleMouseLeave,
  isOpen,
  isNestedOpen,
}) {
  return (
    <div>
      {" "}
      {isOpen && (
        <div className="origin-top-right  absolute w-56 rounded-md shadow-lg bg-white shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- New bar */}
            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BsFillFileTextFill className="text-base" />
                <div className="px-2" id="options-nested-menu">
                  File
                </div>
                {/* Nested Dropdown  */}
                <FileNestedMenu isNestedOpen={isNestedOpen} />
              </div>
            </a>
            {/*Dropdown :- Open bar */}
            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <IoMdFolderOpen className="text-base" />
                <span className="text-sm ">Open </span>
              </div>
            </a>

            {/* Dropdown :- Make a copy  */}
            <a
              // href="#"
              className="block px-3 py-2 text-sm  text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineFileCopy className="text-base" />
                <span className="text-sm ">Make a copy </span>
              </div>
            </a>
            <div className="divide-y " />
            <hr class="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Share  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <RiUserSharedLine className="text-base" />
                <span className="text-sm ">Share </span>
              </div>
            </a>
            {/* File Dropdown :- Email  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineEmail className="text-base" />
                <span className="text-sm ">Email </span>
              </div>
            </a>
            {/* File Dropdown :- Downloads  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <GoDownload className="text-base" />
                <span className="text-sm ">Downloads </span>
              </div>
            </a>
            <hr class="my-2 border-gray-200"></hr>

            {/* File Dropdown :- Rename  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineDriveFileRenameOutline className="text-base" />
                <span className="text-sm ">Rename </span>
              </div>
            </a>
            {/* File Dropdown :- Move To Bin  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiTrash className="text-base" />
                <span className="text-sm ">Move To Bin </span>
              </div>
            </a>

            <hr class="my-2 border-gray-200"></hr>

            {/* File Dropdown :- Version History  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdHistory className="text-base" />
                <span className="text-sm ">Version History </span>
              </div>
            </a>
            {/* File Dropdown :- Make Availble Offile  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineOfflinePin className="text-base" />
                <span className="text-sm ">Make Availble Offile </span>
              </div>
            </a>
            <hr class="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Details  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdDetails className="text-base" />
                <span className="text-sm ">Details </span>
              </div>
            </a>

            {/* File Dropdown :- Language  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineLanguage className="text-base" />
                <span className="text-sm ">Language </span>
              </div>
            </a>

            {/* File Dropdown :- Page Setup  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <AiOutlineFileText className="text-base" />
                <span className="text-sm ">Page Setup </span>
              </div>
            </a>
            {/* File Dropdown :- Print  */}

            <a
              // href="#"
              className="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiSolidPrinter className="text-base" />
                <span className="text-sm ">Print </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileMenuBar;
