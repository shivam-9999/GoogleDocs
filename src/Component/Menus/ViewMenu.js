import React, { useState, useCallback } from "react";
import ViewMenuBar from "../DropdownMenus/ViewDropDownMenu/ViewMenuBar";

function ViewMenu({ isViewOpen, toggleViewDropdown }) {
  const [isViewNestedOpen, setisViewNestedOpen] = useState(false);

  //toggle Nested View Dropdown
  const toggleNestedViewDropdown = useCallback(() => {
    setisViewNestedOpen((previsViewNestedOpen) => !previsViewNestedOpen);
  }, []);
  // Nested View handler
  const handleViewMouseEnter = () => {
    if (!isViewNestedOpen) {
      toggleNestedViewDropdown();
    }
  };
  const handleViewMouseLeave = () => {
    if (isViewNestedOpen) {
      toggleNestedViewDropdown();
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
        handleViewMouseEnter={handleViewMouseEnter}
        handleViewMouseLeave={handleViewMouseLeave}
        isViewOpen={isViewOpen}
        isViewNestedOpen={isViewNestedOpen}
      />
    </div>
  );
}

export default ViewMenu;
