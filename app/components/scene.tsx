"use client";

import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model() {
    const ref: { current: any | null } = useRef();
    useFrame((state, delta) => {
        const rotationSpeed = 0.5;
        const rotation = rotationSpeed * delta;

        ref.current.rotation.y = ref.current.rotation.y + rotation
        ref.current.rotation.x = ref.current.rotation.x + rotation
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
