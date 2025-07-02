// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
// 'use client';
// import { Box } from '@mui/material'
// import React, { useState } from 'react'
// import Welcome from './components/Welcome'
// import Stepper from '@/components/Stepper';
// import LoanTerms, { ILoanTermsCalculatedValues, ILoanTermsFormValues } from './components/LoanTerms';
// import Revenue, { IRevenueCalculatedValues, IRevenueFormValues } from './components/Revenue';
// import { useForm } from 'react-hook-form';
// import FinancingExpenses, { IFinancingExpensesCalculatedValues, IFinancingExpensesFormValues } from './components/FinancingExpenses';
// import Pmi, { IPmiCalculatedValues, IPmiFormValues } from './components/Pmi';
// import DeptToIncomeAndReserve, { IDeptToIncomeAndReserveCalculatedValues } from './components/DeptToIncomeAndReserve';
// import YourFinancialSituation, { IYourFinancialSituationCalculatedValues, IYourFinancialSituationFormValues } from './components/YourFinancialSituation';
// import MonthlyDeptPayments, { IMonthlyDeptPaymentsCalculatedValues, IMonthlyDeptPaymentsFormValues } from './components/MonthlyDeptPayments';
// import Summary from './components/Summary';
// import { pmt } from 'financial';

// const steps = [
//   {
//     label: 'Loan Terms',
//     Component: LoanTerms
//   },
//   {
//     label: 'Rent Revenue',
//     Component: Revenue
//   },
//   {
//     label: 'Financing Expenses',
//     Component: FinancingExpenses
//   },
//   {
//     label: 'Principal Monthly Interest',
//     Component: Pmi
//   },
//   {
//     label: 'Debt-to-Income Ratios & Reserve Requirements',
//     Component: DeptToIncomeAndReserve
//   },
//   {
//     label: 'User Financial Situation',
//     Component: YourFinancialSituation
//   },
//   {
//     label: 'User Monthly Debt Payments',
//     Component: MonthlyDeptPayments
//   },
// ]

// type IFormValues = ILoanTermsFormValues &
//   IRevenueFormValues &
//   IFinancingExpensesFormValues &
//   IPmiFormValues &
//   IYourFinancialSituationFormValues &
//   IMonthlyDeptPaymentsFormValues;
// type IFormData = IFormValues &
//   ILoanTermsCalculatedValues &
//   IRevenueCalculatedValues &
//   IFinancingExpensesCalculatedValues & 
//   IPmiCalculatedValues &
//   IDeptToIncomeAndReserveCalculatedValues &
//   IYourFinancialSituationCalculatedValues &
//   IMonthlyDeptPaymentsCalculatedValues;

// const defaultFormValues: IFormValues = {
//   homePrice: 300000,
//   downPaymentPercentage: 3.5,
//   interestRate: 4,
//   rentLive: 1000,
//   rent2: 1100,
//   rent3: 1100,
//   rent4: 1100,
//   otherRevenue: 0,
//   escrowTaxes: 246,
//   escrowHomeownersInsurance: 145,
//   escrowHazardInsurance: 59,
//   pmiExpensePercentage: 0.8,
//   yourCurrentRent: 3000,
//   yourCurrentAnnualSalary: 70000,
//   yourCurrentSavings: 0,
//   firstHomeMonthlyMortgagePayment: 0,
//   studentLoansMonthlyPayment: 500,
//   carNoteMonthlyPayment: 500,
//   creditCardPayments: 3000,
//   otherDebtMonthlyPayment: 5000,
// }

// const numberOfPayments = 360;

// enum FlowMode {
//   START = 'START',
//   STEPPER = 'STEPPER',
//   SUMMARY = 'SUMMARY'
// }

// const Calculator2 = () => {
//   const [flowMode, setFlowMode] = useState<FlowMode>(FlowMode.START);
//   const {
//     control,
//     watch
//   } = useForm<IFormValues>({
//     defaultValues: defaultFormValues,
//     mode: 'onTouched',
//   });

//   const formValues = watch();
  
//   const downPaymentAmount = +Number(formValues.homePrice * (formValues.downPaymentPercentage / 100)).toFixed(2)
//   const mortgage = formValues.homePrice - downPaymentAmount;
//   const mortgagePayment = +Number(pmt(formValues.interestRate / 100 / 12, numberOfPayments, mortgage) * -1).toFixed(2);
//   const monthlyPaymentWoPMI = Number(formValues.escrowTaxes) + Number(formValues.escrowHomeownersInsurance) + Number(formValues.escrowHazardInsurance);
//   const pmiExpenseAmount = +Number((pmt(((formValues.interestRate / 100) + (formValues.pmiExpensePercentage / 100)) / 12, numberOfPayments, mortgage) * -1) - (pmt(formValues.interestRate / 100 / 12, numberOfPayments, mortgage) * -1)).toFixed(2)
//   const monthlyPaymentWPmi = +Number(monthlyPaymentWoPMI + pmiExpenseAmount).toFixed(2)
//   const rentRevenueAdjustmentPercentage = 75;
//   const rentSum = Number(formValues.rentLive) + Number(formValues.rent2) + Number(formValues.rent3) + Number(formValues.rent4) + Number(formValues.otherRevenue);

//   const data: IFormData = {
//     ...formValues,
//     rentSum,
//     downPaymentAmount,
//     mortgage,
//     terms: 30,
//     numberOfPayments,
//     mortgagePayment: mortgagePayment,
//     monthlyPaymentWoPMI,
//     pmiExpenseAmount: pmiExpenseAmount,
//     monthlyPaymentWPmi,
//     PITI: +Number(mortgagePayment + monthlyPaymentWoPMI + monthlyPaymentWPmi).toFixed(2),
//     frontendDebtToIncomeRatioPercentage: 31,
//     backendDebtToIncomeRatioPercentage: 43,
//     reserveRequirement: 6,
//     rentRevenueAdjustmentPercentage,
//     additionalIncomeForAffordabilityCalculation: (rentRevenueAdjustmentPercentage / 100) * rentSum,
//     monthlyGrossIncome: +Number(formValues.yourCurrentAnnualSalary / 12).toFixed(2),
//     totalMonthlyDebtPayments: (
//       Number(formValues.firstHomeMonthlyMortgagePayment) +
//       Number(formValues.studentLoansMonthlyPayment) +
//       Number(formValues.carNoteMonthlyPayment) +
//       Number(formValues.creditCardPayments) +
//       Number(formValues.otherDebtMonthlyPayment)
//     ),
//   };
//   return (
//     <Box className="max-w-full mx-auto p-4 lg:p-8">
//       {flowMode === FlowMode.START && (
//         <Welcome onStart={() => setFlowMode(FlowMode.STEPPER)} />
//       )}
//       {flowMode === FlowMode.STEPPER && (
//         <Box className="w-full mx-auto overflow-auto">
//           <Stepper
//             steps={steps}
//             data={{ data }}
//             control={control}
//             onFlowComplete={() => setFlowMode(FlowMode.SUMMARY)}
//           />
//         </Box>
//       )}
//       {flowMode === FlowMode.SUMMARY && <Summary data={data} />}
//     </Box>
//   );
// };

// export default Calculator2;


////////////////////////////
///////////////////////////
//////////////////////////
// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
'use client';

import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Stepper from '@/components/Stepper';
import LoanTerms, { ILoanTermsCalculatedValues, ILoanTermsFormValues } from './components/LoanTerms';
import Revenue, { IRevenueCalculatedValues, IRevenueFormValues } from './components/Revenue';
import { useForm } from 'react-hook-form';
import FinancingExpenses, { IFinancingExpensesCalculatedValues, IFinancingExpensesFormValues } from './components/FinancingExpenses';
import Pmi, { IPmiCalculatedValues, IPmiFormValues } from './components/Pmi';
import DeptToIncomeAndReserve, { IDeptToIncomeAndReserveCalculatedValues } from './components/DeptToIncomeAndReserve';
import YourFinancialSituation, { IYourFinancialSituationCalculatedValues, IYourFinancialSituationFormValues } from './components/YourFinancialSituation';
import MonthlyDeptPayments, { IMonthlyDeptPaymentsCalculatedValues, IMonthlyDeptPaymentsFormValues } from './components/MonthlyDeptPayments';
import Summary from './components/Summary';
import { pmt } from 'financial';

const steps = [
  { label: 'Loan Terms', Component: LoanTerms },
  { label: 'Rent Revenue', Component: Revenue },
  { label: 'Financing Expenses', Component: FinancingExpenses },
  { label: 'Principal Monthly Interest', Component: Pmi },
  { label: 'Debt-to-Income Ratios & Reserve Requirements', Component: DeptToIncomeAndReserve },
  { label: 'User Financial Situation', Component: YourFinancialSituation },
  { label: 'User Monthly Debt Payments', Component: MonthlyDeptPayments },
];

type IFormValues = ILoanTermsFormValues &
  IRevenueFormValues &
  IFinancingExpensesFormValues &
  IPmiFormValues &
  IYourFinancialSituationFormValues &
  IMonthlyDeptPaymentsFormValues;

type IFormData = IFormValues &
  ILoanTermsCalculatedValues &
  IRevenueCalculatedValues &
  IFinancingExpensesCalculatedValues & 
  IPmiCalculatedValues &
  IDeptToIncomeAndReserveCalculatedValues &
  IYourFinancialSituationCalculatedValues &
  IMonthlyDeptPaymentsCalculatedValues;

const defaultFormValues: IFormValues = {
  homePrice: 300000,
  downPaymentPercentage: 3.5,
  interestRate: 4,
  rentLive: 1000,
  rent2: 1100,
  rent3: 1100,
  rent4: 1100,
  otherRevenue: 0,
  escrowTaxes: 246,
  escrowHomeownersInsurance: 145,
  escrowHazardInsurance: 59,
  pmiExpensePercentage: 0.8,
  yourCurrentRent: 3000,
  yourCurrentAnnualSalary: 70000,
  yourCurrentSavings: 0,
  firstHomeMonthlyMortgagePayment: 0,
  studentLoansMonthlyPayment: 500,
  carNoteMonthlyPayment: 500,
  creditCardPayments: 3000,
  otherDebtMonthlyPayment: 5000,
};

const numberOfPayments = 360;

enum FlowMode {
  START = 'START',
  STEPPER = 'STEPPER',
  SUMMARY = 'SUMMARY'
}

const Calculator2 = () => {
  // ✅ FORCE LIGHT MODE ONLY INSIDE THIS APP (not based on parent or query)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  const [flowMode, setFlowMode] = useState<FlowMode>(FlowMode.START);
  const { control, watch } = useForm<IFormValues>({
    defaultValues: defaultFormValues,
    mode: 'onTouched',
  });

  const formValues = watch();
  const downPaymentAmount = +Number(formValues.homePrice * (formValues.downPaymentPercentage / 100)).toFixed(2);
  const mortgage = formValues.homePrice - downPaymentAmount;
  const mortgagePayment = +Number(pmt(formValues.interestRate / 100 / 12, numberOfPayments, mortgage) * -1).toFixed(2);
  const monthlyPaymentWoPMI = Number(formValues.escrowTaxes) + Number(formValues.escrowHomeownersInsurance) + Number(formValues.escrowHazardInsurance);
  const pmiExpenseAmount = +Number(
    (pmt(((formValues.interestRate / 100) + (formValues.pmiExpensePercentage / 100)) / 12, numberOfPayments, mortgage) * -1)
    - (pmt(formValues.interestRate / 100 / 12, numberOfPayments, mortgage) * -1)
  ).toFixed(2);
  const monthlyPaymentWPmi = +Number(monthlyPaymentWoPMI + pmiExpenseAmount).toFixed(2);
  const rentRevenueAdjustmentPercentage = 75;
  const rentSum = Number(formValues.rentLive) + Number(formValues.rent2) + Number(formValues.rent3) + Number(formValues.rent4) + Number(formValues.otherRevenue);

  const data: IFormData = {
    ...formValues,
    rentSum,
    downPaymentAmount,
    mortgage,
    terms: 30,
    numberOfPayments,
    mortgagePayment,
    monthlyPaymentWoPMI,
    pmiExpenseAmount,
    monthlyPaymentWPmi,
    PITI: +Number(mortgagePayment + monthlyPaymentWoPMI + monthlyPaymentWPmi).toFixed(2),
    frontendDebtToIncomeRatioPercentage: 31,
    backendDebtToIncomeRatioPercentage: 43,
    reserveRequirement: 6,
    rentRevenueAdjustmentPercentage,
    additionalIncomeForAffordabilityCalculation: (rentRevenueAdjustmentPercentage / 100) * rentSum,
    monthlyGrossIncome: +Number(formValues.yourCurrentAnnualSalary / 12).toFixed(2),
    totalMonthlyDebtPayments: (
      Number(formValues.firstHomeMonthlyMortgagePayment) +
      Number(formValues.studentLoansMonthlyPayment) +
      Number(formValues.carNoteMonthlyPayment) +
      Number(formValues.creditCardPayments) +
      Number(formValues.otherDebtMonthlyPayment)
    ),
  };

  return (
    <Box className="flex justify-center items-center min-h-screen p-6 bg-transparent">
      <Box className="w-full max-w-5xl bg-white text-black shadow-xl rounded-2xl overflow-hidden">
        <Box className="light text-black bg-white w-full p-4 lg:p-8">
          {flowMode === FlowMode.START && (
            <Welcome onStart={() => setFlowMode(FlowMode.STEPPER)} />
          )}
          {flowMode === FlowMode.STEPPER && (
            <Box className="w-full mx-auto overflow-auto">
              <Stepper
                steps={steps}
                data={{ data }}
                control={control}
                onFlowComplete={() => setFlowMode(FlowMode.SUMMARY)}
              />
            </Box>
          )}
          {flowMode === FlowMode.SUMMARY && <Summary data={data} />}
        </Box>
      </Box>
    </Box>
  );
  
  
};

export default Calculator2;
