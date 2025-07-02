// /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/src/components/casestudies/CaseStudiesLogoCloud.tsx
'use client';

import React from 'react';
import { clsx } from 'clsx';

// Import your 6 custom SVG logos
import DemoLogo from '@/components/icons/DemoIcon';
import SalesLogo from '@/components/icons/SalesIcon';
import SMELogo from '@/components/icons/SmeIcon';
import PlanningLogo from '@/components/icons/PlanningIcon';
import DiscoveryLogo from '@/components/icons/DiscoveryIcon';
import ProductKnowledgeLogo from '@/components/icons/ProductKnowledgeIcon';

interface LogoItem {
  component: React.FC<{ className?: string; size?: number | string }>;
  alt: string;
}

const logos: LogoItem[] = [
  { component: DemoLogo, alt: 'Demo' },
  { component: SalesLogo, alt: 'Sales Ops' },
  { component: SMELogo, alt: 'Subject Matter Expert' },
  { component: PlanningLogo, alt: 'Planning' },
  { component: DiscoveryLogo, alt: 'Discovery' },
  { component: ProductKnowledgeLogo, alt: 'Product Knowledge' },
];

export function CaseStudiesLogoCloud({ className }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center flex-wrap gap-x-6 gap-y-6 max-sm:mx-auto max-sm:max-w-md max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 my-8'
      )}
    >
      {logos.map(({ component: LogoComponent, alt }, index) => (
        <div key={index} className="flex items-center justify-center">
          <LogoComponent 
            className="h-9 text-gray-700 max-sm:mx-auto sm:h-8 lg:h-12" 
            size={48} 
          />
          <span className="sr-only">{alt}</span>
        </div>
      ))}
    </div>
  );
}

export default CaseStudiesLogoCloud;
