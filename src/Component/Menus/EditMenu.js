import React, { useCallback, useEffect, useState } from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineFileCopy } from "react-icons/md";
import EditMenuBar from "../DropdownMenus/EditDropDownMenus/EditMenuBar";

function EditMenu({ isEditOpen, toggleEditDropdown }) {
  const [isEditNestedOpen, setisEditNestedOpen] = useState(false);

  //toggle Nested Edit Dropdown
  const toggleNestedEditDropdown = useCallback(() => {
    setisEditNestedOpen((previsEditNestedOpen) => !previsEditNestedOpen);
  }, []);

  return (
    <div className="relative inline-block;">
      <button
        onClick={toggleEditDropdown}
        type="button"
        className="hover:bg-gray-200  rounded-sm px-2"
        id="options-menu"
      >
        Edit
      </button>
      <EditMenuBar
        isEditOpen={isEditOpen}
        isEditNestedOpen={isEditNestedOpen}
      />
    </div>
  );
}

export default EditMenu;
