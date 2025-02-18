"use client";
import { useUserContext } from '@/context/userContext';
import { home, moon, profile } from '@/utils/Icons';
import Link from 'next/link';
import React from 'react'

function Header() {
    const {user} = useUserContext();

    const { name } = user;

    const userId = user._id;
    
return (
<header className="px-6 my-4 w-full items-center justify-between bg-[#f9f9f9]">
    <div>
        <h1 className="text-lg font-medium">
            <span role="img" aria-label="wave">
                👋
            </span>
            {userId ? `Welcome, ${name}!` : 'Welcome to Taskfyer'}
        </h1>
        <p className="text-sm">
            {userId ? (
                <>You have <span className="font-bold text-[#000000]">5</span>
                &nbsp;active tasks
                </>
            ):(
                "Please login or register to view your tasks"
            )}
        </p>
    </div>
    <div className="h-[40px] flex items-center gap-[10.4rem] justify-end">
        <button className="px-8 py-3 bg-[#000000] text-white rounded-[50px]
        hover:bg-[#808080] hover:text-white transition-all duration-200 ease-in-out"
        >
            Create a new Task
        </button>

        <div className="flex gap-4 items-center">
            <Link href=""
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-yellow-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
                {home}
            </Link>
            <Link href=""
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-yellow-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
                {moon}
            </Link>
            <Link href=""
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-yellow-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
                {profile}
            </Link>
        </div>
    </div>
</header>
)}

export default Header;
