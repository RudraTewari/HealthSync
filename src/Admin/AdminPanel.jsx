import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

const AdminPanel = () => {
  return (
    <>
        <div className=' w-full h-full grid grid-cols-12 p-0 m-0 '>
            <div className=' w-full col-span-2 p-0 m-0'>
                <Sidebar/>
            </div>
            <div className ='w-full col-span-10 p-0 m-0'>
                <Body/>
            </div>


        </div>
    </>
  )
}

export default AdminPanel