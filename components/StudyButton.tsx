"use client";

import { useState } from "react";

const STORAGE_KEY = "streak_dates";

export function getStoredDates(): string[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return JSON.parse(raw) as string[];
}

export function saveDateToStorage(dateStr: string): void {
  const dates = getStoredDates();
  if (!dates.includes(dateStr)) {
    dates.push(dateStr);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
  }
}

type Props = {
  onStudied?: () => void;
};

export default function StudyButton({ onStudied }: Props) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleClick() {
    setStatus("loading");

    const today = new Date().toISOString().split("T")[0];
    const dates = getStoredDates();

    if (dates.includes(today)) {
      setStatus("already");
      setMessage("You have already marked today.");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    saveDateToStorage(today);

    setStatus("success");
    setMessage("Great job! Study session marked.");
    setTimeout(() => setStatus("idle"), 3000);

    if (onStudied) onStudied();
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className='
          relative px-10 py-5 rounded-2xl text-xl font-display font-bold
          bg-gradient-to-br from-amber-400 to-orange-500
          text-white shadow-lg shadow-amber-200
          hover:from-amber-500 hover:to-orange-600
          active:scale-95 transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          border-b-4 border-orange-600
        '>
        {status === "loading" ? "Marking..." : " I Studied Today!"}
      </button>

      {status === "success" && (
        <p className='text-emerald-600 font-body font-semibold animate-slide-up bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-200'>
          🎉 {message}
        </p>
      )}

      {status === "already" && (
        <p className='text-amber-700 font-body font-semibold animate-slide-up bg-amber-50 px-5 py-3 rounded-xl border border-amber-200'>
           {message}
        </p>
      )}
    </div>
  );
}
