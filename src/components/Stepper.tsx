// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE 
// 'use client';
// import { useTheme } from '@emotion/react';
// import { Box, Step, StepLabel, Stepper as MuiStepper, useMediaQuery, CircularProgress } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import React, { useState } from 'react'
// import  Button from './InvestButton';
// import { Control } from 'react-hook-form';

// interface IStepData {
//   data: Record<any, any>;
// }

// interface IStep {
//   label: string;
//   Component: React.FC<any>;
// }

// interface IStepperProps {
//   steps: IStep[];
//   data: IStepData;
//   control: Control<any, any>;
//   onFlowComplete: () => void;
// }

// const Stepper = ({ steps, data, control, onFlowComplete }: IStepperProps) => {
//   const theme = useTheme();
//   // @ts-ignore
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [stepIndex, setStepIndex] = useState<number>(4);

//   const { Component } = steps[stepIndex];

//   return (
//     <Box>
//       {!isMobile && (
//         <MuiStepper activeStep={stepIndex} alternativeLabel>
//           {steps.map(({ label }, index) => (
//             <Step key={index}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </MuiStepper>
//       )}
//       {isMobile && (
//         <Box className="items-center flex gap-4">
//           <Box className="relative flex items-center">
//             <CircularProgress className="absolute left-0 top-0" color="secondary" variant="determinate" value={100} />
//             <CircularProgress variant="determinate" value={((stepIndex + 1) / steps.length) * 100} />
//             <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-bold text-lg">{stepIndex + 1}</span>
//           </Box>
//           <span className="text-lg">{steps[stepIndex].label}</span>
//         </Box>
//       )}
//       <Box className="mt-8">
//         <Component data={data.data} control={control} />
//         <Box className="flex items-center justify-center mt-8 gap-8 max-w-[300px] mx-auto">
//           <Button startIcon={<ArrowBackIcon />} className="w-1/2" disabled={stepIndex === 0} onClick={() => setStepIndex(prev => prev - 1)}>Prev</Button>
//           <Button
//             startIcon={<ArrowForwardIcon />}
//             className="w-1/2"
//             onClick={() => {
//               if (stepIndex === steps.length - 1) {
//                 onFlowComplete();
//               } else {
//                 setStepIndex(prev => prev + 1)
//               }
//             }}
            
//           >Next</Button>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default Stepper


/////////////////////////////////////
////////////////////////////////////
/////////////////////////////////////
//// // 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL

'use client';
import React, { useState } from 'react';
import { Box, Step, StepLabel, Stepper as MuiStepper, useMediaQuery, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';  // Correct import
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from './InvestButton';
import { Control } from 'react-hook-form';

interface IStepData {
  data: Record<any, any>;
}

interface IStep {
  label: string;
  Component: React.FC<any>;
}

interface IStepperProps {
  steps: IStep[];
  data: IStepData;
  control: Control<any, any>;
  onFlowComplete: () => void;
}

const Stepper = ({ steps, data, control, onFlowComplete }: IStepperProps) => {
  const theme = useTheme();  // Now correctly using Material-UI's theme
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  // This will now work
  const [stepIndex, setStepIndex] = useState<number>(4);

  const { Component } = steps[stepIndex];

  return (
    <Box>
      {!isMobile && (
        <MuiStepper activeStep={stepIndex} alternativeLabel>
          {steps.map(({ label }, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MuiStepper>
      )}
      {isMobile && (
        <Box className="items-center flex gap-4">
          <Box className="relative flex items-center">
            <CircularProgress className="absolute left-0 top-0" color="secondary" variant="determinate" value={100} />
            <CircularProgress variant="determinate" value={((stepIndex + 1) / steps.length) * 100} />
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-bold text-lg">{stepIndex + 1}</span>
          </Box>
          <span className="text-lg">{steps[stepIndex].label}</span>
        </Box>
      )}
      <Box className="mt-8">
        <Component data={data.data} control={control} />
        <Box className="flex items-center justify-center mt-8 gap-8 max-w-[300px] mx-auto">
          <Button
            startIcon={<ArrowBackIcon />}
            className="w-1/2"
            disabled={stepIndex === 0}
            onClick={() => setStepIndex(prev => prev - 1)}
          >
            Prev
          </Button>
          <Button
            startIcon={<ArrowForwardIcon />}
            className="w-1/2"
            onClick={() => {
              if (stepIndex === steps.length - 1) {
                onFlowComplete();
              } else {
                setStepIndex(prev => prev + 1);
              }
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Stepper;
