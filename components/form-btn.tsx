import React, { ReactNode } from "react";

interface FormBtnProps {
  loading: boolean;
  icon: ReactNode;
  text: string;
}

export default function FormBtn({ loading, icon, text }: FormBtnProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 flex items-center justify-center gap-3 disabled:bg-neutral-400 disabled:cursor-not-allowed"
    >
      <span className="h-5 w-5">{icon}</span>
      <span>{loading ? "ローディング中..." : text}</span>
    </button>
  );
}
