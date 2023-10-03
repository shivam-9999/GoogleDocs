import React from "react";

function EmailNestedMenu({ isEmailNestedOpen }) {
  return (
    <div>
      {isEmailNestedOpen && (
        <div
          className="absolute top-2  w-56 rounded-md shadow-lg bg-white shadow-slate-300"
          style={{ left: "100%" }}
        >
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <div>Email This File</div>
              </div>
            </a>

            <a
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <div>Email Collaborators</div>
              </div>
            </a>
            <a
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <div>Email Drafts</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailNestedMenu;
