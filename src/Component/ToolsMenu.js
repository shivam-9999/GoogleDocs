import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import ToolsMenuBar from "./ToolsDropDownMenus/ToolsMenuBar";

function ToolsMenu({ isToolsOpen, toggleToolsDropdown }) {
  const [isToolsNestedOpen, setisToolsNestedOpen] = useState(false);

  //toggle Nested Tools Dropdown
  const toggleNestedToolsDropdown = useCallback(() => {
    setisToolsNestedOpen((previsToolsNestedOpen) => !previsToolsNestedOpen);
  }, []);
  // Nested Tools handler
  const handleToolsMouseEnter = () => {
    if (!isToolsNestedOpen) {
      toggleNestedToolsDropdown();
    }
  };
  const handleToolsMouseLeave = () => {
    if (isToolsNestedOpen) {
      toggleNestedToolsDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleToolsDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Tools
      </button>
      <ToolsMenuBar
        handleToolsMouseEnter={handleToolsMouseEnter}
        handleToolsMouseLeave={handleToolsMouseLeave}
        isToolsOpen={isToolsOpen}
        isToolsNestedOpen={isToolsNestedOpen}
      />
    </div>
  );
}

export default ToolsMenu;
