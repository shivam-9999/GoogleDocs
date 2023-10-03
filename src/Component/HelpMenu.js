import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import HelpMenuBar from "./HelpDropDownMenus/HelpMenuBar";

function HelpMenu({ isHelpOpen, toggleHelpDropdown }) {
  const [isHelpNestedOpen, setisHelpNestedOpen] = useState(false);

  //toggle Nested Help Dropdown
  const toggleNestedHelpDropdown = useCallback(() => {
    setisHelpNestedOpen((previsHelpNestedOpen) => !previsHelpNestedOpen);
  }, []);
  // Nested Help handler
  const handleHelpMouseEnter = () => {
    if (!isHelpNestedOpen) {
      toggleNestedHelpDropdown();
    }
  };
  const handleHelpMouseLeave = () => {
    if (isHelpNestedOpen) {
      toggleNestedHelpDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleHelpDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Help
      </button>
      <HelpMenuBar
        handleHelpMouseEnter={handleHelpMouseEnter}
        handleHelpMouseLeave={handleHelpMouseLeave}
        isHelpOpen={isHelpOpen}
        isHelpNestedOpen={isHelpNestedOpen}
      />
    </div>
  );
}

export default HelpMenu;
