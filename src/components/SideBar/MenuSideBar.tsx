import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type MenuSideBarProps = {
  open: boolean
  openSubmenus: number[]
  setOpenSubmenus: React.Dispatch<React.SetStateAction<number[]>>
  menus: Menu[] // Add menus as a prop
}

type Menu = {
  title: string
  icon: JSX.Element
  submenu: boolean
  submenus?: { title: string }[]
}

export default function MenuSideBarOpen({ open, openSubmenus, setOpenSubmenus, menus }: MenuSideBarProps) {
  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <nav className='py-1'>
      <ul className={`flex flex-col ${open ? 'items-start' : 'items-center'} gap-y-1`}>
        {menus.map((menu, index) => (
          <React.Fragment key={index}>
            <li
              className={`flex items-center w-full p-3 rounded-xl hover:bg-gray-200 duration-200 cursor-pointer ${open ? 'gap-x-5' : ''}`}
              onClick={() => toggleSubmenu(index)}
              style={{ cursor: 'pointer' }}
            >
              <span>{menu.icon}</span>
              <span className={`text-base font-medium flex-1 ${!open ? 'hidden' : ''}`}>{menu.title}</span>
              {menu.submenu && (
                <ChevronDown
                  color='gray'
                  width={'20px'}
                  className={`ml-auto ${!open ? 'hidden' : ''} ${openSubmenus.includes(index) ? 'rotate-180' : ''}`}
                />
              )}
            </li>
            {menu.submenu && (
              <ul className={`flex flex-col  w-full gap-y-1 transition-all duration-500 ease-in-out ${!open || !openSubmenus.includes(index) ? 'max-h-0 overflow-hidden' : 'max-h-screen'}`}>
                {menu.submenus?.map((submenu, subIndex) => (
                  <li key={subIndex} className='p-2  rounded-xl ml-5 hover:bg-gray-200 duration-500 cursor-pointer whitespace-nowrap' style={{ cursor: 'pointer' }}>
                    {submenu.title}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}
