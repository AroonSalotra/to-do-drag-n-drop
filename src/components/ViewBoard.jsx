import SelectBoard from "./SelectBoard";

const ViewBoard = () => {
    return (
        <>

            <div className="flex gap-8 justify-center flex-wrap">

                <SelectBoard
                    redirect={"/board"}
                    title="Board one"
                    access={true}
                />

                <SelectBoard
                    redirect={"/pro"}
                    title="Board two"
                />

                <SelectBoard
                    redirect={"/pro"}
                    title="Board three"
                />

            </div>

        </>
    );
}

export default ViewBoard;