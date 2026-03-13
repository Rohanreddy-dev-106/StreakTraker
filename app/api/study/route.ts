import { NextResponse } from 'next/server'
import { saveDate } from '@/lib/store'
import { getTodayStr } from '@/lib/streakLogic'

export async function POST() {
  const today = getTodayStr()
  const result = saveDate(today)

  if (!result.success) {
    return NextResponse.json({ message: result.message }, { status: 409 })
  }

  return NextResponse.json({ message: result.message }, { status: 200 })
}
