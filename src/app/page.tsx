import GradientCards from "@/components/gradient-cards";
import { Navbar } from "@/components/navbar";
import ScrollableProjectList from "@/components/ScrollableProjectList";
export default function Home() {
    return (
        <>
            <Navbar />
            <section
                id="home"
                className="flex flex-col md:flex-row items-center justify-center min-h-screen text-secondary-foreground px-4 md:px-0 pt-16 md:pt-20 bg-background"
            >
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:py-0">
                    <div className="justify-center items-center w-full md:w-3/4 space-y-4 md:space-y-6">
                        <h1 className="text-accent text-4xl md:text-7xl font-bold pb-4 md:pb-7 jetbrainsMono text-center md:text-left fade-in">
                            Irfan
                        </h1>
                        <h3 className="text-gray-400 jetbrainsMono text-sm md:text-base text-center md:text-left fade-in delay-200">
                            ( Developer / Designer / Gamer)
                        </h3>
                        <p className="jetbrainsMono text-sm md:text-base text-center md:text-left fade-in delay-400">
                            I&apos;m{" "}
                            <span className="text-purple-500 shadow-purple-500 [text-shadow:_0_0_17px_var(--tw-shadow-color)]">
                                Irfan
                            </span>
                            , a
                            <span className="text-blue-300 shadow-blue-300 [text-shadow:_0_0_17px_var(--tw-shadow-color)]">
                                {" "}
                                Full Stack Developer
                            </span>{" "}
                            from
                            <span className="text-green-700 shadow-green-700 [text-shadow:_0_0_17px_var(--tw-shadow-color)]">
                                {" "}
                                Bangladesh
                            </span>
                            . I build
                            <span className="text-orange-500 shadow-orange-500 [text-shadow:_0_0_17px_var(--tw-shadow-color)]">
                                {" "}
                                interactive websites
                            </span>{" "}
                            and have a passion for turning ideas into{" "}
                            <span className="text-blue-500 shadow-blue-500 [text-shadow:_0_0_17px_var(--tw-shadow-color)]">
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
            <section
                id="projects"
                className="flex flex-col items-center justify-center min-h-screen bg-background"
            >
                <ScrollableProjectList />
            </section>
        </>
    );
}
