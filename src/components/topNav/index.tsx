'use client'
import { BellIcon } from 'lucide-react'
import React from 'react'



const TopNav = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="text-2xl font-bold">EPICARE</div>
    </div>
    <div className="flex items-center space-x-4">
      <input
        type="search"
        placeholder="Search"
        className="px-4 py-2 rounded-lg bg-white text-gray-900 w-64"
      />
      <div className="flex items-center space-x-2">
       <BellIcon />
      </div>
    </div>
  </nav>
  )
}

export default TopNav