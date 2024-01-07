import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { useTasks } from './hooks/useTasks'
import { HideCompleted } from './components/HideCompleted'
import { TaskList } from './components/TaskList'

export const ToDo = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    selectHeader,
    hideCompletedTasks,
    selectedHeader,
    hasWarning,
    totalTasks,
    hasCompleted,
    toggleFilterCompleted
  } = useTasks()

  const [hideCompletedLocal, setHideCompletedLocal] = useState(hideCompletedTasks)
  const [currentDate, setCurrentDate] = useState(new Date())
  const datesArray = []

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    datesArray.push(date)
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
  }, [])

  const onToggleHide = () => {
    const newHideCompletedLocal = !hideCompletedLocal
    setHideCompletedLocal(newHideCompletedLocal)
    if (newHideCompletedLocal) {
      setTimeout(() => {
        toggleFilterCompleted()
      }, 500)
    } else {
      toggleFilterCompleted()
    }
  }

  return <section className='w-full bg-white p-2 sm:p-4 md:p-8 transition-all duration-500'>
    <Header date={currentDate} onCreateTask={addTask} />
    <div className='grid grid-cols-10 auto-rows-min w-full text-center gap-1 transition-all duration-500'>
      <Filters
        date={currentDate}
        onFilterChange={selectHeader}
        defaultFilter={selectedHeader}
        alert={hasWarning}
      />
      <TaskList
        deleteTask={deleteTask}
        hideCompletedTasks={hideCompletedLocal}
        selectedHeader={selectedHeader}
        tasks={tasks}
        totalTasks={totalTasks}
        updateTask={updateTask}
      />
    </div>
    <HideCompleted
      hasCompleted={hasCompleted}
      hideCompletedTasks={hideCompletedLocal}
      toggleHideCompletedTasks={onToggleHide}
    />
  </section>
}
