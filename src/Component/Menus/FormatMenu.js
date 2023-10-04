import React, { useState, useCallback } from "react";
import FormatMenuBar from "../DropdownMenus/FormatDropDownMenus/FormatMenuBar";

function FormatMenu({ isFormatOpen, toggleFormatDropdown }) {
  const [isFormatNestedOpen, setisFormatNestedOpen] = useState(false);

  //toggle Nested Format Dropdown
  const toggleNestedFormatDropdown = useCallback(() => {
    setisFormatNestedOpen((previsFormatNestedOpen) => !previsFormatNestedOpen);
  }, []);
  // Nested Format handler
  const handleFormatMouseEnter = () => {
    if (!isFormatNestedOpen) {
      toggleNestedFormatDropdown();
    }
  };
  const handleFormatMouseLeave = () => {
    if (isFormatNestedOpen) {
      toggleNestedFormatDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleFormatDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Format
      </button>
      <FormatMenuBar
        handleFormatMouseEnter={handleFormatMouseEnter}
        handleFormatMouseLeave={handleFormatMouseLeave}
        isFormatOpen={isFormatOpen}
        isFormatNestedOpen={isFormatNestedOpen}
      />
    </div>
  );
}

export default FormatMenu;
