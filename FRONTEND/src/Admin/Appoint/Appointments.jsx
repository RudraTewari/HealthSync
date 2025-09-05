import React from 'react'

const Appointments = ({ appointments }) => {
  return (
    <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
      {/* Header Row */}
      <div className="w-full grid grid-cols-[10%_20%_20%_20%_20%] border-b border-gray-700 text-gray-400 text-[15px] font-semibold py-3">
      <div className="px-4 text-left">Patient ID</div>
        <div className="px-4 text-left">Patient Name</div>
        <div className="px-4 text-left">Doctor Name</div>
        <div className="px-4 text-left">Date & Time</div>
        <div className="px-4 text-left">Status</div>
      </div>

      {/* Data Rows */}
      {appointments.length > 0 ? (
        appointments.map(app => (
          <div
            key={app._id}
            className="w-full grid grid-cols-[10%_20%_20%_20%_20%] border-b border-gray-800 py-4 text-sm text-gray-300 hover:bg-slate-800 transition-all duration-300"
          >
             <div className="px-4 text-left font-semibold">{app.patientid}</div>
            <div className="px-4 text-left font-semibold">{app.patient}</div>
            <div className="px-4 text-left font-semibold text-[15px]">{app.doctor}</div>
            <div className="px-4 text-left font-semibold text-[15px]">
              <p>{app.date}</p>
              <p>{app.time}</p>
            </div>
            <div className={`px-4 text-left font-semibold text-[15px] ${app.status=="Confirmed"?"text-green-600":""}
                 ${app.status=="Pending"?"text-yellow-600":""}`}>
                    {app.status}</div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center py-6">No appointments found.</div>
      )}
    </div>
  )
}

export default Appointments