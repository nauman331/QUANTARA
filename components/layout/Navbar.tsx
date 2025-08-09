"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../app/assets/logo1.png";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const mainNavItems = [
        { name: "Home", href: "/" },
        { name: "Staking", href: "#", hasDropdown: true },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Earn", href: "/earn" },
        { name: "Learn", href: "/learn" },
    ];

    const secondaryNavItems = [
        { name: "Statistics", href: "/stats" },
        { name: "Swap", href: "/swap" },
    ];

    const dropdownItems = {
        "Staking": [
            { name: "Staking Plans", href: "#staking-plans" },
            { name: "Calculator", href: "#calculator" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "FAQ", href: "#faq" },
        ],
    };

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={logo}
                        alt="Quantara Logo"
                        width={40}
                        height={40}
                        className="atomic-glow"
                    />
                    <span className="text-xl font-bold gold-gradient">Quantara</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-5">
                    {mainNavItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <button
                                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                                className="flex items-center text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                                {item.hasDropdown && (
                                    <ChevronDown size={16} className="ml-1" />
                                )}
                            </button>

                            {item.hasDropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-black/95 border border-gray-800 rounded-md shadow-lg overflow-hidden">
                                    {dropdownItems[item.name as keyof typeof dropdownItems]?.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-800/20 hover:text-white"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {secondaryNavItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium">
                        Connect Wallet
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40 pt-20 overflow-y-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="container mx-auto px-4 flex flex-col space-y-4 pb-10">
                            {mainNavItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-800">
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full py-3 text-lg text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {activeDropdown === item.name && (
                                                <div className="pl-4 pb-2 space-y-2">
                                                    {dropdownItems[item.name as keyof typeof dropdownItems]?.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block py-2 text-gray-400 hover:text-white"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block py-3 text-lg text-gray-300 hover:text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {secondaryNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-3 text-lg text-gray-300 hover:text-white border-b border-gray-800"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium w-full mt-4">
                                Connect Wallet
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
