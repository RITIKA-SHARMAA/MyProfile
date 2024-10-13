import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ( {scaleFactor}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
      <mesh>
          <hemisphereLight intensity={6} groundColor="black"/>
          <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
          />
          <pointLight intensity={1}/>

          <primitive
              object={computer.scene}
              scale={scaleFactor} // Adjusted based on screen size
              position={scaleFactor < 0.5 ? [1, -2, -0.3] : [0, -4.25, -1.5]} // Adjust position accordingly
              rotation={scaleFactor < 0.5 ? [-0.01, 0.05, -0.1] : [-0.01, 0, -0.1]} // Minor Y-axis adjustment for small screens
          />
      </mesh>
  )
}

const ComputersCanvas = () => {
    const [scaleFactor, setScaleFactor] = useState(0.75); // Default scale factor


    useEffect(() => {
        const updateScreenSize = () => {
            const screenWidth = window.innerWidth;

            // Adjust scale factor dynamically based on screen width
            if (screenWidth <= 500) {
                setScaleFactor(0.4); // Increased size for very small screens
            } else if (screenWidth <= 768) {
                setScaleFactor(0.7); // Increased size for medium screens (tablets)
            } else {
                setScaleFactor(1); // Increased size for larger screens (desktops)
            }
        };


        updateScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", updateScreenSize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);




    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 20, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers scaleFactor={scaleFactor} /> {/* Pass scaleFactor prop */}
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default ComputersCanvas;