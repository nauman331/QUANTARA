"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Users, DollarSign, BarChart2, CalendarClock, Repeat2,
    Wallet, PieChart, History, CreditCard,
    BookOpen, Gift, MessageSquare
} from "lucide-react";
import { Button } from "../ui/button";

export function QuantaraZone() {
    const dashboardFeatures = [
        { icon: <Wallet className="w-8 h-8 text-yellow-500" />, label: "My Assets", href: "#assets" },
        { icon: <BarChart2 className="w-8 h-8 text-yellow-500" />, label: "Analytics", href: "#analytics" },
        { icon: <DollarSign className="w-8 h-8 text-yellow-500" />, label: "Rewards", href: "#rewards" },
        { icon: <Repeat2 className="w-8 h-8 text-yellow-500" />, label: "Swap", href: "#swap" },
        { icon: <Users className="w-8 h-8 text-yellow-500" />, label: "Referrals", href: "#referrals" },
        { icon: <History className="w-8 h-8 text-yellow-500" />, label: "History", href: "#history" },
        { icon: <PieChart className="w-8 h-8 text-yellow-500" />, label: "Strategies", href: "#strategies" },
        { icon: <CalendarClock className="w-8 h-8 text-yellow-500" />, label: "Lock Terms", href: "#terms" },
        { icon: <CreditCard className="w-8 h-8 text-yellow-500" />, label: "Buy Crypto", href: "#buy" },
        { icon: <BookOpen className="w-8 h-8 text-yellow-500" />, label: "Learn", href: "#learn" },
        { icon: <Gift className="w-8 h-8 text-yellow-500" />, label: "Promotions", href: "#promos" },
        { icon: <MessageSquare className="w-8 h-8 text-yellow-500" />, label: "Support", href: "#support" },
    ];

    return (
        <section id="dashboard" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="gold-gradient">Dashboard</span> Features
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Access all your staking activities and manage your portfolio from our comprehensive dashboard
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {dashboardFeatures.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Link href={item.href} className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-black mb-2 hover:bg-yellow-500/10 transition-all group">
                                    {item.icon}
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">{item.label}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href="/dashboard">
                        <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium px-8 py-6 rounded-lg">
                            Launch Dashboard
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
