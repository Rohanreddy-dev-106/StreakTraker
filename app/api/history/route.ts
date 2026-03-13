import { NextResponse } from 'next/server'
import { getData } from '@/lib/store'
import { formatDate } from '@/lib/streakLogic'

export async function GET() {
  const data = getData()

  const sorted = [...data.dates]
    .sort((a, b) => (a > b ? -1 : 1))
    .map((d) => ({ raw: d, formatted: formatDate(d) }))

  return NextResponse.json({ history: sorted })
}
