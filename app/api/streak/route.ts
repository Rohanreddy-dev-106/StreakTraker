import { NextResponse } from 'next/server'
import { getData } from '@/lib/store'
import { calculateStreak, formatDate } from '@/lib/streakLogic'

export async function GET() {
  const data = getData()
  const streak = calculateStreak(data.dates)

  return NextResponse.json({
    currentStreak: streak.currentStreak,
    totalDays: streak.totalDays,
    lastStudied: streak.lastStudied ? formatDate(streak.lastStudied) : null,
  })
}
