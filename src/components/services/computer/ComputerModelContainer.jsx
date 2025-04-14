import { Canvas } from "@react-three/fiber";
import { ComputerModel } from "./ComputerModel";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="night" intensity={0.5}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
