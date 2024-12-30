export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    demoLink: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Ferrite Transformer Turns Calculator",
        description:
            "A simple calculator to calculate the number of turns for a ferrite transformer",
        image: "/project/1.png",
        githubLink:
            "https://github.com/Frazix12/Ferrite-Transformer-Turns-Calculation",
        demoLink:
            "https://frazix.is-a.dev/Ferrite-Transformer-Turns-Calculation/",
    },
    {
        id: "2",
        title: "Aesthetic Login Page",
        description: "Aesthetic login page with a blur effect background",
        image: "/project/2.png",
        githubLink: "https://github.com/Frazix12/aesthetic-login",
        demoLink: "https://aesthetic-login.vercel.app/",
    },
    {
        id: "3",
        title: "Mesh Blur With Tilt.js",
        description: "A mesh blur effect with tilt.js",
        image: "/project/3.png",
        githubLink: "https://github.com/Frazix12/Mesh-Blur-With-Tilt.js",
        demoLink: "https://mesh-blur-with-tilt.vercel.app/",
    },
    {
        id: "4",
        title: "OP Clock Website",
        description: "OP Clock Website",
        image: "/project/4.png",
        githubLink: "https://github.com/Frazix12/op-clock-website",
        demoLink: "https://frazix.is-a.dev/op-clock-website/",
    },
    {
        id: "5",
        title: "Phone UI Website",
        description: "Phone UI Website",
        image: "/project/5.png",
        githubLink: "https://github.com/Frazix12/Phone-UI-Website",
        demoLink: "https://frazix.is-a.dev/Phone-UI-Website/",
    },
];
