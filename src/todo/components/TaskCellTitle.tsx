import { TableCellCheck } from './TaskCellCheck'
import { TaskCellActions } from './TaskCellActions'

interface Props {
  taskClass?: string
  buttonClass?: string
  expanded?: boolean
  textClass?: string
  title: string
  onRemove: () => void
  onToggleCompleted: () => void
}

export const TaskCellTitle = ({
  taskClass = '', buttonClass = '', expanded = false, textClass = '', title, onRemove, onToggleCompleted
}: Props) => {
  const edit = () => {
    // TODO: Implement edit
  }
  return <div className={`group ${taskClass} ${expanded ? 'col-span-10' : 'col-span-8'} bg-slate-400/20 rounded-sm text-slate-700 text-left grid ${expanded ? 'grid-cols-10' : 'grid-cols-8'} items-center py-1`}>
    <TableCellCheck buttonClass={buttonClass} onToggleCompleted={onToggleCompleted} />
    <p className={`w-fit overflow-hidden whitespace-nowrap text-ellipsis ${textClass} transition-all duration-500 ${expanded ? 'col-span-8' : 'col-span-6'}`} onClick={edit}>{title}</p>
    <TaskCellActions onRemove={onRemove} onEdit={edit} />
  </div>
}
