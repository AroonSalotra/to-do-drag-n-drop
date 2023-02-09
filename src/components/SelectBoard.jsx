import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai"

const SelectBoard = ({ redirect, title, access }) => {
    return (
        <Link to={redirect}>

            <div className="bg-neutral-700 flex flex-col border-gra border-y-2 items-center pt-40 w-screen sm:w-80 transition-all sm:hover:bg-neutral-500">

                {access ? null : <AiFillLock className="text-8xl absolute -translate-y-28 text-neutral-600" />}

                <h2 className="bg-neutral-600 p-1 px-6 rounded-t-full">{access ? title : "Upgrade to unlock"}</h2>

            </div>

        </Link>
    );
}

export default SelectBoard;