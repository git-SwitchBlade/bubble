import './App.css';
import { Canvas } from '@react-three/fiber';
import { useCubeTexture, MeshDistortMaterial, Sphere, Html } from '@react-three/drei'

function Scene() {
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/cube/' })
  return (
    <>
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
    </>
  )
}

function App() {
  
  return (
    <Canvas>
      <Scene />
      <ambientLight intensity={1} />
      <Html>
        <h1 id="heading">Displacement</h1>
      </Html>
    </Canvas>
  );
}

export default App;
