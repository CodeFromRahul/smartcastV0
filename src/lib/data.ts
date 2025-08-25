// src/lib/data.ts
import { CallStatusEnum } from "@/generated/prisma";
import { id } from "date-fns/locale";
import { Webcam, Home,  User2, Settings, Sparkle,  } from "lucide-react";
import { title } from "process";

export const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: Home,
    link: "/home"
  },
  
   {
        id:2,
        title:"webinars",
        icon:Webcam,    
        link:"/webinars"
    },
    {
        id:3,
        title:"Leads",
        icon:User2,
        link:"/lead"
    },
    {
        id:4,
        title:"AI agents",
        icon:Sparkle,
        link:"/ai-agents"
    },
    {
    id: 5,
    title: "Settings",
    icon: Settings,
    link: "/settings"
  },
] as const;

// Optional: define type if you want
export type SidebarItem = {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
};



export const onBoardingSteps = [
  {id:1,title:"create a webinar",complete:false,link:''},
  {id:2,title:"Get leads",complete:false,link:''},
  {id:3,title:"conversion status",complete:false,link:''},
]




export const potentialCustomer=[
  {
  id:"1",
  name:"john doe",
  email:"johndoe@example.com",
  clerkId:"1",
  profileImage:"/vercel.svg",
  isActive:true,
  lastLoginAt:null,
  createdAt:new Date(),
  updatedAt:new Date(),
  deletedAt:null,
  tags:["New","Hot","Lead"],
  callStatus:CallStatusEnum.COMPLETED
},
  {
  id:"2",
  name:"john doe",
  email:"johndoe@example.com",
  clerkId:"1",
  profileImage:"/vercel.svg",
  isActive:true,
  lastLoginAt:null,
  createdAt:new Date(),
  updatedAt:new Date(),
  deletedAt:null,
  tags:["New","Hot","Lead"],
  callStatus:CallStatusEnum.COMPLETED
},
  {
  id:"3",
  name:"john doe",
  email:"johndoe@example.com",
  clerkId:"1",
  profileImage:"/vercel.svg",
  isActive:true,
  lastLoginAt:null,
  createdAt:new Date(),
  updatedAt:new Date(),
  deletedAt:null,
  tags:["New","Hot","Lead"],
  callStatus:CallStatusEnum.COMPLETED
},
]