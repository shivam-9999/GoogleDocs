import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import ExtensionsMenuBar from "./ExtensionsDropDownMenus/ExtensionsMenuBar";

function ExtensionsMenu({ isExtensionsOpen, toggleExtensionsDropdown }) {
  const [isExtensionsNestedOpen, setisExtensionsNestedOpen] = useState(false);

  //toggle Nested Extensions Dropdown
  const toggleNestedExtensionsDropdown = useCallback(() => {
    setisExtensionsNestedOpen(
      (previsExtensionsNestedOpen) => !previsExtensionsNestedOpen
    );
  }, []);
  // Nested Extensions handler
  const handleExtensionsMouseEnter = () => {
    if (!isExtensionsNestedOpen) {
      toggleNestedExtensionsDropdown();
    }
  };
  const handleExtensionsMouseLeave = () => {
    if (isExtensionsNestedOpen) {
      toggleNestedExtensionsDropdown();
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
        handleExtensionsMouseEnter={handleExtensionsMouseEnter}
        handleExtensionsMouseLeave={handleExtensionsMouseLeave}
        isExtensionsOpen={isExtensionsOpen}
        isExtensionsNestedOpen={isExtensionsNestedOpen}
      />
    </div>
  );
}

export default ExtensionsMenu;
