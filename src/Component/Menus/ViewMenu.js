import React, { useState, useCallback } from "react";
import ViewMenuBar from "../DropdownMenus/ViewDropDownMenu/ViewMenuBar";

function ViewMenu({ isViewOpen, toggleViewDropdown }) {
  const [isViewNestedModeOpen, setisViewNestedModeOpen] = useState(false);

  //toggle Nested View Dropdown
  const toggleNestedModeDropdown = useCallback(() => {
    setisViewNestedModeOpen(
      (previsViewNestedModeOpen) => !previsViewNestedModeOpen
    );
  }, []);
  // Nested Mode handler
  const handleModeMouseEnter = () => {
    if (!isViewNestedModeOpen) {
      toggleNestedModeDropdown();
    }
  };
  const handleModeMouseLeave = () => {
    if (isViewNestedModeOpen) {
      toggleNestedModeDropdown();
    }
  };

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleViewDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        View
      </button>
      <ViewMenuBar
        handleModeMouseEnter={handleModeMouseEnter}
        handleModeMouseLeave={handleModeMouseLeave}
        isViewOpen={isViewOpen}
        isViewNestedModeOpen={isViewNestedModeOpen}
      />
    </div>
  );
}

export default ViewMenu;
