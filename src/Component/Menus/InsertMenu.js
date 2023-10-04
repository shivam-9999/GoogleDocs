import React, { useState, useCallback } from "react";
import InsertMenuBar from "../DropdownMenus/InsertDropDownMenus/InsertMenuBar";

function InsertMenu({ isInsertOpen, toggleInsertDropdown }) {
  const [isInsertNestedOpen, setisInsertNestedOpen] = useState(false);

  //toggle Nested Insert Dropdown
  const toggleNestedInsertDropdown = useCallback(() => {
    setisInsertNestedOpen((previsInsertNestedOpen) => !previsInsertNestedOpen);
  }, []);
  // Nested Insert handler
  const handleInsertMouseEnter = () => {
    if (!isInsertNestedOpen) {
      toggleNestedInsertDropdown();
    }
  };
  const handleInsertMouseLeave = () => {
    if (isInsertNestedOpen) {
      toggleNestedInsertDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleInsertDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Insert
      </button>
      <InsertMenuBar
        handleInsertMouseEnter={handleInsertMouseEnter}
        handleInsertMouseLeave={handleInsertMouseLeave}
        isInsertOpen={isInsertOpen}
        isInsertNestedOpen={isInsertNestedOpen}
      />
    </div>
  );
}

export default InsertMenu;
