// FOOTER - ONLY SHOWN ON LG and above
// hidden on mobile

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Footer() {
 
  return (
   <footer className="hidden lg:flex lg:px-12 xl:px-28 pt-32 pb-8 bg-primaryGray-200">

    {/* ☀☀☀☀☀ A LITTLE EASTEREGG ☀☀☀☀☀ */}
    {/* <ReactTooltip
      anchorId="solskinsøen"
      place="top"
      content={"Bornholm! Bornholm! Bornholm! Du, min dejlige ferieø!"}
    /> */}

    <div className="flex flex-col gap-36 w-full">
    </div>

   </footer>
  );
}