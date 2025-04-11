import DateFilter from '@/components/dateFilter'
import StatCard from '@/components/statCard'
import WelcomeBanner from '@/components/welcomeBanner'
import React from 'react'
import PatientImage from '@/assets/patient.svg'

const PatientStats = [
    {
      count: 4,
      label: "No. of Visits",
      color: "text-green-500",
    },
    {
      count: 360,
      label: "Cost of last visit",
      color: "text-indigo-500",
    }
  
  ]

const PatientDashboard = () => {
  return (
    <main>
        <DateFilter />
        <WelcomeBanner ImageSource={PatientImage} label='patients' />
        <div className="grid grid-cols-4 gap-6 mb-8">
        {PatientStats.map((stat, index)=> <StatCard {...stat} key={index} /> )}
        </div>
        
    </main>
    
  )
}


export default PatientDashboard