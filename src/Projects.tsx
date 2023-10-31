import React from "react";

import ProjectItem from "./ProjectItem";

import { projects } from "./static/projectList";

const Projects: React.FunctionComponent = () => {
  const projectItems = projects.map((project, id) => (
    <ProjectItem key={id} project={project} />
  ));

  return (
    <div>
      <h1>Projects</h1>
      {projectItems}
    </div>
  );
};

export default Projects;
