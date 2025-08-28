import * as React from "react";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-12 w-auto"
      role="img"
      aria-label="100x Sellers logo"
    >
      {/* 100x (red) */}
      <path
        d="M110 180 L130 180 L130 280 L110 280 Z 
           M150 180 C130 180 120 200 120 230 C120 260 130 280 150 280 
           C170 280 180 260 180 230 C180 200 170 180 150 180 Z 
           M220 180 C200 180 190 200 190 230 C190 260 200 280 220 280 
           C240 280 250 260 250 230 C250 200 240 180 220 180 Z 
           M280 180 H310 V280 H280 Z"
        className="fill-red-500"
      />

      {/* Sellers (black) */}
      <path
        d="M100 350 C100 320 130 320 160 320 C190 320 220 340 220 370 
           C220 400 190 420 160 420 C130 420 100 400 100 370 Z"
        className="fill-black"
      />

      {/* Bars */}
      <rect x="380" y="350" width="20" height="30" rx="2" className="fill-black" />
      <rect x="410" y="330" width="20" height="50" rx="2" className="fill-black" />
      <rect x="440" y="300" width="20" height="80" rx="2" className="fill-black" />

      {/* Arrow */}
      <path
        d="M360 370 C400 350 440 320 470 280"
        stroke="#EF4444"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M470,270 L490,280 L470,290 Z" className="fill-red-500" />
    </svg>
  );
};
