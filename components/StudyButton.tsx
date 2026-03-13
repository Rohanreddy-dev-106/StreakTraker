'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function StudyButton() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already'>('idle')
  const [message, setMessage] = useState('')

  async function handleClick() {
    setStatus('loading')

    const res = await fetch('/api/study', { method: 'POST' })
    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setMessage(data.message)
      router.refresh()
    } else {
      setStatus('already')
      setMessage(data.message)
    }

    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        disabled={status === 'loading'}
        className="
          relative px-10 py-5 rounded-2xl text-xl font-display font-bold
          bg-gradient-to-br from-amber-400 to-orange-500
          text-white shadow-lg shadow-amber-200
          hover:from-amber-500 hover:to-orange-600
          active:scale-95 transition-all duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
          border-b-4 border-orange-600
        "
      >
        {status === 'loading' ? 'Marking...' : ' I Studied Today!'}
      </button>

      {status === 'success' && (
        <p className="text-emerald-600 font-body font-semibold animate-slide-up bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-200">
           {message}
        </p>
      )}

      {status === 'already' && (
        <p className="text-amber-700 font-body font-semibold animate-slide-up bg-amber-50 px-5 py-3 rounded-xl border border-amber-200">
           {message}
        </p>
      )}
    </div>
  )
}
