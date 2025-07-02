// //20250426 UPDATES FOR GCR PUSH
// "use client";
// import React from "react";
// import App from "./App";
// import { usePathname } from "next/navigation";
// import WarningCard from "@/components/PortfolioWarningCard"; // Import WarningCard

// const Page = () => {
//   const currentPath = usePathname(); // Define currentPath using usePathname()

//   return (
//     <div className="flex flex-col w-full max-w-7xl lg:px-8 mx-auto p-4">
//       {/* ✅ Centered WarningCard */}
//       <div className="flex justify-center w-full">
//         <WarningCard />
//       </div>

//       {/* Content Area */}
//       <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
//         {/* Content Area */}
//         <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 overflow-x-auto mt-4">
//           <App />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

//////////////////
/////////////////
/////////////////
// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import WarningCard from "@/components/PortfolioWarningCard";
import PortfolioAppSection from "@/components/portfoliosection/PortfolioApp"; // ✅ Use updated PortfolioAppSection

const Page = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col w-full max-w-7xl lg:px-8 mx-auto p-4">
      {/* ✅ Centered WarningCard */}
      <div className="flex justify-center w-full">
        <WarningCard />
      </div>

      {/* Content Area */}
      <div className="flex flex-row w-full mt-4">
        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 overflow-x-auto">
          <PortfolioAppSection /> {/* ✅ Swapped App with new Portfolio layout */}
        </div>
      </div>
    </div>
  );
};

export default Page;
