import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: "Learning Linux & Virtual Machines",
      description: "Setting up my first virtual machine environment to learn Linux commands and basic security tools. Documenting my learning journey and basic security concepts.",
      technologies: ["VirtualBox", "Ubuntu", "Basic Commands", "Security Tools"],
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    },
    {
      title: "Simple Password Checker",
      description: "A beginner Python project where I'm learning about password security. Checks password strength and basic security requirements.",
      technologies: ["Python", "Basic Security", "Input Validation"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      Url: "https://passwordstrengthchecker.com/"
    },
    {
      title: "Network Learning Projects",
      description: "Collection of small projects as I learn about networks. Includes basic network scanning and understanding network security fundamentals.",
      technologies: ["Networking", "Python", "Security Basics"],
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Learning Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
