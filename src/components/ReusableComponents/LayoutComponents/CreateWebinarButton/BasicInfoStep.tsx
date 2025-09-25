"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { useWebinarStore } from '@/store/useWebinarStore'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'


type Props = {}

const BasicInfoStep = (props: Props) => {
  const { formData, updateBasicInfoField,getStepValidationErrors } = useWebinarStore();
  const {webinarName,description,date,time,timeFormat}=formData.basicInfo;
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    updateBasicInfoField(name as keyof typeof formData.basicInfo,value);
  }
  const errors = getStepValidationErrors('basicInfo');
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor="webinarName"
         className={errors.webinarName?'text-red-400':'text-gray-400'}
         >
         webinar Name <span className='text-red-400'>{errors.webinarName}</span>
         </Label>
         <Input 
         id='webinarName'
         name='webinarName'
         value={formData.webinarName || ''}
         onChange={handleChange}
         placeholder='Enter webinar name'
         className={cn(
          '!bg-background/50 border border-input',
          errors.webinarName && 'border-red-400 focus:border-red-400'
         )}
         
         />
      </div>
    </div>
  )
}

export default BasicInfoStep