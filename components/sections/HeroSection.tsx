"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Users, Wallet } from "lucide-react";
import logo from "../../app/assets/logo1.png";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [windowHeight, setWindowHeight] = useState(1000); // Default fallback value

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

            // Move light orbs with mouse
            const lights = section.querySelectorAll('.hero-light-orb');
            lights.forEach((light: Element) => {
                const lightEl = light as HTMLElement;
                const speed = parseFloat(lightEl.dataset.speed || '0.05');
                const offsetX = (x - 0.5) * 100 * speed;
                const offsetY = (y - 0.5) * 100 * speed;

                lightEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });

            // Move grid with mouse - parallax effect
            const grid = section.querySelector('.metaverse-grid') as HTMLElement;
            if (grid) {
                const gridSpeed = 0.02;
                const gridX = (x - 0.5) * 50 * gridSpeed;
                const gridY = (y - 0.5) * 50 * gridSpeed;
                grid.style.transform = `translate(${gridX}px, ${gridY}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden">
            {/* Metaverse grid background */}
            <div className="absolute inset-0 z-0 metaverse-perspective">
                <div className="metaverse-grid absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDIxNSwgMCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]" style={{ opacity: 0.4 }}></div>
            </div>

            {/* Glowing circuit lines */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0,30 L20,28 L40,32 L60,30 L80,28 L100,30"
                        stroke="rgba(252, 211, 77, 0.15)"
                        strokeWidth="0.2"
                        fill="none"
                        animate={{
                            d: [
                                "M0,30 L20,28 L40,32 L60,30 L80,28 L100,30",
                                "M0,32 L20,34 L40,30 L60,34 L80,30 L100,32",
                                "M0,30 L20,28 L40,32 L60,30 L80,28 L100,30"
                            ],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    />
                    <motion.path
                        d="M0,70 L20,72 L40,68 L60,70 L80,68 L100,70"
                        stroke="rgba(252, 211, 77, 0.15)"
                        strokeWidth="0.2"
                        fill="none"
                        animate={{
                            d: [
                                "M0,70 L20,72 L40,68 L60,70 L80,68 L100,70",
                                "M0,68 L20,66 L40,70 L60,66 L80,70 L100,68",
                                "M0,70 L20,72 L40,68 L60,70 L80,68 L100,70"
                            ],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
                    />
                    <motion.path
                        d="M20,0 L22,20 L18,40 L22,60 L18,80 L20,100"
                        stroke="rgba(252, 211, 77, 0.15)"
                        strokeWidth="0.2"
                        fill="none"
                        animate={{
                            d: [
                                "M20,0 L22,20 L18,40 L22,60 L18,80 L20,100",
                                "M22,0 L18,20 L22,40 L18,60 L22,80 L22,100",
                                "M20,0 L22,20 L18,40 L22,60 L18,80 L20,100"
                            ],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ repeat: Infinity, duration: 7 }}
                    />
                    <motion.path
                        d="M80,0 L78,20 L82,40 L78,60 L82,80 L80,100"
                        stroke="rgba(252, 211, 77, 0.15)"
                        strokeWidth="0.2"
                        fill="none"
                        animate={{
                            d: [
                                "M80,0 L78,20 L82,40 L78,60 L82,80 L80,100",
                                "M78,0 L82,20 L78,40 L82,60 L78,80 L78,100",
                                "M80,0 L78,20 L82,40 L78,60 L82,80 L80,100"
                            ],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ repeat: Infinity, duration: 8, delay: 0.5 }}
                    />
                </svg>
            </div>

            {/* Digital data streams */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-gradient-to-b from-yellow-400/0 via-yellow-400/10 to-yellow-400/0"
                        style={{
                            width: `${Math.random() * 1 + 0.5}px`,
                            height: `${Math.random() * 25 + 15}%`,
                            left: `${i * 10 + Math.random() * 5}%`,
                            top: `${Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [0, 300],
                            opacity: [0, 0.7, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Enhanced background effects */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="hero-light-orb absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                    data-speed="0.03"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="hero-light-orb absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]"
                    data-speed="0.05"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                />

                {/* Metaverse data nodes */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="absolute">
                        <motion.div
                            className="relative"
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 18}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1, 0.8],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.7,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="h-4 w-4 rounded-full bg-yellow-400/30 backdrop-blur-sm"></div>
                            <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400/40" style={{ animationDuration: `${3 + i}s`, animationDelay: `${i * 0.2}s` }}></div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Enhanced wave background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <svg className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none">
                    {/* First layer - smoothest wave */}
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
                            repeatType: "mirror",
                            duration: 25,
                            ease: [0.43, 0.13, 0.23, 0.96] // Improved smoother easing
                        }}
                    />
                    {/* Second layer */}
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
                            repeatType: "mirror",
                            duration: 20,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    />
                    {/* Third layer - metaverse grid effect */}
                    <motion.path
                        d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="rgba(252, 211, 77, 0.02)"
                        stroke="rgba(252, 211, 77, 0.05)"
                        strokeWidth="0.5"
                        animate={{
                            d: [
                                "M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,122.7C672,128,768,192,864,186.7C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ],
                            strokeDasharray: ["0", "5"],
                            strokeDashoffset: [0, 10]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 30,
                            ease: "linear"
                        }}
                    />
                </svg>
            </div>

            {/* Digital particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-yellow-300/40"
                        style={{
                            top: `${15 + i * 5}%`,
                            left: `${5 + i * 8}%`,
                            boxShadow: '0 0 8px rgba(252, 211, 77, 0.6)'
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
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

            {/* Binary code effect */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-yellow-400/50 text-xs font-mono whitespace-nowrap"
                        style={{
                            top: `${i * 10}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 90 - 45}deg)`
                        }}
                    >
                        {Array.from({ length: 20 }).map((_, j) => (
                            <motion.span
                                key={j}
                                animate={{
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: j * 0.1 + i * 0.3,
                                    repeatType: "reverse"
                                }}
                            >
                                {Math.random() > 0.5 ? "1" : "0"}
                            </motion.span>
                        )).join('')}
                    </div>
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* 3D Logo rotation effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                rotateY: [0, 10, 0, -10, 0],
                                rotateX: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"></div>
                            <motion.div
                                animate={{
                                    rotate: [0, 0, 360, 360],
                                    scale: [1, 1.05, 1.05, 1],
                                }}
                                transition={{
                                    times: [0, 0.3, 0.9, 1],
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: [0.6, 0.05, 0.5, 0.95],
                                }}
                                className="rounded-full relative"
                                style={{ perspective: '1000px' }}
                            >
                                <Image
                                    src={logo}
                                    alt="Quantara Logo"
                                    width={120}
                                    height={120}
                                    className="mx-auto relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 0 8px rgba(252, 211, 77, 0.5))',
                                        background: 'transparent',
                                    }}
                                />

                                {/* Digital circuit behind logo */}
                                <div className="absolute inset-0 -z-10 opacity-70">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(252, 211, 77, 0.2)" strokeWidth="0.5" />
                                        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(252, 211, 77, 0.2)" strokeWidth="0.5" />
                                        <motion.circle
                                            cx="50" cy="50" r="30"
                                            fill="none"
                                            stroke="rgba(252, 211, 77, 0.3)"
                                            strokeWidth="0.5"
                                            strokeDasharray="188.5"
                                            animate={{ strokeDashoffset: [0, 188.5] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="mb-6 inline-block">
                        <motion.span
                            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 backdrop-blur-sm"
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
                        {/* Changed button: Invite Friends */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium px-8 py-6 text-lg group">
                                <Users className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                Invite Friends
                            </Button>
                        </motion.div>

                        {/* Changed button: Connect Wallet */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Button variant="outline" className="border-yellow-500/50 text-white hover:bg-yellow-500/10 text-lg px-8 py-6 group">
                                <Wallet className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                Connect Wallet
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
                                className="h-8 w-24 bg-gray-500/20 backdrop-blur-sm rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >$24.5M+ Staked</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 backdrop-blur-sm rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >15,000+ Users</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 backdrop-blur-sm rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >99.9% Uptime</motion.div>
                            <motion.div
                                className="h-8 w-24 bg-gray-500/20 backdrop-blur-sm rounded flex items-center justify-center text-xs text-gray-400"
                                whileHover={{
                                    backgroundColor: "rgba(252, 211, 77, 0.1)",
                                    scale: 1.05
                                }}
                            >Audited</motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add cyberpunk/metaverse style gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-yellow-900/20 to-transparent pointer-events-none"></div>

            {/* Add metaverse perspective styles */}
            <style jsx>{`
                .metaverse-perspective {
                    perspective: 1000px;
                    perspective-origin: 50% 50%;
                }
                
                @keyframes data-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.7; }
                }
                
                @keyframes scan-line {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}</style>
        </section>
    );
}