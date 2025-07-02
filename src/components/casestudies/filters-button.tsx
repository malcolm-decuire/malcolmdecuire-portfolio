// // /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/src/components/casestudies/filters-button.tsx
// "use client";

// import React from "react";
// import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
// import { Icon } from "@iconify/react";

// interface FiltersButtonProps {
//   options: { key: string; label: string }[];
//   onSelect: (key: string) => void;
//   currentKey: string;
//   label?: string;
// }

// export default function FiltersButton({
//   options,
//   onSelect,
//   currentKey,
//   label = "Sort By",
// }: FiltersButtonProps) {
//   return (
//     <Popover placement="bottom-end">
//       <PopoverTrigger>
//         <Button
//           variant="bordered"
//           className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors rounded-full"
//           startContent={<Icon icon="solar:sort-bold" width={16} className="text-default-600" />}
//         >
//           {label}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="bg-purple-50 p-4 rounded-large shadow-lg space-y-2">
//         {options.map(({ key, label }) => (
//           <Button
//             key={key}
//             variant="bordered"
//             className={`w-full justify-start text-default-700 hover:bg-gray-200 rounded-lg ${
//               currentKey === key ? "bg-gray-200 font-semibold" : ""
//             }`}
//             onClick={() => onSelect(key)} // ✅ Use onClick instead of onPress
//           >
//             {label}
//           </Button>
//         ))}
//       </PopoverContent>
//     </Popover>
//   );
// }


/////////////////
///////////////
///////////////

"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button
} from "@heroui/react";
import { Icon } from "@iconify/react";

// ✅ Keys are now aligned with resume schema — can be e.g., "role", "company", etc.
interface FiltersButtonProps {
  options: { key: string; label: string }[];
  onSelect: (key: string) => void;
  currentKey: string;
  label?: string;
}

export default function FiltersButton({
  options,
  onSelect,
  currentKey,
  label = "Sort By"
}: FiltersButtonProps) {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button
          variant="bordered"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors rounded-full"
          startContent={
            <Icon
              icon="solar:sort-bold"
              width={16}
              className="text-default-600"
            />
          }
        >
          {label}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-purple-50 p-4 rounded-large shadow-lg space-y-2">
        {options.map(({ key, label }) => (
          <Button
            key={key}
            variant="bordered"
            className={`w-full justify-start text-default-700 hover:bg-gray-200 rounded-lg ${
              currentKey === key ? "bg-gray-200 font-semibold" : ""
            }`}
            onClick={() => onSelect(key)} // 🔍 Static-safe click handler
          >
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
