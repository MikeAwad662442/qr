// import React from 'react'
"use client";
// import { NavLinks } from "@/constants"
// import { NavLinkType } from "@/types"
// import Image from "next/image"
// import Link from "next/link"
// import { IconContext } from "react-icons";
const Header = () => {
    return (
        <header className="m-6 p-5 bg-gray-800 h-screen w-96">
            {/* <IconContext.Provider value={{ className: "text-5xl bg-black text-orange-500" }}>
                <nav>
                    <Image
                        className="rounded-full bg-black"
                        src="/assets/logo-80x80.png"
                        alt="Logo"
                        height={`75`}
                        width={'75'} />
                    
                    <ul>
                        {NavLinks.map((item: NavLinkType) => (
                            <li key={item.title}
                                className="flex bg-stone-600 m-2"
                            >
                                <Link
                                    href={item.path}
                                    className="flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100"
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </IconContext.Provider> */}
        </header>
    )
}
/**
 * 
 * ================
 * TaliWindCSS
 * 
 **/
export default Header
