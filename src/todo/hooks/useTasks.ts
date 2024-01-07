import { useEffect, useState } from 'react'
import { type Task } from '../types/Task'
import { type FiltersDefinition } from '../types/FiltersDefinition'
import { type FilterHeader } from '../types/FilterHeader'
import { formatDate } from '../utils/formatDate'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FiltersDefinition>({
    headerSelect: null,
    hideCompleted: true
  })

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks')
    if (localTasks != null) {
      setTasks(JSON.parse(localTasks) as Task[])
    } else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [])

  const addTask = (task: Task) => {
    const actualTasks = [...tasks]

    setTasks([...actualTasks, task])

    if (task.new === true) {
      setTimeout(() => {
        task = {
          ...task,
          new: false
        }

        const finalTasks = [...actualTasks, task]
        setTasks(finalTasks)
        localStorage.setItem('tasks', JSON.stringify(finalTasks))
      }, 500)
    }
  }

  const updateTask = (task: Task) => {
    const newTasks = tasks.map(t => {
      if (t.id === task.id) {
        return task
      }

      return t
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const deleteTask = (task: Task) => {
    const newTasks = tasks.filter(t => t.id !== task.id)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const selectHeader = (a: FilterHeader) => {
    setFilter({
      ...filter,
      headerSelect: a
    })
  }

  const toggleFilterCompleted = () => {
    const newHide = !filter.hideCompleted

    setFilter({
      ...filter,
      hideCompleted: newHide
    })
  }

  const visibleTasks = tasks
    .filter(task => {
      if (filter.hideCompleted) {
        return !task.completed
      } else {
        return true
      }
    })
    .filter(task => {
      if (filter.headerSelect == null) return true
      else if (filter.headerSelect === 'no-time') {
        return task.datetime == null
      } else if (filter.headerSelect === 'warning') {
        if (task.datetime == null) return false
        const now = new Date()
        return (task.datetime.getTime() - now.getTime()) < 0 && !task.completed
      } else if (filter.headerSelect === 'future') {
        if (task.datetime == null) return false
        const compare = new Date()
        compare.setDate(compare.getDate() + 6)
        return (task.datetime.getTime() - compare.getTime()) > 0
      } else if (task.datetime != null) {
        return formatDate(task.datetime) === filter.headerSelect
      } else {
        return false
      }
    })
    .sort((a, b) => {
      if (a.datetime == null && b.datetime == null) return a.id.localeCompare(b.id)
      if (a.datetime == null && b.datetime != null) return 1
      if (a.datetime != null && b.datetime == null) return -1

      return (a.datetime?.getTime() ?? 0) - (b.datetime?.getTime() ?? 0)
    })

  const hasWarning = tasks.some(task => {
    if (task.datetime == null) return false
    const now = new Date()
    return (task.datetime.getTime() - now.getTime()) < 0 && !task.completed
  })

  const hasCompleted = tasks.some(task => task.completed)

  return {
    tasks: visibleTasks,
    addTask,
    updateTask,
    deleteTask,
    selectHeader,
    toggleFilterCompleted,
    selectedHeader: filter.headerSelect,
    hideCompletedTasks: filter.hideCompleted,
    hasWarning,
    totalTasks: tasks.length,
    hasCompleted
  }
}
