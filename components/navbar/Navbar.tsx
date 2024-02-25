import NavLinks from "./links/NavLinks";

export default function Navbar() {
    return (
        <nav className="flex pb-4 justify-between items-center w-[92%]">
            <div className=" font-bold text-3xl text-white">
                MZB
            </div>  
            <NavLinks />
        </nav>
    )
}