"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF,  OrbitControls, Environment, ContactShadows } from '@react-three/drei'
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
              transparent={true}
              opacity={0} 
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


function ModelWithMarkers({ onActiveBuilding, onLoaded}: { 
  onActiveBuilding: (info: string | null) => void; 
  onLoaded: () => void;
}) {
  const { scene } = useGLTF('MAP.glb');

  useEffect(() => {
    if (scene) {
      onLoaded();
    }
  }, [scene, onLoaded]);

  return (
    <group>
      <primitive object={scene} scale={[30, 30, 30]} />
      <Markers scene={scene as unknown as THREE.Scene} onActiveBuilding={onActiveBuilding} />
    </group>
  );
}

function LightController() {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      const offset = 1000;
      const direction = camera.getWorldDirection(new THREE.Vector3()).normalize();
      const lightPos = camera.position.clone().add(direction.multiplyScalar(offset));
      lightRef.current.position.copy(lightPos);
      direction.y += -20;
      direction.z += -20;
      direction.x += -20;
      lightRef.current.target.position.set(0, 0, 0);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      intensity={4}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
  );
}

export default function ModelViewer() {
   
    const [activeBuildingInfo, setBuildingInfo] = useState<module.BuildingInfo | null>(null);
    const [activeBuildingname, setActiveBuildingname] = useState<string | null>(null);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const [isBegin, setIsBegin] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [dots, setDots] = useState('...');

    const { width } = useWindowSize();
  
    // Calculate distances based on screen width
    const minDistance = width < 768 ? 120 : 120; 
    const maxDistance = width < 768 ? 350 : 230;

    useEffect(() => {
    if (modelLoaded) {
      // 給予一個小延遲確保模型真的渲染完成
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [modelLoaded]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '.' : prev + '.');
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
    // exchange the url prefix to local url
    useEffect(() => {
        if (activeBuildingname) {
            const building = module.buildings.find(b => b.name === activeBuildingname);
            if (building) {
              const base = typeof window !== "undefined" ? window.location.origin : "";
              // 替換每個 activity 的 url 前綴
              const infoWithLocalUrl = {
                ...building.info,
                activities: building.info.activities.map(act => ({
                  ...act,
                  url: act.url.includes('instagram') ? act.url : act.url.replace(/^https?:\/\/[^/]+/, base)
                }))
              };

              setBuildingInfo(infoWithLocalUrl);
              setIsBegin(false)
            } else {
                setBuildingInfo(null);
            }
        } else {
            setBuildingInfo(null);
        }
    }, [activeBuildingname]);


    const controlsProps = useMemo(() => ({
      minPolarAngle: -Math.PI / 2,
      maxPolarAngle: 2 * (Math.PI / 5),
      enablePan: true,
      enableDamping: true,
      dampingFactor: 0.05,
      minDistance,
      maxDistance,
      autoRotate: isAutoRotating,
      autoRotateSpeed: 1,
      onStart: () => setIsAutoRotating(false),
      onEnd: () => setIsAutoRotating(true)
    }), [isAutoRotating, minDistance, maxDistance]);

  return (
    <div className="w-full h-screen rounded-lg relative h-[900px] md:h-[78vh] shadow-2xl backdrop-blur-sm">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-xl font-bold text-gray-800 animate-pulse">
            Loading the map{dots}
          </div>
        </div>
      )}
      <div className="absolute top-6 left-6 z-20 ">
        { isBegin && (
          <div>
            <div className="bg-white bg-opacity-90 p-4 rounded w-[220px] md:w-[300px] flex flex-row item-center justify-center">
              <div className="text center font-bold text-lg">歡迎來到臺大！</div>
            </div>
            <div className="bg-white bg-opacity-0 p-4 rounded w-[220px] md:w-[300px] flex flex-row item-center justify-center">
              <div className="text center font-bold text-sm">歡迎任意拖曳、縮放！</div>
            </div>
            
          </div>
            
            
        )}
        {!isBegin && activeBuildingInfo && (
            <div className="bg-white bg-opacity-90 p-4 rounded  w-[220px] md:w-[300px]">
              <div className="font-bold text-lg mb-1">{activeBuildingInfo.name}</div>
              <div className="text-gray-700 mb-1">{activeBuildingInfo.desc}</div>
              <div className='pt-3 border-b border-gray-500'></div>
              {activeBuildingInfo.activities && activeBuildingInfo.activities.map((activity, index) => (
                <div key={index}>
                  <div className="font-bold text-base mt-5">{activity.name}</div>
                  <div className="text-gray-700 mb-1">{activity.intro}</div>
                  <Link href={activity.url} className="hover:text-gray-900 underline hover:text-gray-900 text-gray-700 ">
                    查看展覽資訊
                  </Link>
                </div>
              ))}
            </div>
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas 
          camera={{ position: [-100, 20, 120], fov: 40}}
          onPointerMissed={() => {
            setActiveBuildingname(null);
            setIsBegin(false)
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
          
          <ambientLight intensity={0.5} />
          <LightController />
          <Suspense fallback={null}>
            <Environment preset="sunset" />
            <ModelWithMarkers 
              onActiveBuilding={setActiveBuildingname} 
              onLoaded={() => setModelLoaded(true)}
              />
          </Suspense>
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            width={20}
            height={20}
            blur={2}
          />  

          <OrbitControls
            {...controlsProps}
          />

        </Canvas>
      </Suspense>
    </div>
  );
}
