"use client"
import { sidebarData } from '@/lib/data'
import { TooltipProvider, TooltipTrigger,Tooltip } from '@radix-ui/react-tooltip'
import { Icon, SpotlightIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
// import sidebarData from "../../../../src/lib/data";

type Props = {}

const Sidebar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div className='w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6
     border bg-background border-border flex flex-col items-center *:justify-start gap-10'>

    <div className=''>
        <SpotlightIcon/>
    </div>
    <div className='w-full h-full justify-between items-center flex flex-col'>
    <div className='flex h-fit justify-between items-center flex-col gap-4'>
    {sidebarData.map((item)=>(
        <TooltipProvider key={item.id}>
          <Tooltip>
            <TooltipTrigger asChild>
                <Link href={item.link}
                 className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 ${pathname.includes(item.link)?'iconBackground':" "}`}>
                    <item.icon className={`w-4 h-4 ${pathname.includes(item.link)?' ':"opacity-80"}`}/>

               </Link>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
    ))}
    </div>

    
    </div>

<UserButton/>

     </div>
  )
}

export default Sidebar