import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function GradientCards() {
    return (
        <div className="p-8 flex items-center">
            <div className="w-full max-w-[580px] mx-auto grid md:grid-cols-2 gap-6 justify-items-center">
                {/* Instagram Card */}
                <Link
                    href="https://instagram.com/irfan.nig"
                    target="_blank"
                    className="group"
                >
                    <div className="relative w-[260px] h-[260px] group perspective">
                        <div className="absolute inset-0 rounded-[40px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(3deg)_translateZ(10px)_scale(1.3)]">
                            <Image
                                src="/instagram.png"
                                alt="Instagram"
                                fill
                                sizes="(max-width: 768px) 100vw, 260px"
                                quality={60}
                                className="blur-[50px] opacity-40"
                            />
                        </div>
                        <Card className="relative bg-card border-gray-800 rounded-[40px] overflow-hidden w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(5deg)_translateZ(10px)_translateY(-10px)_scale(1.11)]">
                            <CardContent className="p-2">
                                <div className="relative h-32 rounded-[25px] m-3 overflow-hidden">
                                    <Image
                                        src="/instagram.png"
                                        alt="Instagram"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 260px"
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            className="text-white scale-[2] opacity-50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <h3 className="text-xl font-extrabold text-secondary-foreground mb-2">
                                        Instagram 📸
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        Explore my latest photos and stories.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                {/* Messenger Card */}
                <Link
                    href="https://m.me/irfan.nig"
                    target="_blank"
                    className="group"
                >
                    <div className="relative w-[260px] h-[260px] group perspective">
                        <div className="absolute inset-0 rounded-[40px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(3deg)_translateZ(10px)_scale(1.3)]">
                            <Image
                                src="/messenger.png"
                                alt="Messenger"
                                fill
                                sizes="(max-width: 768px) 100vw, 260px"
                                quality={60}
                                className="blur-[50px] opacity-40"
                            />
                        </div>
                        <Card className="relative bg-card border-gray-800 rounded-[40px] overflow-hidden w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(-5deg)_translateZ(10px)_translateY(-10px)_scale(1.11)]">
                            <CardContent className="p-2">
                                <div className="relative h-32 rounded-[25px] m-3 overflow-hidden">
                                    <Image
                                        src="/messenger.png"
                                        alt="Messenger"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 260px"
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            className="text-white scale-[2] opacity-50"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17c.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06c.9.27 1.9.4 2.9.4c5.64 0 10-4.13 10-9.7S17.64 2 12 2m6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.33-.97-.17-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.33.97.17.68.63"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <h3 className="text-xl font-extrabold text-secondary-foreground mb-2">
                                        Messenger 💬
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        Connect with me instantly for exciting
                                        projects.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                {/* Google Card */}
                <Link
                    href="mailto:frazixgaming22@gmail.com"
                    target="_blank"
                    className="group"
                >
                    <div className="relative w-[260px] h-[260px] group perspective">
                        <div className="absolute inset-0 rounded-[40px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(3deg)_translateZ(10px)_scale(1.3)]">
                            <Image
                                src="/google.png"
                                alt="Google"
                                fill
                                sizes="(max-width: 768px) 100vw, 260px"
                                quality={60}
                                className="blur-[50px] opacity-40"
                            />
                        </div>
                        <Card className="relative bg-card border-gray-800 rounded-[40px] overflow-hidden w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(5deg)_translateZ(10px)_translateY(-10px)_scale(1.11)]">
                            <CardContent className="p-2">
                                <div className="relative h-32 rounded-[25px] m-3 overflow-hidden">
                                    <Image
                                        src="/google.png"
                                        alt="Google"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 260px"
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            className="text-white scale-[2] opacity-50"
                                        >
                                            <g fill="none">
                                                <g clipPath="url(#akarIconsGoogleContainedFill0)">
                                                    <path
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0m.14 19.018c-3.868 0-7-3.14-7-7.018s3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585q.134.704.135 1.474c0 4.01-2.677 6.86-6.72 6.86"
                                                        clipRule="evenodd"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="akarIconsGoogleContainedFill0">
                                                        <path
                                                            fill="#fff"
                                                            d="M0 0h24v24H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <h3 className="text-xl font-extrabold text-secondary-foreground mb-2">
                                        Email 📧
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        Reach out to me via email for inquiries.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                {/* Custom Card */}
                <Link
                    href="https://www.youtube.com/@CWfrazix"
                    target="_blank"
                    className="group"
                >
                    <div className="relative w-[260px] h-[260px] group perspective">
                        <div className="absolute inset-0 rounded-[40px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(3deg)_translateZ(10px)_scale(1.3)]">
                            <Image
                                src="/youtube.png"
                                alt="Youtube"
                                fill
                                sizes="(max-width: 768px) 100vw, 260px"
                                quality={60}
                                className="blur-[50px] opacity-40"
                            />
                        </div>
                        <Card className="relative bg-card border-gray-800 rounded-[40px] overflow-hidden w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotate(-5deg)_translateZ(10px)_translateY(-10px)_scale(1.11)]">
                            <CardContent className="p-2">
                                <div className="relative h-32 rounded-[25px] m-3 overflow-hidden">
                                    <Image
                                        src="/youtube.png"
                                        alt="Youtube"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 260px"
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 128 128"
                                            className="text-white scale-[2] opacity-50"
                                        >
                                            <path
                                                fill="#FFBCD8"
                                                d="M61.41 14.58s1.8-8.73 3.72-9.24c1.93-.51 10.34 1.31 14.47 3.5c5.77 3.05 9.33 8.14 10.18 14.34c.9 6.64-1.67 12.2-1.67 12.2s6.03-3.59 13.22-2.95s12.58 4.11 14.64 6.68c2.05 2.57 4.88 5.39 4.49 6.68c-.39 1.28-7.83 5.91-7.45 7.06c.39 1.16 9.12.51 10.01 2.05c.9 1.54 2.7 11.43-3.85 18.49s-12.97 8.09-12.97 8.09s6.48 6.09 6.82 14.41c.28 6.81-1.55 10.88-5.27 12.3c-3.72 1.41-10.66-3.08-10.66-3.08s6.03 10.78 3.34 12.45c-2.7 1.67-4.03-1.31-5.14-1.03c-.91.23.64 2.44-1.41 4.37s-10.91 3.21-18.74-1.03s-10.27-10.91-10.27-10.91s-2.11 8.1-11.74 12.21s-16.64-.92-17.92-1.69s-.77-6.93-.51-7.96s1.41-3.47.64-3.98s-3.34 3.08-5.14 4.24s-4.11 2.44-6.42.51s-7.83-8.35-6.42-16.95s6.29-13.48 6.29-13.48s-10.27-.9-15.28-9.63s-4.35-17.46-3.45-18.62s8.6-1.28 8.6-1.28s-7.32-4.24-6.55-7.57c.77-3.34 4.49-.77 5.52-1.8s-2.62-4.93.26-6.97c2.16-1.53 5.96-4.38 13.22-4.97c7.65-.63 12.97 3.21 12.97 3.21s-3.27-5.53-1.92-11.81c1.07-4.97 4.75-9.24 8.21-11.68s8.09-4.37 10.14-4.37s6.04 8.21 6.04 8.21"
                                            />
                                            <path
                                                fill="#FCA2C8"
                                                d="M79.68 46.37c1.38 1.59 4.29-.58 6.2-3.82c1.46-2.47 3.13-6.69 2.54-7.21s-5.14 3.02-6.68 4.77c-1.53 1.76-3.15 5-2.06 6.26m7.74 30.96c-.37 2.36 5.51 4.03 8.64 4.4c2.97.35 10.13.75 10.15-.26c.03-1.01-5.65-4.94-10.15-5.89c-3.95-.83-8.32-.26-8.64 1.75M65.26 92.39c-2.01-.12-2.76 4.56-2.39 8.16s1.14 8.3 2 8.39s2.35-5.11 2.72-9.98c.23-3.06-.53-6.46-2.33-6.57m-41.6-10.53c.14.67 7.08.67 10.79-.39s6.04-3.23 5.62-4.82s-5.08-1.14-7.69-.16c-3.39 1.27-8.85 4.71-8.72 5.37M39.33 34.6c-.79.58 1.75 5.41 3.45 7.48s4.35 4.35 5.67 3.76c1.33-.58.11-4.77-2.81-7.58c-1.41-1.36-5.51-4.24-6.31-3.66"
                                            />
                                            <path
                                                fill="#BF0477"
                                                d="M78.4 45.99c-1.82-.94-7.53 6.76-14.19 6.49s-13.52-7.33-14.73-6.25s3.65 8.88 1.11 16.5c-2.32 6.97-10.46 11.61-9.58 13.33c.82 1.61 8.71-1.73 15.27 1.58c7.65 3.87 6.19 13.75 8.88 13.82s1.5-8.62 8.14-12.81c6.39-4.04 13.21-.9 13.79-2.96c.67-2.42-8-5.41-9.81-13.68c-2.11-9.55 3.01-15.05 1.12-16.02"
                                            />
                                            <path
                                                fill="#F2A159"
                                                d="M59.73 58.83c-1.37.46-4.92 8.59-4.36 9.59s7.85 7.29 9.78 7.29s8.28-6.1 8.34-7.04c.06-.93-3.11-9.22-4.17-9.84s-8.28-.44-9.59 0"
                                            />
                                            <path
                                                fill="#FDD0B1"
                                                d="M68.8 54.08c-1.57 1.46-1.72 4.26.18 5.83c2.03 1.67 4.79 1.04 5.96-.59c1.03-1.42 1.13-3.61-.59-5.15c-1.06-.95-3.56-1.94-5.55-.09m2.48 15.63c-.27 2.62 1.94 4.61 4.15 4.56c2.89-.06 3.96-2.47 3.93-4.11c-.05-2.21-1.58-4.11-4.02-4.02s-3.83 1.36-4.06 3.57m-6.23 4.69c-1.94.05-3.97 1.35-3.93 4.2c.04 2.62 2.08 3.79 4.11 3.79s3.7-1.45 3.7-3.93s-1.8-4.11-3.88-4.06m-12.37-8.44c-2.89 0-4.11 1.99-4.11 4.25s1.67 3.9 4.34 3.79c2.3-.09 3.73-2.04 3.52-4.2c-.23-2.35-1.31-3.84-3.75-3.84m1.98-12.42c-1.66 1.61-1.72 4.38.05 5.83c1.38 1.14 3.84 1.54 5.46-.14c1.63-1.67 1.35-4.06-.09-5.46c-1.44-1.41-3.79-1.81-5.42-.23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <h3 className="text-xl font-extrabold text-secondary-foreground mb-2">
                                        Youtube 📺
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        Visit my Youtube channel to watch my
                                        videos.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Link>
            </div>
        </div>
    );
}
