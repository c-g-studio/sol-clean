import { SVGProps } from 'react';

export const MobileMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="24"
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 2H30" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 12H30" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 22H30" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
