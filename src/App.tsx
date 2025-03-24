import { useState } from 'react'
import './output.css'
import SideBar from './components/SideBar'
import Main from './components/Main'
import { LogOut } from 'lucide-react'
import profile from './assets/profile.png'


function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <header className='flex justify-end gap-10 bg-cyan-600 fixed w-full h-52 px-2 pt-4 '>
        <section className='flex'>
          <span className='text-white p-2 font-bold'>Bom dia, Raiza!</span>
          <span className='size-[40px] border rounded-full p-1 bg-white'><img src={profile} /></span>
          
        </section>
        <span className='font-bold flex self-start p-2 rounded-2xl gap-2 cursor-pointer duration-300 hover:bg-white text-white hover:text-cyan-600'>Sair <LogOut className='hover:text-cyan-600'/></span>
      </header>
      <div className='grid grid-cols-[100px_4fr] justify-items-start h-screen mx-auto w-[90%]'>
        <SideBar />
        <Main />
      
      </div>
    </>
    
  )
}

export default App

