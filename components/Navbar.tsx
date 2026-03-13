import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
      <Link href="/dashboard" className="flex items-center gap-2 font-display font-bold text-xl text-stone-800">
        <span className="text-2xl animate-flame-pulse inline-block"></span>
        StreakTracker
      </Link>

      <div className="flex gap-6">
        <Link
          href="/dashboard"
          className="font-body text-stone-600 hover:text-amber-600 transition-colors font-medium"
        >
          Dashboard
        </Link>
        <Link
          href="/history"
          className="font-body text-stone-600 hover:text-amber-600 transition-colors font-medium"
        >
          History
        </Link>
      </div>
    </nav>
  )
}
