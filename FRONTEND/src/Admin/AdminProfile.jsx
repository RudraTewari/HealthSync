import React from 'react';
import Sidebar from './Sidebar';

const AdminProfile = () => {
  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear all stored user data
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <>
      <div className='w-full min-h-screen items-stretch'>
        <div className="w-full min-h-screen grid grid-cols-12">
          {/* Sidebar */}
          <div className="col-span-2">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
            {/* Top Bar */}
            <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <button
                onClick={handleLogout}
                className="h-10 w-36 text-center bg-red-900 border-2 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in"
              >
                <h2 className="text-[15px] text-white my-2 ">Logout</h2>
              </button>
            </div>

            <h1 className="text-[30px] text-gray-400 mt-6 ml-6 font-semibold">Admin Profile</h1>
            <div className="col-span-6 bg-slate-950">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
