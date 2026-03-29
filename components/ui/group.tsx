"use client";

import * as React from "react";

export function InputGroup({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full">{children}</div>;
}

export function InputGroupTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export function InputGroupAddon({
  children,
  align = "end",
}: {
  children: React.ReactNode;
  align?: "start" | "end" | "block-end";
}) {
  // ✅ Fix: use align to conditionally apply positioning class
  const alignClass =
    align === "start"
      ? "absolute bottom-1 left-2 text-xs text-gray-500"
      : align === "block-end"
      ? "block text-xs text-gray-500 mt-1"
      : "absolute bottom-1 right-2 text-xs text-gray-500"; // "end" (default)

  return <div className={alignClass}>{children}</div>;
}

export function InputGroupText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span>{children}</span>;
}