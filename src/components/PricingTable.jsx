const PricingTable = () => {
    return (
        <>
            <div className="sm:w-80 mx-auto mb-8 border-2 p-4 border-gra">

                <h2 className="text-3xl font-semibold py-4 bg-gradient-to-r from-purple-600 to-pink-500">
                    Pro
                </h2>

                <ul className="flex flex-col gap-3 items-center pt-6">
                    <li className="p-3 bg-neutral-700 border-gra w-full ">Unlimited boards</li>
                    <li className="p-3 bg-neutral-700 border-gra w-full">Auto sync</li>
                    <li className="p-3 bg-neutral-700 border-gra w-full">Group account</li>
                </ul>


                <button className="p-4 mb-20 translate-y-8 border-y-2 border-gra bg-neutral-700 hover:bg-neutral-600">
                    Buy now
                </button>

            </div>
        </>
    );
}

export default PricingTable;