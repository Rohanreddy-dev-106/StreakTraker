'use client'

type Props = {
  currentStreak: number
  totalDays: number
  lastStudied: string | null
}

export default function StreakCard({ currentStreak, totalDays, lastStudied }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center animate-pop-in">
        <div className="text-5xl font-display font-bold text-amber-500 animate-flame-pulse inline-block">
          
        </div>
        <p className="text-4xl font-display font-bold text-amber-600 mt-1">{currentStreak}</p>
        <p className="text-sm font-body text-amber-700 mt-1 uppercase tracking-widest">
          Day Streak
        </p>
      </div>

      <div
        className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center animate-pop-in"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        <div className="text-5xl"></div>
        <p className="text-4xl font-display font-bold text-emerald-600 mt-1">{totalDays}</p>
        <p className="text-sm font-body text-emerald-700 mt-1 uppercase tracking-widest">
          Total Days
        </p>
      </div>

      <div
        className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 text-center animate-pop-in"
        style={{ animationDelay: '0.2s', opacity: 0 }}
      >
        <div className="text-5xl"></div>
        <p className="text-lg font-display font-bold text-sky-600 mt-1 leading-tight">
          {lastStudied ?? 'Not yet!'}
        </p>
        <p className="text-sm font-body text-sky-700 mt-1 uppercase tracking-widest">
          Last Studied
        </p>
      </div>
    </div>
  )
}
