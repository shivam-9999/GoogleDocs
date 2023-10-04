import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RiFolderTransferLine } from "react-icons/ri";
import { BsCloudCheck } from "react-icons/bs";
import FileMenu from "./Menus/FileMenu";
import EditMenu from "./Menus/EditMenu";
import ViewMenu from "./Menus/ViewMenu";
import InsertMenu from "./Menus/InsertMenu";
import FormatMenu from "./Menus/FormatMenu";
import ToolsMenu from "./Menus/ToolsMenu";
import HelpMenu from "./Menus/HelpMenu";
import ExtensionsMenu from "./Menus/ExtensionsMenu";

function TitleNdMenus() {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isInsertOpen, setIsInsertOpen] = useState(false);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // toggleHelpDropdown
  const toggleFileDropdown = () => {
    setIsFileOpen(!isFileOpen);
    setIsEditOpen(false); // Close the Edit menu when clicking on File
    setIsViewOpen(false);
    setIsInsertOpen(false);
    setIsFormatOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //toggleEditDropdown
  const toggleEditDropdown = () => {
    setIsEditOpen(!isEditOpen);
    setIsFileOpen(false); // Close the File menu when clicking on Edit
    setIsViewOpen(false);
    setIsInsertOpen(false);
    setIsFormatOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //toggleViewDropdown
  const toggleViewDropdown = () => {
    setIsViewOpen(!isViewOpen);
    setIsEditOpen(false);
    setIsFileOpen(false);
    setIsInsertOpen(false);
    setIsFormatOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //toggleInsertDropdown
  const toggleInsertDropdown = () => {
    setIsInsertOpen(!isInsertOpen);
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsFormatOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //toggleFormatDropdown
  const toggleFormatDropdown = () => {
    setIsFormatOpen(!isFormatOpen);
    setIsInsertOpen(false);
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //toggleToolsDropdown
  const toggleToolsDropdown = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsInsertOpen(false);
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsFormatOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };
  //togglExtensionsDropdown
  const toggleExtensionsDropdown = () => {
    setIsExtensionsOpen(!isExtensionsOpen);
    setIsToolsOpen(false);
    setIsInsertOpen(false);
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsFormatOpen(false);
    setIsHelpOpen(false);
  };
  //toggleToolsDropdown
  const toggleHelpDropdown = () => {
    setIsHelpOpen(!isHelpOpen);
    setIsExtensionsOpen(false);
    setIsToolsOpen(false);
    setIsInsertOpen(false);
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsFormatOpen(false);
  };
  //closeMenus
  const closeMenus = () => {
    setIsFileOpen(false);
    setIsEditOpen(false);
    setIsViewOpen(false);
    setIsInsertOpen(false);
    setIsFormatOpen(false);
    setIsToolsOpen(false);
    setIsExtensionsOpen(false);
    setIsHelpOpen(false);
  };

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
        <div
          className="menu flex gap-0 ml-1 font-medium "
          onMouseLeave={closeMenus}
        >
          {/* File  */}
          <FileMenu
            toggleFileDropdown={toggleFileDropdown}
            isFileOpen={isFileOpen}
          />
          <EditMenu
            toggleEditDropdown={toggleEditDropdown}
            isEditOpen={isEditOpen}
          />
          <ViewMenu
            toggleViewDropdown={toggleViewDropdown}
            isViewOpen={isViewOpen}
          />
          <InsertMenu
            toggleInsertDropdown={toggleInsertDropdown}
            isInsertOpen={isInsertOpen}
          />
          <FormatMenu
            toggleFormatDropdown={toggleFormatDropdown}
            isFormatOpen={isFormatOpen}
          />
          <ToolsMenu
            toggleToolsDropdown={toggleToolsDropdown}
            isToolsOpen={isToolsOpen}
          />
          <ExtensionsMenu
            toggleExtensionsDropdown={toggleExtensionsDropdown}
            isExtensionsOpen={isExtensionsOpen}
          />
          <HelpMenu
            toggleHelpDropdown={toggleHelpDropdown}
            isHelpOpen={isHelpOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default TitleNdMenus;
