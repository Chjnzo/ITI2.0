"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PropertyWizard from './PropertyWizard';
import { X } from 'lucide-react';

interface AddPropertyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddPropertyModal = ({ open, onOpenChange }: AddPropertyModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        className="max-w-5xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden rounded-[32px] border-none shadow-2xl"
      >
        <DialogHeader className="px-8 py-6 border-b border-gray-100 shrink-0 flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-2xl font-bold tracking-tight">Aggiungi Nuovo Immobile</DialogTitle>
            <p className="text-sm text-gray-400 font-medium mt-1">Step {currentStep} di {totalSteps}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)}
            className="rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </Button>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
          <PropertyWizard step={currentStep} />
        </div>

        <DialogFooter className="px-8 py-6 border-t border-gray-100 bg-gray-50/50 shrink-0 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={() => currentStep > 1 && setCurrentStep(s => s - 1)}
            disabled={currentStep === 1}
            className="h-12 px-8 rounded-2xl font-bold"
          >
            Indietro
          </Button>
          
          <div className="flex gap-3">
            <Button 
              onClick={() => currentStep < totalSteps && setCurrentStep(s => s + 1)}
              className="h-12 px-10 bg-[#94b0ab] hover:bg-[#83a19b] text-white rounded-2xl font-bold"
            >
              {currentStep === totalSteps ? 'Salva Immobile' : 'Continua'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertyModal;