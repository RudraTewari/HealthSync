import React from 'react'

const CustomAppointment = ({patientName,doctorName,date,time,status}) => {
  return (
    <div className="grid grid-cols-4 w-full justify-around items-center text-center text-gray-300 text-[15px] py-2 gap-6 ">

        <div className="w-full text-center ">{patientName}</div>
        <div className="w-full text-center ">{doctorName}</div>
        <div className="w-full text-center ">
            <div className=" flex justify-center w-full bg-slate-950 gap-3 px-2 py-1 mr-1 ml-1 rounded-full">{date} {time}</div>
        </div>
        <div className={` px-6 py-1 rounded-full text-semibold text-sm ${status==='Completed' ? ' text-green-600 bg-slate-950 ' : status==='Pending' ? ' text-yellow-500 bg-slate-950' : ' text-red-600 bg-slate-950'  } `}>
            {status}
        </div>

    </div>
  )
}

export default CustomAppointment