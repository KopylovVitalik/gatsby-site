import React, { useMemo } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas, Dom, useLoader, useFrame, onUpdate } from "react-three-fiber"
import { TextureLoader, LinearFilter, THREE } from "three"

import Image from "../components/image"
import SEO from "../components/seo"

const ProjectImage = props => {
  const texture = useMemo(() => new THREE.TextureLoader().load(props.src), [
    props.src,
  ])

  return (
    <Canvas>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material">
          <texture attach="map" image={texture} onUpdate={self => texture && (self.needsUpdate = true)} />
        </meshBasicMaterial>
      </mesh>
    </Canvas>
  )
}

const ContentfulProject = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              {data.allContentfulProject.edges.map((project, i) => {
                return (
                  <div className="column" key={i}>
                    <div className="card-bg">
                      {/* <img src={project.node.image.fluid.src} /> */}
                      <ProjectImage src={project.node.image.fluid.src} />
                    </div>
                    <div className="card is-rounded">
                      <header className="card-header">
                        <h3 className="is-size-4 card-header-title">
                          {project.node.name}
                        </h3>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          <Link
                            className="button is-info is-outlined"
                            to={`/projects/${project.node.slug}`}
                          >
                            About project
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          tag
          slug
          name
          image {
            fluid {
              src
            }
          }
          childContentfulProjectDescriptionRichTextNode {
            content {
              nodeType
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

export default ContentfulProject
