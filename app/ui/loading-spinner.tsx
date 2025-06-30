'use client';

import { RotatingLines } from 'react-loader-spinner'

export function ButtonLoadingSpinner() {
  return (
    <RotatingLines
      visible={true}
      width="20"
      strokeColor="rgb(37 137 254 / var(--tw-bg-opacity, 1))"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
}

export function PageLoadingSpinner() {
  return (
    <RotatingLines
      visible={true}
      strokeColor="rgb(37 137 254 / var(--tw-bg-opacity, 1))"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
}

