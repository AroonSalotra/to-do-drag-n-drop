import { Link } from "react-router-dom";

const Navbar = () => {

    const navList = [
        { body: "Home", redirect: "/" },
        { body: "Board", redirect: "/board" },
        { body: "Pro", redirect: "/pro" }
    ]

    return (
        <nav className="flex justify-center gap-8">

            {navList.map(({ body, redirect }) => {
                return <Link
                    className="text-lg font-semibold"
                    key={body}
                    to={redirect}>
                    {body}
                </Link>
            })}

        </nav>
    );
}

export default Navbar;