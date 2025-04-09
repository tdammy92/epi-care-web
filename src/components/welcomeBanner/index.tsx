import Image from 'next/image'
import React from 'react'

type WelcomeBannerProps = {
    ImageSource: string
    label: string
}


const WelcomeBanner = ({ImageSource, label}: WelcomeBannerProps) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
    <div className="relative z-10">
      <div className="text-lg">Good Morning,</div>
      <div className="text-3xl font-bold mb-4">Dr. Patrick Kim</div>
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
    <div className="absolute right-0 bottom-0">
      <Image
        src={ImageSource}
        alt={label}
        width={400}
        height={200}
        className="opacity-90"
      />
   
    </div>
  </div>
  )
}

export default WelcomeBanner