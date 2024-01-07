import { Footer } from './Footer'
import { ToDo } from './todo/ToDo'

function App () {
  return <div className="relative text-slate-800">
    <main className="z-10 w-screen min-h-screen grid md:grid-cols-[1fr,auto,1fr]">
      <div className='hidden md:block'></div>
      <div className='min-w-[320px] w-full md:w-[768px] bg-white border-x border-red-900 flex flex-col justify-between'>
        <ToDo />
        <Footer github='https://github.com/MMestres/to-do' />
      </div>
      <div className='hidden md:block'></div>
    </main>
  </div>
}

export default App
