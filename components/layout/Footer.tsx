import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import logo from "../../app/assets/logo1.jpg"
export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "API", href: "#api" },
                { name: "Documentation", href: "#docs" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Community", href: "/community" },
                { name: "Help Center", href: "/help" },
                { name: "Partners", href: "/partners" },
                { name: "Status", href: "/status" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Security", href: "/security" },
                { name: "Cookies", href: "/cookies" },
            ],
        },
    ];

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image
                                src={logo}
                                alt="Quantara Logo"
                                width={40}
                                height={40}
                                className="atomic-glow"
                            />
                            <span className="text-xl font-bold gold-gradient">Quantara</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Harnessing quantum technology to solve the world's most complex problems.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {footerLinks.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-yellow-500"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Quantara. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-yellow-500 text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-yellow-500 text-sm">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-yellow-500 text-sm">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}