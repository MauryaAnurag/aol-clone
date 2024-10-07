"use client";

import { useRouter,usePathname } from "next/navigation"
import React from "react"

export const SideBarItems = ({href,title,icon}: {href:string,title:string,icon:React.ReactNode}) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href
    return (
        <div
            className={`flex ${selected ? "text-[#6a51a6]" : "text-slate-500"} cursor-pointer p-2 ml-16 leading-8`}
            onClick={() => {
                router.push(href);
            }}
            >
            <div className="pr-5">
                {icon}
            </div>
            <div className={` ${selected ? "text-[#6a51a6]" : "text-slate-500 "}`}>
                {title}
            </div>

        </div>
    )
}