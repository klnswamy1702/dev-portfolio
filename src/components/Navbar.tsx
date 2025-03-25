'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Auto-scroll top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        closeMobileMenu();
    }, [pathname]);

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-50 top-0 shadow-md">
            <div className="mx-auto w-11/12 max-w-6xl flex justify-between items-center py-4">
                {/* Left Nav Links */}
                <div className="hidden sm:flex gap-6 text-sm">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link key={link.href} href={link.href} className={cn(
                            'hover:text-blue-400 transition-colors',
                            pathname === link.href && 'text-blue-400 font-medium'
                        )}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">Swamy</Link>
                </div>

                {/* Right Nav Links */}
                <div className="hidden sm:flex gap-6 text-sm">
                    {navLinks.slice(2).map((link) => (
                        <Link key={link.href} href={link.href} className={cn(
                            'hover:text-blue-400 transition-colors',
                            pathname === link.href && 'text-blue-400 font-medium'
                        )}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="sm:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="sm:hidden fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-40"
                    >
                        <ul className="text-2xl space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} onClick={closeMobileMenu}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

