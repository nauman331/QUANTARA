"use client";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, Wallet, BarChart4, RefreshCcw } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function Features() {
    const features = [
        {
            icon: <TrendingUp className="h-8 w-8 text-yellow-400" />,
            title: "High Yield Returns",
            description: "Earn up to 15% APY on your staked crypto assets, with rewards distributed daily to your wallet."
        },
        {
            icon: <Clock className="h-8 w-8 text-yellow-400" />,
            title: "Flexible Staking",
            description: "Choose from flexible terms ranging from 7 days to 365 days, with higher rewards for longer commitments."
        },
        {
            icon: <Shield className="h-8 w-8 text-yellow-400" />,
            title: "Military-Grade Security",
            description: "Your funds are protected with multi-signature wallets, cold storage, and regular security audits."
        },
        {
            icon: <Wallet className="h-8 w-8 text-yellow-400" />,
            title: "Multi-Wallet Support",
            description: "Connect with MetaMask, Trust Wallet, Coinbase Wallet and other popular crypto wallets."
        },
        {
            icon: <BarChart4 className="h-8 w-8 text-yellow-400" />,
            title: "Real-Time Analytics",
            description: "Track your rewards, monitor performance, and visualize your earnings with comprehensive dashboards."
        },
        {
            icon: <RefreshCcw className="h-8 w-8 text-yellow-400" />,
            title: "Auto-Compounding",
            description: "Automatically reinvest your staking rewards to maximize your returns through the power of compounding."
        }
    ];

    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [windowHeight, setWindowHeight] = useState(1000); // Default fallback value
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Set window height after component mounts in the browser
        setWindowHeight(window.innerHeight);

        if (!sectionRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const section = sectionRef.current!;
            const rect = section.getBoundingClientRect();

            const x = (clientX - rect.left) / rect.width;
            const y = (clientY - rect.top) / rect.height;

            // Parallax effect for light orbs
            const orbs = section.querySelectorAll('.feature-orb');
            orbs.forEach((orb: Element) => {
                const orbEl = orb as HTMLElement;
                const speed = parseFloat(orbEl.dataset.speed || '0.03');
                const offsetX = (x - 0.5) * 100 * speed;
                const offsetY = (y - 0.5) * 100 * speed;

                orbEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });

            // Interactive connection lines
            const connectionLines = section.querySelector('.connection-lines') as SVGElement;
            if (connectionLines) {
                const paths = connectionLines.querySelectorAll('path');
                paths.forEach((path, i) => {
                    const pathSpeed = 0.01 + (i * 0.005);
                    const pathX = (x - 0.5) * 30 * pathSpeed;
                    const pathY = (y - 0.5) * 15 * pathSpeed;
                    path.setAttribute('transform', `translate(${pathX} ${pathY})`);
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90">
            {/* Digital circuit board background */}
            <div className="absolute inset-0 z-0">
                <svg className="absolute w-full h-full opacity-5">
                    <defs>
                        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100 M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80"
                                stroke="rgba(251, 191, 36, 0.3)" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="rgba(251, 191, 36, 0.3)" />
                            <circle cx="60" cy="20" r="2" fill="rgba(251, 191, 36, 0.3)" />
                            <circle cx="20" cy="60" r="2" fill="rgba(251, 191, 36, 0.3)" />
                            <circle cx="60" cy="60" r="2" fill="rgba(251, 191, 36, 0.3)" />
                            <path d="M20,20 L60,20 L60,60 L20,60 Z" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_70%)]"></div>
            </div>

            {/* Enhanced light orbs */}
            <div className="feature-orb absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]" data-speed="0.04"></div>
            <div className="feature-orb absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" data-speed="0.05"></div>
            <div className="feature-orb absolute -top-20 left-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px]" data-speed="0.03"></div>

            {/* Digital scan line effect */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <motion.div
                    className="w-full h-10 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent"
                    animate={{
                        y: [-100, windowHeight + 100]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear"
                    }}
                ></motion.div>
            </div>

            {/* Animated data flow paths */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-gradient-to-b from-yellow-400/0 via-yellow-400/10 to-yellow-400/0"
                        style={{
                            height: '100%',
                            width: '1px',
                            left: `${15 + i * 25}%`,
                        }}
                    >
                        <motion.div
                            className="h-20 w-full bg-gradient-to-b from-yellow-400/0 via-yellow-400/30 to-yellow-400/0"
                            animate={{ y: [-80, windowHeight + 80] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5 + i * 2,
                                ease: "linear",
                                delay: i * 1.5
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Metaverse-style title with holographic effect */}
                <div className="text-center mb-16 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-20 bg-yellow-500/10 rounded-full blur-3xl feature-orb" data-speed="0.02"></div>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="gold-gradient relative inline-block">
                            Staking
                            <span className="absolute -inset-1 bg-yellow-400/10 blur-sm rounded-lg -z-10"></span>
                        </span> Benefits

                        {/* Digital glitch effect */}
                        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                            <motion.div
                                className="absolute inset-0 opacity-0"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 0.2,
                                    repeatDelay: 8,
                                    times: [0, 0.1, 0.2]
                                }}
                            >
                                <div className="absolute inset-0 -ml-1 text-yellow-400 gold-gradient">Staking Benefits</div>
                            </motion.div>
                        </div>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Discover why thousands of investors choose Quantara for their crypto staking needs
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Enhanced connection lines with data flow animation */}
                    <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 hidden lg:block connection-lines">
                        {[
                            "M200,100 C300,150 350,250 450,300",
                            "M450,100 C550,150 600,250 700,300",
                            "M200,300 C300,350 350,450 450,500",
                            "M450,300 C550,350 600,450 700,500"
                        ].map((path, i) => (
                            <g key={i}>
                                <path
                                    d={path}
                                    stroke="rgba(251, 191, 36, 0.2)"
                                    fill="none"
                                    strokeWidth="1"
                                    strokeDasharray="5,5"
                                />
                                <motion.circle
                                    r="3"
                                    fill="rgba(251, 191, 36, 0.5)"
                                    filter="blur(1px)"
                                    animate={{
                                        cx: [0, 1],
                                        cy: [0, 1],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.5,
                                        repeatType: "loop",
                                    }}
                                >
                                    <mpath href={`#data-path-${i}`} />
                                </motion.circle>
                                <path id={`data-path-${i}`} d={path} stroke="none" fill="none" />
                            </g>
                        ))}
                    </svg>

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            ref={el => { featureRefs.current[index] = el; }}
                            className="bg-gray-900/50 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all relative group backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 30px -15px rgba(251, 191, 36, 0.3)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {/* Digital circuit pattern inside card */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden opacity-5">
                                <svg className="w-full h-full">
                                    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                                </svg>
                            </div>

                            {/* Holographic card effect */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
                                    animate={{
                                        opacity: [0, 0.5, 0],
                                        left: ['-100%', '100%', '100%']
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "easeInOut",
                                        delay: index * 0.5,
                                        repeatDelay: 5
                                    }}
                                />
                            </div>

                            {/* Card highlight edges */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-700 ease-in-out group-hover:opacity-100 opacity-0"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transform origin-right group-hover:scale-x-100 scale-x-0 transition-transform duration-700 ease-in-out group-hover:opacity-100 opacity-0"></div>

                            {/* Interior glow effect */}
                            <div className="absolute inset-0 bg-yellow-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                            {/* Enhanced icon container with 3D-like hover effect */}
                            <motion.div
                                className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mb-4 relative group-hover:bg-yellow-500/20 transition-all duration-300"
                                whileHover={{
                                    rotateY: [0, 10, 0, -10, 0],
                                    rotateX: [0, 5, 0, -5, 0],
                                    scale: 1.1,
                                    transition: { duration: 1.5, ease: "easeInOut" }
                                }}
                            >
                                {/* Pulsing glow effect */}
                                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Data nodes */}
                                {[45, 135, 225, 315].map((angle, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-yellow-400/70 rounded-full"
                                        style={{
                                            left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 36}px)`,
                                            top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 36}px)`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }}
                                    />
                                ))}

                                {/* Icon with glow effect */}
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="relative z-10"
                                >
                                    {feature.icon}
                                </motion.div>
                            </motion.div>

                            <h3 className="text-xl font-bold mb-3 relative">
                                {feature.title}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-400/50 group-hover:w-1/2 transition-all duration-300"></span>
                            </h3>
                            <p className="text-gray-400 relative z-10">{feature.description}</p>

                            {/* Enhanced decorative elements - digital corner */}
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M0 40 L40 40 L40 30" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" strokeDasharray="4,4" />
                                    <path d="M40 40 L40 0 L30 0" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" strokeDasharray="4,4" />
                                    <circle cx="40" cy="40" r="3" fill="rgba(251, 191, 36, 0.5)" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Enhanced floating particles with glowing effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-yellow-400 rounded-full opacity-0"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: '0 0 4px rgba(251, 191, 36, 0.7)',
                            filter: 'blur(1px)',
                        }}
                        animate={{
                            y: [0, -300],
                            opacity: [0, 0.6, 0],
                            scale: [1, 1.2, 0.8]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Binary code rain effect in background */}
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-yellow-400 text-xs font-mono"
                        style={{
                            top: 0,
                            left: `${i * 12.5}%`,
                            transform: `translateX(${Math.random() * 50 - 25}px)`
                        }}
                    >
                        {Array.from({ length: 30 }).map((_, j) => (
                            <motion.div
                                key={j}
                                animate={{
                                    opacity: [0, 1, 0],
                                    y: [-20, windowHeight]
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 20,
                                    repeat: Infinity,
                                    delay: j * 0.2 + i,
                                    ease: "linear"
                                }}
                            >
                                {Math.random() > 0.5 ? "1" : "0"}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Additional animation styles */}
            <style jsx>{`
                @keyframes float-y {
                    0% { transform: translateY(100vh); opacity: 0; }
                    10% { opacity: 0.2; }
                    90% { opacity: 0.2; }
                    100% { transform: translateY(-20vh); opacity: 0; }
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </section>
    );
}
