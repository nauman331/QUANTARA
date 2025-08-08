"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animations/AnimatedText";

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden">
            <div className="container mx-auto relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="mb-6 inline-block">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/30">
                            <span className="mr-1.5 h-2 w-2 rounded-full bg-yellow-400"></span>
                            Up to 15% APY on Staking
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <AnimatedText text="Earn Passive Income With Crypto Staking" />
                    </h1>

                    <p className="text-xl text-gray-300 mb-10">
                        Stake your crypto assets and earn high yield rewards. Secure, transparent, and easy-to-use platform for maximizing your crypto returns.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium px-8 py-6 text-lg">
                            Start Staking
                        </Button>
                        <Button variant="outline" className="border-yellow-600 text-white hover:bg-yellow-600/10 px-8 py-6 text-lg">
                            Connect Wallet
                        </Button>
                    </div>
                </motion.div>

                {/* Animated background elements */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-yellow-600/30 blur-[100px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
