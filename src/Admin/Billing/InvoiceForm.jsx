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

const InvoiceForm = () => {
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
                    <Label className='text-white'>Invoice Number</Label>
                    <Input type="text" pattern="[[INV]-[0-9]{3}]" placeholder="Format INV-" {...register('invoice', { required: "Patient Name is required" })}
                        className={cn("text-white caret-amber-100", errors.invoice && "border-red-500")} />
                    {errors.invoice && (<p className=" text-red-500 text-sm">{errors.invoice.message}</p>)}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                    <Label className='text-white'>Patient Name</Label>
                    <Input placeholder="Enter Patient Name" {...register('Patientname', { required: "Patient Name is required" })}
                        className={cn("text-white caret-amber-100", errors.Patientname && "border-red-500")} />
                    {errors.Patientname && (<p className=" text-red-500 text-sm">{errors.Patientname.message}</p>)}
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
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
                    {errors.InvoiceDate && (
                        <p className="text-red-500 text-sm">{errors.InvoiceDate.message}</p>
                    )}
                </div>

                <div className="col-span-3 w-full flex flex-col gap-3">
                    <Label className='text-white'>Amount</Label>
                    <Input type="number" pattern="[0-9]*" placeholder="Enter Amount" {...register('amount', { required: "Amount is required" })}
                        className={cn("text-white caret-amber-100", errors.amount && "border-red-500")} />
                    {errors.amount && (<p className=" text-red-500 text-sm">{errors.amount.message}</p>)}
                </div>

                <div className="col-span-3 w-full flex flex-col gap-3">
                    <Label className='text-white'>Balance</Label>
                    <Input placeholder="Enter Balance" {...register('balance', { required: "Balance is required" })}
                        className={cn("text-white caret-amber-100", errors.balance && "border-red-500")} />
                    {errors.balance && (<p className=" text-red-500 text-sm">{errors.balance.message}</p>)}
                </div>

                <div className="col-span-6 flex flex-col gap-3">
                    <Label className="text-white">Status</Label>
                    <Controller
                        name="invoiceStatus"
                        control={control}
                        rules={{ required: "Please select status" }}
                        render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="scheduled" id="spacing-scheduled"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Paid</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="progress" id="spacing-progress"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Partially Paid</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="wait" id="spacing-wait"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Unpaid</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />
                    {errors.spacingPreference && (
                        <p className="text-red-500 text-sm">{errors.spacingPreference.message}</p>
                    )}
                </div>

                <div className="col-span-6 flex flex-col gap-3">
                    <Label className="text-white">Insurance Status</Label>
                    <Controller
                        name="insuranceStatus"
                        control={control}
                        rules={{ required: "Please select status" }}
                        render={({ field }) => (
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="scheduled" id="spacing-scheduled"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Approved</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="progress" id="spacing-progress"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Pending</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="wait" id="spacing-wait"
                                        className="data-[state=checked]:bg-amber-100 data-[state=checked]:border-amber-100 data-[state=checked]:ring-amber-100" />
                                    <Label className='text-white'>Not Submitted</Label>
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

export default InvoiceForm