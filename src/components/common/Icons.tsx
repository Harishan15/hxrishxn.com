import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const HxMenuIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.5"
        y="3.5"
        width="22"
        height="22"
        rx="6.5"
        stroke="currentColor"
        stroke-width="7"
      />
      <rect
        x="3.5"
        y="38.5"
        width="22"
        height="22"
        rx="6.5"
        stroke="currentColor"
        stroke-width="7"
        fill="none"
      />
      <rect
        x="38.5"
        y="3.5"
        width="22"
        height="22"
        rx="6.5"
        stroke="currentColor"
        stroke-width="7"
        fill="none"
      />
      <rect
        x="38.5"
        y="38.5"
        width="22"
        height="22"
        rx="6.5"
        stroke="currentColor"
        stroke-width="7"
        fill="none"
      />
    </SvgIcon>
  );
};
