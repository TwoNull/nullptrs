"use client";

import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";

function Model() {
  const ref: { current: any | null } = useRef();
  useFrame((state) => {
    ref.current.rotation.y = MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / -5,
      0.1
    );
    ref.current.rotation.x = MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 5,
      0.1
    );
  });
  const gltf = useGLTF("/webgl/static.gltf", true);
  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} dispose={null} scale={1} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{position: "absolute", zIndex: "0", width: "100vw", height: "100vh"}} color={"#e5e5e5"} camera={{ position: [0, 0, 20], near: 5, far: 30 }}>
      <directionalLight
        castShadow
        position={[0, 12, 12]}
        intensity={1}
        color={"#e5e5e5"}
      />
      <ambientLight intensity={0.4} color={"#e5e5e5"} />
      <Model />
    </Canvas>
  );
}
