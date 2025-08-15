import React from 'react'
import Sidebar from '../Sidebar'


const Insurance = () => {
  return (
      <div className='flex w-full  min-h-screen  items-stretch'>
        <div className='w-1/6 p-0 m-0'>
        <Sidebar />
      </div>
      <div className="col-span-10 bg-white p-6">
        <h1 className="text-xl font-bold">This is the Insurance page</h1>
      </div>
    </div>
  )
}

export default Insurance