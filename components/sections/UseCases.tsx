"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function UseCases() {
    const stakingPackages = [
        {
            title: "Flexible Staking",
            description: "Start with as little as $100 and earn up to 5% APY with the flexibility to withdraw anytime after a 7-day minimum lock period.",
            image: "/placeholder-flexible.png", // Replace with actual image
            apy: "Up to 5% APY",
            lockPeriod: "7+ days"
        },
        {
            title: "Standard Staking",
            description: "Medium-term staking with higher returns. Lock your assets for 30-90 days and earn enhanced yields on your cryptocurrency.",
            image: "/placeholder-standard.png", // Replace with actual image
            apy: "Up to 10% APY",
            lockPeriod: "30-90 days"
        },
        {
            title: "Premium Staking",
            description: "Maximize your earnings with our premium staking package. Long-term commitment with the highest yields in the industry.",
            image: "/placeholder-premium.png", // Replace with actual image
            apy: "Up to 15% APY",
            lockPeriod: "90-365 days"
        }
    ];

    return (
        <section id="staking-packages" className="py-24 bg-black/80">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our <span className="gold-gradient">Staking Packages</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Choose the staking option that best fits your investment goals and risk tolerance
                    </motion.p>
                </div>

                <div className="space-y-24">
                    {stakingPackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row gap-8 items-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="relative overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-yellow-500/20 to-amber-700/20 border border-yellow-500/20">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Replace with actual image */}
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-yellow-500 mb-2">{pkg.apy}</div>
                                            <div className="text-sm text-gray-300">{pkg.lockPeriod}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{pkg.title}</h3>
                                <p className="text-gray-300 mb-6">{pkg.description}</p>
                                <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium">
                                    Start Staking
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
