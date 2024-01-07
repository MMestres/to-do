import { useEffect, useState } from 'react'
import { type Task } from '../types/Task'

export const useTaskStateMachine = (task: Task, hideCompleted: boolean) => {
  const [stateDisplay, setStateDisplay] = useState<'close' | 'opening' | 'opening-delay' | 'open' | 'closing' | 'closing-delay'>('opening')

  const [stateComplete, setStateComplete] = useState<'todo' | 'completing' | 'completed'>(task.completed ? 'completed' : 'todo')

  useEffect(() => {
    if (task.new === true) {
      setTimeout(() => {
        setStateDisplay('open')
      }, 500)
    }
  }, [task])

  useEffect(() => {
    if (hideCompleted && task.completed) {
      console.log('hideCompleted -> close task')
      setDisplay(false)
    } else if (!hideCompleted && task.completed) {
      console.log('hideCompleted -> open task')
      setDisplay(true)
    }
  }, [hideCompleted, task])

  const btnClass = (stateComplete === 'completed' || stateComplete === 'completing') ? 'bg-green-600' : 'bg-white hover:bg-green-600/50'
  const txtClass = (stateComplete === 'completed' || stateComplete === 'completing') ? 'line-through' : ''

  const taskClass = (stateDisplay === 'closing' || stateDisplay === 'closing-delay')
    ? 'animate-flip-down animate-duration-500 animate-ease-out animate-reverse ' + (stateDisplay === 'closing-delay' ? 'animate-delay-500' : '')
    : (stateDisplay === 'opening' || stateDisplay === 'opening-delay')
        ? 'animate-flip-down animate-duration-500 animate-ease-out' + (stateDisplay === 'opening-delay' ? 'animate-delay-500' : '')
        : (stateDisplay === 'close')
            ? 'hidden'
            : ''

  const setDisplay = (open: boolean, delay = false) => {
    if (open && stateDisplay === 'close') {
      setStateDisplay(delay ? 'opening-delay' : 'opening')
    } else if (!open && stateDisplay === 'open') {
      setStateDisplay(delay ? 'closing-delay' : 'closing')
    }

    setTimeout(() => {
      setStateDisplay(open ? 'open' : 'close')
    }, delay ? 1000 : 500)
  }

  const setCompleted = (completed: boolean) => {
    setStateComplete(completed ? 'completing' : 'todo')

    if (completed) {
      setTimeout(() => {
        setStateComplete('completed')
      }, 500)
    }
  }

  return {
    btnClass,
    txtClass,
    taskClass,
    setDisplay,
    setCompleted
  }
}
