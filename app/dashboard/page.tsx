import StreakCard from '@/components/StreakCard'
import StudyButton from '@/components/StudyButton'
import { getData } from '@/lib/store'
import { calculateStreak, formatDate, getTodayStr } from '@/lib/streakLogic'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const data = getData()
  const streak = calculateStreak(data.dates)

  const todayStr = getTodayStr()
  const studiedToday = data.dates.includes(todayStr)

  return (
    <div className="space-y-10">
      <div className="text-center space-y-2 animate-slide-up">
        <p className="text-sm font-body uppercase tracking-widest text-stone-400">
          Welcome back 👋
        </p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-stone-800">
          Your Learning Streak
        </h1>
        <p className="font-body text-stone-500 text-lg">
          Consistency beats intensity. Show up every day.
        </p>
      </div>

      <StreakCard
        currentStreak={streak.currentStreak}
        totalDays={streak.totalDays}
        lastStudied={streak.lastStudied ? formatDate(streak.lastStudied) : null}
      />

      <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-sm space-y-6 animate-pop-in">
        {studiedToday ? (
          <div className="space-y-3">
            <div className="text-5xl">🏆</div>
            <p className="text-2xl font-display font-bold text-emerald-600">
              You already studied today!
            </p>
            <p className="font-body text-stone-500">
              Come back tomorrow to keep your streak alive.
            </p>
          </div>
        ) : (
          <>
            <p className="font-body text-stone-600 text-lg">
              Did you study today? Mark your session below!
            </p>
            <StudyButton />
          </>
        )}
      </div>
    </div>
  )
}
