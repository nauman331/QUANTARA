"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
    const stakingPlans = [
        {
            name: "Basic",
            apy: "5%",
            minStake: "$100",
            description: "Perfect for beginners who want to start with crypto staking",
            features: [
                "5% annual percentage yield",
                "7-day minimum lock period",
                "Daily rewards distribution",
                "No maximum stake limit",
                "Withdraw anytime (after lock)"
            ],
            highlighted: false
        },
        {
            name: "Advanced",
            apy: "10%",
            minStake: "$500",
            description: "Ideal for experienced investors seeking higher returns",
            features: [
                "10% annual percentage yield",
                "30-day minimum lock period",
                "Daily rewards distribution",
                "No maximum stake limit",
                "Priority customer support",
                "Referral bonuses"
            ],
            highlighted: true
        },
        {
            name: "Premium",
            apy: "15%",
            minStake: "$1,000",
            description: "For serious investors looking for maximum returns",
            features: [
                "15% annual percentage yield",
                "90-day minimum lock period",
                "Daily rewards distribution",
                "No maximum stake limit",
                "Dedicated account manager",
                "Early access to new features",
                "Special token airdrops"
            ],
            highlighted: false
        }
    ];

    return (
        <section id="staking-plans" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Simple, Transparent <span className="gold-gradient">Staking Plans</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Choose the plan that fits your investment strategy
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stakingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-lg p-8 ${plan.highlighted
                                ? "bg-gradient-to-b from-yellow-900/40 to-yellow-900/10 border-2 border-yellow-500"
                                : "bg-gray-900/40 border border-gray-700"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg transform translate-y-0 translate-x-0">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-yellow-500">{plan.apy}</span>
                                <span className="text-gray-400"> APY</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-gray-300">Min. Stake: </span>
                                <span className="font-semibold">{plan.minStake}</span>
                            </div>
                            <p className="text-gray-400 mb-6">{plan.description}</p>
                            <Button
                                className={`w-full mb-6 ${plan.highlighted
                                    ? "bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black"
                                    : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                            >
                                Start Staking
                            </Button>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className={`h-5 w-5 mr-2 mt-0.5 ${plan.highlighted ? "text-yellow-500" : "text-gray-400"}`} />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
