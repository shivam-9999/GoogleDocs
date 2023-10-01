import React, { useState } from "react";
import docsImage from "../Assets/Images/docs.png";

import TitleNdMenus from "./TitleNdMenus";

function Header() {
  return (
    <div className="header">
      <div className="flex  ">
        {/* docs image file */}
        <div className="ml-4 mt-4">
          <img src={docsImage} alt="google docs" height="35px" width="35px" />
        </div>
        {/* title and menu*/}
        <TitleNdMenus />
      </div>
    </div>
  );
}

export default Header;
