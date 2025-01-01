"use client";

import { Github, ExternalLink } from "lucide-react";
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
    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <div className="w-full max-w-7xl px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    My Projects
                </h2>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex flex-col w-full">
            <CardHeader>
                <CardTitle
                    className="text-xl text-secondary-foreground truncate"
                    title={project.title}
                >
                    {project.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={160}
                    className="hidden md:block w-full h-40 object-cover rounded-md mb-4 shadow-xl"
                    quality={85}
                    priority={Number(project.id) === 1}
                />
                <p className="text-sm text-secondary-foreground">
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
