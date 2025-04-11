'use client'
import { useAppDispatch } from '@/store'
import { logOutUser } from '@/store/auth-store'
import { BellIcon, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TopNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  const handleLogout = () => {
    dispatch(logOutUser())
    router.push("/sign-in")
  }


  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center relative">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">EPICARE</div>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="search"
          placeholder="Search"
          className="px-4 py-2 rounded-lg bg-white text-gray-900 w-64"
        />
        <div className="flex items-center space-x-2 relative">
          <BellIcon />
          <div className="cursor-pointer flex items-center" onClick={toggleDropdown}>
            <ChevronDown />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 top-10 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Settings
              </button>
              <button onClick={handleLogout}  className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default TopNav
