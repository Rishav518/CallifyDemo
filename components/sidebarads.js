import React from 'react'
import AdSense from './adsense'

const Sidebarads = () => {
  return (
    <div className="hidden lg:w-[15%] lg:flex items-start justify-center top-14  h-screen sticky z-10 border-l-2 border-cyan-400">
      <div className='flex-col w-full p-1 space-y-1'>
       <AdSense/>
       <AdSense/>
       <AdSense/>
      </div>
    </div>

  )
}

export default Sidebarads