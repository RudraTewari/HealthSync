import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

const UserPanel = () => {
  return (
    <>
      <div className='flex w-full  min-h-screen  items-stretch'>
        <div className='w-1/6 p-0 m-0'>
          <Sidebar/>
        </div>
        <div className='w-5/6 col-span-10 p-0 m-0'>
          <Body/>
        </div>
      </div>
    </>
  )
}

export default UserPanel
