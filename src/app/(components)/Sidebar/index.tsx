"use client";

import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const sidebarClassNames = `fixed flex flex-col h-full z-40 dark:bg-black overflow-y-auto bg-white w-64 justify-between shadow-xl transition-all duration-300`;
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-full w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            EDLIST
          </div>
          <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;