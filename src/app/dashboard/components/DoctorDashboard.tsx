import DateFilter from '@/components/dateFilter'
import StatCard from '@/components/statCard'
import WelcomeBanner from '@/components/welcomeBanner'
import React from 'react'
import DoctorImage from '@/assets/doctor.svg'

const DoctorStats = [
    {
      count: 890,
      label: "New Patients",
      color: "text-green-500",
    },
    {
      count: 360,
      label: "OPD Patients",
      color: "text-indigo-500",
    }
  
  ]

const DoctorDashboard = () => {
  return (
    <main>
        <DateFilter />
        <WelcomeBanner ImageSource={DoctorImage} label='doctor' />
        <div className="grid grid-cols-4 gap-6 mb-8">
        {DoctorStats.map((stat, index)=> <StatCard {...stat} key={index} /> )}
        </div>
        
    </main>
    
  )
}


export default DoctorDashboard;