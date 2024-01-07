import { type Task } from '../types/Task'
import { formatDateLong, formatTimeLong } from '../utils/formatDate'
import { TaskForm } from './TaskForm'

interface Props {
  date: Date
  onCreateTask: (task: Task) => void
}

export const Header = ({
  date, onCreateTask
}: Props) => {
  return (
    <header className='flex flex-col gap-1'>
      <div className='flex flex-row justify-between text-xs text-slate-600'>
        <time>{formatDateLong(date)}</time>
        <time>{formatTimeLong(date)}</time>
      </div>
      <h1 className='text-xl font-bold text-red-900'>Lista de tareas</h1>
      <TaskForm onCreateTask={onCreateTask} />
    </header>
  )
}
