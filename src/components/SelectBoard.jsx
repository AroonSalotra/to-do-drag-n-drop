import { Link } from "react-router-dom";
import { AiFillLock, AiFillUnlock } from "react-icons/ai"

const SelectBoard = ({ redirect, title, access }) => {
    return (
        <Link to={redirect}>

            <div className="bg-neutral-700 flex flex-col border-gra border-y-2 items-center pt-40 w-80 transition-all hover:bg-neutral-500">

                {access ? null : <AiFillLock className="text-8xl absolute -translate-y-28 text-neutral-600" />}

                <h2 className="bg-neutral-600 p-2">{access ? title : "Upgrade to unlock"}</h2>

            </div>

        </Link>
    );
}

export default SelectBoard;