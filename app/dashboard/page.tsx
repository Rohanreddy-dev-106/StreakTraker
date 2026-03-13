/** @format */

"use client";

import { useEffect, useState } from "react";
import StreakCard from "@/components/StreakCard";
import StudyButton, {
  getStoredDates,
  saveDateToStorage,
} from "@/components/StudyButton";
import { calculateStreak, formatDate, getTodayStr } from "@/lib/streakLogic";

export default function DashboardPage() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [lastStudied, setLastStudied] = useState<string | null>(null);
  const [studiedToday, setStudiedToday] = useState(false);

  function loadData() {
    const dates = getStoredDates();
    const streak = calculateStreak(dates);
    const todayStr = getTodayStr();

    setCurrentStreak(streak.currentStreak);
    setTotalDays(streak.totalDays);
    setLastStudied(streak.lastStudied ? formatDate(streak.lastStudied) : null);
    setStudiedToday(dates.includes(todayStr));
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleStudied() {
    const today = getTodayStr();
    saveDateToStorage(today);
    loadData();
  }

  return (
    <div className='space-y-10'>
      <div className='text-center space-y-2 animate-slide-up'>
        <p className='text-sm font-body uppercase tracking-widest text-stone-400'>
          Welcome back 
        </p>
        <h1 className='text-4xl sm:text-5xl font-display font-bold text-stone-800'>
          Your Learning Streak
        </h1>
        <p className='font-body text-stone-500 text-lg'>
          Consistency beats intensity. Show up every day.
        </p>
      </div>

      <StreakCard
        currentStreak={currentStreak}
        totalDays={totalDays}
        lastStudied={lastStudied}
      />

      <div className='bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-sm space-y-6 animate-pop-in'>
        {studiedToday ? (
          <div className='space-y-3'>
            <p className='text-2xl font-display font-bold text-emerald-600'>
              You already studied today!
            </p>
            <p className='font-body text-stone-500'>
              Come back tomorrow to keep your streak alive.
            </p>
          </div>
        ) : (
          <>
            <p className='font-body text-stone-600 text-lg'>
              Did you study today? Mark your session below!
            </p>
            <StudyButton onStudied={handleStudied} />
          </>
        )}
      </div>
    </div>
  );
}
