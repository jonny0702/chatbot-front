import * as THREE from "three";
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";
import { Model } from "./Scene";

import "../styles/VoxelModel.sass";

const Controller = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} enableDamping autoRotate />;
};

export const VoxelModel = () => {
  const voxelRefContainer = useRef<any>();
  const voxelObj = useRef<any>();
  const [aspectWidth, setAspectWidth] = useState(null);
  const [aspectHeight, setAspectHeight] = useState(null);
  const [scale, setScale] = useState<number>(0);
  const [modelScale, setModelScale] = useState<any>([9, 9, 9]);

  const [target] = useState<any>(new THREE.Vector3(-0.5, 1, 0));

  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.1 * Math.PI),
      30,
      200 * Math.cos(0.2 * Math.PI)
    )
  );

  function easeOutCirc(x: any) {
    return Math.sqrt(1 - (x - 1) ** 4);
  }

  useEffect(() => {
    const sh = voxelRefContainer.current.clientHeight;
    const sw = voxelRefContainer.current.clientWidth;
    const scale = sh * 0.05 + 4.8;
    setScale(scale);
    setAspectWidth(sw);
    setAspectHeight(sh);
  }, []);

  useEffect(() => {
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      1,
      5000
    );
    let frame = 0;
    let req: any = null;

    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;
      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        if (camera !== null) {
          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        }
        voxelObj.current.rotation.y = -rotSpeed;
      }
      return () => {
        cancelAnimationFrame(req);
      };
    };
  }, []);

  return (
    <>
      <div className="Model_container" ref={voxelRefContainer}>
        <Canvas
          orthographic
          camera={{
            left: -scale,
            right: scale,
            top: scale,
            bottom: -scale,
            position: initialCameraPosition,
            near: 0.1,
            far: 5000,
          }}
        >
          <Suspense fallback={<Loader />}>
            <mesh ref={voxelObj}>
              <Model position={[-0.5, -40, 0]} scale={modelScale} />
            </mesh>
            <ambientLight intensity={0.4} />
            <pointLight
              position={[5, 10, 2]}
              color={"#e991ff"}
              intensity={0.8}
            />
            <Controller />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
