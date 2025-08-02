import React from 'react'
import Sidebar from '../Sidebar'

const Prescriptions = () => {
  return (
    <>
        <div className='w-full min-h-screen items-stretch'>
                <div className=" grid grid-cols-12 p-0 m-0">
                    <div className="col-span-2 p-0 m-0">
                        <Sidebar />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Prescriptions