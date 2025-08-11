import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"

const PresForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        console.log("Submit the Data", +data);
    }

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(undefined)
    return (
        <>
            <form className="w-full grid grid-cols-12 gap-5 p-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className='text-white'>Patient Name</Label>
                    <Input placeholder="Enter Patient Name" {...register('PatientName', { required: "Patient Name is required" })}
                        className={cn("text-white caret-amber-100", errors.PatientName && "border-red-500")} />
                    {errors.PatientName && (<p className=" text-red-500 text-sm">{errors.PatientName.message}</p>)}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className='text-white'>Doctor Name</Label>
                    <Input placeholder="Enter Doctor Name" {...register('DoctorName', { required: "Doctor Name is required" })}
                        className={cn("text-white caret-amber-100", errors.DoctorName && "border-red-500")} />
                    {errors.DoctorName && (<p className=" text-red-500 text-sm">{errors.DoctorName.message}</p>)}
                </div>

                <div className="col-span-4 w-full flex flex-col gap-3">
                    <Label className='text-white'>Medicine #1</Label>
                    <Input placeholder="Enter Medicine Name" {...register('MedicineName1', { required: "Medicine Name is required" })}
                        className={cn("text-white caret-amber-100", errors.MedicineName1 && "border-red-500")} />
                    {errors.MedicineName1 && (<p className=" text-red-500 text-sm">{errors.MedicineName1.message}</p>)}
                </div>

                <div className="col-span-4 flex flex-col gap-3">
                    <Label className='text-white'>Dosage</Label>
                    <Controller
                        name="dosage1"
                        control={control}
                        rules={{ required: "Dosage is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.dosage1 && "border-red-500")}>
                                    <SelectValue placeholder="Select Dosage" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="fivemg">5mg</SelectItem>
                                        <SelectItem value="tenmg">10mg</SelectItem>
                                        <SelectItem value="twentymg">20mg</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.dosage1 && (
                        <p className="text-red-500 text-sm">{errors.dosage1.message}</p>
                    )}
                </div>

                <div className="col-span-4 flex flex-col gap-3">
                    <Label className='text-white'>Frequency</Label>
                    <Controller
                        name="frequency1"
                        control={control}
                        rules={{ required: "Frequency is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.frequency1 && "border-red-500")}>
                                    <SelectValue placeholder="Select Frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="once">Once Daily</SelectItem>
                                        <SelectItem value="twice">Twice Daily</SelectItem>
                                        <SelectItem value="thrice">Thrice Daily</SelectItem>
                                        <SelectItem value="4hrs">Every 4 hours</SelectItem>
                                        <SelectItem value="6hrs">Every 6 hours</SelectItem>
                                        <SelectItem value="8hrs">Every 8 hours</SelectItem>
                                        <SelectItem value="12hrs">Every 12 hours</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.frequency1 && (
                        <p className="text-red-500 text-sm">{errors.frequency1.message}</p>
                    )}
                </div>


                <div className="col-span-4 w-full flex flex-col gap-3">
                    <Label className='text-white'>Medicine #2</Label>
                    <Input placeholder="Enter Medicine Name" {...register('MedicineName2')}
                        className={cn("text-white caret-amber-100", errors.MedicineName2 && "border-red-500")} />
                    {errors.MedicineName2 && (<p className=" text-red-500 text-sm">{errors.MedicineName2.message}</p>)}
                </div>

                <div className="col-span-4 flex flex-col gap-3">
                    <Label className='text-white'>Dosage</Label>
                    <Controller
                        name="dosage2"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.dosage2 && "border-red-500")}>
                                    <SelectValue placeholder="Select Dosage" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="fivemg">5mg</SelectItem>
                                        <SelectItem value="tenmg">10mg</SelectItem>
                                        <SelectItem value="twentymg">20mg</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.dosage2 && (
                        <p className="text-red-500 text-sm">{errors.dosage2.message}</p>
                    )}
                </div>

                <div className="col-span-4 flex flex-col gap-3">
                    <Label className='text-white'>Frequency</Label>
                    <Controller
                        name="frequency2"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.frequency2 && "border-red-500")}>
                                    <SelectValue placeholder="Select Frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="once">Once Daily</SelectItem>
                                        <SelectItem value="twice">Twice Daily</SelectItem>
                                        <SelectItem value="thrice">Thrice Daily</SelectItem>
                                        <SelectItem value="4hrs">Every 4 hours</SelectItem>
                                        <SelectItem value="6hrs">Every 6 hours</SelectItem>
                                        <SelectItem value="8hrs">Every 8 hours</SelectItem>
                                        <SelectItem value="12hrs">Every 12 hours</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.frequency2 && (
                        <p className="text-red-500 text-sm">{errors.frequency2.message}</p>
                    )}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className="text-white">Date</Label>
                    <Controller
                        name="PrescriptDate"
                        control={control}
                        rules={{ required: "Prescription Date is required" }}
                        render={({ field }) => (
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-between font-normal text-gray-400 bg-slate-950 hover:bg-slate-900 hover:text-white",
                                            errors.PrescriptDate && "border-red-500"
                                        )}
                                        onClick={() => setOpen(true)}
                                    >
                                        {field.value ? field.value.toLocaleDateString() : "Select date"}
                                        <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                            field.onChange(date);
                                            setOpen(false);
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        )}
                    />
                    {errors.PrescriptDate && (
                        <p className="text-red-500 text-sm">{errors.PrescriptDate.message}</p>
                    )}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className="text-white">Diagnosis</Label>
                    <Textarea placeholder="Enter reason for prescription "  {...register('diagnosis')}
                        className={cn(errors.diagnosis && "border-red-500")}
                    />
                    {errors.diagnosis && (<p className=" text-red-500 text-sm">{errors.diagnosis.message}</p>)}
                </div>

                <div className="col-span-12 mt-10">
                    <div className="flex justify-center items-center gap-2 text-slate-950">
                        <Button className="bg-amber-100 text-slate-950 px-7 hover:text-amber-100">Save</Button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default PresForm