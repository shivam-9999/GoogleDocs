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

import { BiTrash, BiSolidPrinter, BiSolidRightArrow } from "react-icons/bi";
import { RiUserSharedLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import FileNestedMenu from "./FileNestedMenu";
import ShareNestedMenu from "./ShareNestedMenu";
import EmailNestedMenu from "./EmailNestedMenu";
import DownloadNestedMenu from "./DownloadNestedMenu";
import LanguagesNestedMenu from "./LanguagesNestedMenu";

function FileMenuBar({
  isFileOpen,
  isFileNestedOpen,
  isShareNestedOpen,
  isEmailNestedOpen,
  isDownloadNestedOpen,
  isLanguagesNestedOpen,
  handleFileMouseEnter,
  handleFileMouseLeave,
  handleShareMouseEnter,
  handleShareMouseLeave,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
  handleDownloadMouseEnter,
  handleDownloadMouseLeave,
  handleLanguagesMouseEnter,
  handleLanguagesMouseLeave,
}) {
  return (
    <div>
      {" "}
      {isFileOpen && (
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg bg-white shadow-slate-300">
          <div
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- New bar */}
            <a
              onMouseEnter={handleFileMouseEnter}
              onMouseLeave={handleFileMouseLeave}
              // href="#"
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <BsFillFileTextFill className="text-base" />
                  <span className="text-sm ">New</span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <FileNestedMenu isFileNestedOpen={isFileNestedOpen} />
            </a>
            {/*Dropdown :- Open bar */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <IoMdFolderOpen className="text-base" />
                  <span className="text-sm ">Open </span>
                </div>
              </div>
            </a>
            {/* Dropdown :- Make a copy  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm  text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineFileCopy className="text-base" />
                <span className="text-sm ">Make a copy </span>
              </div>
            </a>

            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Share  */}
            <a
              onMouseEnter={handleShareMouseEnter}
              onMouseLeave={handleShareMouseLeave}
              // href="#"
              className="block relative px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <RiUserSharedLine className="text-base" />
                  <span className="text-sm ">Share </span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />
                {/* Nested Dropdown  */}
              </div>
              <ShareNestedMenu isShareNestedOpen={isShareNestedOpen} />
            </a>
            {/* File Dropdown :- Email  */}
            <a
              onMouseEnter={handleEmailMouseEnter}
              onMouseLeave={handleEmailMouseLeave}
              // href="#"
              className="block  relative px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineEmail className="text-base" />
                  <span className="text-sm ">Email </span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />
                {/* Nested Dropdown  */}
              </div>
              <EmailNestedMenu isEmailNestedOpen={isEmailNestedOpen} />
            </a>
            {/* File Dropdown :- Downloads  */}
            <a
              onMouseEnter={handleDownloadMouseEnter}
              onMouseLeave={handleDownloadMouseLeave}
              // href="#"
              className="block relative px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <GoDownload className="text-base" />
                  <span className="text-sm ">Downloads </span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />

                {/* Nested Dropdown  */}
              </div>
              <DownloadNestedMenu isDownloadNestedOpen={isDownloadNestedOpen} />
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Rename  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2  items-center ">
                <MdOutlineDriveFileRenameOutline className="text-base" />
                <span className="text-sm ">Rename </span>
              </div>
            </a>
            {/* File Dropdown :- Move To Bin  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiTrash className="text-base" />
                <span className="text-sm ">Move To Bin </span>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Version History  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
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
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineOfflinePin className="text-base" />
                <span className="text-sm ">Make Availble Offile </span>
              </div>
            </a>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Details  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
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
              onMouseEnter={handleLanguagesMouseEnter}
              onMouseLeave={handleLanguagesMouseLeave}
              className="block relative  px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <MdOutlineLanguage className="text-base" />
                  <span className="text-sm ">Language </span>
                </div>
                <BiSolidRightArrow
                  className="text-gray-400"
                  style={{ fontSize: "10px" }}
                />
              </div>
              <LanguagesNestedMenu
                isLanguagesNestedOpen={isLanguagesNestedOpen}
              />
            </a>
            {/* File Dropdown :- Page Setup  */}
            <a
              // href="#"
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
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
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
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
