"use client";

import { Github, ExternalLink, ImageIcon } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useProjectScreenshot } from "@/hooks/useProjectScreenshot";
import { useState } from "react";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);
    
    // Use the hook to get automatic screenshots
    const { screenshotUrl, isLoading, error } = useProjectScreenshot(
        project.demoLink,
        {
            width: 1200,
            height: 800,
            quality: 85,
            enabled: !project.image && !imageError // Only fetch if no manual image is provided
        }
    );

    // Determine which image to use
    const imageUrl = project.image || screenshotUrl || '/project/placeholder.svg';
    const showPlaceholder = isLoading || error || imageError;

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
                <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-muted">
                    {showPlaceholder ? (
                        <div className="flex items-center justify-center w-full h-full bg-muted">
                            {isLoading ? (
                                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                    <span className="text-sm">Generating screenshot...</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                    <ImageIcon className="h-12 w-12" />
                                    <span className="text-sm">Preview unavailable</span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Image
                            src={imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover shadow-xl"
                            quality={85}
                            priority={Number(project.id) <= 3}
                            onError={() => setImageError(true)}
                            onLoad={() => setImageError(false)}
                        />
                    )}
                </div>
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