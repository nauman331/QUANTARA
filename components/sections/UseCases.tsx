"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, LineChart, Lock } from "lucide-react";
import { useEffect, useRef } from "react";

export function UseCases() {
    const stakingPackages = [
        {
            title: "Flexible Staking",
            description: "Start with as little as $100 and earn up to 5% APY with the flexibility to withdraw anytime after a 7-day minimum lock period.",
            apy: "Up to 5% APY",
            lockPeriod: "7+ days",
            color: "from-blue-500/20 to-purple-600/20",
            borderColor: "border-blue-500/30",
            iconColor: "text-blue-400"
        },
        {
            title: "Standard Staking",
            description: "Medium-term staking with higher returns. Lock your assets for 30-90 days and earn enhanced yields on your cryptocurrency.",
            apy: "Up to 10% APY",
            lockPeriod: "30-90 days",
            color: "from-purple-500/20 to-indigo-600/20",
            borderColor: "border-purple-500/30",
            iconColor: "text-purple-400"
        },
        {
            title: "Premium Staking",
            description: "Maximize your earnings with our premium staking package. Long-term commitment with the highest yields in the industry.",
            apy: "Up to 15% APY",
            lockPeriod: "90-365 days",
            color: "from-yellow-400/20 to-amber-600/20",
            borderColor: "border-yellow-500/30",
            iconColor: "text-amber-400"
        }
    ];

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const section = sectionRef.current!;
            const rect = section.getBoundingClientRect();

            const x = (clientX - rect.left) / rect.width;
            const y = (clientY - rect.top) / rect.height;

            const lights = section.querySelectorAll('.light-orb');
            lights.forEach((light: Element) => {
                const lightEl = light as HTMLElement;
                const speed = parseFloat(lightEl.dataset.speed || '0.05');
                const offsetX = (x - 0.5) * 100 * speed;
                const offsetY = (y - 0.5) * 100 * speed;

                lightEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={sectionRef} id="staking-packages" className="py-24 bg-gradient-to-b from-black via-black/95 to-blue-900/10 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"></rect>
                </svg>
            </div>

            {/* Light orbs */}
            <div className="light-orb absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" data-speed="0.03" style={{ animationDuration: '7s' }}></div>
            <div className="light-orb absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" data-speed="0.05" style={{ animationDuration: '10s' }}></div>
            <div className="light-orb absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" data-speed="0.04" style={{ animationDuration: '8s' }}></div>
            <div className="light-orb absolute bottom-1/3 left-1/4 w-56 h-56 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" data-speed="0.06" style={{ animationDuration: '12s' }}></div>

            {/* Light beam */}
            <div className="absolute -top-10 left-1/4 w-1 h-[30%] bg-blue-400/10 rotate-12 blur-md"></div>
            <div className="absolute -bottom-10 right-1/3 w-1 h-[40%] bg-purple-400/10 -rotate-12 blur-md"></div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16 relative">
                    {/* Highlight glow behind title */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-20 bg-blue-500/5 rounded-full blur-3xl"></div>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Staking Packages
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
                            className="flex flex-col md:flex-row gap-8 items-center relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <motion.div
                                    className={`relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br ${pkg.color} border ${pkg.borderColor} backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Card effects */}
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                        <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>

                                        <div className="absolute top-5 left-5 w-20 h-20 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: `${index * 0.3}s` }}></div>
                                        <div className="absolute bottom-5 right-5 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: `${index * 0.5}s` }}></div>

                                        {/* Grid pattern with subtle animation */}
                                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
                                            {Array.from({ length: 16 }).map((_, i) => (
                                                <div key={i} className="border border-white/10 animate-pulse" style={{ animationDuration: `${8 + i % 4}s`, opacity: i % 3 === 0 ? 0.15 : 0.1 }}></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center z-10 backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10 relative overflow-hidden group">
                                            {/* Inner highlight animation */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>

                                            <motion.div
                                                className={`text-5xl font-bold ${pkg.iconColor} mb-4 flex justify-center relative`}
                                                whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {/* Icon glow effect */}
                                                <div className={`absolute inset-0 ${pkg.iconColor.replace('text', 'bg')}/20 rounded-full blur-md opacity-70`}></div>
                                                {index === 0 ? <Clock size={48} /> : index === 1 ? <LineChart size={48} /> : <Lock size={48} />}
                                            </motion.div>
                                            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">{pkg.apy}</div>
                                            <div className="text-sm text-gray-300 flex items-center justify-center gap-2">
                                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                                {pkg.lockPeriod}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${pkg.iconColor}`}>{pkg.title}</h3>
                                <p className="text-gray-300 mb-6">{pkg.description}</p>
                                <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 hover:from-blue-600 hover:via-purple-600 hover:to-amber-600 text-white font-medium shadow-lg shadow-blue-500/20">
                                    Start Staking
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating particles */}
            <div className="particle-container absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Add global animation keyframes via style tag */}
            <style jsx>{`
                @keyframes float-particle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 0.2; }
                    90% { opacity: 0.2; }
                    100% { transform: translateY(-100vh) translateX(${Math.random() * 50 - 25}px); opacity: 0; }
                }
                
                @keyframes animate-gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
