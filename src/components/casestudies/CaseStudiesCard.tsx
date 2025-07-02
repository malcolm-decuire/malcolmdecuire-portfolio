// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
// "use client";

// import type {CardProps} from "@heroui/react";

// import React from "react";
// import {Card, Image, CardBody, CardFooter, Button, Spacer} from "@heroui/react";


// export default function Component(props: CardProps) {
//   return (
//     <Card className="w-[420px]" {...props}>
//       <CardBody className="px-3 pb-1">
//         <Image
//           alt="Card image"
//           className="aspect-video w-full object-cover object-top"
//           src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/airpods.png"
//         />
//         <Spacer y={2} />
//         <div className="flex flex-col gap-2 px-2">
//           <p className="text-large font-medium">Card with thumbnail</p>
//           <p className="text-small text-default-400">
//             This is a card with a thumbnail image on top.
//           </p>
//         </div>
//       </CardBody>
//       <CardFooter className="justify-end gap-2">
//         <Button fullWidth variant="light">
//           Cancel
//         </Button>
//         <Button fullWidth>Continue</Button>
//       </CardFooter>
//     </Card>
//   );
// }

///////////////////
/////////////////
/////////////////
// 20250701 UPDATE FOR PUBLIC REPO 
'use client';

import type { CardProps } from '@heroui/react';
import React, { useState } from 'react';
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Button,
} from '@heroui/react';
import SkillsModal from '@/components/SkillsModal';
import { Icon } from '@iconify/react';

export default function Component(props: CardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="w-full max-w-5xl p-4" {...props}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full">
            <Image
              alt="Client Logos"
              className="aspect-video w-full object-cover object-top rounded-medium"
              src="/images/photos/DECURELABS-CLIENTS-LOGO.png"
            />
          </div>

          {/* Right: Content */}
          <CardBody className="flex flex-col justify-start gap-2 px-0 md:w-1/2 w-full">
            <p className="text-large font-medium">Stakeholder's Feedback</p>

            <p className="text-small font-medium text-default-600">Clients like my ability to:</p>
            <ul className="text-small text-default-400 space-y-2 mb-4">
              {[
                'Subject Matter Expertise & Discovery – I structure early engagements to surface needs fast and align teams from day one.',
                'Deliver Tailored Technical Solutions – I translate unique business goals into actionable architectures that scale.',
              ].map((item, idx) => (
                <li key={`clients-${idx}`} className="flex items-start gap-2">
                  <Icon icon="clarity:assign-user-solid" className="text-cyan-500 mt-[2px]" width={18} height={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-small font-medium text-default-600">Sales teams appreciate my ability to:</p>
            <ul className="text-small text-default-400 space-y-2 mb-4">
              {[
                'Accelerate Deal Velocity – I remove friction by answering technical objections before they become blockers.',
                'Build Confidence in Execution – I bridge vision and implementation, earning trust from technical stakeholders early.',
              ].map((item, idx) => (
                <li key={`sales-${idx}`} className="flex items-start gap-2">
                  <Icon icon="clarity:assign-user-solid" className="text-cyan-500 mt-[2px]" width={18} height={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-small font-medium text-default-600">Development teams value my ability to:</p>
            <ul className="text-small text-default-400 space-y-2">
              {[
                'Drive Product Development – I collaborate closely with DEV & PROD teams ensuring engineering insights shape go-to-market motions.',
                'Create & Deliver Clear Documentation– I build out clear, effective, and sustainable documentation for technical & non-technical users.',
              ].map((item, idx) => (
                <li key={`dev-${idx}`} className="flex items-start gap-2">
                  <Icon icon="clarity:assign-user-solid" className="text-cyan-500 mt-[2px]" width={18} height={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </div>

        {/* Footer: Buttons */}
        <CardFooter className="justify-end gap-2 mt-4 px-0">
          <Button
            fullWidth
            variant="light"
            onClick={() =>
              window.open('https://calendly.com/malcolm-decuire', '_blank')
            }
          >
            Connect
          </Button>
          <Button fullWidth onClick={() => setShowModal(true)}>
            Tech Stack
          </Button>
        </CardFooter>
      </Card>

      {showModal && (
        <SkillsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
