import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ChevronDownIcon, Plus, Trash2,Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addPrescription } from '@/Services/api';

const PresForm = () => {
  const { register, handleSubmit, control, formState: { errors },reset } = useForm({
    defaultValues: {
      PatientID: '',
      PatientName: '',
      DoctorName: '',
      medicines: [{ name: '', dosage: '', frequency: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'medicines'
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true)
    const formattedData = {
      ...data,
      PrescriptDate: data.PrescriptDate ? new Date(data.PrescriptDate) : null
    };

    try {
      await addPrescription(formattedData);
      alert("Prescription saved successfully!");
      reset();
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Server error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full grid grid-cols-12 gap-5 p-4 mt-10" onSubmit={handleSubmit(onSubmit)}>

      {/* Patient ID */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Patient ID</Label>
        <Input
          placeholder="Enter Patient ID"
          {...register('PatientID', { required: "Patient ID is required" })}
          className={cn("text-white caret-amber-100", errors.PatientID && "border-red-500")}
        />
        {errors.PatientID && <p className="text-red-500 text-sm">{errors.PatientID.message}</p>}
      </div>

      {/* Patient Name */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Patient Name</Label>
        <Input
          placeholder="Enter Patient Name"
          {...register('PatientName', { required: "Patient Name is required" })}
          className={cn("text-white caret-amber-100", errors.PatientName && "border-red-500")}
        />
        {errors.PatientName && <p className="text-red-500 text-sm">{errors.PatientName.message}</p>}
      </div>

      {/* Doctor Name */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Doctor Name</Label>
        <Input
          placeholder="Enter Doctor Name"
          {...register('DoctorName', { required: "Doctor Name is required" })}
          className={cn("text-white caret-amber-100", errors.DoctorName && "border-red-500")}
        />
        {errors.DoctorName && <p className="text-red-500 text-sm">{errors.DoctorName.message}</p>}
      </div>

      {/* Medicines Section */}
      {fields.map((field, index) => (
        <React.Fragment key={field.id}>
          <div className="col-span-4 flex flex-col gap-3">
            <Label className="text-white">Medicine #{index + 1}</Label>
            <Input
              placeholder="Enter Medicine Name"
              {...register(`medicines.${index}.name`, { required: "Medicine Name is required" })}
              className={cn("text-white caret-amber-100", errors.medicines?.[index]?.name && "border-red-500")}
            />
            {errors.medicines?.[index]?.name && (
              <p className="text-red-500 text-sm">{errors.medicines[index].name.message}</p>
            )}
          </div>

          <div className="col-span-4 flex flex-col gap-3">
            <Label className="text-white">Dosage</Label>
            <Controller
              name={`medicines.${index}.dosage`}
              control={control}
              rules={{ required: "Dosage is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className={cn("w-full text-white", errors.medicines?.[index]?.dosage && "border-red-500")}>
                    <SelectValue placeholder="Select Dosage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="5mg">5mg</SelectItem>
                      <SelectItem value="10mg">10mg</SelectItem>
                      <SelectItem value="20mg">20mg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.medicines?.[index]?.dosage && (
              <p className="text-red-500 text-sm">{errors.medicines[index].dosage.message}</p>
            )}
          </div>

          <div className="col-span-4 flex flex-col gap-3">
            <Label className="text-white">Frequency</Label>
            <Controller
              name={`medicines.${index}.frequency`}
              control={control}
              rules={{ required: "Frequency is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className={cn("w-full text-white", errors.medicines?.[index]?.frequency && "border-red-500")}>
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
            {errors.medicines?.[index]?.frequency && (
              <p className="text-red-500 text-sm">{errors.medicines[index].frequency.message}</p>
            )}
          </div>

          <div className="col-span-12 flex justify-end mt-1">
            {fields.length > 1 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => remove(index)}
                className="flex items-center gap-1"
              >
                <Trash2 size={16} /> Remove
              </Button>
            )}
          </div>
        </React.Fragment>
      ))}

      {/* Add Medicine Button */}
      <div className="col-span-12 flex justify-start mt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ name: '', dosage: '', frequency: '' })}
          className="flex items-center gap-1"
        >
          <Plus size={16} /> Add Medicine
        </Button>
      </div>

      {/* Prescription Date */}
      <div className="col-span-6 flex flex-col gap-3">
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
        {errors.PrescriptDate && <p className="text-red-500 text-sm">{errors.PrescriptDate.message}</p>}
      </div>

      {/* Diagnosis */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Diagnosis</Label>
        <Textarea className="caret-white placeholder:text-gray-500 text-white" placeholder="Enter reason for prescription" {...register('diagnosis')} />
      </div>

      {/* Submit Button */}
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
            "Create Prescription"
          )}
        </Button>
      </div>
    </form>
  );
};

export default PresForm;
