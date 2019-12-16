import { Canvas } from "react-three-fiber"
import Cubes from "../components/react-three/Cubes/index"
import Lights from "../components/react-three/Lights/index"
import Environment from "../components/react-three/Environment/index"
import React from "react"
import Layout from "../components/layout"

export default function App() {
  return (
    <Layout>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </Layout>
  )
}
