// src/lib/data.ts
import { Camera, Home,  LucideAxis3D, Settings, Sparkle } from "lucide-react";

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
        icon:Camera,    
        link:"/webinars"
    },
    {
        id:3,
        title:"Leads",
        icon:LucideAxis3D,
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
