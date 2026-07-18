import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function CvIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Document Border */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      {/* Folded Corner */}
      <polyline points="14 2 14 8 20 8" />
      {/* Profile Picture Placeholder */}
      <rect x="7" y="13" width="3" height="4" rx="0.5" />
      {/* Text Lines / Resume Content */}
      <line x1="13" y1="13" x2="17" y2="13" />
      <line x1="13" y1="17" x2="17" y2="17" />
    </svg>
  );
}
