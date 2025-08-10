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
import { RadioGroup, RadioGroupItem, } from "@/components/ui/radio-group"



const Form = () => {
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

            <form className='w-full grid grid-cols-12 gap-5 p-4 mt-10' onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-12 w-full flex flex-col gap-3">
                    <Label className='text-white'>Patient Name</Label>
                    <Input placeholder="Enter Patient Name" {...register('patientName', { required: "Patient Name is required" })}
                        className={cn("text-white caret-amber-100", errors.patientName && "border-red-500")} />
                    {errors.patientName && (<p className=" text-red-500 text-sm">{errors.patientName.message}</p>)}
                </div>

                <div className="col-span-6 flex flex-col gap-3">
                    <Label className='text-white'>Appointment Type</Label>
                    <Controller
                        name="appointmenttype"
                        control={control}
                        rules={{ required: "Type is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.appointmenttype && "border-red-500")}>
                                    <SelectValue placeholder="Select Appointment" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="checkup">CheckUp(30min)</SelectItem>
                                        <SelectItem value="consultation">Consultation(45min)</SelectItem>
                                        <SelectItem value="vaccine">Vaccination(15min)</SelectItem>
                                        <SelectItem value="therapy">Physical Therapy(45min)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.appointmenttype && (
                        <p className="text-red-500 text-sm">{errors.appointmenttype.message}</p>
                    )}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className='text-white'>Appoint Doctor</Label>
                    <Input
                        placeholder="Appoint Doctor"
                        {...register('appointdoc', { required: "Doctor Appointment is required" })}
                        className={cn(
                            "text-white caret-white", // force white text & white cursor 
                            errors.appointdoc && "border-red-500"
                        )}
                    />

                    {errors.appointdoc && (<p className="text-red-500 text-sm">{errors.appointdoc.message}</p>)}
                </div>

                <div className="col-span-6 flex flex-col gap-3">
                    <Label className='text-white'>Duration</Label>
                    <Controller
                        name="duration"
                        control={control}
                        rules={{ required: "Duration is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.duration && "border-red-500")}>
                                    <SelectValue placeholder="Select Duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="fifteen">15 min</SelectItem>
                                        <SelectItem value="thirty">30 min</SelectItem>
                                        <SelectItem value="fortyfive">45 min</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.duration && (
                        <p className="text-red-500 text-sm">{errors.duration.message}</p>
                    )}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className="text-white">Date</Label>
                    <Controller
                        name="appointDate"
                        control={control}
                        rules={{ required: "Appointment Date is required" }}
                        render={({ field }) => (
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-between font-normal text-gray-400 bg-slate-950 hover:bg-slate-900 hover:text-white",
                                            errors.appointDate && "border-red-500"
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
                    {errors.appointDate && (
                        <p className="text-red-500 text-sm">{errors.appointDate.message}</p>
                    )}

                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className='text-white'>Reason for visit</Label>
                    <Textarea placeholder="Enter the reason for visit "  {...register('visitReason')}
                        className={cn("text-white caret-white", errors.visitReason && "border-red-500")}
                    />
                    {errors.visitReason && (<p className=" text-red-500 text-sm">{errors.visitReason.message}</p>)}
                </div>

                <div className="col-span-6 flex flex-col gap-3">
                    <Label className='text-white'>Time Slot</Label>
                    <Controller
                        name="slot"
                        control={control}
                        rules={{ required: "Time Slot is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className={cn("w-full text-white", errors.slot && "border-red-500")}>
                                    <SelectValue placeholder="Select slot" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="nine">9:00 AM</SelectItem>
                                        <SelectItem value="ninethirty">9:30 AM</SelectItem>
                                        <SelectItem value="ten">10:00 AM</SelectItem>
                                        <SelectItem value="tenthirty">10:30 AM</SelectItem>
                                        <SelectItem value="eleven">11:00 AM</SelectItem>
                                        <SelectItem value="eleventhirty">11:30 AM</SelectItem>
                                        <SelectItem value="twelve">12:00 PM</SelectItem>
                                        <SelectItem value="twelvethirty">12:30 PM</SelectItem>
                                        <SelectItem value="one">1:00 PM</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.duration && (
                        <p className="text-red-500 text-sm">{errors.duration.message}</p>
                    )}
                </div>

                <div className="col-span-12 flex flex-col gap-3">
                    <Label className="text-white">Appointment Status</Label>
                    <Controller
                        name="appointStatus"
                        control={control}
                        defaultValue="progress"   // default value as in your original example
                        rules={{ required: "Please select status" }}
                        render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="scheduled" id="spacing-scheduled"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Scheduled</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="progress" id="spacing-progress"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>In Progress</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="wait" id="spacing-wait"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Waitlist</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                    {errors.spacingPreference && (
                        <p className="text-red-500 text-sm">{errors.spacingPreference.message}</p>
                    )}
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

export default Form