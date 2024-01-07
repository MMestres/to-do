import { useRef } from 'react'
import { type Task } from '../types/Task'

export const useCreateForm = (
  onCreateTask: (task: Task) => void
) => {
  const refInputDateTime = useRef<HTMLInputElement>(null)
  const refForm = useRef<HTMLFormElement>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const task = form.task.value
    const datetime = form.datetime.value

    if (task != null && task !== '') {
      if (datetime != null && datetime !== '') {
        const newtask: Task = {
          id: self.crypto.randomUUID(),
          title: task,
          completed: false,
          datetime: new Date(datetime as string),
          new: true
        }
        if (onCreateTask != null) {
          onCreateTask(newtask)
        }
      } else {
        const newtask: Task = {
          id: self.crypto.randomUUID(),
          title: task,
          completed: false,
          new: true
        }
        if (onCreateTask != null) {
          onCreateTask(newtask)
        }
      }

      refForm.current?.reset()
    }
  }

  return {
    refInputDateTime,
    refForm,
    onSubmit
  }
}
