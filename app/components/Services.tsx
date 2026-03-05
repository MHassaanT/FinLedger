"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        id: "bank-reconciliation",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <rect x="6" y="14" width="36" height="26" rx="3" stroke="url(#g1)" strokeWidth="2" fill="none" />
                <path d="M6 20h36" stroke="url(#g1)" strokeWidth="2" />
                <circle cx="16" cy="30" r="3" fill="url(#g1)" />
                <path d="M24 30h10M24 35h6" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 8l6 6M36 8l-6 6" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Bank & Credit Card Reconciliation",
        desc: "Error-free cash flow management with meticulous reconciliation of all accounts, ensuring your books match your reality — down to the last cent.",
        tags: ["Cash Flow", "Accuracy", "Monthly Closing"],
    },
    {
        id: "invoice-bill",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <defs>
                    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <rect x="10" y="6" width="28" height="36" rx="3" stroke="url(#g2)" strokeWidth="2" fill="none" />
                <path d="M16 16h16M16 22h16M16 28h10" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="34" cy="34" r="7" fill="#001B3A" stroke="url(#g2)" strokeWidth="1.5" />
                <path d="M31 34h6M34 31v6" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Invoice & Bill Creation",
        desc: "Streamlined accounts payable and receivable — professional invoicing, timely bill management, and complete visibility over your payment cycles.",
        tags: ["AR/AP", "Invoicing", "Payments"],
    },
    {
        id: "financial-reporting",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <defs>
                    <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <path d="M8 38V28l8-6 8 4 8-10 8 6v16H8z" stroke="url(#g3)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                <path d="M8 38h32" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="28" r="2" fill="url(#g3)" />
                <circle cx="24" cy="24" r="2" fill="url(#g3)" />
                <circle cx="32" cy="16" r="2" fill="url(#g3)" />
                <circle cx="40" cy="22" r="2" fill="url(#g3)" />
                <path d="M10 10h8M10 14h5" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Financial Reporting",
        desc: "Detailed weekly, monthly, and year-end insights that transform raw numbers into clear narratives — empowering informed decisions at every level.",
        tags: ["Weekly", "Monthly", "Year-End"],
    },
    {
        id: "forecasting",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <defs>
                    <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8960A" />
                        <stop offset="100%" stopColor="#E8C84A" />
                    </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="16" stroke="url(#g4)" strokeWidth="2" fill="none" />
                <path d="M24 14v10l6 6" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 8l4-4M34 12l4-4M38 20l5-2" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 30l-4 3M12 38l-3 4" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Forecasting & Statements",
        desc: "Data-driven financial projections and robust statement preparation — giving your business the clarity to anticipate, plan, and grow confidently.",
        tags: ["Projections", "P&L", "Cash Forecast"],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="services" className="relative py-28 overflow-hidden" style={{ background: "#000F21" }}>
            {/* FL Watermark */}
            <span className="fl-watermark left-[-5vw] bottom-[-5%]">FL</span>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                        Our <span className="text-[#D4AF37]">Services</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Comprehensive financial solutions tailored for ambitious businesses ready to scale.
                    </p>
                    <div className="divider-gold max-w-xs mx-auto mt-8" />
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
                >
                    {services.map((svc) => (
                        <motion.div
                            key={svc.id}
                            id={svc.id}
                            variants={cardVariants}
                            className="card-hover group relative flex flex-col p-8 rounded-2xl border border-white/8 cursor-pointer"
                            style={{ background: "linear-gradient(145deg, rgba(0,40,85,0.5) 0%, rgba(0,15,33,0.8) 100%)" }}
                        >
                            {/* Gold corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: "radial-gradient(circle at top right, rgba(212,175,55,0.15), transparent 70%)",
                                    }}
                                />
                            </div>

                            {/* Icon */}
                            <div className="mb-6 p-3 rounded-xl inline-flex bg-[#D4AF37]/8 w-fit group-hover:bg-[#D4AF37]/15 transition-colors duration-300">
                                {svc.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                                {svc.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                                {svc.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {svc.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-semibold tracking-wider text-[#D4AF37]/70 border border-[#D4AF37]/20 rounded-full px-2.5 py-0.5 uppercase group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom border glow on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
