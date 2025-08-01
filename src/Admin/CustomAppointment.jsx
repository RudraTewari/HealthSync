import React from 'react'

const CustomAppointment = ({patientName,doctorName,date,time,status}) => {
  return (
    <div className="flex w-full justify-around text-gray-300 text-[15px] py-2 ">

        <div className="w-1/4 text-center ">{patientName}</div>
        <div className="w-1/4 text-center ">{doctorName}</div>
        <div className="w-1/4 text-center ">
            <div className="w-full bg-amber-300"></div>
        </div>
        <div className={`px-3 py-1 rounded-full text-semibold text-sm ${status==='Completed' ? ' text-green-600 bg-slate-950 ' : status==='Pending' ? ' text-yellow-500 bg-slate-950' : ' text-red-600 bg-slate-950'  } `}>
            {status}
        </div>

    </div>
  )
}

export default CustomAppointment