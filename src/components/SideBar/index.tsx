import React from 'react'
import { LayoutDashboard, Sheet, Trophy, Bolt} from 'lucide-react'
import img_equatorial_logo from '../../assets/menu-btn-title.png'
import MenuSideBarOpen from './MenuSideBar'
import './index.css' // Import the CSS file

type Menu = {
    title: string
    icon: JSX.Element
    submenu: boolean
    submenus?: { title: string }[]
  }

const menus: Menu[] = [
  {
    title: 'DashBoards',
    icon: <LayoutDashboard color='purple' />,
    submenu: true,
    submenus: [
      { title: 'Análise Geral Novos' },
      { title: 'Análise Geral Antigos' },
      { title: 'Analítico' }
    ]
  },
  {
    title: 'Tabelas e Estatísticas',
    icon: <Sheet color='#322b8c' />,
    submenu: true,
    submenus: [
      { title: 'Maranhão' },
      { title: 'Pará' },
      { title: 'Piauí' },
      { title: 'Alagoas' }
    ]
  },
  {
    title: 'Produtividade',
    icon: <Trophy color='gray' />,
    submenu: true,
    submenus: [
      { title: 'Processos novos' },
      { title: 'Processos antigos' }
    ]
  }
]

const menu2: Menu = {
  title: 'Sistema',
  icon: <Bolt color='blue' />, // You can change the icon as needed
  submenu: true,
  submenus: [
    { title: 'Configurações' },
    { title: 'Usuários' },
    { title: 'Log' },
    { title: 'Sobre' }
  ]
}

export default function SideBar() {
  const [open, setOpen] = React.useState(false)
  const [openSubmenus1, setOpenSubmenus1] = React.useState<number[]>([])
  const [openSubmenus2, setOpenSubmenus2] = React.useState<number[]>([])

  function handleMouseEnter() {
    setOpen(true)
  }

  function handleMouseOut() {
    setOpen(false)
    setOpenSubmenus1([]) // Close all submenus when mouse leaves
    setOpenSubmenus2([]) // Close all submenus when mouse leaves
  }

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      className={`aside-content ${open ? 'w-80' : 'w-20'} bg-white mt-14 p-4 h-3/4 flex flex-col gap-4 duration-200 rounded-2xl z-20 overflow-y-auto cursor-pointer shadow-2xl`} // Changed shadow-lg to shadow-2xl
    >
      <img
        src={img_equatorial_logo}
        alt="imagem equatorial"
        className={`transition-transform duration-200 ${open ? 'scale-100' : 'scale-0'}`}
      />
      <hr className='border-t-2' />
      <MenuSideBarOpen open={open} openSubmenus={openSubmenus1} setOpenSubmenus={setOpenSubmenus1} menus={menus} />
      <hr className='border-t-2' />
      <MenuSideBarOpen open={open} openSubmenus={openSubmenus2} setOpenSubmenus={setOpenSubmenus2} menus={[menu2]} />
      <hr className='border-t-2' />
    </aside>
  )
}
