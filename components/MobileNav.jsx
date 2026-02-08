"use client";

import { useState } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Where", href: "/where" },
    { name: "Contact", href: "mailto:augustineosezua1@gmail.com" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                aria-label="Open navigation"
                className="fixed top-4 right-4 z-50 p-2 lg:hidden"
                onClick={() => setOpen(true)}
            >
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            {/* Overlay Navigation */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />

            {/* Slider Panel */}
            <nav
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Mobile Navigation"
            >
                <button
                    aria-label="Close navigation"
                    className="absolute top-4 right-4 p-2"
                    onClick={() => setOpen(false)}
                >
                    <span className="block w-6 h-0.5 bg-black rotate-45 absolute"></span>
                    <span className="block w-6 h-0.5 bg-black -rotate-45"></span>
                </button>
                <ul className="mt-16 space-y-6 px-8">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block text-lg font-semibold text-gray-800 hover:text-blue-600"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
