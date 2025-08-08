"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export function StakingCalculator() {
    const [amount, setAmount] = useState(1000);
    const [duration, setDuration] = useState(30);
    const [apy, setApy] = useState(10);
    const [crypto, setCrypto] = useState("ETH");
    const [result, setResult] = useState(0);

    const cryptoOptions = [
        { value: "ETH", label: "Ethereum", baseApy: 10 },
        { value: "BTC", label: "Bitcoin", baseApy: 8 },
        { value: "BNB", label: "Binance Coin", baseApy: 12 },
        { value: "USDT", label: "Tether", baseApy: 15 },
        { value: "USDC", label: "USD Coin", baseApy: 14 },
    ];

    // Calculate earnings whenever inputs change
    useEffect(() => {
        // Simple compound interest formula
        const dailyRate = apy / 100 / 365;
        const earnings = amount * Math.pow(1 + dailyRate, duration) - amount;
        setResult(parseFloat(earnings.toFixed(2)));
    }, [amount, duration, apy]);

    // Update APY when crypto changes
    const handleCryptoChange = (value: string) => {
        setCrypto(value);
        const selectedCrypto = cryptoOptions.find(option => option.value === value);
        if (selectedCrypto) {
            setApy(selectedCrypto.baseApy);
        }
    };

    return (
        <section id="calculator" className="py-24 bg-black/80">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Staking <span className="gold-gradient">Calculator</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Calculate your potential earnings from staking with Quantara
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-gray-300 mb-2">Select Cryptocurrency</label>
                                    <Select
                                        value={crypto}
                                        onValueChange={handleCryptoChange}
                                    >
                                        <SelectTrigger className="bg-gray-800 border-gray-700 focus:ring-yellow-500/30">
                                            <SelectValue placeholder="Select a cryptocurrency" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-800 border-gray-700">
                                            {cryptoOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Staking Amount (USD)</label>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(Math.max(100, Number(e.target.value)))}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-yellow-500/30 focus:border-yellow-500"
                                        />
                                        <span className="text-gray-400">USD</span>
                                    </div>
                                    <div className="mt-2">
                                        <Slider
                                            defaultValue={[1000]}
                                            min={100}
                                            max={100000}
                                            step={100}
                                            value={[amount]}
                                            onValueChange={(value) => setAmount(value[0])}
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400">
                                            <span>$100</span>
                                            <span>$100,000</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Staking Period (Days)</label>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="number"
                                            value={duration}
                                            onChange={(e) => setDuration(Math.max(7, Number(e.target.value)))}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-yellow-500/30 focus:border-yellow-500"
                                        />
                                        <span className="text-gray-400">Days</span>
                                    </div>
                                    <div className="mt-2">
                                        <Slider
                                            defaultValue={[30]}
                                            min={7}
                                            max={365}
                                            step={1}
                                            value={[duration]}
                                            onValueChange={(value) => setDuration(value[0])}
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400">
                                            <span>7 days</span>
                                            <span>365 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-lg p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Your Estimated Earnings</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">APY:</span>
                                            <span className="text-yellow-500 font-bold">{apy}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Staking Amount:</span>
                                            <span className="text-white">${amount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Staking Period:</span>
                                            <span className="text-white">{duration} days</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-700">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="block text-gray-400 text-sm">Total Earnings</span>
                                                <span className="text-3xl font-bold text-yellow-500">${result.toLocaleString()}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-gray-400 text-sm">Total Value</span>
                                                <span className="text-xl font-semibold text-white">${(amount + result).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button className="mt-8 bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium w-full py-6">
                                    Start Staking Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-gray-400 text-sm">
                            Note: Calculations are estimates and actual returns may vary based on market conditions.
                            The APY rates are not guaranteed and can change over time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
