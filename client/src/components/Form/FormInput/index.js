import React from 'react';

function FormInput({ label, rightLabel, leftLabel, bold, outline, register, error, ...props }) {
   const inputWrapperClassname = () => {
      let className = 'flex items-center rounded px-3';
      if (outline) {
         className += ' border bg-white border-gray-300';
      }

      return className;
   };

   const labelClassname = () => {
      let className = 'text-sm text-slate-500';

      if (bold) {
         className += ' font-semibold';
      }

      return className;
   };

   return (
      register && (
         <div className="relative w-full">
            {label && <span className={labelClassname()}>{label}</span>}
            <div className={inputWrapperClassname()}>
               {rightLabel && <span className={labelClassname()}>{rightLabel}</span>}
               <input {...register(props.name)} className="w-full outline-none border-none h-10 text-sm" {...props} />
               {leftLabel && <span className={labelClassname()}>{leftLabel}</span>}
            </div>
            <div className="absolute top-full">
               {error && <span className="text-xs text-red-600">{error.message}</span>}
            </div>
         </div>
      )
   );
}

export default FormInput;
