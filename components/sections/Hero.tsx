"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "../../app/assets/logo1.jpg";

export function Hero() {
    return (
        <section className="relative min-h-screen pt-24 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-16 md:pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <Image
                            src={logo}
                            alt="Quantara Logo"
                            width={120}
                            height={120}
                            className="atomic-glow mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="gold-gradient">Stake</span> Your Crypto & Earn Rewards
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Quantara offers a secure platform for staking your crypto assets and earning passive income.
                        Start with as little as $100 and earn up to 15% APY.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium text-lg px-8 py-6">
                            Start Staking
                        </Button>
                        <Button variant="outline" className="border-yellow-500/50 text-white hover:bg-yellow-500/10 text-lg px-8 py-6">
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    <motion.div
                        className="mt-16 md:mt-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-sm text-gray-400 mb-4">Trusted by thousands of investors worldwide</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-70">
                            <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">$24.5M+ Staked</div>
                            <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">15,000+ Users</div>
                            <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">99.9% Uptime</div>
                            <div className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">Audited</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
