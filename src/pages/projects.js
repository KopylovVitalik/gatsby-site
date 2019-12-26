import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { apply as applyThree, Canvas, useRender, useThree } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import * as THREE from 'three'
import { apply as applySpring, useSpring, a, interpolate } from 'react-spring/three'

import Image from "../components/image"
import SEO from "../components/seo"

function ProjectImage({ url, opacity=1, scale=1, ...props }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const { factor } = useSpring({ factor: hovered ? 1.1 : 1 })
  console.log(texture, url)
  return (
    <Canvas>
      <a.mesh {...props} onHover={hover} scale={factor.interpolate(f => [scale * f, scale * f, 1])}>
        <planeBufferGeometry attach="geometry" args={[15, 15]} />
        <meshLambertMaterial attach="material" opacity={opacity}>
          <primitive attach="map" object={texture} />
        </meshLambertMaterial>
      </a.mesh>
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
                      <ProjectImage url={project.node.image.fluid.src} />
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
