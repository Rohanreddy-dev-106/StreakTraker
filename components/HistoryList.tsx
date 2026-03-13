type HistoryItem = { raw: string; formatted: string }

type Props = {
  history: HistoryItem[]
}

export default function HistoryList({ history }: Props) {
  if (history.length === 0) {
    return (
      <div className="text-center py-16 text-stone-400 font-body text-lg">
        No study sessions yet. Start your streak today! 🚀
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {history.map((item, i) => (
        <li
          key={item.raw}
          className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl px-6 py-4 shadow-sm animate-slide-up"
          style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
        >
        
          <span className="font-body text-stone-700 text-lg">{item.formatted}</span>
          {i === 0 && (
            <span className="ml-auto text-xs font-body font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
              Latest
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
