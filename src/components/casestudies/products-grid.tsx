// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE

// "use client";

// import React from "react";
// import ProductListItem, { type ProductItem } from "./product-list-item";
// import GradientFill from "../gradientfill";
// import { cn } from "@heroui/react";


// interface ProductsGridProps {
//   className?: string;
//   products: any[]; // Raw Supabase data
//   loading: boolean;
// }

// export default function ProductsGrid({ className = "", products, loading }: ProductsGridProps) {
//   const skeletonCount = 8;

//   return (
//     <div
//       className={cn(
//         "grid gap-6 w-full", // Force full container width
//         "grid-cols-1",        // 📱 Mobile: 1 per row
//         "sm:grid-cols-2",     // 📏 Small screens: 2 per row
//         "lg:grid-cols-2",     // 💻 Large screens: Stay at 2 per row for billboard effect
//         "2xl:grid-cols-3",    // 🖥️ Ultra-wide only: allow 3 per row
//         className             // Allow additional styles, but grid cols stay enforced
//       )}
//     >
//       <GradientFill variant="productGrid" />
//       {loading ? (
//         Array.from({ length: skeletonCount }).map((_, idx) => (
//           <ProductListItem key={`skeleton-${idx}`} skeleton index={idx} />
//         ))
//       ) : products.length > 0 ? (
//         products.map((item, idx) => (
//           <ProductListItem
//             key={item.id}
//             index={idx}
//             id={item.id}
//             totalPortfolioEquity={item.totalportfolioequity}
//             totalPortfolioValue={item.totalportfoliovalue}
//             totalPortfolioMortgageBalance={item.totalportfoliomortgagebalance}
//             totalPropertiesOwned={item.totalpropertiesowned}
//             unitsCount={item.unitscount}
//             propharborScore={item.propharborscore}
//             address_address={item.address_address}
//             address_city={item.address_city}
//             address_state={item.address_state}
//             address_zip={item.address_zip}
//           />
//         ))
//       ) : (
//         <p className="text-gray-500 col-span-full text-center">No results found.</p>
//       )}
//     </div>
//   );
// }



// //////////////
// ///////////
// ///////////// // /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/src/components/casestudies/products-grid.tsx
// "use client";

// import React from "react";
// import ProductListItem, { type ProductItem } from "./product-list-item";
// import GradientFill from "../gradientfill";
// import { cn } from "@heroui/react";

// interface ProductsGridProps {
//   className?: string;
//   products: ProductItem[]; // ✅ Strongly typed to ProductItem
//   loading: boolean;
// }

// export default function ProductsGrid({
//   className = "",
//   products,
//   loading
// }: ProductsGridProps) {
//   const skeletonCount = 8;

//   return (
//     <div
//       className={cn(
//         "grid gap-6 w-full", // Force full container width
//         "grid-cols-1",        // 📱 Mobile: 1 per row
//         "sm:grid-cols-2",     // 📏 Small screens: 2 per row
//         "lg:grid-cols-2",     // 💻 Large screens: Stay at 2 per row
//         "2xl:grid-cols-3",    // 🖥️ Ultra-wide only: allow 3 per row
//         className             // Allow additional styles, but grid cols stay enforced
//       )}
//     >
//       <GradientFill variant="productGrid" />

//       {loading ? (
//         Array.from({ length: skeletonCount }).map((_, idx) => (
//           <ProductListItem key={`skeleton-${idx}`} skeleton index={idx} />
//         ))
//       ) : products.length > 0 ? (
//         products.map((item, idx) => (
//           <ProductListItem
//             key={item.id}
//             index={idx}
//             id={item.id}
//             company={item.company}
//             role={item.role}
//             location={item.location}
//             duration={item.duration}
//             impact_summary={item.impact_summary}
//             technologies={item.technologies}
//           />
//         ))
//       ) : (
//         <p className="text-gray-500 col-span-full text-center">No results found.</p>
//       )}
//     </div>
//   );
// }



////////////////
////////////
// ///////////////// V5 -THIS WORKS BUT NOT PRETTY 
// "use client";

// import React from "react";
// import ProductListItem, { type ProductItem } from "./product-list-item";
// import GradientFill from "../gradientfill";
// import { cn } from "@heroui/react";

// interface ProductsGridProps {
//   className?: string;
//   products: ProductItem[];
//   loading: boolean;
// }

// export default function ProductsGrid({
//   className = "",
//   products,
//   loading
// }: ProductsGridProps) {
//   const skeletonCount = 8;

//   return (
//     <div className={cn("w-full px-2 sm:px-4 lg:px-8", className)}>
//       <div
//         className={cn(
//           "grid w-full gap-4 sm:gap-6",
//           "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3"
//         )}
//       >
//         <GradientFill variant="productGrid" />

//         {loading ? (
//           Array.from({ length: skeletonCount }).map((_, idx) => (
//             <ProductListItem key={`skeleton-${idx}`} skeleton index={idx} />
//           ))
//         ) : products.length > 0 ? (
//           products.map((item, idx) => (
//             <ProductListItem
//               key={item.id}
//               index={idx}
//               id={item.id}
//               company={item.company}
//               role={item.role}
//               location={item.location}
//               impact_summary={item.impact_summary}
//               technologies={item.technologies}
//               category={item.category}
//               industry={item.industry}
//             />
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">
//             No results found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }



// ///////////////
// //////////////////
// ////////////// V5 WORKS -> 
// "use client";

// import React from "react";
// import ProductListItem, { type ProductItem } from "./product-list-item";
// import GradientFill from "../gradientfill";
// import { cn } from "@heroui/react";

// interface ProductsGridProps {
//   className?: string;
//   products: ProductItem[];
//   loading: boolean;
// }

// export default function ProductsGrid({
//   className = "",
//   products,
//   loading,
// }: ProductsGridProps) {
//   const skeletonCount = 8;

//   return (
//     <div
//       className={cn(
//         "grid max-w-7xl grid-cols-1 gap-5 p-4",
//         "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
//         "mx-auto w-full",
//         className
//       )}
//     >
//       <GradientFill variant="productGrid" />

//       {loading
//         ? Array.from({ length: skeletonCount }).map((_, idx) => (
//             <ProductListItem key={`skeleton-${idx}`} skeleton index={idx} />
//           ))
//         : products.length > 0
//         ? products.map((item, idx) => (
//             <ProductListItem
//               key={item.id}
//               index={idx}
//               id={item.id}
//               company={item.company}
//               role={item.role}
//               location={item.location}
//               impact_summary={item.impact_summary}
//               technologies={item.technologies}
//               category={item.category}
//               industry={item.industry}
//             />
//           ))
//         : (
//           <p className="text-gray-500 col-span-full text-center">
//             No results found.
//           </p>
//         )}
//     </div>
//   );
// }




//////////////
///////////
///////////
//// // 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL
"use client";

import React from "react";
import ProductListItem, { type ProductItem } from "./product-list-item";
import GradientFill from "../gradientfill";
import { cn } from "@heroui/react";

interface ProductsGridProps {
  className?: string;
  products: ProductItem[];
  loading: boolean;
}

export default function ProductsGrid({
  className = "",
  products,
  loading,
}: ProductsGridProps) {
  const skeletonCount = 8;

  return (
    <div
      className={cn(
        "grid w-full gap-6 px-2", // Responsive padding & spacing
        "grid-cols-1 sm:grid-cols-2", // ✅ Only up to 2 items per row
        className
      )}
    >

      {loading
        ? Array.from({ length: skeletonCount }).map((_, idx) => (
            <ProductListItem key={`skeleton-${idx}`} skeleton index={idx} />
          ))
        : products.length > 0
        ? products.map((item, idx) => (
            <ProductListItem
              key={item.id}
              index={idx}
              id={item.id}
              company={item.company}
              role={item.role}
              location={item.location}
              impact_summary={item.impact_summary}
              technologies={item.technologies}
              category={item.category}
              industry={item.industry}
            />
          ))
        : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
    </div>
  );
}
