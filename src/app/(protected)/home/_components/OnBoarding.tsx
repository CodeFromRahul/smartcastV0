'use client'

import { Check, CheckCircleIcon } from "lucide-react"
import React from "react";
import Link from "next/link";
import { on } from "events";
import {onBoardingSteps} from "@/lib/data";

const OnBoarding=()=>{
    return (
        <div className="flex flex-col gap-1 items-start justify-start">
            {onBoardingSteps.map((step, index) => (
                <Link
                key={index}
                href={step.link}
                className="flex items-center gap-2 "
                >
                    <CheckCircleIcon className="w-4 h-4 text-primary" />
                    <p className="text-base text-foreground">{step.title}</p>
                </Link>
            ))}
        </div>
    )
}
export default OnBoarding;