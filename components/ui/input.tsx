"use client";

import * as React from "react";

// ✅ Fix: use type alias instead of empty interface
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";