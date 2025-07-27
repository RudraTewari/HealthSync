import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

const AdminPanel = () => {
  return (
    <>
        <div className=' w-screen h-screen flex p-0 m-0 '>
            <div className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 m-0'>
                <Sidebar/>
            </div>
            <div className ='w-full sm:w-3/4 md:w-2/3 lg:w-3/4 p-0 m-0'>
                <Body/>
            </div>


        </div>
    </>
  )
}

export default AdminPanel