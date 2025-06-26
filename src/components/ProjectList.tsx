"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

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