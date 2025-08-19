import React, { useEffect, useState } from "react";

const Completed = ({ appointments }) => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setCompleted(appointments.filter(app => app.status === "Completed"));
  }, [appointments]);

  return (
    <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4">
      <div className="w-full grid grid-cols-[20%_20%_20%_10%_20%] border-b font-semibold border-gray-700 text-gray-400 text-[15px] py-4">
        <div>Patient</div>
        <div>Doctor</div>
        <div>Date & Time</div>
        <div>Status</div>
        <div>Type</div>
      </div>

      {completed.length > 0 ? (
        completed.map(app => (
          <div
            key={app._id}
            className="w-full grid grid-cols-[20%_20%_20%_10%_20%] border-b border-gray-800 py-5 text-sm text-gray-300 hover:bg-slate-600 transition-all duration-300"
          >
            <div className="font-semibold">{app.patient}</div>
            <div className="font-semibold">{app.doctor}</div>
            <div className="flex flex-col gap-0.5 font-semibold">
              <p>{app.date}</p>
              <p>{app.time}</p>
            </div>
            <div className="font-semibold">{app.status}</div>
            <div className="font-semibold">{app.type}</div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center py-6">No completed appointments found.</div>
      )}
    </div>
  );
};

export default Completed;
