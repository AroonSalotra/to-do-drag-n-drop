import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isMobileNav, setIsMobileNav] = useState(false)

    const navList = [
        { body: "Home", redirect: "/" },
        { body: "Board", redirect: "/board" },
        { body: "Pro", redirect: "/pro" }
    ]

    return (
        <nav className="absolute left-0 top-0 w-4/6 sm:w-screen z-20">

            <button onClick={() => setIsMobileNav(!isMobileNav)}
                className="absolute left-2 top-1 text-4xl block sm:hidden">
                <GiHamburgerMenu className="select-none pointer-events-none" />
            </button>

            <div className={`flex flex-col gap-8 items-start justify-center pt-10 transition-transform bg-neutral-900
            ${isMobileNav ? "" : "-translate-x-full"} sm:flex-row sm:translate-x-0 sm:pt-0`}>

                {navList.map(({ body, redirect }) => {
                    return <NavLink
                        onClick={() => setIsMobileNav(false)}
                        className={`text-xl font-semibold p-3 sm:p-2 w-full border-gra hover:!border-b-2`}
                        style={({ isActive }) => ({
                            borderBottom: isActive ? "1px solid" : ""
                        })}
                        key={body}
                        to={redirect}>
                        {body}
                    </NavLink>
                })}

            </div>

        </nav>
    );
}

export default Navbar;