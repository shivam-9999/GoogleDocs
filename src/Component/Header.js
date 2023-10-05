import React, { useState } from "react";
import docsImage from "../Assets/Images/docs.png";
import { GiBackwardTime } from "react-icons/gi";

import {
  MdOutlineMessage,
  MdOutlineArrowDropDown,
  MdChecklist,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatColorText,
  MdLink,
  MdOutlineFormatIndentDecrease,
  MdOutlineFormatIndentIncrease,
  MdOutlineFormatClear,
  MdModeEditOutline,
} from "react-icons/md";
import {
  BiVideo,
  BiCommentAdd,
  BiLock,
  BiUndo,
  BiRedo,
  BiSolidPencil,
  BiImageAlt,
  BiAlignLeft,
} from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTextParagraph,
} from "react-icons/bs";

import {
  AiOutlineSearch,
  AiOutlinePrinter,
  AiOutlineFormatPainter,
} from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";
import { TbPencilCheck } from "react-icons/tb";

import TitleNdMenus from "./TitleNdMenus";

function Header() {
  return (
    <div className="header">
      <div className=" flex justify-between items-center">
        <div className="flex  ">
          {/* docs image file */}
          <div className="ml-4 mt-4">
            <img src={docsImage} alt="google docs" height="35px" width="35px" />
          </div>
          {/* title and menu*/}
          <TitleNdMenus />
        </div>
        {/* History video call and share*/}
        <div className="flex gap-6 items-center mr-14">
          <GiBackwardTime className="text-2xl" />
          <MdOutlineMessage className="text-2xl" />
          <div className="flex">
            <BiVideo className="text-2xl" />
            <MdOutlineArrowDropDown className="text-2xl" />
          </div>
          <button className="flex gap-3 items-center rounded-2xl bg-sky-200 px-4 py-2">
            <BiLock className="text-md" />
            <span className="text-sm font-semibold">Share</span>
          </button>
        </div>
      </div>

      {/* Shortcut menu */}
      <div
        className="flex justify-between mx-5 py-0 rounded-3xl mt-2 "
        style={{ background: "#edf2fa" }}
      >
        {/* Search to ->  font size  */}
        <div className="ml-4 py-1 xs:flex sm:flex hidden    gap-5 items-center ">
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg rounded-lg">
            {" "}
            <AiOutlineSearch />
          </button>
          <button className=" hover:bg-gray-200  text-lg rounded-lg">
            <BiUndo />
          </button>
          <button className=" hover:bg-gray-200  text-lg rounded-lg">
            <BiRedo />
          </button>
          <button className=" hover:bg-gray-200  text-lg rounded-lg">
            <AiOutlinePrinter />
          </button>
          <button className=" hover:bg-gray-200  text-lg rounded-lg">
            <TbPencilCheck />
          </button>
          <button className=" hover:bg-gray-200  text-lg rounded-lg">
            <AiOutlineFormatPainter />
          </button>

          {/* 100% button */}
          <button className="flex gap-2 items-center hover:bg-gray-200 pl-2 py-1 rounded-lg">
            <span className="text-sm">100%</span>
            <IoMdArrowDropdown className="sm" />
          </button>
          {/* vertical line */}
          <div className="h-6 bg-gray-900 border-l-2 border-1   "></div>
          {/* Normal Text */}
          <button className="flex gap-2 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <span className="text-sm">Normal Text</span>
            <IoMdArrowDropdown className="sm" />
          </button>
          {/* Arial */}
          <button className="flex gap-4 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <span className="text-sm">Arial</span>

            <IoMdArrowDropdown className="sm" />
          </button>
          {/* vertical line */}
          <div className="h-6 bg-gray-900 border-l-2 border-1   "></div>
          <div>
            {" "}
            <button className=" hover:bg-gray-300 text-white   px-2 rounded-lg">
              -
            </button>
            <span className=" text-sm font-semibold mx-2">16</span>
            <button className=" hover:bg-gray-300 text-white   px-2 rounded-lg">
              +
            </button>
          </div>
          <div className="h-6 bg-gray-900 border-l-2 border-1   "></div>
        </div>
        {/* Bold to ->  Clear Formatting  */}
        <div className="flex   items-center gap-1 py-1 ml-2">
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg rounded-lg">
            <BsTypeBold />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <BsTypeItalic />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <MdFormatColorText />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <BiSolidPencil />
          </button>
          {/* vertical line */}
          <div className="h-6 bg-gray-900 border-l-2 border-1   "></div>
          {/* link comment image  */}
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <MdLink />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <BiCommentAdd />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <BiImageAlt />
          </button>
          {/* vertical line */}
          <div className="h-6 bg-gray-900 border-l-2 border-1   "></div>
          <button className="flex gap-1 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <BiAlignLeft />
            <IoMdArrowDropdown className="sm" />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <BsTextParagraph />
          </button>
          {/* checklist menu */}
          <button className="flex gap-1 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <MdChecklist />
            <IoMdArrowDropdown className="sm" />
          </button>
          <button className="flex gap-1 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <MdFormatListBulleted />
            <IoMdArrowDropdown className="sm" />
          </button>
          <button className="flex gap-1 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <MdFormatListNumbered />
            <IoMdArrowDropdown className="sm" />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <MdOutlineFormatIndentDecrease />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <MdOutlineFormatIndentIncrease />
          </button>
          <button className=" hover:bg-gray-200 px-1 py-1 text-lg  rounded-lg">
            <MdOutlineFormatClear />
          </button>
        </div>
        {/* Editing mode  and hide menu */}
        <div className=" sm:flex hidden  items-center py-1 mr-4">
          <button className="flex gap-4 items-center hover:bg-gray-200 px-1 py-1 rounded-lg">
            <MdModeEditOutline />
            <IoMdArrowDropdown className="sm" />
          </button>
          {/* vertical line */}
          <div className="h-6 bg-gray-900 border-l-2 border-1   "> </div>
          <RiArrowUpSLine className="ml-2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
