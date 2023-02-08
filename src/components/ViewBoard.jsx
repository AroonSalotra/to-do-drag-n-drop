import { Link } from "react-router-dom";
import SelectBoard from "./SelectBoard";

const ViewBoard = () => {
    return (
        <>
            {/* <h1>Your boards</h1> */}

            <div className="flex gap-8 justify-center flex-wrap">

                <SelectBoard
                    redirect={"/board"}
                    title="Board one"
                    access={true}
                />

                <SelectBoard
                    redirect={"/board"}
                    title="Board two"
                />

                <SelectBoard
                    redirect={"/board"}
                    title="Board three"
                />

            </div>

        </>
    );
}

export default ViewBoard;