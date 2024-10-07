"use client";

import React, { useState } from "react";
import { FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";


export const Header: React.FC = () => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev)
    };
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <div className="flex-shrink-0 ml-12">
                <h1 className="text-4xl font-semibold">Aol.</h1> 
            </div>   
            
            <div className="flex flex-grow justify-center mx-8">
                <div className="relative w-[500px]">
                    <input type="text" placeholder="Search" className="w-full rounded-full border border-gray-300 p-2 pr-10" />
                    <div className="absolute right-3 top-1/4 transform tranlate-y-1/2">
                        <BiSearch className="text-gray-400 text-xl" />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-10">
                <div className="flex items-center cursor-pointer">
                    <span className="">24/7 Help</span>
                    <FaChevronDown className="text-sm" />
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaEnvelope className="mr-2" />
                    <span>Mail</span>
                </div>
                <button className="rounded-full border border-blue-300 text-blue px-3 py-2 hover:bg-blue-600">Signup</button>

            </div>

        </header>
    )
}
