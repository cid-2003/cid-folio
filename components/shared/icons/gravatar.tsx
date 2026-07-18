import React from 'react';

interface GravatarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function GravatarIcon({ size = 16, className, ...props }: GravatarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://w3.org"
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm1.5-6c0-.828-.672-1.5-1.5-1.5s-1.5 0-1.5.828c0 .34.114.654.303.906C9.176 12.563 8 13.626 8 15h8c0-1.374-1.176-2.437-2.803-2.766.189-.252.303-.566.303-.906z" />
    </svg>
  );
}
