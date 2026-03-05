"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why FinLedger", href: "#why-finledger" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#000F21]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#D4AF37]/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* FL Monogram SVG */}
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                            <defs>
                                <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#B8960A" />
                                    <stop offset="50%" stopColor="#D4AF37" />
                                    <stop offset="100%" stopColor="#E8C84A" />
                                </linearGradient>
                            </defs>
                            {/* F shape */}
                            <rect x="5" y="6" width="3.5" height="28" rx="1" fill="url(#goldGradNav)" />
                            <rect x="5" y="6" width="14" height="3.5" rx="1" fill="url(#goldGradNav)" />
                            <rect x="5" y="18" width="11" height="3.5" rx="1" fill="url(#goldGradNav)" />
                            {/* L shape */}
                            <rect x="22" y="6" width="3.5" height="28" rx="1" fill="url(#goldGradNav)" />
                            <rect x="22" y="30.5" width="13" height="3.5" rx="1" fill="url(#goldGradNav)" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-white font-bold text-xl tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                            Fin<span className="text-[#D4AF37]">Ledger</span>
                        </span>
                        <span className="text-[#D4AF37]/60 text-[9px] tracking-[0.25em] uppercase font-medium">
                            Precision in Every Entry
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/70 hover:text-[#D4AF37] text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        id="nav-cta"
                        className="gradient-gold text-[#001B3A] font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        Book Consultation
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#000F21]/98 backdrop-blur-md border-t border-[#D4AF37]/10 px-6 pb-6 pt-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-white/80 hover:text-[#D4AF37] py-3 text-base font-medium tracking-wide border-b border-white/5 transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 block text-center gradient-gold text-[#001B3A] font-bold py-3 rounded-full"
                        >
                            Book Consultation
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
