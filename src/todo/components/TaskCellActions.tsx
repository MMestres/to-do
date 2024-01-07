interface Props {
  onRemove: () => void
  onEdit: () => void
}

export const TaskCellActions = ({
  onRemove // onEdit
}: Props) => {
  return <div className="w-full h-full flex flex-row items-center justify-center gap-1">
    {/* <button onClick={onEdit} className="py-2 lg:opacity-0 text-slate-800/70 hover:text-slate-800 group-hover:opacity-100 transition-all duration-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
    </button> */}
    <button onClick={onRemove} className="py-2 text-red-800/60 hover:text-red-800 group-hover:opacity-100 transition-all duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
    </button>
  </div>
}
