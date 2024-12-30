"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SparklesText } from "@/components/ui/sparkles-text";

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

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <div
            className={`fixed top-0 w-full border-b border-gray-800 z-50 transition-all duration-200 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-sm shadow-lg"
                    : "bg-background/80 backdrop-blur-sm"
            }`}
        >
            <div className="flex h-14 items-center px-4 md:px-8 justify-between">
                <SparklesText
                    className="text-xl shadow-primary [text-shadow:_0_0_20px_var(--tw-shadow-color)]"
                    sparklesCount={5}
                    text="frazix.tk"
                />

                <div className="flex items-center gap-2">
                    <nav className="hidden md:flex gap-2">
                        <Button
                            variant="ghost"
                            className="px-3"
                            onClick={() => scrollToSection("home")}
                        >
                            Home
                        </Button>
                        <Button
                            variant="ghost"
                            className="px-3"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </Button>
                        <Button
                            variant="ghost"
                            className="px-3"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </Button>
                    </nav>

                    <ThemeToggle />

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <nav className="flex flex-col px-4 pb-4">
                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </Button>
                </nav>
            </div>
        </div>
    );
}
