import { type Task } from '../types/Task'
import { TaskCellDateTime } from './TaskCellDateTime'
import { TaskCellTitle } from './TaskCellTitle'
import { useTaskStateMachine } from '../hooks/useTaskStateMachine'

interface Props {
  task: Task
  showDate?: boolean
  onUpdateTask: (task: Task) => void
  onRemoveTask?: (task: Task) => void
  hideCompleted?: boolean
}

export const TaskRow = ({
  task, showDate = true, onUpdateTask, onRemoveTask, hideCompleted = true
}: Props) => {
  const { btnClass, txtClass, taskClass, setCompleted, setDisplay } = useTaskStateMachine(task, hideCompleted)

  const toggleCompleted = () => {
    const newCompleted = !task.completed
    setCompleted(newCompleted)

    if (hideCompleted) {
      setDisplay(false, true)
    }

    setTimeout(() => {
      if (onUpdateTask != null) {
        onUpdateTask({
          ...task,
          completed: newCompleted
        })
      }
    }, 1000)
  }

  const removeTask = () => {
    setDisplay(false)

    setTimeout(() => {
      if (onRemoveTask != null) {
        onRemoveTask(task)
      }
    }, 600)
  }

  return <>
    <TaskCellTitle
      title={task.title}
      onToggleCompleted={toggleCompleted}
      buttonClass={btnClass}
      expanded={task.datetime == null}
      textClass={txtClass}
      taskClass={taskClass}
      onRemove={removeTask}
    />
    {task.datetime != null && <TaskCellDateTime
      datetime={task.datetime}
      showDate={showDate}
      taskClass={taskClass}
      textClass={txtClass}
    />}
  </>
}
