"use client";

import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";

function Model() {
  const ref: { current: any | null } = useRef();
  useFrame(() => {
    ref.current.rotation.y = MathUtils.lerp(
      ref.current.rotation.y,
      ref.current.rotation.y + 0.08,
      0.1
    );
    ref.current.rotation.x = MathUtils.lerp(
      ref.current.rotation.x,
      ref.current.rotation.x + 0.08,
      0.1
    );
  });
  const gltf = useGLTF("/webgl/nullptrs.gltf", true);
  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} dispose={null} scale={1} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas color={"#fafafa"} camera={{ position: [0, 0, 8], aspect: 1}}>
      <directionalLight
        castShadow
        position={[0, 12, 12]}
        intensity={100}
        color={"#fafafa"}
      />
      <Model />
    </Canvas>
  );
}
