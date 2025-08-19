import React from 'react'

const CustomDocStatus = ({name,patients,DocStatus}) => {
  return (
   <div className="flex w-full justify-around text-cyan-200 text-[16px] py-2 px-4 border-b border-gray-600">
      <div className="w-1/3 text-center whitespace-nowrap overflow-hidden text-ellipsis">{name}</div>
      <div className="w-1/3 text-center">{patients}</div>
      <div className="w-1/3 text-center">
        <div className={`px-2 py-1 ml-12 rounded-full text-sm 
          ${DocStatus === 'Active' ? ' bg-slate-950 text-green-500 ' : 'bg-slate-950 text-red-600 '}`}>
          {DocStatus}
        </div>
      </div>
    </div>
  )
}

export default CustomDocStatus