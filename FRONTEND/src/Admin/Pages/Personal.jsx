import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
import Professional from "./Professional";



const Personal = ({setActiveTab}) => {

  const { register, control, formState: { errors } } = useFormContext();



  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(undefined)


  return (

    <>

      <div className="flex flex-col gap-2 ml-3">
        <h1 className="text-[30px] font-bold text-amber-100 ">Personal Information</h1>
        <p className="text-[15px] font-semibold text-gray-400 ">Enter the doctor's personal information.</p>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 p-4 mt-10" >

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >First Name</Label>
          <Input placeholder="Enter First Name" {...register('docfirstName', { required: "First Name is required" })}
            className={cn(errors.docfirstName && "border-red-500")} />
          {errors.docfirstName && (<p className=" text-red-500 text-sm">{errors.docfirstName.message}</p>)}
        </div>


        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >Last Name</Label>
          <Input placeholder="Enter Last Name" {...register('doclastName', { required: "Last Name is required" })}
            className={cn(errors.doclastName && "border-red-500")} />
          {errors.doclastName && (<p className="text-red-500 text-sm">{errors.doclastName.message}</p>)}
        </div>


        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label htmlFor="dob" className="text-white">Date of Birth</Label>
          <Controller
            name="dob"
            control={control}
            rules={{ required: "Date of Birth is required" }}
            render={({ field }) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-between font-normal text-gray-400 bg-slate-950 hover:bg-slate-900 hover:text-white",
                      errors.dob && "border-red-500"
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
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}

        </div>

        <div className="col-span-6 flex flex-col gap-3">
          <Label>Gender</Label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={cn("w-full", errors.gender && "border-red-500")}>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <div className="col-span-12 w-full flex flex-col gap-3">
          <Label >Address</Label>
          <Textarea placeholder="Type your address "  {...register('address', { required: "Address is required" })}
            className={cn(errors.address && "border-red-500")}
          />
          {errors.address && (<p className=" text-red-500 text-sm">{errors.address.message}</p>)}
        </div>

        <div className="col-span-4 w-full flex flex-col gap-3">
          <Label >City</Label>
          <Input placeholder="Enter City" {...register('city', { required: "City is required" })}
            className={cn(errors.city && "border-red-500")} />
          {errors.city && (<p className="text-red-500 text-sm">{errors.city.message}</p>)}

        </div>

        <div className="col-span-4 w-full flex flex-col gap-3">
          <Label >State</Label>
          <Input placeholder="Enter State" {...register('state', { required: "State is required" })}
            className={cn(errors.state && "border-red-500")} />
          {errors.state && (<p className="text-red-500 text-sm">{errors.state.message}</p>)}
        </div>

        <div className="col-span-4 w-full flex flex-col gap-3">
          <Label >Pin Code</Label>
          <Input type="number" placeholder="Enter Pin Code" {...register('pincode', { required: "Pincode is required" })}
            className={cn(errors.pincode && "border-red-500")} />
          {errors.pincode && (<p className="text-red-500 text-sm">{errors.pincode.message}</p>)}
        </div>
        <h1 className=" col-span-12 text-[30px] text-amber-100 font-semibold ">Contact Information</h1>

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >Email</Label>
          <Input type="email" placeholder="Email" {...register('email', { required: "E-mail is required" })}
            className={cn(errors.email && "border-red-500")} />
          {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
        </div>

        <div className="col-span-6 w-full flex flex-col gap-3">
          <Label >Phone Number</Label>
          <Input type="number" placeholder="Enter Phone Number" {...register('number', { required: "Number is required" })}
            className={cn(errors.number && "border-red-500")}
          />
          {errors.number && (<p className="text-red-500 text-sm">{errors.number.message}</p>)}
        </div>

        <Button
          type="button"
          onClick={() => setActiveTab("professional")}
          className="bg-amber-100 text-slate-950 px-7 hover:text-amber-100"
        >
          Next
        </Button>
      </div>
    </>
  );
}
export default Personal
