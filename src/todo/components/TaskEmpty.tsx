interface Props {
  children: React.ReactNode
}

export const TaskEmpty = ({
  children
}: Props) => {
  return <p className='col-span-10 h-[44px] text-red-800 font-semibold text-sm flex items-center justify-center animate-fade animate-duration-500'>
    {children}
  </p>
}
