import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [open, setOpen] = useState(false)

  const onSubmit = (data) => {
    console.log("Submitted Appointment Data:", data)
  }

  return (
    <form
      className="w-full grid grid-cols-12 gap-5 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Patient Name */}
      <div className="col-span-12 flex flex-col gap-2">
        <Label className="text-white">Patient Name</Label>
        <Input
          placeholder="Enter Patient Name"
          {...register("patientName", { required: "Patient Name is required" })}
          className={cn("text-white caret-amber-100", errors.patientName && "border-red-500")}
        />
        {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName.message}</p>}
      </div>

      {/* Appointment Type */}
      <div className="col-span-6 flex flex-col gap-2">
        <Label className="text-white">Appointment Type</Label>
        <Controller
          name="appointmentType"
          control={control}
          rules={{ required: "Appointment Type is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className={cn("w-full text-white", errors.appointmentType && "border-red-500")}>
                <SelectValue placeholder="Select Appointment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="checkup">Checkup (30min)</SelectItem>
                  <SelectItem value="consultation">Consultation (45min)</SelectItem>
                  <SelectItem value="vaccine">Vaccination (15min)</SelectItem>
                  <SelectItem value="therapy">Physical Therapy (45min)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.appointmentType && <p className="text-red-500 text-sm">{errors.appointmentType.message}</p>}
      </div>

      {/* Doctor Name */}
      <div className="col-span-6 flex flex-col gap-2">
        <Label className="text-white">Appoint Doctor</Label>
        <Input
          placeholder="Enter Doctor Name"
          {...register("appointDoc", { required: "Doctor name is required" })}
          className={cn("text-white caret-white", errors.appointDoc && "border-red-500")}
        />
        {errors.appointDoc && <p className="text-red-500 text-sm">{errors.appointDoc.message}</p>}
      </div>

      {/* Duration */}
      <div className="col-span-6 flex flex-col gap-2">
        <Label className="text-white">Duration</Label>
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
                  <SelectItem value="15">15 min</SelectItem>
                  <SelectItem value="30">30 min</SelectItem>
                  <SelectItem value="45">45 min</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
      </div>

      {/* Date */}
      <div className="col-span-6 flex flex-col gap-2">
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
                    field.onChange(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          )}
        />
        {errors.appointDate && <p className="text-red-500 text-sm">{errors.appointDate.message}</p>}
      </div>

      {/* Reason */}
      <div className="col-span-6 flex flex-col gap-2">
        <Label className="text-white">Reason for Visit</Label>
        <Textarea
          placeholder="Enter the reason for visit"
          {...register("visitReason", { required: "Reason is required" })}
          className={cn("text-white caret-white", errors.visitReason && "border-red-500")}
        />
        {errors.visitReason && <p className="text-red-500 text-sm">{errors.visitReason.message}</p>}
      </div>

      {/* Time Slot */}
      <div className="col-span-6 flex flex-col gap-2">
        <Label className="text-white">Time Slot</Label>
        <Controller
          name="timeSlot"
          control={control}
          rules={{ required: "Time Slot is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className={cn("w-full text-white", errors.timeSlot && "border-red-500")}>
                <SelectValue placeholder="Select Time Slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="9:30">9:30 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="10:30">10:30 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="11:30">11:30 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="12:30">12:30 PM</SelectItem>
                  <SelectItem value="1:00">1:00 PM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.timeSlot && <p className="text-red-500 text-sm">{errors.timeSlot.message}</p>}
      </div>

      {/* Status */}
      <div className="col-span-12 flex flex-col gap-2">
        <Label className="text-white">Appointment Status</Label>
        <Controller
          name="appointStatus"
          control={control}
          defaultValue="scheduled"
          rules={{ required: "Please select status" }}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex flex-col gap-3 mb-2"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="scheduled"
                  id="scheduled"
                  className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100"
                />
                <Label className="text-white">Scheduled</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="progress"
                  id="progress"
                  className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100"
                />
                <Label className="text-white">In Progress</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="wait"
                  id="wait"
                  className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100"
                />
                <Label className="text-white">Waitlist</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.appointStatus && <p className="text-red-500 text-sm">{errors.appointStatus.message}</p>}
      </div>

      {/* Submit */}
      <div className="col-span-12 mt-8 flex justify-center">
        <Button className="bg-amber-100 text-slate-950 px-7 hover:text-amber-100">
          Save Appointment
        </Button>
      </div>
    </form>
  )
}

export default Form
