import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RiFolderTransferLine } from "react-icons/ri";
import { BsCloudCheck } from "react-icons/bs";
import FileMenu from "./FileDropDownMenus/FileMenu";

function TitleNdMenus() {
  return (
    <div>
      {" "}
      <div className="flex flex-col ">
        {/* title */}

        <div className="flex font-semibold gap-2 text-lg mt-2 leading-6">
          <button className="mr-3 ml-3 text-lg font-medium items-center ">
            Untitled document
          </button>
          <div className="flex gap-3 items-center text-base">
            <AiOutlineStar />
            <RiFolderTransferLine />
            <BsCloudCheck />
          </div>
        </div>

        {/* menu */}
        <div className="menu flex gap-4 ml-1 font-medium">
          {/* File  */}
          <FileMenu />
          <div>Edit</div>
          <div>View</div>
          <div>Insert</div>
          <div>Format</div>
          <div>Tools</div>
          <div>Extensions</div>
          <div>Help</div>
        </div>
      </div>
    </div>
  );
}

export default TitleNdMenus;
