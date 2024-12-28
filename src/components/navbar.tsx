"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className={`fixed top-0 w-full border-b border-gray-800 z-50 transition-all duration-200 ${
                isScrolled
                    ? "bg-[#0e1011]/95 backdrop-blur-sm shadow-lg"
                    : "bg-[#0e1011]/80 backdrop-blur-sm"
            }`}
        >
            <div className="flex h-14 items-center px-4 md:px-8 justify-between">
                <div className="text-xl font-bold text-white">frazix.tk</div>

                <button
                    className="md:hidden text-white p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                <nav className="hidden md:flex gap-2">
                    <Link href="#">
                        <Button variant="ghost" className="text-white px-3">
                            Home
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button variant="ghost" className="text-white px-3">
                            About
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button variant="ghost" className="text-white px-3">
                            Projects
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button variant="ghost" className="text-white px-3">
                            Contact
                        </Button>
                    </Link>
                </nav>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <nav className="flex flex-col px-4 pb-4">
                    <Link href="#">
                        <Button
                            variant="ghost"
                            className="text-white w-full justify-start"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button
                            variant="ghost"
                            className="text-white w-full justify-start"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button
                            variant="ghost"
                            className="text-white w-full justify-start"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Button>
                    </Link>
                    <Link href="#">
                        <Button
                            variant="ghost"
                            className="text-white w-full justify-start"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
