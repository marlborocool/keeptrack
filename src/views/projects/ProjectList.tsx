import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
interface ProjectListProps {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {

  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  }

  const cancelEdit = () => {
    setProjectBeingEdited({});
  }

  const items = projects.map(project => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm onCancel={cancelEdit} project={project}/>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));

  return (
    <div className="row">{items}</div>
  )
}

export default ProjectList;