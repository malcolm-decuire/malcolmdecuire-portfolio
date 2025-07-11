'use client';

import React from 'react';

interface DiscoveryIconProps {
  className?: string;
  size?: number | string;
}

const DiscoveryIcon: React.FC<DiscoveryIconProps> = ({ className = '', size = 96 }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
	<path fill="#7829c9" d="M6 17h8v2H6z"></path>
	<circle cx={3} cy={18} r={1} fill="#7829c9"></circle>
	<circle cx={13} cy={14} r={1} fill="#7829c9"></circle>
	<path fill="#7829c9" d="M2 13h8v2H2zm4-4h8v2H6z"></path>
	<circle cx={3} cy={10} r={1} fill="#7829c9"></circle>
	<path fill="#7829c9" d="m30 28.6l-7.4-7.4c1.5-2 2.4-4.5 2.4-7.2c0-6.6-5.4-12-12-12c-3.3 0-6.4 1.3-8.7 3.8l1.5 1.4C7.6 5.1 10.2 4 13 4c5.5 0 10 4.5 10 10s-4.5 10-10 10c-3 0-5.8-1.3-7.7-3.6l-1.5 1.3C6 24.4 9.4 26 13 26c3.2 0 6.1-1.3 8.3-3.3l7.3 7.3z"></path>
</svg>
);

export default DiscoveryIcon;
