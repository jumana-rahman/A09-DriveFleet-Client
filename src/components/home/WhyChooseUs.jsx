import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground">
                    Why Choose{" "}
                    <span className="bg-linear-to-r from-[#7A0000] via-[#E50914] to-[#7A0000] bg-clip-text text-transparent">
                        Us
                    </span>
                    </h2>

                    <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto">
                    We provide a premium car rental experience with comfort, safety, and affordability.
                    </p>

                    <div className="w-40 h-[2px] bg-linear-to-r from-transparent via-[#E50914] to-transparent mx-auto mt-8"></div>
                </div>

                {/* Features */}
                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                    { title: "Verified Cars", desc: "All cars are checked and verified for quality." },
                    { title: "Affordable Pricing", desc: "Best rental prices with no hidden charges." },
                    { title: "Fast Booking", desc: "Book your car instantly in just a few clicks." },
                    { title: "Secure System", desc: "Safe authentication and protected user data." },
                    { title: "Wide Selection", desc: "SUV, luxury, sports & family cars available." },
                    { title: "24/7 Support", desc: "We are always ready to help you anytime." },
                    ].map((item, i) => (
                    <div
                        key={i}
                        className="group p-6 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 flex items-center justify-center text-[#E50914] font-bold">
                        ✓
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-[var(--foreground)]">
                        {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-[var(--muted)] leading-6">
                        {item.desc}
                        </p>
                    </div>
                    ))}
                </div>
                </section>
        </div>
    );
};

export default WhyChooseUs;