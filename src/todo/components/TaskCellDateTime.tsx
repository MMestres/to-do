import { formatDate, formatTime } from '../utils/formatDate'

interface Props {
  textClass?: string
  taskClass?: string
  showDate?: boolean
  datetime?: Date
}

export const TaskCellDateTime = ({
  textClass = '', taskClass = '', showDate = false, datetime
}: Props) => {
  const isDateToday = formatDate(datetime) === formatDate(new Date())

  return <div className={`${taskClass} col-span-2 bg-slate-400/20 text-slate-700 text-sm rounded-sm text-center py-2 px-4 w-full h-full grid place-content-center`}>
    {(showDate && !isDateToday) && <p className={textClass}>
      {formatDate(datetime)}
    </p>}
    {(!showDate || isDateToday) && <p className={textClass}>
      {formatTime(datetime)}
    </p>}
  </div>
}
