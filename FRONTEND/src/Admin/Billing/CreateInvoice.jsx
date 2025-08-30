import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import InvoiceForm from './InvoiceForm';

const CreateInvoice = () => {

  return (
    <div className="w-full min-h-screen items-stretch">
      <div className="w-full min-h-screen grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 bg-slate-900 h-full flex flex-col">
          {/* Header */}
          <div className="h-16 flex items-center justify-end bg-slate-950 border-b-2 rounded-[5px] px-6 space-x-4">
            <button className="text-[15px] text-gray-300 hover:scale-110">
              <i className="fas fa-bell text-gray-300"></i>
            </button>
            <button className="h-10 w-36 text-[15px] text-amber-100 font-semibold bg-slate-900 border-2 border-slate-900 rounded-full hover:border-amber-100 hover:scale-110 duration-300 ease-in">
              <i className="fas fa-user mr-2.5"></i>User Profile
            </button>
          </div>

          {/* Page Title */}
          <div className="flex justify-between items-center px-7 pt-4 text-gray-300 font-semibold">
            <div className="flex flex-col justify-start gap-2 text-[30px] mt-3 ml-4">
              <span className="text-[34px] text-gray-400 font-bold">Create Invoice</span>
              <p className="text-[20px] text-gray-500 pb-2">Create a new invoice for a patient.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 mx-2 my-2 bg-slate-950 rounded-md p-4 mt-5">
            <div className="flex flex-col gap-2 ml-3">
              <h1 className="text-[30px] font-bold text-amber-100">Invoice Details</h1>
              <p className="text-[15px] font-semibold text-gray-400">Enter the details for the new invoice.</p>
            </div>

            {/* Invoice Form */}
            <InvoiceForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
