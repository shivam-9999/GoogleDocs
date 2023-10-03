import React from "react";

function DownloadNestedMenu({ isDownloadNestedOpen }) {
  return (
    <div>
      {isDownloadNestedOpen && (
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
              // href="#"
              className="block   px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center  ">
                <span className="text-sm ">Microsoft Word (.docx) </span>
              </div>
            </a>

            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm "> OpenDocument format (.odt)</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm "> Rich Text Format (.rtf)</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm ">PDF document (.pdf))</span>
              </div>
            </a>
            <a
              // href="#"
              className="block  px-3 py-2 mt-1 text-sm  text-gray-800  hover:bg-gray-100"
              role="menuitem"
            >
              <div className="flex gap-2 items-center ">
                <span className="text-sm ">Plain text (.txt)</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DownloadNestedMenu;
