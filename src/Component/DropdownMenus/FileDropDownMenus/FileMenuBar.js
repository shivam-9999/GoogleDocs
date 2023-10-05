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
import FileNestedMenu from "./FileNestedDDM/FileNestedMenu";
import ShareNestedMenu from "./FileNestedDDM/ShareNestedMenu";
import EmailNestedMenu from "./FileNestedDDM/EmailNestedMenu";
import DownloadNestedMenu from "./FileNestedDDM/DownloadNestedMenu";
import LanguagesNestedMenu from "./FileNestedDDM/LanguagesNestedMenu";

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
        <div className="origin-top-right  absolute w-80 rounded-md shadow-lg  bg-zinc-50 shadow-gray-400">
          <ul
            className="py-1 relative"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/*Dropdown :- New bar */}
            <li
              onMouseEnter={handleFileMouseEnter}
              onMouseLeave={handleFileMouseLeave}
              className="block  px-3 py-1 mt-1 text-sm  text-gray-800  hover:bg-gray-100 "
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
            </li>
            {/*Dropdown :- Open bar */}
            <li
              className="block px-3 py-1 text-sm text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex  gap-2">
                  <IoMdFolderOpen className="text-base" />
                  <span className="text-sm ">Open </span>
                </div>
              </div>
            </li>
            {/* Dropdown :- Make a copy  */}
            <li
              className="block px-3 py-1 text-sm  text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineFileCopy className="text-base" />
                <span className="text-sm ">Make a copy </span>
              </div>
            </li>

            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Share  */}
            <li
              onMouseEnter={handleShareMouseEnter}
              onMouseLeave={handleShareMouseLeave}
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
            </li>
            {/* File Dropdown :- Email  */}
            <li
              onMouseEnter={handleEmailMouseEnter}
              onMouseLeave={handleEmailMouseLeave}
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
            </li>
            {/* File Dropdown :- Downloads  */}
            <li
              onMouseEnter={handleDownloadMouseEnter}
              onMouseLeave={handleDownloadMouseLeave}
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
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Rename  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2  items-center ">
                <MdOutlineDriveFileRenameOutline className="text-base" />
                <span className="text-sm ">Rename </span>
              </div>
            </li>
            {/* File Dropdown :- Move To Bin  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiTrash className="text-base" />
                <span className="text-sm ">Move To Bin </span>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Version History  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdHistory className="text-base" />
                <span className="text-sm ">Version History </span>
              </div>
            </li>
            {/* File Dropdown :- Make Availble Offile  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdOutlineOfflinePin className="text-base" />
                <span className="text-sm ">Make Availble Offile </span>
              </div>
            </li>
            <hr className="my-2 border-gray-200"></hr>
            {/* File Dropdown :- Details  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <MdDetails className="text-base" />
                <span className="text-sm ">Details </span>
              </div>
            </li>
            {/* File Dropdown :- Language  */}
            <li
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
            </li>
            {/* File Dropdown :- Page Setup  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                {/* <liiOutlineFileText className="text-base" /> */}
                <span className="text-sm ">Page Setup </span>
              </div>
            </li>
            {/* File Dropdown :- Print  */}
            <li
              className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <BiSolidPrinter className="text-base" />
                <span className="text-sm ">Print </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileMenuBar;
