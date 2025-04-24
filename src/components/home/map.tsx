"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF,  OrbitControls } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef, useMemo} from 'react'
import Link from 'next/link'
import * as THREE from 'three'
import * as module from "./info";


function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function Markers({ scene, onActiveBuilding }: { 
  scene: THREE.Scene; 
  onActiveBuilding: (info: string | null) => void; 
}) {
  const { camera } = useThree();
  const markersRef = useRef<THREE.Group[]>([]);

  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const texture = useMemo(() => textureLoader.load('/Footer.png'), []);   
  
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

        const pos = new THREE.Vector3();
        mesh.getWorldPosition(pos);
        
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

              onClick={(e) => {
                e.stopPropagation();
                onActiveBuilding(building.name);
              }}
              renderOrder={999}
            >
            <planeGeometry args={[10, 10]} />
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
  onActiveBuilding: (info: string | null) => void; 
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
    const [activeBuildingname, setActiveBuildingname] = useState<string | null>(null);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    const { width } = useWindowSize();
  
    // Calculate distances based on screen width
    const minDistance = width < 768 ? 180 : 120; 
    const maxDistance = width < 768 ? 350 : 230;

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
    <div className="w-full h-screen rounded-lg relative h-[45vh] md:h-[75vh]">
      <div className="absolute top-6 left-6 z-20 shadow-lg">
        {activeBuildingInfo && (
            <div className="bg-white bg-opacity-90 p-4 rounded  w-[220px] md:w-[300px]">
              <div className="font-bold text-lg mb-1">{activeBuildingInfo.name}</div>
              <div className="text-gray-700 mb-1">{activeBuildingInfo.desc}</div>
              {activeBuildingInfo.activities && activeBuildingInfo.activities.map((activity, index) => (
                <div key={index}>
                  <div className="font-bold text-base mt-5">{activity.name}</div>
                  <div className="text-gray-700 mb-1">{activity.intro}</div>
                  <Link href={activity.url} className="hover:text-gray-900 underline text-gray-700 ">
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
          setActiveBuildingname(null);
        }}
        gl={{ 
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.setPixelRatio(window.devicePixelRatio);
        }}
        style={{ background: 'transparent' }}
      >
        
        <ambientLight intensity={1.3} />
        <directionalLight position={[2, 2, 2]} intensity={4} />
        <Suspense fallback={null}>
          <ModelWithMarkers  onActiveBuilding={setActiveBuildingname}/>
        </Suspense>
        <OrbitControls
          target={[121, -30, -139]}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 3}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          minDistance={minDistance}
          maxDistance={maxDistance}
          autoRotate={isAutoRotating}
          autoRotateSpeed={1}
          onStart={() => setIsAutoRotating(false)} 
          onEnd={() => setIsAutoRotating(true)}   
        />

      </Canvas>
    </div>
  );
}
