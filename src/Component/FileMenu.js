import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import FileMenuBar from "./FileDropDownMenus/FileMenuBar";

function FileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNestedOpen, setisNestedOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const toggleNestedDropdown = useCallback(() => {
    setisNestedOpen((prevIsNestedOpen) => !prevIsNestedOpen);
  }, []);

  const handleMouseEnter = () => {
    if (!isNestedOpen) {
      toggleNestedDropdown();
    }
  };

  const handleMouseLeave = () => {
    if (isNestedOpen) {
      toggleNestedDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        File
      </button>
      {/* Main Dropdown */}
      <FileMenuBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isOpen={isOpen}
        isNestedOpen={isNestedOpen}
      />
    </div>
  );
}

export default FileMenu;
