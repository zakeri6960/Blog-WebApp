import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
const Navbar = () => {
    return (
        <nav class="navbar">
            <div className="container-fluid">
                <a href="#d" className="navbar-brand">Lama</a>
                <Links />
            </div>
        </nav>
    )
}
export default Navbar;