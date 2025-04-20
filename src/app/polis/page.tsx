'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const gltf = useGLTF('/ntu_map2.glb'); // 路徑對應 public 資料夾
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg">
      <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={4} />
        {/* <Environment preset="sunset" background /> */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
            target={[121, -30, -139]}
            minPolarAngle={-Math.PI / 2} 
            maxPolarAngle={Math.PI / 3} 
            enablePan={false} 
        />
      </Canvas>
    </div>
  );
}
