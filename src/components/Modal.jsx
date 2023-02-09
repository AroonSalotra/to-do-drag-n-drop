import { Link } from "react-router-dom";

const Modal = () => {
    return (
        <div id="modal"
            className="absolute bg-neutral-900/[0.4] w-screen py-20 top-[25vh] border-b-2 border-gra">

            <p className="mb-4">Login or register to use boards</p>

            <Link to={"/"}
                className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 rounded-full">
                Back to home
            </Link>

        </div>
    );
}

export default Modal;