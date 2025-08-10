import React from 'react'
import Sidebar from '../Sidebar'

const Overview = () => {
  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className="w-full min-h-screen grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview