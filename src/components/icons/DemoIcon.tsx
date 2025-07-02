'use client';

import React from 'react';

interface DemoIconProps {
  className?: string;
  size?: number | string;
}

const DemoIcon: React.FC<DemoIconProps> = ({ className = '', size = 96 }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
	<path fill="#7829c9" d="M20 2v12l10-6z"></path>
	<path fill="#7829c9" d="M28 14v8H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-8zM18 28h-4v-4h4z"></path>
</svg>
);

export default DemoIcon;
