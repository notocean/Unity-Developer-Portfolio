import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}
