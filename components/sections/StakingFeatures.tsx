"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StakingFeatures() {
    const products = [
        {
            title: "Quantara Staking Pool",
            description: "Join our secure staking pool where your crypto assets are combined with other investors to maximize returns while minimizing risk through diversification.",
            href: "#staking-pool",
            icon: "Q"
        },
        {
            title: "Yield Farming",
            description: "Participate in advanced DeFi strategies that automatically move your assets between different protocols to ensure the highest possible yields.",
            href: "#yield-farming",
            icon: "Y"
        },
        {
            title: "Liquidity Mining",
            description: "Provide liquidity to decentralized exchanges and earn trading fees plus additional token rewards for your contribution.",
            href: "#liquidity-mining",
            icon: "L"
        },
        {
            title: "Fixed-Term Deposits",
            description: "Lock your crypto for predetermined periods to access higher APY rates with guaranteed returns at maturity.",
            href: "#fixed-term",
            icon: "F"
        }
    ];

    return (
        <section className="py-16 bg-black relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="gold-gradient">Staking</span> Products
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore our diverse range of staking products designed to meet your financial goals
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 relative overflow-hidden group hover:border-yellow-500/50 transition-all duration-500"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.1)" }}
                        >
                            {/* Enhanced triangular pattern */}
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10 transform rotate-45">
                                <div className="grid grid-cols-8 gap-1">
                                    {Array.from({ length: 64 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="aspect-square bg-yellow-400"
                                            initial={{ opacity: 0.3 }}
                                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                                            transition={{
                                                duration: Math.random() * 3 + 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        ></motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="mb-8 flex items-center">
                                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full p-3 mr-4 shadow-lg shadow-yellow-500/20">
                                        <div className="w-8 h-8 flex items-center justify-center text-black font-bold">
                                            {product.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{product.title}</h3>
                                </div>

                                <motion.p
                                    className="text-gray-300 mb-8 pr-4 min-h-[80px]"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: [0, -5, 0] }}
                                    transition={{ duration: 0.4 }}
                                >{product.description}</motion.p>

                                <Link href={product.href} className="inline-block w-full">
                                    <div className="relative h-12 overflow-hidden">
                                        {/* Arrow button - visible when not hovering the card */}
                                        <div className="flex items-center h-full absolute left-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
                                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                                <ArrowRight className="w-6 h-6 text-black" />
                                            </div>
                                        </div>

                                        {/* "Join Now" button - visible when hovering the card */}
                                        <motion.div
                                            className="flex items-center h-full absolute left-0 opacity-0 translate-x-[-30px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                        >
                                            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg px-6 py-3 shadow-lg shadow-yellow-500/20">
                                                <span className="text-black font-bold whitespace-nowrap">Join Now</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
