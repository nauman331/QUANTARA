"use client";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, Wallet, BarChart4, RefreshCcw } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: <TrendingUp className="h-8 w-8 text-yellow-400" />,
            title: "High Yield Returns",
            description: "Earn up to 15% APY on your staked crypto assets, with rewards distributed daily to your wallet."
        },
        {
            icon: <Clock className="h-8 w-8 text-yellow-400" />,
            title: "Flexible Staking",
            description: "Choose from flexible terms ranging from 7 days to 365 days, with higher rewards for longer commitments."
        },
        {
            icon: <Shield className="h-8 w-8 text-yellow-400" />,
            title: "Military-Grade Security",
            description: "Your funds are protected with multi-signature wallets, cold storage, and regular security audits."
        },
        {
            icon: <Wallet className="h-8 w-8 text-yellow-400" />,
            title: "Multi-Wallet Support",
            description: "Connect with MetaMask, Trust Wallet, Coinbase Wallet and other popular crypto wallets."
        },
        {
            icon: <BarChart4 className="h-8 w-8 text-yellow-400" />,
            title: "Real-Time Analytics",
            description: "Track your rewards, monitor performance, and visualize your earnings with comprehensive dashboards."
        },
        {
            icon: <RefreshCcw className="h-8 w-8 text-yellow-400" />,
            title: "Auto-Compounding",
            description: "Automatically reinvest your staking rewards to maximize your returns through the power of compounding."
        }
    ];

    return (
        <section id="features" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="gold-gradient">Staking</span> Benefits
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Discover why thousands of investors choose Quantara for their crypto staking needs
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900/50 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(251, 191, 36, 0.3)" }}
                        >
                            <div className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
