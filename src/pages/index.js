import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

const IndexPage = ({ data }) => {
  const projects = data.githubData.data.viewer.repositories.nodes

  return (
    <Layout>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    githubData {
      data {
        viewer {
          repositories {
            nodes {
              name
              description
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
