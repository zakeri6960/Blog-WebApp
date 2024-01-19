"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = () => {
    const path = usePathname();

    const [isAmin, setAdmin] = useState(true);
    const [session, setSession] = useState(true)

    const links = [
        {
            title: "HomePage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
                {links.map(link => (
                    <li className="nav-item">
                        <Link className={`px-4 py-2 nav-link ${path == link.path && "rounded bg-white text-black "}`} href={link.path} key={link.title}>{ link.title }</Link>
                    </li>
                ))}
            
            {
                session ?
                    (
                        <>
                            {isAmin && (<li className="nav-item"><Link className={`px-4 py-2 nav-link${path == "/admin" && "rounded bg-white text-black "}`} href={"/admin"} key={"Admin"}>Admin</Link></li>)}
                            <button type="button" className="btn btn-outline-primary mx-3">Logout</button>
                        </>
                    )
                        :
                    (<li className="nav-item"><Link className={`px-4 py-2 nav-link ${path == "/login" && "rounded bg-white text-black "}`} href={"/login"} key={"Login"}>Login</Link></li>)
            }
            </ul>
            
        </div>
    )
}
export default Links