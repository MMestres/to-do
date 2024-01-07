import { useState } from 'react'
import { type FilterHeader } from '../types/FilterHeader'
import { formatDate, formatDateDayOfMonth, formatDateInitialDayOfWeek } from '../utils/formatDate'

interface Props {
  date: Date
  defaultFilter?: FilterHeader | 'first-day'
  onFilterChange?: (filter: FilterHeader) => void
  alert?: boolean
}

export const Filters = ({
  date, defaultFilter = 'first-day', onFilterChange, alert = false
}: Props) => {
  const datesArray = []
  const filterfirstday = formatDate(date)

  const [selected, setSelected] = useState<FilterHeader>(defaultFilter === 'first-day' ? filterfirstday : defaultFilter)

  for (let i = 0; i < 7; i++) {
    const dateTemp = new Date(date)
    dateTemp.setDate(date.getDate() + i)
    datesArray.push(dateTemp)
  }

  function isDateSelected (date: Date) {
    return formatDate(date) === selected
  }

  function filterChange (filter: FilterHeader) {
    if (filter === selected) {
      setSelected(null)
      if (onFilterChange != null) {
        onFilterChange(null)
      }
    } else {
      setSelected(filter)
      if (onFilterChange != null) {
        onFilterChange(filter)
      }
    }
  }

  return <>
    <button className={`grid place-content-center ${selected === 'warning' ? 'bg-red-900/10 hover:bg-white' : 'hover:bg-slate-100'} p-1 rounded-sm mb-1 ${alert && 'text-red-800'} transition-all duration-500`} onClick={() => { filterChange('warning') }}>
      <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /><path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" /><path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" /></svg>
    </button>
    <button className={`grid place-content-center ${selected === 'no-time' ? 'bg-red-900/10 hover:bg-white' : 'hover:bg-slate-100'} p-1 rounded-sm mb-1 transition-all duration-500`} onClick={() => { filterChange('no-time') }}>
      <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.633 5.64a9 9 0 1 0 12.735 12.72m1.674 -2.32a9 9 0 0 0 -12.082 -12.082" /><path d="M12 7v1" /><path d="M3 3l18 18" /></svg>
    </button>
    {datesArray.map((date, index) => <button key={index} className={`text-sm ${isDateSelected(date) ? 'bg-red-900/10 hover:bg-white' : 'hover:bg-slate-100'} p-1 rounded-sm  mb-1 transition-all duration-500`} onClick={() => { filterChange(formatDate(date)) }}>
      <p>{formatDateInitialDayOfWeek(date)}</p>
      <p className='font-semibold'>{formatDateDayOfMonth(date)}</p>
    </button>)}
    <button className={`grid place-content-center ${selected === 'future' ? 'bg-red-900/10 hover:bg-white' : 'hover:bg-slate-100'} p-1 rounded-sm mb-1 transition-all duration-500`} onClick={() => { filterChange('future') }}>
      <svg xmlns="http://www.w3.org/2000/svg" className='size-5' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.73 17.018a8 8 0 1 1 10.54 0" /><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" /><path d="M11 7a3 3 0 0 0 -3 3" /></svg>
    </button>
  </>
}
