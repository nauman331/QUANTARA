"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
    const faqs = [
        {
            question: "What is crypto staking?",
            answer: "Crypto staking is a process where you lock up your cryptocurrency holdings to support the operations of a blockchain network. In return for your contribution, you receive rewards, usually in the form of additional tokens. It's similar to earning interest in a traditional savings account."
        },
        {
            question: "How does Quantara's staking work?",
            answer: "Quantara offers a simple staking process: connect your wallet, select the amount you want to stake and the staking period, confirm the transaction, and start earning rewards. Our platform handles all the technical aspects while you earn passive income on your crypto assets."
        },
        {
            question: "What cryptocurrencies can I stake on Quantara?",
            answer: "Currently, you can stake ETH, BTC, BNB, USDT, and USDC on our platform. We're continuously working to add more cryptocurrencies to provide you with more options for diversifying your staking portfolio."
        },
        {
            question: "How are staking rewards calculated and distributed?",
            answer: "Staking rewards are calculated based on your staked amount, the APY rate of your selected plan, and the staking duration. Rewards accrue daily and are either automatically added to your staking balance for compounding or can be withdrawn to your wallet, depending on your selected option."
        },
        {
            question: "Is staking on Quantara secure?",
            answer: "Yes, security is our top priority. We implement multi-signature wallets, cold storage for the majority of funds, regular security audits, and have insurance coverage. Our platform has never experienced a security breach since its inception."
        },
        {
            question: "What are the lock periods and can I unstake early?",
            answer: "Different staking plans have different minimum lock periods, ranging from 7 days for Basic plans to 90 days for Premium plans. Early unstaking is possible after the minimum lock period, but may incur a small fee depending on your plan and the timing of withdrawal."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-black/80">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Frequently Asked <span className="gold-gradient">Questions</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Everything you need to know about Quantara's crypto staking platform
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-800 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className={`w-full p-6 text-left flex justify-between items-center ${openIndex === index ? 'bg-yellow-900/20' : 'bg-gray-900/40'}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-yellow-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
