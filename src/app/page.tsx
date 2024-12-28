import GradientCards from "@/components/gradient-cards";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <section
                className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white px-4 md:px-0 pt-16 md:pt-20"
                style={{ backgroundColor: "#0e1011" }}
            >
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:py-0">
                    <div className="justify-center items-center w-full md:w-3/4 space-y-4 md:space-y-6">
                        <h1 className="text-4xl md:text-7xl font-bold pb-4 md:pb-7 jetbrainsMono text-center md:text-left fade-in">
                            Frazix
                        </h1>
                        <h3 className="text-gray-400 jetbrainsMono text-sm md:text-base text-center md:text-left fade-in delay-200">
                            ( Developer / Designer / Gamer)
                        </h3>
                        <p className="jetbrainsMono text-sm md:text-base text-center md:text-left fade-in delay-400">
                            I&apos;m{" "}
                            <span className="text-purple-700">Frazix</span>, a
                            <span className="dev"> Full Stack Developer</span>{" "}
                            from
                            <span className="text-green-700"> Bangladesh</span>.
                            I build
                            <span className="web">
                                {" "}
                                interactive websites
                            </span>{" "}
                            and have a passion for turning ideas into{" "}
                            <span className="prodeuct">
                                {" "}
                                beautiful products
                            </span>
                            .
                        </p>
                        <div className="space-y-2 md:space-y-3 fade-in delay-600">
                            <h3 className="skill jetbrainsMono text-sm md:text-base text-center md:text-left">
                                🔥 Expert in <span className="html">HTML</span>,
                                <span className="css">CSS</span> and{" "}
                                <span className="js">Javascript</span>
                            </h3>
                            <h3 className="skill jetbrainsMono text-sm md:text-base text-center md:text-left">
                                🚀 Mediocre in ReactJS And NextJS
                            </h3>
                            <h3 className="skill jetbrainsMono text-sm md:text-base text-center md:text-left">
                                📖 Skills - Tailwind, Javascript, NodeJS,
                                Python, Shadcn, daisyUI, Figma
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:mt-0 fade-in delay-400">
                    <GradientCards />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center h-screen">
                <h1>Hello</h1>
            </section>
        </>
    );
}
