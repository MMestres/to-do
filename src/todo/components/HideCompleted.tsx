interface Props {
  hasCompleted: boolean
  hideCompletedTasks: boolean
  toggleHideCompletedTasks: () => void
}

export const HideCompleted = ({
  hasCompleted, hideCompletedTasks, toggleHideCompletedTasks
}: Props) => {
  return <div className={`${hasCompleted ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
  <hr className='border-slate-300 my-1 sm:my-2' />
  <div className='flex justify-center'>
    <label className="relative inline-flex items-center cursor-pointer scale-90">
      <input type="checkbox" name="hide" value="" className="sr-only peer" checked={hideCompletedTasks} onChange={toggleHideCompletedTasks} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-black peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-slate-600"></div>
      <span className="ms-3 text-sm font-light">Ocultar tareas completadas</span>
    </label>
  </div>
</div>
}
