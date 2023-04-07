import * as THREE from 'three';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";

import "../styles/VoxelModel.sass";

const Controller = () => {
  return <OrbitControls enableDamping />;
};



export const VoxelModel = () => {
  
  return (
    <>
      <div className="Model_container">
        <Suspense fallback={null}>
          <Canvas>
            <perspectiveCamera castShadow/>
            <ambientLight  intensity={.4}/>
            <pointLight position={[5, 1, 1]} />
            <mesh>
              <Model position={[0, -10, -20]} />
            </mesh>
            <Controller />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};
