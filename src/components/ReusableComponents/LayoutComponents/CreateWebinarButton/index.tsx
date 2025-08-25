import { Dialog,DialogContent,DialogTitle,DialogTrigger } from '@/components/ui/dialog'
import React, { useState } from 'react'
import { useWebinarStore } from '@/store/useWebinarStore'
import { PlusIcon } from 'lucide-react'
import BasicInfoStep from './BasicInfoStep'
import MultiStepForm from './MultiStepForm'


type Props = {
   
}

const CreateWebinarButton = (props: Props) => {

    const {isModalOpen,setModalOpen,isComplete,setComplete}=useWebinarStore();
    const [webinarLink,setWebinarLink]=useState("");
    const steps=[
        {
            id:'1',
            title:'Webinar details',
            description:'Provide details about your webinar',
            component:<BasicInfoStep/>
        }
    
    ]

    const handleComplete=(id:string)=>{
        setComplete(true) 

        setWebinarLink(`${process.env.NEXT_PUBLIC_BASE_URL}/live-webinar/${id}`);


    }

  return (
   <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
    <DialogTrigger asChild>
       <button className='rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2
       border border-border bg-primary/10 backdrop-blur-sm text-sm font-normal text-primary'
       onClick={()=>setModalOpen(true)}>
        <PlusIcon/>
        Create Webinar
       </button>
    </DialogTrigger>
    <DialogContent className='sm:max-w-[900px] p-0 bg-transparent border-none'>
{
    isComplete?(<div className="bg-muted text-primary rounded-lg overflow-hidden"><DialogTitle className='sr-only'>Create Webinar</DialogTitle>
    {/* SuccessStep */}
    </div>):(
        <><DialogTitle className='sr-only'>Create Webinar</DialogTitle>
        <MultiStepForm 
        steps={steps}
        onComplete={()=>handleComplete}
        />
        </>
        
    )
}
    </DialogContent>
    
   </Dialog>
  )
}

export default CreateWebinarButton