/** @format */

export type StudyData = {
  dates: string[];
};

const memoryStore: StudyData = { dates: [] };

export function getData(): StudyData {
  return memoryStore;
}

export function saveDate(dateStr: string): {
  success: boolean;
  message: string;
} {
  if (memoryStore.dates.includes(dateStr)) {
    return { success: false, message: "You have already marked today." };
  }

  memoryStore.dates.push(dateStr);
  return { success: true, message: "Great job! Study session marked." };
}
