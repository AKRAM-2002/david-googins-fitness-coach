'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from "@clerk/nextjs";
import { UserCircle } from 'lucide-react';

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Profile",
        path: "/profile"
    },
    {
        name: "Workouts",
        path: "/workouts"
    },
    {
        name: "Nutrition",
        path: "/nutrition"
    },
    {
        name: "Motivation",
        path: "/motivation"
    },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="p-4 flex flex-row justify-between items-center bg-black text-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Link href='/'>
                    <span className="font-bold text-xl text-emerald-400">Goggins AI</span>
                </Link>
            </div>

            {/* Routes */}
            <ul className="flex space-x-6">
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link href={route.path}>
                            <span className={`hover:text-emerald-400 transition-all duration-300 pb-1 ${
                                pathname === route.path 
                                    ? 'border-b-2 border-emerald-400 text-emerald-400' 
                                    : ''
                            }`}>
                                {route.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Custom styled Clerk UserButton */}
            <UserButton 
                afterSwitchSessionUrl='/'
                appearance={{
                    elements: {
                        avatarBox: "w-6 h-6",
                        rootBox: "flex items-center space-x-2 bg-emerald-700 px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors duration-300",
                        userPreviewMainIdentifier: "text-white",
                        userPreviewSecondaryIdentifier: "text-emerald-200",
                    },
                }}
            >
                <UserCircle size={24} />
                <span>Account</span>
            </UserButton>
        </nav>
    );
};

export default Navbar;