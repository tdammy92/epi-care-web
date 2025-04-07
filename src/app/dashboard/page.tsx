'use client'

import { useAppSelector } from '@/store'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const IsLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const router = useRouter()
    if (!IsLoggedIn) {
    router.push("/sign-in")
    return null
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard