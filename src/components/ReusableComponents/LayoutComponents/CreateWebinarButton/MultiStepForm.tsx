// import { promises } from 'dns'
import { useWebinarStore } from '@/store/useWebinarStore'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Check } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

type Step = {
id:string
title:string
description:string
component   : React.ReactNode
}
type Props = {
  steps: Step[]
  onComplete: (id:string) => void
}

const MultiStepForm = ({steps,onComplete}:Props) => {
    const {formData,validateStep,isSubmitting,setSubmitting,setModalOpen}=useWebinarStore()

    const [completedSteps,setCompletedSteps]=useState<string[]>([])
    const [currentStepIndex,setCurrentStepIndex]=useState(0)
    const [validationError,setValidationError]=useState<string|null>(null)

    const currentStep=steps[currentStepIndex];
    const isFirstStep=currentStepIndex===0;
    const isLastStep=currentStepIndex===steps.length-1;

    useWebinarStore();
  return (
    <div className='flex flex-col justify-center items-center bg-[#27272A]/20 border border-border rounded-3xl overflow-hidden max-w-6xl mx-auto backdrop-blur-[106px]'>
     <div className='flex items-center justify-center'>
        <div className='w-full md:w-1/3 p-6'>
        <div className='space-y-6'>
            {steps.map((step,index) => {

                const isCompleted=completedSteps.includes(step.id);
                const isCurrent=index===currentStepIndex;
                const  isPast=index<currentStepIndex;

                return <div key={step.id} className='relative '>
                    <div className='flex items-center gap-4 '>

                    <div className='relative'>
                        <motion.div
                        initial={false}
                        animate={{
                            background: isCurrent || isCompleted? 'rgb(147,51,234)' : 'rgb(31,41,55)',
                            scale: [isCurrent && !isCompleted ? 0.8 : 1,1],
                             transition: { duration: 0.2 },
                        }}
                        className='flex items-center justify-center w-8 h-8 rounded-full z-10'
                        >
                            <AnimatePresence mode='wait'>
                                {
                                    isCompleted?(
                                        <motion.div 
                                        key="check"
                                        initial={{ opacity: 0 ,scale:0.5}}
                                        animate={{ opacity: 1 ,scale:1}}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        >
                                            <Check className='w-4 h-4 text-white' />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                        key="number"
                                        initial={{ opacity: 0 ,scale:0.5}}
                                        animate={{ opacity: 1 ,scale:1}}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className='text-white'
                                        >
                                            <Check className='w-5 h-5 text-white/50'/>
                                        </motion.div>
                                    )}
                                
                            </AnimatePresence>

                        </motion.div>
                        {index<steps.length-1  &&(
                            <div className='absolute left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-border rounded-full' >
                                <motion.div
                                initial={{ height:isPast||isCompleted?'100%':'0%'}}
                                animate={{ height:isPast||isCompleted?'100%':'0%',
                                    transition:{duration:0.3,ease:"easeInOut"}
                                }} className='w-full h-full '/>

                                
                            </div>
                        )}
                </div>
                <div className='pt-1'>
                    <motion.h3 
                    animate={{
                        color:isCurrent ||isCompleted?'rgb(255,255,255)':'rgb(156,163,175)'
                    }}
                    transition={{duration:0.2}}
                    className='font-medium'
                    ></motion.h3>
                    <p className='text-sm text-gray-400'>
                        {step.description}
                    </p>
                </div>
                </div>
                 </div>
 
              
})}
              
     </div>
    </div>
    <Separator
    orientation='vertical'
    className='data-[orientation=vertical]:h-1/2'
    />

    <div className='w-full md:w-2/3'>
        <AnimatePresence mode='wait'>
            <motion.div
            key={currentStep.id}
                initial={{opacity:0,x:50}}
                animate={{x:0,opacity:1}}
                exit={{x:-20,opacity:0}}
                transition={{duration:0.3}}
            className='p-6 '
            >
                <div className='mb-6'>
                    <h2 className='text-lg font-semibold'>{currentStep.title}</h2>
                    <p className='text-gray-400'>{currentStep.description}</p>
                </div>
                {currentStep.component}

                {validationError && (
                    <div className='mt-4 text-red-500'>
                        <AlertCircle className='h-5 w-5 mt-0.5  flex-shrink-0' />
                        <p>{validationError}</p>
                       </div>
                )}
            </motion.div>
        </AnimatePresence>
    </div>
     </div>
    </div>
  )
}

export default MultiStepForm