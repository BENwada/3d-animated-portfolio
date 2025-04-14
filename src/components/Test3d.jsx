import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas>
        <mesh>
          {/* <meshStandardMaterial /> */}
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#db8b9b"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
