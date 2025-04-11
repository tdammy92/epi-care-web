import { useAppSelector } from '@/store'
import React, { useMemo } from 'react'



const Greeting = () => {
    const user = useAppSelector((state) => state.auth.UserDetails)
 const name =   useMemo(() => {
     switch (user?.role) {
        case "doctor":
            return `Dr. ${user?.profile?.firstName} ${user?.profile?.lastName}`
        case "nurse":
            return `Nurse ${user?.profile?.firstName} ${user?.profile?.lastName}`
     
        default:
            return `${user?.profile?.firstName} ${user?.profile?.lastName}`
     }
    }, [user?.role])

    const greeting = useMemo(() => {
        const currentHour = new Date().getHours();
        
        if (currentHour < 12) {
          return "Good Morning";
        } else if (currentHour < 18) {
          return "Good Afternoon";
        } else {
          return "Good Evening";
        }
      }, []); 
     

  return (
    <div className="relative z-10">
      <div className="text-lg">{greeting}</div>
      <div className="text-3xl font-bold mb-4">{name}</div>
      <div className="text-xl mb-6">Your schedule today.</div>
      <div className="flex space-x-4">
        
        <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-4xl font-bold">9</div>
          <div>Patients</div>
        </div>
        <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-4xl font-bold">3</div>
          <div>Surgeries</div>
        </div>
        <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-4xl font-bold">2</div>
          <div>Discharges</div>
        </div>
      </div>
    </div>
  )
}

export default Greeting