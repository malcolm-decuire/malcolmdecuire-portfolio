// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
// 'use client'
// import Button from "@/components/InvestButton";
// import Input from "@/components/Input";
// import { Box, Typography } from "@mui/material";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Slider from "@/components/Slider";
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });

// interface IFormValues {
//   location: string;
//   monthlyGrossIncome: number;
//   monthlyDebts: number;
//   monthlySavings: number;
//   monthlyExpenses: number;
//   rent: number;
// }

// const marks = [
//   {
//     value: 20,
//     label: '20%',
//   },
//   {
//     value: 40,
//     label: '40%',
//   },
// ];

// const Home = () => {
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const { control, handleSubmit, watch } = useForm<IFormValues>({
//     defaultValues: {
//       location: 'Los Angeles, CA',
//       monthlyGrossIncome: 5000,
//       monthlyDebts: 2000,
//       monthlySavings: 500,
//       monthlyExpenses: 100,
//       rent: 30,
//     },
//     mode: 'onTouched',
//   });

//   const onSubmit = (value: IFormValues) => {
//     console.log(value);
//   };

//   const values = watch();
//   const rentAmount = values.monthlyGrossIncome * (values.rent / 100);
//   const amountLeft = values.monthlyGrossIncome - values.monthlyDebts - values.monthlySavings - values.monthlyExpenses - values.monthlyGrossIncome * 0.3;
//   const amountLeftPercent = amountLeft / values.monthlyGrossIncome;
//   const renderRentAmount = rentAmount.toFixed(2);

//   const data = [
//     {
//       name: 'Amount left',
//       y: amountLeftPercent,
//     },
//     {
//       name: 'Monthly Savings',
//       y: values.monthlySavings / values.monthlyGrossIncome,
//     },
//     {
//       name: 'Monthly Expenses',
//       y: values.monthlyExpenses / values.monthlyGrossIncome,
//     },
//     {
//       name: 'Monthly Debts',
//       y: values.monthlyDebts / values.monthlyGrossIncome,
//     },
//     {
//       name: 'Rent',
//       y: rentAmount / values.monthlyGrossIncome,
//     },
//   ];

//   return (
//     <Box className="flex flex-col md:flex-row max-w-[860px] w-full mx-auto rounded-[25px] overflow-hidden">
//       {/* Main Content Area */}
//       <Box
//         className="
//           w-full md:w-2/3 p-7 pt-50 flex flex-col gap-8
//           bg-white text-black   {/* Default mode */}
//           dark:bg-gray-800 dark:text-gray-300   {/* Dark mode */}
//         "
//       >
//         <Typography className="text-center font-medium" variant="h2">
//           Rent Calculator
//         </Typography>

//         <Typography className="text-center font-medium" variant="h6">
//           *Switch to light mode if the fields are too dark.☀️
//         </Typography>

//         {/* Inputs for income and debts */}
//         <Box className="flex flex-col md:flex-row items-center justify-between gap-8">
//           <Controller
//             control={control}
//             rules={{
//               required: 'Must be completed',
//             }}
//             render={({ field, fieldState: { error } }) => (
//               <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Gross Income" error={error} />
//             )}
//             name="monthlyGrossIncome"
//           />
//           <Controller
//             control={control}
//             rules={{
//               required: 'Must be completed',
//             }}
//             render={({ field, fieldState: { error } }) => (
//               <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly debts" error={error} />
//             )}
//             name="monthlyDebts"
//           />
//         </Box>

//         {/* Optional fields */}
//         {showAll && (
//           <Box className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <Controller
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Savings" error={error} />
//               )}
//               name="monthlySavings"
//             />
//             <Controller
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Expenses" error={error} />
//               )}
//               name="monthlyExpenses"
//             />
//           </Box>
//         )}

//         {/* More options button */}
//         <Box className="flex w-full justify-center md:justify-center -mb-8" style={{ marginBottom: '1%' }}>
//           <Button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-gray-400 max-w-[160px] !text-black-500 dark:bg-gray-600 dark:!text-gray-300"
//             endIcon={
//               <KeyboardArrowDownIcon className={`w-7 ${showAll ? 'transform rotate-180' : ''}`} />
//             }
//           >
//             More Options
//           </Button>
//         </Box>

//         {/* Calculate Rent button */}
//         <Box className="flex w-full justify-center">
//           <Button
//             onClick={handleSubmit(onSubmit)}
//             className="max-w-[160px] mx-auto mt-8 md:mt-0 bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-300"
//           >
//             Calculate Rent
//           </Button>
//         </Box>

//         {/* Rent and amount left display */}
//         <Typography className="text-center text-black text-sm dark:text-gray-300" variant="body1">
//           You can afford a ${renderRentAmount} rent in the US while spending {values.rent}% of your monthly income.
//         </Typography>
//         <Typography className="text-center text-black text-sm dark:text-gray-300" variant="body1">
//           You will have ${amountLeft.toFixed(2)} left to spend per month.
//         </Typography>

//         {/* Rent percentage slider */}
//         <Controller
//           control={control}
//           render={({ field }) => (
//             <Slider
//               onChange={(...args) => {
//                 field.onChange(...args);
//                 field.onBlur();
//               }}
//               value={field.value}
//               shiftStep={30}
//               step={5}
//               min={20}
//               max={40}
//               marks={marks}
//             />
//           )}
//           name="rent"
//         />
//       </Box>

//       {/* Right-side Chart */}
//       <Box className="w-full md:w-1/3 items-start justify-center flex bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900">
//         <Box className="w-[240px]">
//           <Chart data={data} />
//           <Typography className="p-[20px] text-center text-2xl text-gray-700 dark:text-gray-300" variant="body1">
//             You can afford ${amountLeft < 0 ? '0' : renderRentAmount}/<span className="text-sm">month.</span>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;





// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
///////////////////////////
//////////////////////////
'use client';

import Button from "@/components/InvestButton";
import Input from "@/components/Input";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from "@/components/Slider";
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });

interface IFormValues {
  location: string;
  monthlyGrossIncome: number;
  monthlyDebts: number;
  monthlySavings: number;
  monthlyExpenses: number;
  rent: number;
}

const marks = [
  { value: 20, label: '20%' },
  { value: 40, label: '40%' },
];

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [themeClass, setThemeClass] = useState<'light' | 'dark'>('light');
  const searchParams = useSearchParams();

  const { control, handleSubmit, watch } = useForm<IFormValues>({
    defaultValues: {
      location: 'Los Angeles, CA',
      monthlyGrossIncome: 5000,
      monthlyDebts: 2000,
      monthlySavings: 500,
      monthlyExpenses: 100,
      rent: 30,
    },
    mode: 'onTouched',
  });

  const onSubmit = (value: IFormValues) => {
    console.log(value);
  };

  const values = watch();
  const rentAmount = values.monthlyGrossIncome * (values.rent / 100);
  const amountLeft = values.monthlyGrossIncome - values.monthlyDebts - values.monthlySavings - values.monthlyExpenses - values.monthlyGrossIncome * 0.3;
  const amountLeftPercent = amountLeft / values.monthlyGrossIncome;
  const renderRentAmount = rentAmount.toFixed(2);

  const data = [
    { name: 'Amount left', y: amountLeftPercent },
    { name: 'Monthly Savings', y: values.monthlySavings / values.monthlyGrossIncome },
    { name: 'Monthly Expenses', y: values.monthlyExpenses / values.monthlyGrossIncome },
    { name: 'Monthly Debts', y: values.monthlyDebts / values.monthlyGrossIncome },
    { name: 'Rent', y: rentAmount / values.monthlyGrossIncome },
  ];

  useEffect(() => {
    const theme = searchParams.get('theme');
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setThemeClass('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setThemeClass('light');
    }
  }, [searchParams]);

  return (
    <Box className="flex justify-center items-center min-h-screen p-6 bg-transparent">
      <Box className="w-full max-w-5xl bg-white text-black shadow-xl rounded-2xl overflow-hidden">
        <Box
          className={`flex flex-col md:flex-row max-w-[860px] w-full mx-auto rounded-[25px] overflow-hidden ${
            themeClass === 'dark' ? 'dark' : ''
          }`}
        >
          {/* Main Content Area */}
          <Box
            className={`
              w-full md:w-2/3 p-7 pt-50 flex flex-col gap-8
              ${themeClass === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-black'}
            `}
          >
            <Typography className="text-center font-medium" variant="h2">
              Rent Calculator
            </Typography>
            <Typography className="text-center font-medium" variant="h6">
              *Switch to light mode if the fields are too dark.☀️
            </Typography>
  
            {/* Inputs */}
            <Box className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Controller
                control={control}
                rules={{ required: 'Must be completed' }}
                render={({ field, fieldState: { error } }) => (
                  <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Gross Income" error={error} />
                )}
                name="monthlyGrossIncome"
              />
              <Controller
                control={control}
                rules={{ required: 'Must be completed' }}
                render={({ field, fieldState: { error } }) => (
                  <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly debts" error={error} />
                )}
                name="monthlyDebts"
              />
            </Box>
  
            {/* Optional Fields */}
            {showAll && (
              <Box className="flex flex-col md:flex-row items-center justify-between gap-8">
                <Controller
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Savings" error={error} />
                  )}
                  name="monthlySavings"
                />
                <Controller
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input {...field} type="number" className="w-full md:w-1/2" placeholder="Monthly Expenses" error={error} />
                  )}
                  name="monthlyExpenses"
                />
              </Box>
            )}
  
            {/* More Options */}
            <Box className="flex w-full justify-center md:justify-center -mb-8">
              <Button
                onClick={() => setShowAll(!showAll)}
                className={`bg-gray-400 max-w-[160px] !text-black-500 ${
                  themeClass === 'dark' ? 'dark:bg-gray-600 dark:!text-gray-300' : ''
                }`}
                endIcon={
                  <KeyboardArrowDownIcon className={`w-7 ${showAll ? 'transform rotate-180' : ''}`} />
                }
              >
                More Options
              </Button>
            </Box>
  
            {/* Submit */}
            <Box className="flex w-full justify-center">
              <Button
                onClick={handleSubmit(onSubmit)}
                className={`max-w-[160px] mx-auto mt-8 md:mt-0 ${
                  themeClass === 'dark' ? 'bg-blue-600 text-gray-300' : 'bg-blue-500 text-white'
                }`}
              >
                Calculate Rent
              </Button>
            </Box>
  
            {/* Results */}
            <Typography className="text-center text-black text-sm dark:text-gray-300" variant="body1">
              You can afford a ${renderRentAmount} rent in the US while spending {values.rent}% of your monthly income.
            </Typography>
            <Typography className="text-center text-black text-sm dark:text-gray-300" variant="body1">
              You will have ${amountLeft.toFixed(2)} left to spend per month.
            </Typography>
  
            {/* Slider */}
            <Controller
              control={control}
              render={({ field }) => (
                <Slider
                  onChange={(...args) => {
                    field.onChange(...args);
                    field.onBlur();
                  }}
                  value={field.value}
                  shiftStep={30}
                  step={5}
                  min={20}
                  max={40}
                  marks={marks}
                />
              )}
              name="rent"
            />
          </Box>
  
          {/* Right-side Chart */}
          <Box
            className={`w-full md:w-1/3 items-start justify-center flex ${
              themeClass === 'dark'
                ? 'bg-gradient-to-r from-gray-700 to-gray-900'
                : 'bg-gradient-to-r from-blue-100 to-blue-200'
            }`}
          >
            <Box className="w-[240px]">
              <Chart data={data} />
              <Typography
                className={`p-[20px] text-center text-2xl ${
                  themeClass === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                variant="body1"
              >
                You can afford ${amountLeft < 0 ? '0' : renderRentAmount}/<span className="text-sm">month.</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  
};

export default Home;
