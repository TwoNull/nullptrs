"use client";

import Image from "next/image"
import { useRef, useState, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import WebGL from "three/addons/capabilities/WebGL.js";

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
    const [webglEnabled, setWebglEnabled] = useState(true)
 
    useEffect(() => {
        if (!WebGL.isWebGLAvailable()) {
            setWebglEnabled(false)
        }
    }, [])

    if (webglEnabled) {
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
    return (
        <div className="relative w-[100%] h-[100%]">
            <Image
                src="/webgl/placeholder.png"
                alt=""
                layout="fill"
                objectFit="cover"
            />
            <p className="absolute text-neutral-700 text-xs text-center bottom-4 z-1 p-4">
                This is a placeholder image as <a className="font-medium" href="https://support.biodigital.com/hc/en-us/articles/218322977-How-to-turn-on-WebGL-in-my-browser" target="_blank" rel="noopener noreferrer">your browser does not support WebGL.</a>
            </p>
        </div>
    )
}
