import Image from 'next/image'
import React from 'react'
import Greeting from '../greeting'

type WelcomeBannerProps = {
    ImageSource: string
    label: string
}


const WelcomeBanner = ({ImageSource, label}: WelcomeBannerProps) => {
  
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
   <Greeting />
    <div className="absolute right-0 -bottom-10.5">
      <Image
        src={ImageSource}
        alt={label}
        width={400}
        height={10}
        className="opacity-90"
      />
   
    </div>
  </div>
  )
}

export default WelcomeBanner