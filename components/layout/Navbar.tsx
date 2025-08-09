"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../app/assets/logo1.png";
import { useOnClickOutside } from "@/hooks/use-click-outside";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const mobileMenuRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    // Handle scrolling behavior
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [mobileMenuOpen]);

    // Handle click outside to close menu
    useOnClickOutside(mobileMenuRef, () => {
        if (mobileMenuOpen) setMobileMenuOpen(false);
    }, 'mousedown', [navRef]);

    const toggleDropdown = (name: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            ref={navRef}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 z-50 relative">
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
                            {item.hasDropdown ? (
                                <button
                                    onClick={(e) => toggleDropdown(item.name, e)}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                                    aria-expanded={activeDropdown === item.name}
                                    aria-controls={`dropdown-${item.name}`}
                                >
                                    {item.name}
                                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}

                            {item.hasDropdown && activeDropdown === item.name && (
                                <div
                                    id={`dropdown-${item.name}`}
                                    className="absolute top-full left-0 mt-1 w-48 bg-black/95 border border-gray-800 rounded-md shadow-lg overflow-hidden"
                                >
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
                    className="lg:hidden text-white p-2 z-50 relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-40 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            ref={mobileMenuRef}
                            className="container mx-auto px-4 flex flex-col space-y-4 pt-24 pb-10 h-full overflow-y-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {mainNavItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    className="border-b border-gray-800"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                                >
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={(e) => toggleDropdown(item.name, e)}
                                                className="flex items-center justify-between w-full py-3 text-lg text-gray-300 hover:text-white"
                                                aria-expanded={activeDropdown === item.name}
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        className="pl-4 pb-2 space-y-2"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {dropdownItems[item.name as keyof typeof dropdownItems]?.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block py-2 text-gray-400 hover:text-white"
                                                                onClick={closeMenu}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block py-3 text-lg text-gray-300 hover:text-white"
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            {secondaryNavItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 + (mainNavItems.length + index) * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block py-3 text-lg text-gray-300 hover:text-white border-b border-gray-800"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 + (mainNavItems.length + secondaryNavItems.length) * 0.05 }}
                                className="mt-6"
                            >
                                <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black font-medium w-full">
                                    Connect Wallet
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
