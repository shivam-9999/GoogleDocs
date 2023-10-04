import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import ToolsMenuBar from "../DropdownMenus/ToolsDropDownMenus/ToolsMenuBar";

function ToolsMenu({ isToolsOpen, toggleToolsDropdown }) {
  const [isSpellingNGrammerNestedOpen, setisSpellingNGrammerNestedOpen] =
    useState(false);

  //toggle NestedSpellingNGrammer Dropdown
  const toggleNestedSpellingNGrammerDropdown = useCallback(() => {
    setisSpellingNGrammerNestedOpen(
      (previsSpellingNGrammerNestedOpen) => !previsSpellingNGrammerNestedOpen
    );
  }, []);
  // NestedSpellingNGrammer handler
  const handleSpellingNGrammerMouseEnter = () => {
    if (!isSpellingNGrammerNestedOpen) {
      toggleNestedSpellingNGrammerDropdown();
    }
  };
  const handleSpellingNGrammerMouseLeave = () => {
    if (isSpellingNGrammerNestedOpen) {
      toggleNestedSpellingNGrammerDropdown();
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
        handleSpellingNGrammerMouseEnter={handleSpellingNGrammerMouseEnter}
        handleSpellingNGrammerMouseLeave={handleSpellingNGrammerMouseLeave}
        isToolsOpen={isToolsOpen}
        isSpellingNGrammerNestedOpen={isSpellingNGrammerNestedOpen}
      />
    </div>
  );
}

export default ToolsMenu;
