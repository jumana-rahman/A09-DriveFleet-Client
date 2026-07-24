import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                How It{" "}
                <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
                    Works
                </span>
                </h2>

                <p className="mt-4 text-muted max-w-2xl mx-auto">
                Renting a car has never been easier. Follow these simple steps to get started.
                </p>

                <div className="w-40 h-[2px] bg-linear-to-r from-transparent via-[#E50914] to-transparent mx-auto mt-8"></div>
            </div>

            {/* Steps */}
            <div className="mt-14 grid md:grid-cols-4 gap-6">

                {[
                { title: "Search Cars", desc: "Find your perfect car from our wide collection." },
                { title: "Choose Car", desc: "Select based on type, price and availability." },
                { title: "Book Instantly", desc: "Fill booking details and confirm instantly." },
                { title: "Enjoy Ride", desc: "Pick up the car and enjoy your journey." },
                ].map((item, i) => (
                <div
                    key={i}
                    className="group p-6 rounded-3xl border border-(--border-color) bg-(--card-bg) hover:border-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
                >
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E50914]/10 text-[#E50914] font-bold text-lg">
                    {i + 1}
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-foreground">
                    {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted leading-6">
                    {item.desc}
                    </p>
                </div>
                ))}
            </div>
            </section>
        </div>
    );
};

export default HowItWorks;