"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            style={{
                background: "radial-gradient(ellipse at 20% 50%, #002855 0%, #001B3A 40%, #000F21 100%)",
            }}
        >
            {/* Animated grid background */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* FL Watermark */}
            <span className="fl-watermark select-none right-[-2vw] top-[10%]">FL</span>

            {/* Glowing orb */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full px-4 py-1.5 mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">
                        Elite Financial Management
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
                >
                    <span className="text-white">FinLedger:</span>
                    <br />
                    <span className="shimmer-text">Precision in</span>
                    <br />
                    <span className="text-white">Every Entry.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="text-white/60 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Expert bookkeeping and financial forecasting designed{" "}
                    <span className="text-white/80 font-medium">for your business success.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        id="hero-cta-primary"
                        className="gradient-gold text-[#001B3A] font-bold text-base px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105 tracking-wide"
                    >
                        Book a Free Consultation
                    </a>
                    <a
                        href="#services"
                        id="hero-cta-secondary"
                        className="border border-[#D4AF37]/40 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#D4AF37]/5"
                    >
                        Explore Services
                    </a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 grid grid-cols-2 gap-8 border-t border-[#D4AF37]/10 pt-10"
                >
                    {[
                        { value: "100%", label: "Accuracy Rate" },
                        { value: "17+", label: "Years Experience" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl sm:text-4xl font-black text-[#D4AF37] gold-text-glow mb-1">
                                {stat.value}
                            </div>
                            <div className="text-white/40 text-xs sm:text-sm font-medium tracking-widest uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/50 to-transparent"
                />
            </motion.div>
        </section>
    );
}
