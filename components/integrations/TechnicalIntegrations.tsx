"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Integration data
const integrations = [
    {
        name: "METAMASK",
        logo: "/logos/metamask.svg", // Add these logo files to your public folder
        description: "Connect your MetaMask wallet seamlessly",
    },
    {
        name: "TokenPocket",
        logo: "/logos/tokenpocket.svg",
        description: "Full support for TokenPocket wallet",
    },
    {
        name: "CoinBase",
        logo: "/logos/coinbase.svg",
        description: "Integration with Coinbase wallet",
    },
    {
        name: "AML Bot",
        logo: "/logos/amlbot.svg",
        description: "Anti-money laundering protection",
    },
    {
        name: "ChainLink",
        logo: "/logos/chainlink.svg",
        description: "Powered by ChainLink oracles",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function TechnicalIntegrations() {
    return (
        <section id="integrations" className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gold-gradient">Technical Integrations</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Quantara leverages cutting-edge blockchain technologies and integrates with industry-leading platforms to provide you with a secure and seamless experience.
                    </p>
                </motion.div>

                {/* First row of integrations */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-amber-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                        >
                            <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                <div className="relative w-12 h-12">
                                    {/* Placeholder for when you add the actual logos */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-amber-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                            <p className="text-sm text-gray-400">{integration.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second row of integrations */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={`row2-${index}`}
                                variants={item}
                                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-amber-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            >
                                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-amber-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                                <p className="text-sm text-gray-400">{integration.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Third row of integrations */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={`row3-${index}`}
                                variants={item}
                                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-amber-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            >
                                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-amber-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                                <p className="text-sm text-gray-400">{integration.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
