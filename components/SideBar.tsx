"use client";
import { NavLinks } from "@/constants"
import { NavLinkType } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { IconContext } from "react-icons";

const SideBar = () => {
    return (
        <nav className="md:w-60 bg-gray=950 h-screen flex-1 flex-col fixed border-r border-zinc-600 pl-2 pr-4 hidden md:flex">
            <div className="flex flex-row justify-between mb-2">
                <Image
                    className="rounded-full"
                    src="/assets/logo-80x80.png"
                    alt="Logo"
                    height={`75`}
                    width={'75'} />
                <h2>QR-code Generator</h2>
            </div>
            {/* <ul className="flex flex-col space-y-2 w-full bg-stone-600 m-2"> */}
            <ul className="flex flex-col space-y-2 w-full m-2">
                {NavLinks.map((item: NavLinkType) => (
                    <li key={item.title}
                        className="flex flex-row items-center"
                    >
                        <Link
                            href={item.path}
                            className="flex flex-row space-x-3  p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 hover:text-stone-600"
                        >
                            <span className="text-2xl text-orange-500">{item.icon}</span>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SideBar