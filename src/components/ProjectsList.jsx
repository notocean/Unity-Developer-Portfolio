import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsList() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
      <h2 className="text-cyan-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 lg:mb-6 xl:mb-8">Dự án</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
