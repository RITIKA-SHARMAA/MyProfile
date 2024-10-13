import React, { useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);

    // Update position when hovered
    useFrame(() => {
        if (hovered) {
            setPosition([Math.sin(Date.now() * 0.001) * 0.4, Math.cos(Date.now() * 0.001) * 0.2, 0]);
        } else {
            setPosition([0, 0, 0]);
        }
    });

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 0, 0.05]} />

            <mesh
                castShadow
                receiveShadow
                scale={2.75}
                position={position}
                onPointerOver={() => setHovered(true)}    // When hovering starts
                onPointerOut={() => setHovered(false)}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
