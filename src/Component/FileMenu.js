import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import FileMenuBar from "./FileDropDownMenus/FileMenuBar";

function FileMenu() {
  const [isFileOpen, setisFileOpen] = useState(false);
  const [isFileNestedOpen, setisFileNestedOpen] = useState(false);
  const [isshareOpen, setisshareOpen] = useState(false);
  const [isshareNestedOpen, setisshareNestedOpen] = useState(false);

  //File DropDown function
  const toggleFileDropdown = useCallback(() => {
    setisFileOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const toggleFileNestedDropdown = useCallback(() => {
    setisFileNestedOpen((prevIsNestedOpen) => !prevIsNestedOpen);
  }, []);

  //Share DropDown function
  const toggleShareDropdown = useCallback(() => {
    setisshareOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const toggleShareNestedDropdown = useCallback(() => {
    setisshareNestedOpen((prevIsNestedOpen) => !prevIsNestedOpen);
  }, []);

  const handleMouseEnter = () => {
    if (!isFileNestedOpen) {
      toggleFileNestedDropdown();
    }
  };

  const handleMouseLeave = () => {
    if (isFileNestedOpen) {
      toggleFileNestedDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleFileDropdown}
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
        isFileOpen={isFileOpen}
        isFileNestedOpen={isFileNestedOpen}
      />
      {/* Share Dropdown */}
    </div>
  );
}

export default FileMenu;
