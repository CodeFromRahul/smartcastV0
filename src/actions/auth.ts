"use server"

import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prismaClient";


export async function onAuthenticateUser(){
   try {  
    const user = await currentUser();
    if (!user) {
        return {
            status: 401,
            message: "Unauthorized: No user found"
        }
    }

    const userExists = await prisma.user.findUnique({
        where:{
            clerkId:user.id,

        }
    })

    if(userExists){
        return{
            status: 200,
            user:userExists,
        }
    }

    const newUser = await prisma.user.create({
        data:{
            clerkId: user.id,
            email:user.emailAddresses[0].emailAddress,
            name:user.firstName + " " + user.lastName,
            profileImage:user.imageUrl,
        }
    })
    
    if(!newUser){
        return {
            status: 500,
            message: "Internal Server Error: User creation failed"
        }
    }

    return {
        status: 200,
        user: newUser,
    }


    
   } catch (error) {
    console.error("Error during user authentication:", error);
    return {status:500,error:"Internal Server Error: " }
   }
  

}
