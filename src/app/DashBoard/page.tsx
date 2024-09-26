import React from 'react'
import Postbox from '../Components/Postbox'
import Usercontent from '../Components/Usercontent'
import Messages from '../Components/Messages'
import SearchBarTop from '../Components/SearchBarTop'

const DashBoard = () => {
  return (
    <div className='h-[70vh]'>
      <div className='flex flex-row justify-center mt-10 mb-10'>
      <SearchBarTop />
      </div>
      
    <div className='grid grid-flow-col grid-cols-3 gap-1 mt-6 h-full '>  
     
      <Postbox />
      <div className= 'col-span-1'>
      <Usercontent />
      </div>
      <Messages />  
    </div>

    </div>
  )
}

export default DashBoard
