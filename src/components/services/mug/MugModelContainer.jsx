import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { MugModel } from "./MugModel";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="night" intensity={1}>
          <MugModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[0, -1, 8]} zoom={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
