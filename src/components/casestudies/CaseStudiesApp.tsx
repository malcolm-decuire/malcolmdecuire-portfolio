// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS 
// import { GradientBackground } from "@/components/gradient";
// import { Container } from "@/components/container";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { Heading, Lead, Subheading } from "@/components/text";
// import { AnimatedNumber } from "@/components/animated-number";
// import FiltersWrapper from "@/components/casestudies/filters-wrapper";
// import SidebarDrawer from "@/components/casestudies/sidebar-drawer";
// import ProductsGrid from "@/components/casestudies/products-grid";
// import type { ProductItem } from "@/components/casestudies/product-list-item";
// import { useDisclosure, Select, SelectItem } from "@heroui/react";
// import { Icon } from "@iconify/react";
// import { Button } from "@/components/casestudiesbutton";
// import FiltersButton from "@/components/casestudies/filters-button";
// import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
// import React, { useState, useEffect } from "react";
// import DemoAccordion from "@/components/casestudies/CaseStudiesCard";
// import LogoCloud from "@/components/casestudies/CaseStudiesLogoCloud";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "@heroui/react";


// const supabase = createClient(
//   "https://vbkcocigvqmyhefjrlxg.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZia2NvY2lndnFteWhlZmpybHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjg2MDAsImV4cCI6MjA2Mjc0NDYwMH0.3IHqaIqwblC5dgcg6JOlKmuuqFujK8UA7sEib5NeupY"
// );

// export default function InsightsApp() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [sortKey, setSortKey] = useState<string>("totalPortfolioValue");
//   const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
//   const handleModalChange = (open: boolean) => (open ? onOpen() : onClose());
//   const [filters, setFilters] = useState<Record<string, string[]>>({});
//   const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
//   const sortProducts = (
//     products: ProductItem[],
//     key: string,
//     direction: "asc" | "desc"
//   ) => {
//     return [...products].sort((a: any, b: any) => {
//       const valueA = a[key as keyof ProductItem] ?? 0;
//       const valueB = b[key as keyof ProductItem] ?? 0;

//       if (typeof valueA === "string" && typeof valueB === "string") {
//         return direction === "asc"
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       }

//       return direction === "asc" ? valueA - valueB : valueB - valueA;
//     });
//   };


//   const [loading, setLoading] = useState(true);
//   const handleSort = (key: string) => {
//     const isSameKey = sortKey === key;
//     const nextDirection = isSameKey && sortDirection === "desc" ? "asc" : "desc";

//     const sorted = [...filteredProducts].sort((a: any, b: any) => {
//       const valueA = a[key as keyof ProductItem] ?? 0;
//       const valueB = b[key as keyof ProductItem] ?? 0;

//       if (typeof valueA === "string" && typeof valueB === "string") {
//         return nextDirection === "asc"
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       }

//       return nextDirection === "asc" ? valueA - valueB : valueB - valueA;
//     });

//     setSortKey(key);
//     setSortDirection(nextDirection);
//     setFilteredProducts(sorted);
//   };

//   const handleApplyFilters = async () => {
//     setLoading(true);
//     let query = supabase.from("properties").select("*");

//     Object.entries(filters).forEach(([key, values]) => {
//       if (values.length > 0) query = query.in(key, values);
//     });

//     const { data, error } = await query;
//     if (!error && data) setFilteredProducts(data);
//     setLoading(false);
//   };

//   const handleClearFilters = () => {
//     setFilters({});
//     setFilteredProducts([]);
//     setLoading(true);
//   };

//   useEffect(() => {
//     if (filteredProducts.length > 0) {
//       const sorted = sortProducts(filteredProducts, sortKey, sortDirection);
//       setFilteredProducts(sorted);
//     }
//   }, [sortKey, sortDirection]);


//   return (
//     <>
//       {/* ✅ Glassmorphism Modal */}
//       <Modal
//         isDismissable
//         isKeyboardDismissDisabled={false}
//         isOpen={isOpen}
//         onOpenChange={handleModalChange}
//         size="lg"
//         className="sm:hidden backdrop-blur-md bg-black/30"
//       >
//         <ModalContent className="...">
//           <>
//             <ModalHeader className="...">🎯 Filter Properties</ModalHeader>
//             <ModalBody>
//               <div className="rounded-lg bg-white/60 p-4 shadow-lg backdrop-blur-md space-y-4">
//                 <FiltersWrapper
//                   filtersState={filters}
//                   setFiltersState={setFilters}
//                   onApplyFilters={() => {
//                     handleApplyFilters();
//                     onClose(); // ✅ Using onClose from useDisclosure
//                   }}
//                   onClearFilters={handleClearFilters}
//                 />
//               </div>
//             </ModalBody>
//             <ModalFooter className="flex justify-center gap-4">
//               <Button
//                 color="danger"
//                 variant="secondary"
//                 className="rounded-full px-6 py-2 shadow-md backdrop-blur-sm"
//                 onClick={onClose}
//               >
//                 Close
//               </Button>
//               <Button
//                 color="primary"
//                 className="rounded-full px-6 py-2 shadow-md backdrop-blur-sm"
//                 onClick={() => {
//                   handleApplyFilters();
//                   onClose();
//                 }}
//               >
//                 Apply Filters
//               </Button>
//             </ModalFooter>
//           </>
//         </ModalContent>

//       </Modal>

//       <main className="overflow-hidden scroll-smooth">
//         <GradientBackground />
//         <Container>
//           <Navbar />
//         </Container>

//         {/* Header */}
//         <Container className="mt-16 text-center">
//           <Heading as="h1">PropNet Investment Insights</Heading>
//           <Lead className="mt-6 max-w-3xl mx-auto">
//             Develop a scalable real estate investment platform powered by Supabase + FastAPI + Nextjs + Tailwind 
            
//           </Lead>
//         </Container>
//           {/*WHERE THE LIL ICONS GO  */}     
//           <LogoCloud />
//         {/* Stats Section */}
//         <Container className="mt-16">
//           <Subheading>Platform Stats</Subheading>
//           <hr className="mt-6 border-t border-gray-200" />
//           <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
//             {[
//               { label: "Properties Tracked", value: 250, suffix: "+" },
//               { label: "Total Portfolio Value", value: 150, prefix: "$", suffix: "M" },
//               { label: "Investors Onboarded", value: 50, suffix: "+" },
//               { label: "Avg PropHarbor Score", value: 6.5, decimals: 1 },
//             ].map(({ label, value, prefix = "", suffix = "", decimals = 0 }) => (
//               <div key={label}>
//                 <dt className="text-sm text-gray-600">{label}</dt>
//                 <dd className="order-first text-5xl font-bold text-primary">
//                   {prefix}
//                   <AnimatedNumber start={0} end={value} decimals={decimals} />
//                   {suffix}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </Container>
           
            
//         <Container className="mt-24">
//           <DemoAccordion />  
//           <div className="rounded-2xl bg-white/60 backdrop-blur-md shadow-xl px-12 py-6 dark:bg-black/40">
//             <div className="flex gap-x-6">
//               <SidebarDrawer
//                 isOpen={isOpen}
//                 onOpenChange={handleModalChange}
//                 sidebarPlacement="left"
//               >
//                 <FiltersWrapper
//                   filtersState={filters}
//                   setFiltersState={setFilters}
//                   onApplyFilters={handleApplyFilters}
//                   onClearFilters={handleClearFilters}
//                 />
//               </SidebarDrawer>

//               <div className="w-full flex-1 flex-col">
//                 <header className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3 w-full max-w-full overflow-hidden">
//                   <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap w-full">
//                     <Button
//                       className="flex border-default-200 sm:hidden min-w-[90px] !truncate"
//                       startContent={
//                         <Icon
//                           className="text-default-500"
//                           height={16}
//                           icon="solar:filter-linear"
//                           width={16}
//                         />
//                       }
//                       variant="outline"
//                       onClick={onOpen}
//                     >
//                       Filters
//                     </Button>

//                     <Subheading as="h2" className="text-medium font-medium flex-grow text-center sm:text-left">
//                       Featured Properties
//                     </Subheading>

//                     <Popover placement="bottom-end">
//                       <PopoverTrigger>
//                         <Button
//                           variant="outline"
//                           className="!inline-flex !items-center !justify-center gap-2 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors 
//         !rounded-full flex-shrink-0 min-w-[90px] !truncate w-full sm:w-auto"
//                           startContent={
//                             <Icon icon="solar:sort-bold" width={16} className="text-default-600" />
//                           }
//                         >
//                           Sort
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="bg-purple-50 p-4 rounded-large shadow-lg space-y-2 min-w-[200px]">
//                         {[
//                           { key: "totalPortfolioEquity", label: "Total Equity" },
//                           { key: "totalPortfolioMortgageBalance", label: "Mortgage Balance" },
//                           { key: "totalPortfolioValue", label: "Portfolio Value" },
//                           { key: "totalPropertiesOwned", label: "Properties Owned" },
//                           { key: "propharborScore", label: "PropHarbor Score" },
//                         ].map(({ key, label }) => (
//                           <Button
//                             key={key}
//                             variant="outline"
//                             className={`w-full justify-start text-default-700 hover:bg-gray-200 rounded-lg ${sortKey === key ? "bg-gray-200 font-semibold" : ""
//                               }`}
//                             onClick={() => {
//                               const isSameKey = key === sortKey;
//                               const nextDirection = isSameKey && sortDirection === "desc" ? "asc" : "desc";
//                               setSortKey(key);
//                               setSortDirection(nextDirection);
//                             }}
//                           >
//                             {label}
//                           </Button>
//                         ))}
//                       </PopoverContent>
//                     </Popover>
//                   </div>

//                 </header>

//                 <main className="mt-4 h-full w-full overflow-visible px-1">
//                   <ProductsGrid
//                     className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
//                     products={filteredProducts}
//                     loading={loading}
//                   />
//                 </main>
//               </div>
//             </div>
//           </div>
//         </Container>


//         <Footer />
//       </main>
//     </>
//   );
// }


//////////////////////////
/////////////////////////
/////////////////////////
// // 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";

import FiltersWrapper from "./filters-wrapper";
import ProductsGrid from "./products-grid";
import SidebarDrawer from "./sidebar-drawer";
import { ProductItem } from "./product-list-item";
import resumeItems from "./resume-items"; // ✅ Your static resume data

export default function CaseStudiesApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [filteredItems, setFilteredItems] = useState<ProductItem[]>(resumeItems);
  const [sortKey, setSortKey] = useState<keyof ProductItem>("company");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);

  const applyFilters = () => {
    setLoading(true);
    const result = resumeItems.filter((item) =>
      Object.entries(filters).every(([field, values]) =>
        values.length ? values.includes(item[field as keyof ProductItem] as string) : true
      )
    );
    setFilteredItems(sortItems(result));
    setLoading(false);
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredItems(resumeItems);
  };

  const sortItems = (items: ProductItem[]): ProductItem[] => {
    return [...items].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return 0;
    });
  };

  const handleSort = (key: keyof ProductItem) => {
    const isSame = key === sortKey;
    const newDir = isSame && sortDirection === "desc" ? "asc" : "desc";
    setSortKey(key);
    setSortDirection(newDir);
    setFilteredItems(sortItems(filteredItems));
  };

  useEffect(() => {
    setFilteredItems(sortItems(filteredItems));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortKey, sortDirection]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={(open) => (open ? onOpen() : onClose())}>

        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                🎯 Filter Roles
                <button onClick={onClose} className="text-default-500 hover:text-default-800">
                  <Icon icon="solar:close-circle-bold" width={24} />
                </button>
              </ModalHeader>
              <ModalBody>
                <FiltersWrapper
                  filtersState={filters}
                  setFiltersState={setFilters}
                  onApplyFilters={() => {
                    applyFilters();
                    onClose();
                  }}
                  onClearFilters={clearFilters}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    applyFilters();
                    onClose();
                  }}
                >
                  Apply Filters
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>



      </Modal>

      <div className="max-w-8xl h-full w-full px-2 lg:px-24">
        <div className="flex gap-x-6 mt-8">
        <SidebarDrawer isOpen={isOpen} onOpenChange={(open) => (open ? onOpen() : onClose())}>
            <FiltersWrapper
              filtersState={filters}
              setFiltersState={setFilters}
              onApplyFilters={applyFilters}
              onClearFilters={clearFilters}
            />
          </SidebarDrawer>

          <div className="w-full flex-1 flex-col">
            <header className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3">
              <div className="flex items-center justify-between gap-2">
                <Button
                  className="flex border-default-200 sm:hidden"
                  startContent={<Icon icon="solar:filter-linear" width={16} />}
                  variant="bordered"
                  onPress={onOpen}
                >
                  Filters
                </Button>

                <h2 className="text-medium font-medium">Clients</h2>

                <Popover placement="bottom-end">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="!inline-flex gap-2 rounded-full min-w-[90px]"
                      startContent={<Icon icon="solar:sort-bold" width={16} />}
                    >
                      Sort
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-purple-50 p-4 rounded-large shadow-lg space-y-2 min-w-[200px]">
                    {[
                      { key: "company", label: "Company" },
                      { key: "role", label: "Role" },
                      { key: "location", label: "Location" },
                    ].map(({ key, label }) => (
                      <Button
                        key={key}
                        variant="flat"
                        className={`w-full justify-start text-default-700 hover:bg-gray-200 rounded-lg ${
                          sortKey === key ? "bg-gray-200 font-semibold" : ""
                        }`}
                        onClick={() => handleSort(key as keyof ProductItem)}
                      >
                        {label}
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
            </header>

            <main className="mt-4 h-full w-full overflow-visible px-1">
              <div className="block rounded-medium border-medium border-dashed border-divider">
                <ProductsGrid
                  className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2" // ✅ enforce 2 max
                  products={filteredItems}
                  loading={loading}
                />

              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
