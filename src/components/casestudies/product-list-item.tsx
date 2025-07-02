/////////////////////////
////////////////////////
// 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL

"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

export type ProductItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  impact_summary: string;
  technologies: string[];
  category: "professional" | "volunteer";
  industry: string;
};

export type ProductListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  isPopular?: boolean;
  removeWrapper?: boolean;
  index?: number;
  skeleton?: boolean;
} & Partial<ProductItem>;

const colorClasses = [
  "text-primary",
  "text-warning",
  "text-success",
  "text-danger",
  "text-default-500"
];

const industryIconMap: Record<string, string> = {
  "saas-telecom": "gg:twilio",
  "saas-gtm": "simple-icons:accenture",
  "saas-adtech": "streamline-logos:google-ads-logo-solid",
  "government": "simple-icons:sanfranciscomunicipalrailway",
  "edtech": "simple-icons:udemy",
  "finance": "streamline-freehand:saving-bank-cash",
  "saas-finance": "stash:billing-info-light",
  "saas-ai": "simple-icons:snowflake",
};



function getRandomColorClass() {
  return colorClasses[Math.floor(Math.random() * colorClasses.length)];
}

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
  (
    {
      company = "N/A",
      role = "N/A",
      location = "N/A",
      impact_summary = "N/A",
      technologies = [],
      category = "professional",
      industry = "",
      isPopular,
      removeWrapper,
      skeleton = false,
      className
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-col sm:flex-row items-start sm:items-start gap-4",
          "rounded-2xl bg-content1 p-4 shadow-small border border-default-300 dark:border-default-600",
          {
            "rounded-none bg-transparent shadow-none border-none": removeWrapper,
            "animate-pulse opacity-50": skeleton
          },
          "min-w-0 overflow-hidden",
          className
        )}
      >
        {skeleton ? (
          <>
            <div className="h-4 w-1/2 bg-gray-300 rounded" />
            <div className="h-4 w-3/4 bg-gray-300 rounded mt-2" />
            <div className="h-52 w-full bg-gray-300 rounded mt-4" />
            <div className="h-4 w-1/3 bg-gray-300 rounded mt-4" />
            <div className="h-10 w-full bg-gray-300 rounded mt-4" />
          </>
        ) : (
          <>

              {/* Left Icon & Star */}
              <div className="flex flex-col items-center sm:items-start sm:mr-4 shrink-0">
                <Icon
                  icon={
                    industryIconMap[industry.toLowerCase()] ??
                    "fluent:briefcase-24-filled"
                  }
                  width={48}
                  className={cn("transition-transform", getRandomColorClass())}
                />
  
              </div>



            {/* Content */}
            <div className="flex flex-col gap-2 flex-grow min-w-0">
              <h3 className="text-medium font-semibold text-default-700 truncate">
                {company}
              </h3>

              <p className="text-small text-default-500 truncate uppercase">
                {location} | {role}
              </p>

              <ul className="list-disc text-small text-default-400 pl-4 space-y-1 whitespace-normal">
                {impact_summary.split(". ").map((sentence, idx) => (
                  <li key={idx}> {sentence.trim()}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-2">
                {technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-default-200 rounded-full px-2 py-1 text-default-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-default-500 mt-2 truncate">
                🏷️ {category[0].toUpperCase() + category.slice(1)}{" "}
                {industry && `| ${industry}`}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

ProductListItem.displayName = "ProductListItem";
export default ProductListItem;
