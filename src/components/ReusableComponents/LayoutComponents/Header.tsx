"use client"
// import { User } from '@prisma/client'
import React from 'react'
import { onAuthenticateUser } from '@/actions/auth'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Zap} from 'lucide-react'
import PurpleIcon from './PurpleIcon'
import CreateWebinarButton from './CreateWebinarButton'


type Props = {
  user: Awaited<ReturnType<typeof onAuthenticateUser>>["user"]
}


// Todo : stripe ,subscription ,Assistant ,User
const Header = ({user}: Props) => {
    const pathname = usePathname()
    const router = useRouter()
  return (
    <div className='w-full px-4 pt-10 sticky top-0 z-10 flex justify-between items-center flex-wrap gap-4 bg-background'>
        {pathname.includes('pipeline')? (
        <Button className='bg-primary/10 border border-border rounded-xl ' variant={'outline'} onClick={()=>router.push('/webinar')}>
            <ArrowLeft/> Back to webinars
        </Button>
    ):(
        <div className='px-4 py-2 flex justify-center text-bold items-center rounded-xl bg-background border border-border text-primary capitalize'>{pathname.split('/')[1]}</div>
    )}
    {/* {TODO :Build stripe subscrition ,assistant and create webinar } */}
    <div className='flex gap-6 items-center flex-wrap'>
        
    <PurpleIcon>
    <Zap/>
    </PurpleIcon>

    {/* TODO:Add stripe Subscription and create webinar button */}
    {/* user.subscription */}

{/* USER CAN CREATE WEBINAR ONLY WHEN HE HAVE DONE WITH PAYMENT */}
<CreateWebinarButton/>
    </div>
    </div>

  )
}

export default Header