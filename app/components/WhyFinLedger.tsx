"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
    {
        id: "accuracy",
        number: "01",
        title: "Unmatched Accuracy",
        desc: "Every figure verified, every entry reconciled. We eliminate discrepancies before they become problems — giving you books you can stake business decisions on.",
        icon: (
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <defs>
                    <linearGradient id="vg1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <circle cx="28" cy="28" r="20" stroke="url(#vg1)" strokeWidth="2" fill="none" />
                <path d="M19 28l6 7 12-14" stroke="url(#vg1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "time-recovery",
        number: "02",
        title: "Time Recovery",
        desc: "Reclaim hours lost to financial admin. We handle the numbers so you can focus on strategy, growth, and the things that only you can do.",
        icon: (
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <defs>
                    <linearGradient id="vg2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <circle cx="28" cy="28" r="18" stroke="url(#vg2)" strokeWidth="2" fill="none" />
                <path d="M28 16v12l8 5" stroke="url(#vg2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 12l4 4M46 12l-4 4" stroke="url(#vg2)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "growth-insights",
        number: "03",
        title: "Growth-Oriented Insights",
        desc: "Beyond bookkeeping — we deliver strategic financial intelligence. Forecasts, trends, and projections that position your business for its next milestone.",
        icon: (
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <defs>
                    <linearGradient id="vg3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <path d="M10 42l10-12 8 6 10-14 8 8" stroke="url(#vg3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M38 22l8 0 0 8" stroke="url(#vg3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 46h36" stroke="url(#vg3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function WhyFinLedger() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="why-finledger"
            className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #001B3A 0%, #002855 50%, #001B3A 100%)" }}
        >
            {/* Decorative lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute left-0 top-0 w-full h-full opacity-5"
                    style={{
                        backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(212,175,55,0.6) 50%, transparent 60%)",
                        backgroundSize: "400px 400px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        Our Promise
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
                        Why <span className="text-[#D4AF37]">FinLedger?</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Three pillars that set us apart from every other financial firm.
                    </p>
                    <div className="divider-gold max-w-xs mx-auto mt-8" />
                </motion.div>

                {/* Pillars */}
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.id}
                            id={pillar.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            className="relative group"
                        >
                            <div
                                className="relative p-10 rounded-2xl h-full border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                                style={{ background: "linear-gradient(145deg, rgba(0,40,85,0.4) 0%, rgba(0,15,33,0.7) 100%)" }}
                            >
                                {/* Large background number */}
                                <span className="absolute top-6 right-8 text-7xl font-black text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500 select-none">
                                    {pillar.number}
                                </span>

                                {/* Icon */}
                                <div className="mb-8">{pillar.icon}</div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {pillar.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-white/50 leading-relaxed text-sm">{pillar.desc}</p>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-20 relative rounded-2xl overflow-hidden px-10 py-12 text-center"
                    style={{ background: "linear-gradient(135deg, #002855 0%, #001022 100%)", border: "1px solid rgba(212,175,55,0.2)" }}
                >
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, transparent 70%)" }}
                    />
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 relative z-10">
                        Ready to Transform Your Finances?
                    </h3>
                    <p className="text-white/50 mb-8 relative z-10 max-w-md mx-auto">
                        Join hundreds of businesses that trust FinLedger for their financial clarity.
                    </p>
                    <a
                        href="#contact"
                        id="why-cta"
                        className="relative z-10 inline-block gradient-gold text-[#001B3A] font-bold px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        Book a Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
