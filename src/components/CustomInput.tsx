"use client";

import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, icon: Icon, containerClassName, className, ...props }, ref) => {
    return (
      <div className={cn("space-y-2 w-full", containerClassName)}>
        {label && (
          <Label 
            htmlFor={props.id} 
            className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1"
          >
            {label}
          </Label>
        )}
        <div className="relative group">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#94b0ab] transition-colors">
              <Icon size={18} />
            </div>
          )}
          <Input
            ref={ref}
            className={cn(
              "h-14 bg-white border-gray-200 rounded-2xl px-5 transition-all outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#94b0ab] shadow-sm",
              Icon && "pl-12",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-[10px] font-bold text-red-500 px-1 uppercase tracking-tighter">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;