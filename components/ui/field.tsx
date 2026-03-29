"use client";

import * as React from "react";
import type { FieldError } from "react-hook-form"; // ✅ add this import

export function Field({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function FieldLabel({ className = "", ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`text-sm font-medium ${className}`} {...props} />;
}

// ✅ Replace any[] with FieldError[]
export function FieldError({ errors }: { errors?: FieldError[] }) {
  if (!errors || errors.length === 0) return null;

  return (
    <p className="text-sm text-red-500">
      {errors[0]?.message}
    </p>
  );
}

export function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}