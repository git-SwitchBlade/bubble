import './App.css';
import React ,{ Suspense, useRef} from 'react';
import { Section } from './components/section'
// import { state } from './components/state.js'
import { Canvas } from '@react-three/fiber';
import { useCubeTexture, MeshDistortMaterial, Sphere, Html,Text } from '@react-three/drei'
import { createRef } from "react";

function Scene() {
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/cube/' })
  return (
    <>
    <mesh>
    <Sphere args={[1.3,64,64]}>
      <MeshDistortMaterial
        color={'#010101'}
        roughness={0.1}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
        envMap={envMap}
        />
        </Sphere>
    </mesh>
      
    </>
  )
}

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  position,
}) => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <Html fullscreen portal={domContent}>
          <div className='container'>
            <h1 className='title'>{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

function App() {
  const states = {
    sections: 5,
    pages: 5,
    zoom: 1,
    top: createRef(),
  };
  const domContent = useRef()
  return (
    <>
      <Canvas>
      <Suspense>
        <Scene />
      </Suspense>
      <ambientLight intensity={1} />
      <HTMLContent
            domContent={domContent}
            position={50}>
            <span>And yes</span>
            <span>we even got</span>
            <span>monochrome!</span>
          </HTMLContent>
    </Canvas>
    <div className='scrollArea'>
      <div style={{position: "sticky", top:0}} ref={domContent}></div>
      <div style={{height: `${states.sections * 100}vh`}}></div>
    </div>
    </>
    
  );
}

export default App;
