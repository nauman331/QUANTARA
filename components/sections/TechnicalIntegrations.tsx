"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Integration data
const walletIntegrations = [
    {
        name: "MetaMask",
        logo: "/logos/metamask.svg", // Add these logo files to your public folder
        description: "Connect your MetaMask wallet seamlessly",
    },
    {
        name: "Trust Wallet",
        logo: "/logos/trust.svg",
        description: "Full support for Trust Wallet",
    },
    {
        name: "Coinbase",
        logo: "/logos/coinbase.svg",
        description: "Integration with Coinbase wallet",
    },
    {
        name: "Binance Wallet",
        logo: "/logos/binance.svg",
        description: "Connect with Binance Chain Wallet",
    },
    {
        name: "WalletConnect",
        logo: "/logos/walletconnect.svg",
        description: "Universal wallet connector protocol",
    },
];

const networkIntegrations = [
    {
        name: "Ethereum",
        logo: "/logos/ethereum.svg",
        description: "ETH staking and ERC-20 tokens",
    },
    {
        name: "BNB Chain",
        logo: "/logos/bnb.svg",
        description: "BNB staking and BEP-20 tokens",
    },
    {
        name: "Polygon",
        logo: "/logos/polygon.svg",
        description: "MATIC staking on Polygon network",
    },
    {
        name: "Avalanche",
        logo: "/logos/avalanche.svg",
        description: "AVAX staking on C-Chain",
    },
    {
        name: "Solana",
        logo: "/logos/solana.svg",
        description: "SOL staking support",
    },
];

const securityIntegrations = [
    {
        name: "Chainalysis",
        logo: "/logos/chainalysis.svg",
        description: "AML compliance integration",
    },
    {
        name: "Fireblocks",
        logo: "/logos/fireblocks.svg",
        description: "Secure custody solution",
    },
    {
        name: "CertiK",
        logo: "/logos/certik.svg",
        description: "Smart contract security audit",
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
                        <span className="gold-gradient">Supported Wallets & Networks</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Quantara seamlessly integrates with all major wallets and blockchain networks, providing you with a secure and flexible staking experience.
                    </p>
                </motion.div>

                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Wallet Integrations</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {walletIntegrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-yellow-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            >
                                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-yellow-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                                <p className="text-sm text-gray-400">{integration.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Supported Networks</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {networkIntegrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-yellow-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            >
                                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-yellow-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                                <p className="text-sm text-gray-400">{integration.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">Security Partners</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {securityIntegrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:border-yellow-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            >
                                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                                    <div className="relative w-12 h-12">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-20 animate-pulse"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-yellow-500 font-bold text-sm">{integration.name.substring(0, 2)}</span>
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
