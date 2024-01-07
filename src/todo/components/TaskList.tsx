import { type FilterHeader } from '../types/FilterHeader'
import { type Task } from '../types/Task'
import { TaskEmpty } from './TaskEmpty'
import { TaskRow } from './TaskRow'

interface Props {
  tasks: Task[]
  hideCompletedTasks: boolean
  selectedHeader: FilterHeader
  updateTask: (task: Task) => void
  deleteTask: (task: Task) => void
  totalTasks: number
}

export const TaskList = ({
  tasks, hideCompletedTasks, selectedHeader, updateTask, deleteTask, totalTasks
}: Props) => {
  return <>
    {tasks.map((task) => <TaskRow
        key={task.id}
        task={task}
        onUpdateTask={updateTask}
        onRemoveTask={deleteTask}
        hideCompleted={hideCompletedTasks}
        showDate={selectedHeader == null || selectedHeader === 'warning' || selectedHeader === 'future'}
      />)}
    {tasks.length === 0 && totalTasks === 0 && <TaskEmpty>No tienes tareas.</TaskEmpty>}
    {tasks.length === 0 && totalTasks > 0 && <TaskEmpty>No hay tareas para este filtro</TaskEmpty>}
  </>
}
