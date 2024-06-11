import React from "react"
import styled from "styled-components"

const ProjectCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
`

const Project = ({ name, description, url }) => (
  <ProjectCard>
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">
      View on GitHub
    </a>
  </ProjectCard>
)

export default Project
