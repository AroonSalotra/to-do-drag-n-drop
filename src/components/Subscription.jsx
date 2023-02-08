import PricingTable from "./PricingTable";

const Subscription = () => {
    return (
        <section>

            <h1 className="text-lg flex items-baseline justify-center gap-1">Your account is currently
                <span className="italic text-lg mb-8">Basic</span>
            </h1>

            <PricingTable />

        </section>
    );
}

export default Subscription;