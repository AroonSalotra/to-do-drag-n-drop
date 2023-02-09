import PricingTable from "./PricingTable";

const Subscription = () => {
    return (
        <section className="mt-16">

            <h1 className="text-lg sm:flex items-baseline justify-center gap-1">Your account is currently
                <span className="italic text-lg mb-8"> Basic</span>
            </h1>

            <PricingTable />

            <small className="italic">
                *Proof of concept, no purchase will be made
            </small>

        </section>
    );
}

export default Subscription;