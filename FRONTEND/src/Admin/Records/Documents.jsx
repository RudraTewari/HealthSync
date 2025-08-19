import React from "react"
import Sidebar from "../Sidebar"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Documents = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log("Uploaded Document:", data)
        // In future: send to backend with fetch/axios
        reset()
    }

    return (
        <div className="w-full min-h-screen items-stretch">
            <div className="w-full min-h-screen grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-2 p-0 m-0">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-span-10 flex flex-col bg-slate-900 min-h-screen">
                    {/* Top Navbar */}
                    <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6">
                        <div className="flex space-x-4">
                            <button className="text-[15px] text-gray-300 hover:scale-110">
                                <i className="fas fa-bell text-gray-300"></i>
                            </button>
                            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
                                <i className="fas fa-user mr-2.5"></i>User Profile
                            </button>
                        </div>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-col justify-start gap-2 mt-5 ml-8">
                        <span className="text-[34px] text-gray-400 font-bold">
                            Upload Documents
                        </span>
                        <p className="text-[18px] text-gray-500">
                            Upload Medical Reports, Scans, or Prescriptions
                        </p>
                    </div>

                    {/* Upload Form */}
                    <div className="flex-1 mx-8 my-6 bg-slate-950 rounded-md p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Document Name */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="docName" className="text-gray-300">
                                    Document Name
                                </Label>
                                <Input
                                    id="docName"
                                    type="text"
                                    placeholder="Enter document name"
                                    className="text-white caret-white placeholder-gray-500"
                                    {...register("docName", { required: true })}
                                />
                            </div>

                            {/* Document Type */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="docType" className="text-gray-300">
                                    Document Type
                                </Label>
                                <Input
                                    id="docType"
                                    type="text"
                                    placeholder="Report, Scan, Prescription"
                                    className="text-white caret-white placeholder-gray-500"
                                    {...register("docType", { required: true })}
                                />
                            </div>

                            {/* File Upload */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="file" className="text-gray-300">
                                    Upload File
                                </Label>
                                <Input
                                    id="file"
                                    type="file"
                                    className="text-white caret-white file:text-white file:bg-slate-800 file:border-0"
                                    {...register("file", { required: true })}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <Button type="submit" className="w-36">
                                    Upload Document
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents
