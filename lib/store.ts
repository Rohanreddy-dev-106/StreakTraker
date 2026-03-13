import fs from 'fs'
import path from 'path'

export type StudyData = {
  dates: string[]
}

const DATA_FILE = path.join(process.cwd(), 'data.json')

function readData(): StudyData {
  if (!fs.existsSync(DATA_FILE)) {
    return { dates: [] }
  }
  const raw = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(raw) as StudyData
}

function writeData(data: StudyData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

export function getData(): StudyData {
  return readData()
}

export function saveDate(dateStr: string): { success: boolean; message: string } {
  const data = readData()

  if (data.dates.includes(dateStr)) {
    return { success: false, message: 'You have already marked today.' }
  }

  data.dates.push(dateStr)
  writeData(data)
  return { success: true, message: 'Great job! Study session marked.' }
}
