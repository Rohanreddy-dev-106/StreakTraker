export type StreakInfo = {
  currentStreak: number
  totalDays: number
  lastStudied: string | null
}

export function getTodayStr(): string {
  return new Date().toISOString().split('T')[0]//Date formating
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function calculateStreak(dates: string[]): StreakInfo {
  if (dates.length === 0) {
    return { currentStreak: 0, totalDays: 0, lastStudied: null };
  }

  const sorted = [...dates].sort((a, b) => (a > b ? -1 : 1)); //History  latest first

  const lastStudied = sorted[0];
  const totalDays = dates.length;

  const today = getTodayStr();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); /// go back 1 day
  const yesterdayStr = yesterday.toISOString().split("T")[0];//formate

  if (lastStudied !== today && lastStudied !== yesterdayStr) {//chicks dates are consitative or not
    return { currentStreak: 1, totalDays, lastStudied };
  }

  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const curr = new Date(sorted[i] + "T00:00:00");
    const prev = new Date(sorted[i + 1] + "T00:00:00");
    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return { currentStreak: streak, totalDays, lastStudied };
}
