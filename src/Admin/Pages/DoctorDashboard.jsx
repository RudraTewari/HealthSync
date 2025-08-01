import React from 'react'
import { NavLink } from 'react-router-dom'
import AddDoctor from './AddDoctor'
import Sidebar from '../Sidebar'

const DoctorDashboard = () => {
  return (
    <>
        <div className='w-full min-h-screen items-stretch'>
            <div className=" grid grid-cols-12 p-0 m-0">
                <div className="col-span-2 p-0 m-0">
                      <Sidebar/>
                </div>

            </div>

        </div>
    </>
    
  )
}

export default DoctorDashboard