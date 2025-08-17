import React from 'react'
import Sidebar from '../Sidebar';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"


const AddSpecialization = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },

  } = useForm();

  const onSubmit = (data) => {
    console.log("Submit the Data", +data);
  }

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">

          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5"></i>User Profile
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-1 justify-center items-center">
              <div className="bg-slate-950 p-6 rounded-lg shadow-lg w-full max-w-lg mt-32  ">
                <h1 className='text-white font-semibold text-[20px]'>Add New Specialization</h1>
                <p className='text-gray-500  '>Create a new medical specialization for your clinic.</p>
                <div className="grid w-full items-center gap-3 mt-8 ">
                  <Label className='text-white'>Specialization Name</Label>
                  <Input placeholder="Enter Specialization" {...register('SpecializeName', { required: "Specialization Name is required" })}
                    className={cn("text-white caret-amber-100", errors.SpecializeName && "border-red-500")} />
                  {errors.SpecializeName && (<p className=" text-red-500 text-sm">{errors.SpecializeName.message}</p>)}
                </div>
                <div className="grid w-full gap-3 mt-3.5">
                  <Label className="text-white">Description</Label>
                  <Textarea placeholder="Enter Description "  {...register('descript')}
                    className={cn("text-white caret-amber-100", errors.descript && "border-red-500")}
                  />
                  {errors.descript && (<p className=" text-red-500 text-sm">{errors.descript.message}</p>)}
                </div>
                <div className="grid w-full items-center gap-3 mt-3.5">
                  <Label className='text-white'>Department</Label>
                  <Input placeholder="Enter Department" {...register('departName', { required: "Department Name is required" })}
                    className={cn("text-white caret-amber-100", errors.departName && "border-red-500")} />
                  {errors.departName && (<p className=" text-red-500 text-sm">{errors.departName.message}</p>)}
                </div>

                <div className="flex justify-center items-center gap-2 text-slate-950 mt-3.5">
                  <Button className="bg-amber-100 text-slate-950 px-7 hover:text-amber-100">Save</Button>
                </div>

              </div>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}

export default AddSpecialization