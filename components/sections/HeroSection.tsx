"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { ArrowRight } from "lucide-react";
import logo from "../../app/assets/logo1.png";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden">
            {/* Animated wave background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <svg className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none">
                    <motion.path
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="rgba(252, 211, 77, 0.03)"
                        animate={{
                            d: [
                                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 10,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.path
                        d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="rgba(252, 211, 77, 0.05)"
                        animate={{
                            d: [
                                "M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,176C960,213,1056,267,1152,266.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 8,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </div>

            {/* Enhanced Background effects */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        x: [-20, 20, -20],
                        y: [-20, 20, -20]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [10, -10, 10],
                        y: [10, -10, 10]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-[90px]"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.1, 0.3, 0.1],
                        x: [-15, 15, -15],
                        y: [15, -15, 15]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-yellow-300/40"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <motion.div
                            animate={{
                                boxShadow: ["0 0 0px rgba(252, 211, 77, 0)", "0 0 30px rgba(252, 211, 77, 0.5)", "0 0 0px rgba(252, 211, 77, 0)"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="rounded-full"
                        >
                            <Image
                                src={logo}
                                alt="Quantara Logo"
                                width={120}
                                height={120}
                                className="atomic-glow mx-auto"
                            />
                        </motion.div>
                    </motion.div>

                    <div className="mb-6 inline-block">
                        <motion.span
                            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/30"
                            animate={{
                                boxShadow: ["0 0 0px rgba(252, 211, 77, 0.2)", "0 0 20px rgba(252, 211, 77, 0.5)", "0 0 0px rgba(252, 211, 77, 0.2)"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.span
                                className="mr-1.5 h-2 w-2 rounded-full bg-yellow-400"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.span>
                            Up to 15% APY on Staking
                        </motion.span>
                    </div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            className="gold-gradient"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >Stake</motion.span> Your Crypto & <AnimatedText text="Earn Rewards" />
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Quantara offers a secure platform for staking your crypto assets and earning passive income.
                        Start with as little as $100 and earn up to 15% APY.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium px-8 py-6 text-lg">
                                Start Staking
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Button variant="outline" className="border-yellow-500/50 text-white hover:bg-yellow-500/10 text-lg px-8 py-6">
                                Learn More <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-16 md:mt-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-sm text-gray-400 mb-4">Trusted by thousands of investors worldwide</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-70">
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >$24.5M+ Staked</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >15,000+ Users</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >99.9% Uptime</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >Audited</motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
