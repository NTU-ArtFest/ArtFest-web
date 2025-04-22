// export default function About() {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black text-bold text-2xl">
//         about
//       </div>
//     );
//   }

"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF,  OrbitControls } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef, useMemo} from 'react'
import Link from 'next/link'
import * as THREE from 'three'
import * as module from "./info";



// 標記組件
function Markers({ scene, onActiveBuilding }: { 
  scene: THREE.Scene; 
  onActiveBuilding: (info: String | null) => void; 
}) {
  const { camera } = useThree();
  const markersRef = useRef<THREE.Group[]>([]);

  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const texture = useMemo(() => textureLoader.load('/Footer.png'), []);   
  
  // 更新標記朝向相機
  useFrame(() => {
    markersRef.current.forEach(marker => {
      if (marker && marker.parent) {
        marker.lookAt(camera.position);
      }
    });
  });

  return (
    <>
      {module.buildings.map((building, index) => {
        const mesh = scene.getObjectByName(building.name);
        if (!mesh) return null;
        
        // 取得 mesh 的世界座標
        const pos = new THREE.Vector3();
        mesh.getWorldPosition(pos);
        
        // 應用自定義偏移或使用默認偏移
        const offset = building.offset || [100, 100, 100];
        const markerPos: [number, number, number] = [
          pos.x + offset[0], 
          pos.y + offset[1], 
          pos.z + offset[2]
        ];
        return (
          <group 
            key={building.name} 
            position={markerPos}
            ref={(el) => {
              if (el) markersRef.current[index] = el;
            }}
          >
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation();
                onActiveBuilding(building.name);
              }}
              // onPointerOut={(e) => {
              //   e.stopPropagation();
              //   onActiveBuilding(null);
              // }}
              onClick={(e) => {
                e.stopPropagation();
                onActiveBuilding(building.name);
              }}
              renderOrder={999}
            >
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial 
              map={texture}
              transparent={true}
              opacity={1} 
              depthTest={false} 
              side={THREE.DoubleSide}
            />
            </mesh>

          </group>
        );
      })}
    </>
  );
}


function ModelWithMarkers({ onActiveBuilding }: { 
  onActiveBuilding: (info: String | null) => void; 
}) {
  const { scene } = useGLTF('/ntu_map2.glb');
  
  return (
    <group>
      <primitive object={scene} />
      <Markers scene={scene as unknown as THREE.Scene} onActiveBuilding={onActiveBuilding} />
    </group>
  );
}

export default function ModelViewer() {
   
    const [activeBuildingInfo, setBuildingInfo] = useState<module.BuildingInfo | null>(null);
    const [activeBuildingname, setActiveBuildingname] = useState<String | null>(null);


    useEffect(() => {
        if (activeBuildingname) {
            const building = module.buildings.find(b => b.name === activeBuildingname);
            if (building) {
                setBuildingInfo(building.info);
            } else {
                setBuildingInfo(null);
            }
        } else {
            setBuildingInfo(null);
        }
    }, [activeBuildingname]);

  return (
    <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg relative">
      {/* 可以添加頂部導航或說明 */}
      <div className="absolute top-4 left-4 z-20">
        {activeBuildingInfo && (
            <div className="bg-white bg-opacity-90 p-4 rounded shadow-lg min-w-[220px] max-w-xs">
            <div className="font-bold text-lg mb-1">{activeBuildingInfo.name}</div>
            <div className="text-gray-700 mb-1">{activeBuildingInfo.desc}</div>
            {activeBuildingInfo.activities && activeBuildingInfo.activities.map((activity, index) => (
              <div key={index}>
                <div className="font-bold text-base mt-5">{activity.name}</div>
                <div className="text-gray-700 mb-1">{activity.intro}</div>
                <Link href={activity.url} className="text-blue-600 hover:text-blue-800 underline ">
                  點我帶你去玩
                </Link>
              </div>
            ))}
            </div>
        )}
      </div>
      
      <Canvas 
        camera={{ position: [151, 100, 100], fov: 75 }}
        onPointerMissed={() => {
          // 當點擊到空白處時，隱藏建築物資訊
          setActiveBuildingname(null);
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={4} />
        <Suspense fallback={null}>
          <ModelWithMarkers  onActiveBuilding={setActiveBuildingname}/>
        </Suspense>
        <OrbitControls
          target={[121, -30, -139]}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 3}
          enablePan={false}
          // 添加阻尼效果使相機移動更平滑
          enableDamping={true}
          dampingFactor={0.05}
          // 限制縮放範圍
          minDistance={150}
          maxDistance={300}
        />
        {/* 添加環境光和霧效增強視覺效果 */}
        <fog attach="fog" args={['#f0f0f0', 200, 700]} />
      </Canvas>
    </div>
  );
}
