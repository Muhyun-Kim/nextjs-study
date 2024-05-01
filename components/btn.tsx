"use client";

import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface tnProps {
  icon: ReactNode;
  text: string;
}

export default function Btn({ icon, text }: tnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 flex items-center justify-center gap-3 disabled:bg-neutral-400 disabled:cursor-not-allowed"
    >
      <span className="h-5 w-5">{icon}</span>
      <span>{pending ? "ローディング中..." : text}</span>
    </button>
  );
}
