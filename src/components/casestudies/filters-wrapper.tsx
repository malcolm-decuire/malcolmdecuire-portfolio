// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL
// "use client";

// import React from "react";
// import { Select, SelectItem, Button } from "@heroui/react";
// import { Icon } from "@iconify/react";

// const filters = [
//   { key: "address_city", label: "City", options: [
//       "Scottsdale", "Tonopah", "Phoenix", "Mesa", "Glendale", "Wittmann", "Chandler", 
//       "Litchfield Park", "Surprise", "Queen Creek", "Gilbert", "Buckeye", "Mclean", 
//       "Alexandria", "Centreville", "Annandale", "Fairfax", "Falls Church", "Springfield", 
//       "Oak Hill", "Vienna", "Lorton", "Reston", "Herndon", "Burke", "Redmond", "Enumclaw", 
//       "Seattle", "Kenmore", "Maple Valley", "Renton", "Vashon", "Newcastle", "Kent", 
//       "Kirkland", "Bellevue", "Fall City", "Lake Forest Park", "Burien", "Pacific", 
//       "Flushing", "Jamaica", "Far Rockaway", "Laurelton", "Long Island City", "Richmond Hill"
//     ] 
//   },
//   { key: "address_county", label: "County", options: ["Maricopa", "Fairfax", "King", "Queens"] },
//   { key: "address_zip", label: "ZIP Code", options: [
//       "85255", "85354", "85043", "85033", "85053", "85037", "85204", "85008", "85029", 
//       "85035", "85306", "85017", "85257", "85361", "85249", "85340", "85022", "85054", 
//       "85379", "85387", "85142", "85297", "85396", "85233", "85201", "85212", "85208", 
//       "85004", "85286", "85040", "85301", "85251", "85031", "85259", "85296", "85303", 
//       "22101", "22310", "20120", "22003", "22031", "22306", "22042", "20121", "22041", 
//       "22032", "22312", "22151", "20171", "22180", "22315", "22043", "22079", "20190", 
//       "22308", "22182", "22046", "22030", "22015", "98052", "98022", "98115", "98125", 
//       "98102", "98028", "98038", "98105", "98056", "98103", "98070", "98107", "98122", 
//       "98031", "98033", "98007", "98117", "98030", "98024", "98155", "98166", "98106", 
//       "98008", "98047", "98178", "98144", "11385", "11368", "11422", "11361", "11432", 
//       "11433", "11434", "11365", "11412", "11354", "11691", "11428", "11364", "11413", 
//       "11419", "11103", "11423", "11421", "11358", "11420", "11378", "11429", "11379", 
//       "11418", "11105", "11414", "11436"
//     ] 
//   },
//   { key: "propharborscore", label: "PropHarbor Score", options: ["5", "6", "7", "8", "9", "10"] },
// ];

// export default function FiltersWrapper({ filtersState, setFiltersState, onApplyFilters, onClearFilters }: any) {
//   const handleChange = (key: string, values: string[]) => {
//     setFiltersState((prev: any) => ({ ...prev, [key]: values }));
//   };

//   return (
//     <div className="h-full w-full max-w-sm bg-content1 p-6 rounded-medium">
//       <h2 className="text-large font-medium text-foreground">Filter Properties</h2>

//       {/* Pill-style Buttons with Icon and Label */}
//       <div className="flex flex-wrap gap-3 mt-6">
//         {filters.map((filter) => (
//           <Select
//             key={filter.key}
//             selectionMode="multiple"
//             selectedKeys={filtersState[filter.key] || []}
//             onSelectionChange={(keys) => handleChange(filter.key, Array.from(keys).map(String))}
//             classNames={{
//               trigger:
//                 "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-full shadow-sm",
//               popoverContent: "bg-purple-50 p-4 rounded-large shadow-lg", // ✅ Light lilac background
//             }}
//             startContent={<Icon icon="mage:filter-fill" width={16} className="text-default-600" />}
//           >
//             {filter.options.map((option) => (
//               <SelectItem key={option}>{option}</SelectItem>
//             ))}
//           </Select>
//         ))}
//       </div>

//       <Button
//         fullWidth
//         className="mt-6 font-medium"
//         color="primary"
//         radius="lg"
//         variant="solid"
//         startContent={<Icon icon="solar:filter-linear" width={16} />}
//         onPress={onApplyFilters}
//       >
//         Apply Filters
//       </Button>

//       <Button
//         fullWidth
//         className="mt-2 font-medium"
//         color="secondary"
//         radius="lg"
//         variant="bordered"
//         startContent={<Icon icon="solar:close-circle-bold" width={16} />}
//         onPress={onClearFilters}
//       >
//         Clear Filters
//       </Button>
//     </div>
//   );
// }

/////////////////////
///////////////////
//////////////////////
// 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL
"use client";

import React from "react";
import { Select, SelectItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import resumeItems from "./resume-items"; // ⬅️ Pulls from source of truth

interface FiltersWrapperProps {
  filtersState: Record<string, string[]>;
  setFiltersState: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}

// 🔍 Deduplicate unique values from resume items
const getUniqueOptions = (key: "industry" | "location" | "category") => {
  return Array.from(new Set(resumeItems.map(item => item[key]))).sort();
};

const filters = [
  {
    key: "industry",
    label: "Industry",
    options: getUniqueOptions("industry"),
  },
  {
    key: "location",
    label: "Location",
    options: getUniqueOptions("location"),
  },
  {
    key: "category",
    label: "Category",
    options: getUniqueOptions("category"),
  },
];

export default function FiltersWrapper({
  filtersState,
  setFiltersState,
  onApplyFilters,
  onClearFilters,
}: FiltersWrapperProps) {
  const handleChange = (key: string, values: string[]) => {
    setFiltersState((prev) => ({
      ...prev,
      [key]: values,
    }));
  };

  return (
    <div className="h-full w-full max-w-sm bg-content1 p-6 rounded-medium">
      <h2 className="text-large font-medium text-foreground">Filter Resume</h2>

      <div className="flex flex-wrap gap-3 mt-6">
        {filters.map((filter) => (
          <Select
            key={filter.key}
            selectionMode="multiple"
            selectedKeys={new Set(filtersState[filter.key] || [])}
            onSelectionChange={(keys) =>
              handleChange(filter.key, Array.from(keys as Set<string>))
            }
            classNames={{
              trigger:
                "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-full shadow-sm",
              popoverContent: "bg-purple-50 p-4 rounded-large shadow-lg",
            }}
            startContent={
              <Icon icon="mage:filter-fill" width={16} className="text-default-600" />
            }
          >
            {filter.options.map((option) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        ))}
      </div>

      <Button
        fullWidth
        className="mt-6 font-medium"
        color="primary"
        radius="lg"
        variant="solid"
        startContent={<Icon icon="solar:filter-linear" width={16} />}
        onPress={onApplyFilters}
      >
        Apply Filters
      </Button>

      <Button
        fullWidth
        className="mt-2 font-medium"
        color="secondary"
        radius="lg"
        variant="bordered"
        startContent={<Icon icon="solar:close-circle-bold" width={16} />}
        onPress={onClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
}
