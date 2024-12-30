"use client";

import { useState, useRef, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ScrollableProjectList() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const updateArrows = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft <
                    container.scrollWidth - container.clientWidth
            );
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", updateArrows);
            updateArrows();
        }
        return () => container?.removeEventListener("scroll", updateArrows);
    }, []);

    const bind = useDrag(
        ({ down, movement: [mx] }) => {
            const container = scrollContainerRef.current;
            if (container) {
                if (down) {
                    setIsDragging(true);
                    container.scrollLeft -= mx;
                } else {
                    setIsDragging(false);
                }
            }
        },
        { axis: "x" }
    );

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === "left" ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <div className="w-full max-w-7xl px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    My Projects
                </h2>
                <div className="relative">
                    <div
                        {...bind()}
                        ref={scrollContainerRef}
                        className={`flex flex-col md:flex-row overflow-y-auto md:overflow-x-auto space-y-4 md:space-y-0 md:space-x-4 scrollbar-hide scroll-smooth pb-4 md:cursor-grab ${
                            isDragging ? "cursor-grabbing" : ""
                        }`}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            userSelect: "none",
                            scrollSnapType: "x mandatory",
                        }}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isDragging={isDragging}
                            />
                        ))}
                    </div>
                    {showLeftArrow && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden md:flex absolute left-0 top-[calc(50%-32px)] transform -translate-y-1/2 bg-background/80 backdrop-blur-sm shadow-md items-center justify-center w-8 h-8"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}
                    {showRightArrow && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden md:flex absolute right-0 top-[calc(50%-32px)] transform -translate-y-1/2 bg-background/80 backdrop-blur-sm shadow-md items-center justify-center w-8 h-8"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({
    project,
    isDragging,
}: {
    project: Project;
    isDragging: boolean;
}) {
    return (
        <Card
            className={`flex flex-col shrink-0 scroll-snap-align-start ${
                isDragging ? "pointer-events-none" : ""
            }
            w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]`}
        >
            <CardHeader>
                <CardTitle className="text-xl truncate" title={project.title}>
                    {project.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={160}
                    className="hidden md:block w-full h-40 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-muted-foreground">
                    {project.description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
