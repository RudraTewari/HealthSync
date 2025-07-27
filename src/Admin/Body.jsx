import React from 'react'

const Body = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-[#393E46]'>
        <div className='grid grid-cols-12 m-0 p-0 gap-5'>

          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-32 ml-5 border-0 border-[#222831]  rounded-[8px] rounded-bl-none'> 
              <p className=' text-right text-gray-300 mt-4 mr-4 text-[20px]'>Appointments</p>
              
          </div>
          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-32 border-0 border-[#222831]  rounded-[8px] rounded-bl-none'> 
              <p className=' text-right text-gray-300 mt-4 mr-4 text-[20px]'>New Patients</p>
 
          </div>
          <div className='col-span-4 h-48 bg-[#222831] shadow-lg shadow-gray-900 mt-32 mr-5 border-0 border-[#222831]  rounded-[8px] rounded-bl-none'> 
              <p className=' text-right text-gray-300 mt-4 mr-4 text-[20px]'>Earnings</p>
 
          </div>
        </div>  


        <div className=' grid grid-cols-12 p-0 m-0 gap-4'>
            <div className='col-span-8 h-72 bg-[#222831] shadow-lg shadow-gray-900 ml-5 mt-12 border-0 rounded-[8px]'>
              <p className=' text-left text-gray-300 mt-4 ml-4 text-[20px]'>Hospital Survey</p>
            </div>
            <div className='col-span-4 h-72 bg-[#222831] shadow-lg shadow-gray-900 mt-12 mr-4 border-0 rounded-[8px]'>
              <p className=' text-left text-gray-300 mt-4 ml-4 text-[20px]'>Revenue</p>
            </div>
            
        </div>
        <div className='min-h-80 '>
            <div className='grid grid-cols-10 gap-4 '>
                
    
            </div>
         </div>
          

        

      </div>
    </>
  )
}

export default Body