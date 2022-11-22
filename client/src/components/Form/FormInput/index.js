import React from 'react';

function FormInput({ label, register, error, ...props }) {
   console.log(register);
   return (
      register && (
         <div className="mt-6 relative">
            {label && <span className="text-sm text-slate-500 font-semibold">{label}</span>}
            <div className="border bg-white border-gray-300 rounded px-3 mt-2">
               <input {...register(props.name)} className="w-full outline-none border-none h-10 text-sm" {...props} />
            </div>
            <div className="absolute top-full">
               {error && <span className="text-xs text-red-600">{error.message}</span>}
            </div>
         </div>
      )
   );
}

export default FormInput;
