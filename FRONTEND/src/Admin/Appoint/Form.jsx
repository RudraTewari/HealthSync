import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { ChevronDownIcon, Loader2 } from "lucide-react";
import { addAppointment } from "@/Services/api";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formattedData = {
      ...data,
      appointDate: data.appointDate
        ? new Date(data.appointDate).toISOString().split("T")[0]
        : null,
    };

    try {
      await addAppointment(formattedData);
      alert("Appointment booked successfully!");
      reset();
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Server error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full grid grid-cols-12 gap-5 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Patient ID */}
      <div className="col-span-6">
        <Label className="text-white my-2">Patient ID</Label>
        <Input
          {...register("patientId", { required: true })}
          className="text-white placeholder:text-gray-500 "
          placeholder="Enter patient id"
        />
        {errors.patientId && (
          <p className="text-red-500 text-sm">Patient ID is required</p>
        )}
      </div>

      {/* Patient Name */}
      <div className="col-span-6">
        <Label className="text-white my-2">Patient Name</Label>
        <Input
          {...register("patientName", { required: true })}
          className="text-white placeholder:text-gray-500"
           placeholder="Enter patient name"
        />
        {errors.patientName && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}
      </div>

      {/* Doctor Name */}
      <div className="col-span-6">
        <Label className="text-white my-2">Doctor</Label>
        <Input
          {...register("doctorName", { required: true })}
          className="text-white placeholder:text-gray-500"
          placeholder="Enter doctor name"
        />
        {errors.doctorName && (
          <p className="text-red-500 text-sm">Doctor is required</p>
        )}
      </div>

      {/* Appointment Date */}
      <div className="col-span-6">
        <Label className="text-white my-2">Appointment Date</Label>
        <Controller
          control={control}
          name="appointDate"
          rules={{ required: true }}
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between rounded-md border border-gray-500 bg-slate-900 text-gray-400",
                    !field.value && "text-gray-500"
                  )}
                >
                  {field.value
                    ? new Date(field.value).toLocaleDateString()
                    : "Pick a date"}
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-white opacity-80" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
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
          <p className="text-red-500 text-sm">Date is required</p>
        )}
      </div>

      {/* Symptoms */}
      <div className="col-span-12">
        <Label className="text-white my-2">Symptoms</Label>
        <Textarea
          {...register("symptoms")}
          className="text-white placeholder:text-gray-500"
          placeholder="Enter symptoms"
        />
      </div>

      {/* Status */}
      <div className="col-span-6">
        <Label className="text-white my-2">Status</Label>
        <Controller
          name="status"
          control={control}
          defaultValue="pending"
          render={({ field }) => (
            <RadioGroup onValueChange={field.onChange} value={field.value}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pending" id="pending" />
                <Label htmlFor="pending" className="text-white">
                  Pending
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="confirmed" id="confirmed" />
                <Label htmlFor="confirmed" className="text-white">
                  Confirmed
                </Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      {/* Submit */}
      <div className="col-span-12 mt-8 flex justify-center">
        <Button
          type="submit"
          disabled={loading}
          className="bg-amber-100 text-slate-950 px-7 hover:text-amber-100 flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Saving...
            </>
          ) : (
            "Save Appointment"
          )}
        </Button>
      </div>
    </form>
  );
};

export default Form;
