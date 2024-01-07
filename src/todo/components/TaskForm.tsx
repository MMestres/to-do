import { type Task } from '../types/Task'
import { useCreateForm } from '../hooks/useCreateForm'

interface Props {
  onCreateTask: (task: Task) => void
}

export const TaskForm = ({
  onCreateTask
}: Props) => {
  const { refForm, refInputDateTime, onSubmit } = useCreateForm(onCreateTask)

  return (
    <form
      ref={refForm}
      onSubmit={onSubmit}
      className='flex flex-row items-center border border-slate-300 rounded-sm my-2'
    >
      <input
        type="text"
        name="task"
        placeholder='¿Qué tienes planeado hacer?'
        defaultValue=''
        className='placeholder:text-slate-500 bg-white text-slate-500 bg-transparent flex-grow p-2 outline-none ring-0 h-10'
        autoFocus
      />
      <input
        ref={refInputDateTime}
        type="datetime-local"
        name="datetime"
        defaultValue=''
        className='placeholder:text-slate-500 bg-white text-slate-500 h-10 flex items-center py-2 px-4 outline-none ring-0'
      />
      <button type="submit" className='h-[40px] w-[40px] bg-slate-100 grid place-content-center hover:bg-slate-300 transition-all duration-500 focus:bg-slate-300 outline-none ring-0'>
        <svg xmlns="http://www.w3.org/2000/svg" className='size-7' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
      </button>
    </form>
  )
}
