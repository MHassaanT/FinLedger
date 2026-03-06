"use client";
import { motion } from "framer-motion";

const footerLinks = {
    Services: [
        { label: "Bank Reconciliation", href: "#services" },
        { label: "Receivables & Payables", href: "#services" },
        { label: "Financial Reports", href: "#services" },
        { label: "Forecasting", href: "#services" },
    ],
    Company: [
        { label: "Why FinLedger", href: "#why-finledger" },
        { label: "Our Approach", href: "#why-finledger" },
        { label: "Contact Us", href: "#contact" },
        { label: "Book Consultation", href: "#contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative border-t border-[#D4AF37]/10 overflow-hidden" style={{ background: "#000912" }}>
            {/* Subtle FL watermark */}
            <span className="fl-watermark left-1/2 -translate-x-1/2 top-[-10%] opacity-50">FL</span>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                                <defs>
                                    <linearGradient id="goldGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#B8960A" />
                                        <stop offset="50%" stopColor="#D4AF37" />
                                        <stop offset="100%" stopColor="#E8C84A" />
                                    </linearGradient>
                                </defs>
                                <rect x="5" y="6" width="3.5" height="28" rx="1" fill="url(#goldGradFoot)" />
                                <rect x="5" y="6" width="14" height="3.5" rx="1" fill="url(#goldGradFoot)" />
                                <rect x="5" y="18" width="11" height="3.5" rx="1" fill="url(#goldGradFoot)" />
                                <rect x="22" y="6" width="3.5" height="28" rx="1" fill="url(#goldGradFoot)" />
                                <rect x="22" y="30.5" width="13" height="3.5" rx="1" fill="url(#goldGradFoot)" />
                            </svg>
                            <div>
                                <span className="text-white font-bold text-xl tracking-wide">
                                    Fin<span className="text-[#D4AF37]">Ledger</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                            Precision bookkeeping and strategic financial forecasting for ambitious businesses across Pakistan.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-bold">Call Us:</span>
                            <a href="tel:03042953852" className="text-white font-bold hover:text-[#D4AF37] transition-colors duration-300">
                                0304 2953852
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-5">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/40 hover:text-white text-sm transition-colors duration-300 hover:translate-x-0.5 inline-block"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="divider-gold mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/25 text-xs">
                        © {new Date().getFullYear()} FinLedger. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span className="text-white/25 text-xs tracking-widest uppercase">Precision in Every Entry</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
