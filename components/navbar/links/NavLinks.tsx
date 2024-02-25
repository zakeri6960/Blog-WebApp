"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


import Navlink from "./link"

type Links = {
    title: string,
    path: string,
}

const links = [{
    title: "Home",
    path: "/",
},
{
    title: "About",
    path: "/about",
    
},
{
    title: "Contact",
    path: "/contact",
},
{
    title: "Blog",
    path: "/blog",
    },

]; 

export default function NavLinks() {
    const [isAdmin, setIsAdmin] = useState(true)
    const [login, setLogin] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <div className={clsx(
                "transition-all ease-linear z-10 backdrop-blur-md md:static absolute bg-black/40 md:bg-inherit h-full w-full md:w-auto md:min-h-fit min-h-[60vh] left-0 top-[-100%] flex items-center px-5",
                {
                    "top-[0%]" : openMenu === true
                }
            )}>
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                {
                    links.map(link => <Navlink item={link} key={link.path} />)
                    }
                    {login && isAdmin ? <Navlink item={{ title: "Admin", path: "/admin" }} key={"Admin"} /> : null}
                </div>
            </div>
            <div className="flex items-center">
                {
                    login ?
                        (
                            <>
                                <button className="bg-blue-500 rounded-full px-6 text-sm py-2 text-blue-200 hover:text-white mr-3">Logout</button>
                            </>
                        ) :
                        (
                            <button type="button" className="bg-blue-500 rounded-full px-6 text-sm py-2 text-blue-200 hover:text-white mr-3">Login</button>
                        )}
                {!openMenu ? (<IoIosMenu onClick={()=> setOpenMenu(true)} className="size-10 text-white md:hidden ml-5 absolute right-3"/>) :
                (<IoIosClose onClick={()=> setOpenMenu(false)} className="z-20 size-10 text-white md:hidden ml-5  absolute right-3"/>)
                        }
            </div>
        </>
    )
}