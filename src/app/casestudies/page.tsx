"use client";

import React from "react";
import CaseStudiesApp from "@/components/casestudies/CaseStudiesApp"; 
import { usePathname } from "next/navigation";
import CaseStudiesLogoCloud from "@/components/casestudies/CaseStudiesLogoCloud";
import CaseStudiesCard from "@/components/casestudies/CaseStudiesCard";

const Page = () => {
  const currentPath = usePathname();

  return (
    
    <div className="flex flex-col w-full max-w-7xl lg:px-8 mx-auto p-4">
      <div className="flex justify-center w-full">
        <CaseStudiesCard />
      </div>
      <div className="flex justify-center w-full">
        <CaseStudiesLogoCloud />
      </div>

      <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 overflow-x-auto mt-4">
          <CaseStudiesApp />
        </div>
      </div>
    </div>
  );
};

export default Page;
