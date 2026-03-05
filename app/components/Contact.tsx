"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const businessTypes = [
    "Sole Proprietorship",
    "LLC / Partnership",
    "Private Limited Company",
    "Startup",
    "E-Commerce Business",
    "Service Business",
    "Retail / Wholesale",
    "Other",
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", businessType: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", businessType: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="relative py-28 overflow-hidden"
            style={{ background: "#000F21" }}
        >
            {/* FL Watermark */}
            <span className="fl-watermark right-[-3vw] top-[5%]">FL</span>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                            Let&apos;s Build Your<br />
                            <span className="text-[#D4AF37]">Financial Future</span>
                        </h2>
                        <p className="text-white/50 leading-relaxed mb-10 text-base">
                            Whether you&apos;re just starting out or scaling fast, FinLedger is your partner
                            in financial precision. Reach out today for a free, no-obligation consultation.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#D4AF37]/60 text-xs tracking-widest uppercase font-semibold mb-0.5">Phone</div>
                                    <a href="tel:03042953852" id="phone-link" className="text-white text-lg font-bold hover:text-[#D4AF37] transition-colors duration-300">
                                        0304 2953852
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
                                        <path d="m2 7 10 7 10-7" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#D4AF37]/60 text-xs tracking-widest uppercase font-semibold mb-0.5">Email</div>
                                    <a href="mailto:bilal.ahmad.ckjfsd1@gmail.com" className="text-white text-base font-medium hover:text-[#D4AF37] transition-colors duration-300">bilal.ahmad.ckjfsd1@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="10" r="3" stroke="#D4AF37" strokeWidth="1.5" />
                                        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#D4AF37]/60 text-xs tracking-widest uppercase font-semibold mb-0.5">Office</div>
                                    <span className="text-white text-base font-medium">Pakistan — Serving Nationwide</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <div
                            className="p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/15 relative overflow-hidden"
                            style={{ background: "linear-gradient(145deg, rgba(0,40,85,0.5) 0%, rgba(0,15,33,0.9) 100%)" }}
                        >
                            {/* Form header glow */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                                            <path d="M5 13l4 4L19 7" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                                    <p className="text-white/50">We&apos;ll be in touch within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-xl font-bold text-white mb-6">Book a Free Consultation</h3>

                                    <div>
                                        <label className="block text-[#D4AF37]/70 text-xs font-semibold tracking-widest uppercase mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="e.g. Ahmed Khan"
                                            className="input-field"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#D4AF37]/70 text-xs font-semibold tracking-widest uppercase mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            placeholder="e.g. ahmed@mybusiness.pk"
                                            className="input-field"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#D4AF37]/70 text-xs font-semibold tracking-widest uppercase mb-2">
                                            Business Type
                                        </label>
                                        <select
                                            id="contact-business-type"
                                            required
                                            className="input-field appearance-none"
                                            value={formData.businessType}
                                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23D4AF37' strokeWidth='1.5' strokeLinecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "20px" }}
                                        >
                                            <option value="" disabled>Select your business type</option>
                                            {businessTypes.map((t) => (
                                                <option key={t} value={t} style={{ background: "#001B3A" }}>{t}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[#D4AF37]/70 text-xs font-semibold tracking-widest uppercase mb-2">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={3}
                                            placeholder="Tell us about your financial needs..."
                                            className="input-field resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        id="contact-submit"
                                        type="submit"
                                        className="w-full gradient-gold text-[#001B3A] font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02] text-sm tracking-wider uppercase"
                                    >
                                        Send Message
                                    </button>

                                    <p className="text-white/25 text-xs text-center">
                                        Or call us directly:{" "}
                                        <a href="tel:03042953852" className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors">
                                            0304 2953852
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
