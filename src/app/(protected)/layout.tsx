import { onAuthenticateUser } from '@/actions/auth'
import React from 'react'
import Sidebar from '@/components/ReusableComponents/LayoutComponents/Sidebar'
type Props = {
    children: React.ReactNode
}

const layout = async ({children}: Props) => {
    const userExist = await onAuthenticateUser()

    if(!userExist.user){
        return('/sign-in')
    }
  return (
    <div className='flex w-full min-h-screen'>
        <Sidebar/>
        <div className='flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default layout