import React from 'react'
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom';

const Appointment = () => {
  return (
    <>
      <div className='flex w-full  min-h-screen  items-stretch'>
        <div className='w-1/6 p-0 m-0'>
          <Sidebar />
         </div>
      </div>
  </>
  )
}

export default Appointment