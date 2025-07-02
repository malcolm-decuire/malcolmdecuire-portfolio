// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
// export enum FilterTypeEnum {
//     Dropdown = "dropdown",
//     Toggle = "toggle",
//     Range = "range", // Reserved for future if you want numeric range sliders
//   }
  
//   export type FilterOption = {
//     title: string;
//     value: string;
//   };
  
//   export type Filter = {
//     type: FilterTypeEnum;
//     title: string;
//     field: string; // Maps directly to Supabase DB column
//     options?: FilterOption[]; // If dynamic, options will be fetched at runtime
//   };
  


///////////////////////////
//////////////////////////
//////////////////////////
///// 20250701 UPDATE FOR PUBLIC REPO 

export enum FilterTypeEnum {
  Dropdown = "dropdown",
  Toggle = "toggle",
  Range = "range" // Reserved for future if you want numeric range sliders
}

export type FilterOption = {
  title: string;
  value: string;
};

// 🔍 Aligned to resume JSON fields for filtering case studies
export type ResumeFilterField = "company" | "role" | "location";

export type Filter = {
  type: FilterTypeEnum;
  title: string;
  field: ResumeFilterField; // strictly typed to resume fields
  options?: FilterOption[]; // optional: predefined static options
};
