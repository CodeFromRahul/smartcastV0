import React from 'react'
import OnBoarding from './_components/OnBoarding'
import FeatureCard from './_components/FeatureCard'
import {  Upload, Webcam } from 'lucide-react'
import FeatureSectionLayout from './_components/FeatureSectionLayout'
import Image from 'next/image'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full mx-auto h-full '>
      <div className='w-full flex flex-col sm:flex-row justify-between items-start gap-14'>
        <div className='space-y-6'>
      <h2 className='text-primary font-semibold text-4xl'>
        Get Maximum Conversion from your webinars
         

      </h2>
      <OnBoarding/>
      
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-content-center'>
          <FeatureCard Icon={<Upload className='w-10 h-10' />} heading="Browse or drag a pre-recorded webinar file" link="#" />
          <FeatureCard Icon={<Webcam className='w-10 h-10'/>} heading="Record a new webinar" link="/webinars" />

        </div>
        </div>
        <div className='mt-10 grid grid-cols-1  md:grid-cols-2 gap-6 rounded-xl bg-background-10'>
          <FeatureSectionLayout 
          heading="see how ar along are your potential customers"
          link="/lead"   >
            <div className='p-5 flex flex-col gap-4 items-start border rounded-xl border-border boackdrop-blur-3xl '>
        <div className='w-full flex justify-between items-center gap-3'>
          <p className='text-primary font-semibold text-sm'>Conversion</p>
          <p className='text-xs text-muted-foreground text-normal'>50</p>

        </div>
        <div className='flex flex-col gap-4 items-start '>
            {Array.from({length:3}).map((_,index)=>(
              <Image src="/featurecard.png"
              alt="info-card"
              width={250}
               key={index}
              height={250}
              className='w-full h-full object-cover rounded-xl'/>
             
            ))}
        </div>
            </div>
            </FeatureSectionLayout>
          

        </div>
        </div>
  )
}

export default page 