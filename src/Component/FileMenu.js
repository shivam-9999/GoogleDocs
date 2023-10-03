import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import FileMenuBar from "./FileDropDownMenus/FileMenuBar";

function FileMenu({ toggleFileDropdown, isFileOpen }) {
  const [isFileNestedOpen, setisFileNestedOpen] = useState(false);
  const [isShareNestedOpen, setisShareNestedOpen] = useState(false);
  const [isEmailNestedOpen, setisEmailNestedOpen] = useState(false);
  const [isDownloadNestedOpen, setisDownloadNestedOpen] = useState(false);
  const [isLanguagesNestedOpen, setisLanguagesNestedOpen] = useState(false);

  //toggle Nested File Dropdown
  const toggleNestedFileDropdown = useCallback(() => {
    setisFileNestedOpen((previsFileNestedOpen) => !previsFileNestedOpen);
  }, []);
  //toggle Nested Share Dropdown
  const toggleNestedShareDropdown = useCallback(() => {
    setisShareNestedOpen((previsShareNestedOpen) => !previsShareNestedOpen);
  }, []);
  //toggle Nested Email Dropdown
  const toggleNestedEmailDropdown = useCallback(() => {
    setisEmailNestedOpen((previsEmailNestedOpen) => !previsEmailNestedOpen);
  }, []);
  //toggle Nested Download Dropdown
  const toggleNestedDownloadDropdown = useCallback(() => {
    setisDownloadNestedOpen(
      (previsDownloadNestedOpen) => !previsDownloadNestedOpen
    );
  }, []);
  //toggle Nested Languages Dropdown
  const toggleNestedLanguagesDropdown = useCallback(() => {
    setisLanguagesNestedOpen(
      (previsLanguagesNestedOpen) => !previsLanguagesNestedOpen
    );
  }, []);

  // Nested File handler
  const handleFileMouseEnter = () => {
    if (!isFileNestedOpen) {
      toggleNestedFileDropdown();
    }
  };
  const handleFileMouseLeave = () => {
    if (isFileNestedOpen) {
      toggleNestedFileDropdown();
    }
  };
  // Nested Share handler
  const handleShareMouseEnter = () => {
    if (!isShareNestedOpen) {
      toggleNestedShareDropdown();
    }
  };
  const handleShareMouseLeave = () => {
    if (isShareNestedOpen) {
      toggleNestedShareDropdown();
    }
  };
  // Nested Email handler
  const handleEmailMouseEnter = () => {
    if (!isEmailNestedOpen) {
      toggleNestedEmailDropdown();
    }
  };
  const handleEmailMouseLeave = () => {
    if (isEmailNestedOpen) {
      toggleNestedEmailDropdown();
    }
  };

  // Nested Download handler
  const handleDownloadMouseEnter = () => {
    if (!isDownloadNestedOpen) {
      toggleNestedDownloadDropdown();
    }
  };
  const handleDownloadMouseLeave = () => {
    if (isDownloadNestedOpen) {
      toggleNestedDownloadDropdown();
    }
  };
  // Nested Languages handler
  const handleLanguagesMouseEnter = () => {
    if (!isLanguagesNestedOpen) {
      toggleNestedLanguagesDropdown();
    }
  };
  const handleLanguagesMouseLeave = () => {
    if (isLanguagesNestedOpen) {
      toggleNestedLanguagesDropdown();
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
        handleFileMouseEnter={handleFileMouseEnter}
        handleFileMouseLeave={handleFileMouseLeave}
        handleShareMouseEnter={handleShareMouseEnter}
        handleShareMouseLeave={handleShareMouseLeave}
        handleEmailMouseEnter={handleEmailMouseEnter}
        handleEmailMouseLeave={handleEmailMouseLeave}
        handleDownloadMouseEnter={handleDownloadMouseEnter}
        handleDownloadMouseLeave={handleDownloadMouseLeave}
        handleLanguagesMouseEnter={handleLanguagesMouseEnter}
        handleLanguagesMouseLeave={handleLanguagesMouseLeave}
        isFileOpen={isFileOpen}
        isFileNestedOpen={isFileNestedOpen}
        isShareNestedOpen={isShareNestedOpen}
        isEmailNestedOpen={isEmailNestedOpen}
        isDownloadNestedOpen={isDownloadNestedOpen}
        isLanguagesNestedOpen={isLanguagesNestedOpen}
      />
    </div>
  );
}

export default FileMenu;
