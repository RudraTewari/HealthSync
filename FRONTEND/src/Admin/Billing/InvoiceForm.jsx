import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDownIcon,Loader2 } from "lucide-react";
import { addInvoices } from '@/Services/api';

const InvoiceForm = () => {
  const { register, handleSubmit, control, formState: { errors },reset } = useForm();
  const [open, setOpen] = useState(false);
  const [loading,setLoading]=useState(false);

  const onSubmit = async (data) => {
    // Format date before sending to backend
    setLoading(true);
    const formattedData = {
      ...data,
      InvoiceDate: data.InvoiceDate ? data.InvoiceDate.toISOString().split("T")[0] : null,
    };

    try {
      await addInvoices(formattedData)
      alert("Invoice Created successfully");
      reset()
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Server error"));
    }finally{
      setLoading(false);
    }
  };

  return (
    <form className="w-full grid grid-cols-12 gap-5 p-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      {/* Invoice Number */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Invoice Number</Label>
        <Input
          type="text"
          placeholder="Format INV-123"
          {...register("invoice", {
            required: "Invoice Number is required",
            pattern: {
              value: /^INV-\d{3}$/,
              message: "Format must be INV-123"
            }
          })}
          className={cn("text-white caret-amber-100", errors.invoice && "border-red-500")}
        />
        {errors.invoice && <p className="text-red-500 text-sm">{errors.invoice.message}</p>}
      </div>

      {/* Patient Name */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className='text-white'>Patient Name</Label>
        <Input
          placeholder="Enter Patient Name"
          {...register('Patientname', { required: "Patient Name is required" })}
          className={cn("text-white caret-amber-100", errors.Patientname && "border-red-500")}
        />
        {errors.Patientname && <p className="text-red-500 text-sm">{errors.Patientname.message}</p>}
      </div>

      {/* Invoice Date */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Date</Label>
        <Controller
          name="InvoiceDate"
          control={control}
          rules={{ required: "Invoice Date is required" }}
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between font-normal text-gray-400 bg-slate-950 hover:bg-slate-900 hover:text-white",
                    errors.InvoiceDate && "border-red-500"
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
        {errors.InvoiceDate && <p className="text-red-500 text-sm">{errors.InvoiceDate.message}</p>}
      </div>

      {/* Amount */}
      <div className="col-span-3 flex flex-col gap-3">
        <Label className='text-white'>Amount</Label>
        <Input
          type="number"
          placeholder="Enter Amount"
          {...register('amount', { required: "Amount is required" })}
          className={cn("text-white caret-amber-100", errors.amount && "border-red-500")}
        />
        {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
      </div>

      {/* Balance */}
      <div className="col-span-3 flex flex-col gap-3">
        <Label className='text-white'>Balance</Label>
        <Input
          placeholder="Enter Balance"
          {...register('balance', { required: "Balance is required" })}
          className={cn("text-white caret-amber-100", errors.balance && "border-red-500")}
        />
        {errors.balance && <p className="text-red-500 text-sm">{errors.balance.message}</p>}
      </div>

      {/* Invoice Status */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Status</Label>
        <Controller
          name="invoiceStatus"
          control={control}
          rules={{ required: "Please select status" }}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-3 mb-2">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="paid" />
                <Label className='text-white'>Paid</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="partial" />
                <Label className='text-white'>Partially Paid</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="unpaid" />
                <Label className='text-white'>Unpaid</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.invoiceStatus && <p className="text-red-500 text-sm">{errors.invoiceStatus.message}</p>}
      </div>

      {/* Insurance Status */}
      <div className="col-span-6 flex flex-col gap-3">
        <Label className="text-white">Insurance Status</Label>
        <Controller
          name="insuranceStatus"
          control={control}
          rules={{ required: "Please select status" }}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-3 mb-2">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="approved" />
                <Label className='text-white'>Approved</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="pending" />
                <Label className='text-white'>Pending</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="not_submitted" />
                <Label className='text-white'>Not Submitted</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.insuranceStatus && <p className="text-red-500 text-sm">{errors.insuranceStatus.message}</p>}
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
            "Save Invoice"
          )}
        </Button>
      </div>
    </form>
  );
};

export default InvoiceForm;
