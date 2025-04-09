import DateFilter from '@/components/dateFilter'
import StatCard from '@/components/statCard'
import WelcomeBanner from '@/components/welcomeBanner'
import React from 'react'
import PatientImage from '@/assets/patient.svg'

const PatientStats = [
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

const PatientDashboard = () => {
  return (
    <main className="flex-1 p-8">
        <DateFilter />
        <WelcomeBanner ImageSource={PatientImage} label='patients' />
        <div className="grid grid-cols-4 gap-6 mb-8">
        {PatientStats.map((stat, index)=> <StatCard {...stat} key={index} /> )}
        </div>
        
    </main>
    
  )
}

export default PatientDashboard