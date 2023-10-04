import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import ExtensionsMenuBar from "../DropdownMenus/ExtensionsDropDownMenus/ExtensionsMenuBar";

function ExtensionsMenu({ isExtensionsOpen, toggleExtensionsDropdown }) {
  const [isExtensionsNestedAddOnesOpen, setisExtensionsNestedAddOnesOpen] =
    useState(false);

  //toggle Nested Extensions Dropdown
  const toggleNestedAddOnesDropdown = useCallback(() => {
    setisExtensionsNestedAddOnesOpen(
      (previsExtensionsNestedAddOnesOpen) => !previsExtensionsNestedAddOnesOpen
    );
  }, []);
  // Nested AddOnes handler
  const handleAddOnesMouseEnter = () => {
    if (!isExtensionsNestedAddOnesOpen) {
      toggleNestedAddOnesDropdown();
    }
  };
  const handleAddOnesMouseLeave = () => {
    if (isExtensionsNestedAddOnesOpen) {
      toggleNestedAddOnesDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleExtensionsDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Extensions
      </button>
      <ExtensionsMenuBar
        handleAddOnesMouseEnter={handleAddOnesMouseEnter}
        handleAddOnesMouseLeave={handleAddOnesMouseLeave}
        isExtensionsOpen={isExtensionsOpen}
        isExtensionsNestedAddOnesOpen={isExtensionsNestedAddOnesOpen}
      />
    </div>
  );
}

export default ExtensionsMenu;
