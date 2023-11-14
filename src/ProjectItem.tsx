import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import React from "react";

import { Project } from "./static/projectList";

import "./ProjectItem.css";

interface ProjectItemProps {
  project: Project;
}
const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({
  project,
}) => {
  const { title, description, conceptsExplored, techUsed, repoName } = project;

  const demoURL = `https://trpglobokar.github.io/${repoName}`;
  const githubURL = `https://github.com/trpglobokar/${repoName}`;

  return (
    <div className="ProjectWrapper">
      <h2 className="Title">{title}</h2>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
          <div
            className="ImageWrapper"
            style={{
              backgroundImage: `url(${require(`./static/${repoName}.jpg`)})`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <p className="DescriptionWrapper">
            <b>Description:</b> {description}
          </p>
          <div className="ExtraInfoWrapper">
            <div>
              <b>Concepts Explored:</b> {conceptsExplored}
            </div>
            <div>
              <b>Tech Used:</b> {techUsed}
            </div>
          </div>
          <div className="DemoCodeWrapper">
            <Link href={demoURL} target="_blank" rel="noopener">
              <Button variant="outlined" color="primary">
                Live Example
              </Button>
            </Link>
            <Link href={githubURL} target="_blank" rel="noopener">
              <img
                src={require("./static/GitHub-Mark-64px.png")}
                style={{ height: 32, width: 32 }}
                alt="github logo"
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectItem;
