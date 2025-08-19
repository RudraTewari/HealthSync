import React, { useState } from 'react'
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"


const Professional = () => {

  const { register, control, formState: { errors } } = useFormContext();

  

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(undefined)

  return (
    <>
      <div className="flex flex-col gap-2 ml-3">
        <h1 className="text-[30px] font-bold text-amber-100 ">Professional Details</h1>
        <p className="text-[15px] font-semibold text-gray-400 ">Enter the doctor's professional information.</p>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 p-4 mt-10 ">
        <div className="col-span-6 flex flex-col gap-3">
          <Label>Primary Specialization</Label>
          <Controller
            name="specialize"
            control={control}
            rules={{ required: "Primary Specialization is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={cn("w-full", errors.specialize && "border-red-500")}>
                  <SelectValue placeholder="Select Primary Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cardio">Cardiology</SelectItem>
                    <SelectItem value="dermat">Dermatology</SelectItem>
                    <SelectItem value="neuro">Neurology</SelectItem>
                    <SelectItem value="ortho">Orthopedics</SelectItem>
                    <SelectItem value="pediatri">Pediatrics</SelectItem>
                    <SelectItem value="psychi">Psychiatry</SelectItem>
                    <SelectItem value="medicine">General Medicine</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.specialize && (
            <p className="text-red-500 text-sm">{errors.specialize.message}</p>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-3">
          <Label>Secondary Specialization (Optional) </Label>
          <Controller
            name="secSpecialize"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={cn("w-full", errors.secSpecialize && "border-red-500")}>
                  <SelectValue placeholder="Select Secondary Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cardio">Cardiology</SelectItem>
                    <SelectItem value="dermat">Dermatology</SelectItem>
                    <SelectItem value="neuro">Neurology</SelectItem>
                    <SelectItem value="ortho">Orthopedics</SelectItem>
                    <SelectItem value="pediatri">Pediatrics</SelectItem>
                    <SelectItem value="psychi">Psychiatry</SelectItem>
                    <SelectItem value="medicine">General Medicine</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.secSpecialize && (
            <p className="text-red-500 text-sm">{errors.secSpecialize.message}</p>
          )}
        </div>

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >License Number</Label>
          <Input type="number" placeholder="Enter License Number" {...register('licNumber', { required: "License Number is required" })}
            className={cn(errors.licNumber && "border-red-500")}
          />
          {errors.licNumber && (<p className="text-red-500 text-sm">{errors.licNumber.message}</p>)}
        </div>

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label className="text-white">License Expiry Date</Label>
          <Controller
            name="expire"
            control={control}
            rules={{ required: "License Expiry Date is required" }}
            render={({ field }) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-between font-normal text-gray-400 bg-slate-950 hover:bg-slate-900 hover:text-white",
                      errors.expire && "border-red-500"
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
          {errors.expire && (
            <p className="text-red-500 text-sm">{errors.expire.message}</p>
          )}
        </div>

        <div className="col-span-12 w-full flex flex-col gap-3">
          <Label >Qualifications</Label>
          <Textarea placeholder="Enter Qualifications "  {...register('qualify', { required: "Qualifications is required" })}
            className={cn(errors.qualify && "border-red-500")}
          />
          {errors.qualify && (<p className=" text-red-500 text-sm">{errors.qualify.message}</p>)}
        </div>

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >Years Of Experience</Label>
          <Input type="number" placeholder="" {...register('experience', { required: "Experience is required" })}
            className={cn(errors.experience && "border-red-500")}
          />
          {errors.experience && (<p className="text-red-500 text-sm">{errors.experience.message}</p>)}
        </div>

        <div className="col-span-6 flex flex-col gap-3">
          <Label>Select Position </Label>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={cn("w-full", errors.position && "border-red-500")}>
                  <SelectValue placeholder="Enter position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="depthead">Department Head</SelectItem>
                    <SelectItem value="seDoc">Senior Doctor</SelectItem>
                    <SelectItem value="specialist">Specialist</SelectItem>
                    <SelectItem value="intern">Intern</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position.message}</p>
          )}
        </div>

      </div>
    </>
  )
}

export default Professional