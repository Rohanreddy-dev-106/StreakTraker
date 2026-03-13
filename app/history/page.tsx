/** @format */

"use client";

import { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import Link from "next/link";
import { getStoredDates } from "@/components/StudyButton";
import { formatDate } from "@/lib/streakLogic";

export default function HistoryPage() {
  const [history, setHistory] = useState<{ raw: string; formatted: string }[]>(
    [],
  );

  useEffect(() => {
    const dates = getStoredDates();
    const sorted = [...dates]
      .sort((a, b) => (a > b ? -1 : 1))
      .map((d) => ({ raw: d, formatted: formatDate(d) }));
    setHistory(sorted);
  }, []);

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between animate-slide-up'>
        <div>
          <h1 className='text-4xl font-display font-bold text-stone-800'>
            Study History
          </h1>
          <p className='font-body text-stone-500 mt-1'>
            {history.length} session{history.length !== 1 ? "s" : ""} recorded
          </p>
        </div>
        <Link
          href='/dashboard'
          className='font-body text-sm font-semibold text-amber-600 hover:text-amber-700 border border-amber-200 bg-amber-50 px-4 py-2 rounded-xl transition-colors'>
          ← Dashboard
        </Link>
      </div>

      <HistoryList history={history} />
    </div>
  );
}
