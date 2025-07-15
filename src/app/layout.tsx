import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
    Geist,
    Geist_Mono,
    Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
    variable: "--font-jakarta-sans",
    subsets: ["latin"],
    display: "swap",
});


export const metadata: Metadata = {
    title: "FRAZIX",
    description: "Frazix's portfolio",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${jakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                    disableTransitionOnChange
                >
                    {children}
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
