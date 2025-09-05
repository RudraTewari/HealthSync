import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import { NavLink } from 'react-router-dom'
import AdminProfile from '../AdminProfile'

// Dummy patients list (later fetch from backend)
const patients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Ravi Kumar" }
]

const HealthRecords = () => {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [records, setRecords] = useState(null)

  // Fetch records when patient changes
  useEffect(() => {
    if (selectedPatient) {
      const sampleData = {
        medicalHistory: ["Hypertension (2015)", "Diabetes Type II (2018)", "Appendectomy (2010)"],
        diagnoses: [
          { date: "2024-03-21", name: "Asthma", doctor: "Dr. Smith" },
          { date: "2023-09-15", name: "Flu", doctor: "Dr. John" }
        ],
        medications: [
          { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
          { name: "Paracetamol", dosage: "650mg", frequency: "As needed" }
        ],
        allergies: ["Penicillin → Rash", "Peanuts → Anaphylaxis"],
        immunizations: [
          { name: "COVID-19 (Booster)", dateGiven: "2023-10-15", nextDue: "2024-10-15" },
          { name: "Tetanus", dateGiven: "2021-06-12", nextDue: "2031-06-12" }
        ]
      }
      setRecords(sampleData)
    }
  }, [selectedPatient])

  return (
    <div className='w-full min-h-screen items-stretch'>
      <div className="w-full min-h-screen grid grid-cols-12">
        
        {/* Sidebar */}
        <div className="col-span-2 p-0 m-0">
          <Sidebar />
        </div>

        {/* Main Section */}
        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">

          {/* Top Navbar */}
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6">
            <div className="flex space-x-4">
              <button className="text-[15px] text-gray-300 hover:scale-110">
                <i className="fas fa-bell text-gray-300"></i>
              </button>
              <NavLink to="/Admin/AdminProfile" className="h-10 w-36 flex flex-wrap bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                <i className="fas fa-user mr-2.5 text-white ml-2 mt-2.5"></i>
                <h2 className="text-[15px] text-white mt-2">Admin Profile</h2>
              </NavLink>
            </div>
          </div>

          {/* Page Header */}
          <div className="flex flex-col justify-start gap-2 mt-5 ml-8">
            <span className='text-[34px] text-gray-400 font-bold'>Health Records</span>
            <p className="text-[20px] text-gray-500">
              {selectedPatient ? `Viewing records for ${selectedPatient.name}` : "Select a patient to view records"}
            </p>
          </div>

          {/* Patient Search / Dropdown */}
          <div className="mt-4 ml-8">
            <label className="text-gray-300 mr-3 text-lg">Select Patient:</label>
            <select
              className="bg-slate-800 text-gray-200 px-3 py-2 rounded-md"
              onChange={(e) => {
                const patient = patients.find(p => p.id === parseInt(e.target.value))
                setSelectedPatient(patient)
              }}
              defaultValue=""
            >
              <option value="" disabled>Select</option>
              {patients.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Content Sections */}
          {records && (
            <div className="mt-8 px-8 space-y-10 text-white">
              
              {/* Medical History */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">📝 Medical History</h2>
                <ul className="list-disc ml-6 space-y-1">
                  {records.medicalHistory.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Diagnoses */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">🩺 Diagnoses</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-700 text-left text-gray-300">
                    <thead className="bg-slate-800 text-gray-200">
                      <tr>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Diagnosis</th>
                        <th className="p-2 border">Doctor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.diagnoses.map((d, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/50">
                          <td className="p-2 border">{d.date}</td>
                          <td className="p-2 border">{d.name}</td>
                          <td className="p-2 border">{d.doctor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Medications */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">💊 Medications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-700 text-left text-gray-300">
                    <thead className="bg-slate-800 text-gray-200">
                      <tr>
                        <th className="p-2 border">Medication</th>
                        <th className="p-2 border">Dosage</th>
                        <th className="p-2 border">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.medications.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/50">
                          <td className="p-2 border">{m.name}</td>
                          <td className="p-2 border">{m.dosage}</td>
                          <td className="p-2 border">{m.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Allergies */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">⚠️ Allergies</h2>
                <ul className="list-disc ml-6 space-y-1">
                  {records.allergies.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Immunizations */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">💉 Immunizations</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-700 text-left text-gray-300">
                    <thead className="bg-slate-800 text-gray-200">
                      <tr>
                        <th className="p-2 border">Vaccine</th>
                        <th className="p-2 border">Date Given</th>
                        <th className="p-2 border">Next Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.immunizations.map((v, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/50">
                          <td className="p-2 border">{v.name}</td>
                          <td className="p-2 border">{v.dateGiven}</td>
                          <td className="p-2 border">{v.nextDue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HealthRecords
