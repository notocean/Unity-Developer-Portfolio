import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-700 transition border-2 border-cyan-800 hover:border-cyan-300"
    >
      <div className="aspect-video relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover p-1 md:p-2"
        />
      </div>
      <div className="p-4">
        <h3 className="text-cyan-200 font-semibold text-sm md:text-md lg:text-lg xl:text-xl">{project.title}</h3>
        <p className="text-gray-400 text-sm my-2">{project.mem} thành viên</p>
        <p className="text-justify text-gray-300 text-sm lg:text-sm xl:text-md">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
