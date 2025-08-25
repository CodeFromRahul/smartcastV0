import {cn} from '@/lib/utils'
import { Attendee } from "../../generated/prisma"
import React from 'react'

type Props = {
    customer:Attendee
    tags:string[]
    className?:string
}


const UserInfoCard = ({customer,tags,className}: Props) => {
    return (
        <div className={cn("p-4 flex flex-col items-start justify-center gap-4 border border-border rounded-2xl bg-secondary",className)}>
            <h3 className='font-seminbold text-xs'>{customer.name}</h3>
            <p className='text-sm'>{customer.email}</p>
            <div className='flex gap-2 flex-wrap'>
                {tags.map((tag,index)=>(
                    <span key={index} className='text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground'>
                        {tag}
                    </span>
                ))}
            </div> 
        </div>
    )
}

export default UserInfoCard