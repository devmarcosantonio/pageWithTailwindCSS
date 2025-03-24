import { useState } from 'react'
import './output.css'
import SideBar from './components/SideBar'
import Main from './components/Main'
import { LogOut } from 'lucide-react'


function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className='flex w-full h-14 bg-white p-10'>
        <span><LogOut /></span>
      </header>
      <SideBar />
      <Main />
      
    </>
  )
}

export default App

