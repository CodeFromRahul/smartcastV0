// src/lib/data.ts
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