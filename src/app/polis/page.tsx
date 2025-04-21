// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { useFrame, useThree } from '@react-three/fiber'
// import { Suspense, useRef, useState } from 'react';
// import * as THREE from 'three'

// function Model() {
//   const gltf = useGLTF('/ntu_map2.glb'); // 路徑對應 public 資料夾
//   return <primitive object={gltf.scene} />;
// }

// export default function ModelViewer() {
//   return (
//     <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg">
//       <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 2, 2]} intensity={4} />
//         {/* <Environment preset="sunset" background /> */}
//         <Suspense fallback={null}>
//           <Model />
//         </Suspense>
//         <OrbitControls 
//             target={[121, -30, -139]}
//             minPolarAngle={-Math.PI / 2} 
//             maxPolarAngle={Math.PI / 3} 
//             enablePan={false} 
//         />
//       </Canvas>
//     </div>
//   );
// }


// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Html } from '@react-three/drei';
// import { SetStateAction, Suspense, useRef, useState } from 'react';
// import * as THREE from 'three';

// // 你的 tooltip 元件
// function Tooltip({ info, position }: { info: { name: string; desc: string } | null; position: THREE.Vector3 | null }) {
//   if (!info || !position) return null;
//   return (
//     <Html position={position} center>
//       <div className="bg-white text-black p-2 rounded shadow-lg min-w-[120px] text-xs pointer-events-none">
//         <div className="font-bold">{info.name}</div>
//         <div>{info.desc}</div>
//       </div>
//     </Html>
//   );
// }

// function Model({ onBuildingHover }: { onBuildingHover: (info: { name: string; desc: string } | null, pos: THREE.Vector3 | null) => void }) {
//   const { scene } = useGLTF('/ntu_map2.glb');
//   // 你可以列出所有要互動的建築物名稱
//   const interactiveBuildings = [
//     { name: 'library', info: { name: '台大圖書館', desc: '這是圖書館介紹' } },
//     // { name: 'buildingB', info: { name: 'B棟', desc: '這是B棟介紹' } },
//   ];

//   // traverse 設定互動
//   scene.traverse((obj) => {
//     const building = interactiveBuildings.find(b => b.name === obj.name);
//     if (building) {
//       obj.userData.interactiveInfo = building.info;
//     }
//   });

//   return (
//     <primitive
//       object={scene}
//       onPointerOver={(e: { object: { userData: { interactiveInfo: any; }; }; point: THREE.Vector3 | null; }) => {
//         const info = e.object.userData.interactiveInfo;
//         if (info) {
//           onBuildingHover(info, e.point);
//         }
//       }}
//       onPointerOut={(e: { object: { userData: { interactiveInfo: any; }; }; }) => {
//         const info = e.object.userData.interactiveInfo;
//         if (info) {
//           onBuildingHover(null, null);
//         }
//       }}
//     />
//   );
// }

// export default function ModelViewer() {
//   const [tooltipInfo, setTooltipInfo] = useState<{ name: string; desc: string } | null>(null);
//   const [tooltipPos, setTooltipPos] = useState<THREE.Vector3 | null>(null);

//   const handleBuildingHover = (info: { name: string; desc: string } | null, pos: THREE.Vector3 | null) => {
//     setTooltipInfo(info);
//     setTooltipPos(pos);
//   };

//   return (
//     <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg">
//       <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 2, 2]} intensity={4} />
//         <Suspense fallback={null}>
//           <Model onBuildingHover={handleBuildingHover} />
//           <Tooltip info={tooltipInfo} position={tooltipPos} />
//         </Suspense>
//         <OrbitControls
//           target={[121, -30, -139]}
//           minPolarAngle={-Math.PI / 2}
//           maxPolarAngle={Math.PI / 3}
//           enablePan={false}
//         />
//       </Canvas>
//     </div>
//   );
// }


// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Html } from '@react-three/drei';
// import { SetStateAction, Suspense, useRef, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import * as THREE from 'three';

// // 1. 可互動的建築物元件
// // function InteractiveBuilding({ object, info, onHover, isHovered}: { object: THREE.Object3D; info: any; onHover: (info: any, pos: THREE.Vector3 | null, object: THREE.Object3D | null) => void; isHovered: boolean;  }) {

// //   return (
// //     <primitive
// //       object={object}
// //       onPointerOver={(e: { stopPropagation: () => void; point: THREE.Vector3 | null; }) => {
// //         e.stopPropagation();
// //         onHover(info, e.point, object);
// //       }}
// //       onPointerOut={(e: { stopPropagation: () => void; }) => {
// //         e.stopPropagation();
// //         onHover(null, null, null);
// //       }}

// //     />
// //   );
// // }

// // 2. 模型載入元件，將特定建築物包成 InteractiveBuilding
// function Model({ onBuildingHover, hoveredName }: { onBuildingHover: (info: any, pos: any, object: any) => void; hoveredName: string | null; }) {
//   const { scene } = useGLTF('/ntu_map2.glb');
//   // 你可以列出所有要互動的建築物名稱
//   const interactiveBuildings = [
//     { name: 'library', info: { name: '台大圖書館', desc: '這是圖書館介紹' } },
//     // 你可以加更多建築物
//   ];

//   // traverse 設定 userData
//   scene.traverse((obj) => {
//     if ((obj as THREE.Mesh).isMesh && obj.name === 'MainMap') {
//       obj.raycast = () => {}; // 讓它不會被 Raycaster 擊中
//     }
//     if ((obj as THREE.Mesh).isMesh && obj.name === 'library') {
//       obj.userData.interactiveInfo = { name: '台大圖書館', desc: '這是圖書館介紹' };
//     }
//   });

//   return (
//     <primitive
//       object={scene}
//       onPointerOver={(e: { object: { isMesh: any; userData: { interactiveInfo: any; }; }; point: any; }) => {
//         // 只處理 mesh，避免 group/scene
//         console.log('Hovered object:', e.object);
//         if (e.object.isMesh && e.object.userData.interactiveInfo) {
//           onBuildingHover(e.object.userData.interactiveInfo, e.point, e.object);
//         }
//       }}
//       onPointerOut={(e: { object: { isMesh: any; userData: { interactiveInfo: any; }; }; }) => {
//         if (e.object.isMesh && e.object.userData.interactiveInfo) {
//           onBuildingHover(null, null, null);
//         }
//       }}
//     />
//   );
// }

// // 3. Tooltip 元件
// type TooltipInfo = {
//   name: string;
//   desc: string;
// };

// function Tooltip({ info, position }: { info: TooltipInfo | null; position: THREE.Vector3 | null }) {
//   if (!info || !position) return null;
//   console.log('Tooltip position:', position);
//   return (
//     <Html position={position} center>
//       <div className="bg-white text-black p-2 rounded shadow-lg min-w-[120px] text-xs">
//         <div className="font-bold">{info.name}</div>
//         <div>{info.desc}</div>
//       </div>
//     </Html>
//   );
// }

// // 4. 主 viewer
// export default function ModelViewer() {
//   const [hoveredInfo, setHoveredInfo] = useState(null);
//   const [tooltipPos, setTooltipPos] = useState(null);
//   const [hoveredName, setHoveredName] = useState(null);
//   const router = useRouter();

//   // hover 事件處理
//   const handleBuildingHover = (info: SetStateAction<null>, pos: SetStateAction<null>, object: { name: any; }) => {
//     setHoveredInfo(info);
//     setTooltipPos(pos);
//     setHoveredName(object?.name || null);
//   };

//   const handleCanvasPointerMissed = () => {
//     setHoveredInfo(null);
//     setTooltipPos(null);
//     setHoveredName(null);
//   };


//   return (
//     <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg">
//       <Canvas 
//         camera={{ position: [151, 100, 100], fov: 75 }}
//         onPointerMissed={handleCanvasPointerMissed}
//       >
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 2, 2]} intensity={4} />
//         <Suspense fallback={null}>
//           <Model
//             onBuildingHover={handleBuildingHover}
//             hoveredName={hoveredName}
//           />
//           <Tooltip info={hoveredInfo} position={tooltipPos} />
//         </Suspense>
//         <OrbitControls
//           target={[121, -30, -139]}
//           minPolarAngle={-Math.PI / 2}
//           maxPolarAngle={Math.PI / 3}
//           enablePan={false}
//         />
//       </Canvas>
//     </div>
//   );
// }


// "use client"
// import { Canvas } from '@react-three/fiber'
// import { useGLTF, Html, OrbitControls } from '@react-three/drei'
// import { SetStateAction, Suspense, useRef, useState } from 'react'
// import * as THREE from 'three'

// // 假設這是你的建築物資料
// const buildings = [
//   { name: 'library', label: '1', info: { name: '台大圖書館', desc: '這是圖書館介紹' } },
//   { name: 'gym', label: '2', info: { name: '體育館', desc: '這是體育館介紹' } },
//   // ...更多建築物
// ]

// function Markers({ scene, onMarkerHover }: { scene: THREE.Scene; onMarkerHover: (info: any, pos: [number, number, number] | null) => void }) {
//   // 依照建築物名稱找到 mesh，並在其上方放 marker
//   return buildings.map((b) => {
//     const mesh = scene.getObjectByName(b.name)
//     if (!mesh) return null
//     // 取得 mesh 的世界座標
//     const pos = mesh.getWorldPosition(new THREE.Vector3())
//     // 你可以微調 y 軸讓 marker 浮在建築物上方
//     const markerPos: [number, number, number] = [pos.x, pos.y + 5, pos.z]
//     return (
//       <group key={b.name} position={markerPos}>
//         {/* Marker 可以是球、icon 或 Html */}
//         <mesh
//           onPointerOver={(e) => {
//              console.log(e.object)
//              e.stopPropagation(); 
//              onMarkerHover(b.info, markerPos); 
//             }}
//           onPointerOut={e => { e.stopPropagation(); onMarkerHover(null, null) }}
//           renderOrder={999}
//         >
//           <sphereGeometry args={[1, 16, 16]} />
//           <meshStandardMaterial color="orange" />
//         </mesh>
//         {/* 數字標籤 */}
//         <Html center>
//           <div className="bg-white rounded-full px-2 text-xs font-bold border border-gray-300 shadow">{b.label}</div>
//         </Html>
//       </group>
//     )
//   })
// }

// function Tooltip({ info, position }: { info: { name: string; desc: string } | null; position: [number, number, number] | null }) {
//   if (!info || !position) return null
//   return (
//     <Html position={position} center>
//       <div className="bg-white text-black p-2 rounded shadow-lg min-w-[120px] text-xs pointer-events-none">
//         <div className="font-bold">{info.name}</div>
//         <div>{info.desc}</div>
//       </div>
//     </Html>
//   )
// }

// function ModelWithMarkers({ onMarkerHover }: { onMarkerHover: (info: { name: string; desc: string } | null, pos: [number, number, number] | null) => void }) {
//   const { scene } = useGLTF('/ntu_map2.glb')
//   return (
//     <group>
//       <primitive object={scene} />
//       <Markers scene={scene as unknown as THREE.Scene} onMarkerHover={onMarkerHover} />
//     </group>
//   )
// }

// export default function ModelViewer() {
//   const [tooltipInfo, setTooltipInfo] = useState<{ name: string; desc: string } | null>(null)
//   const [tooltipPos, setTooltipPos] = useState<[number, number, number] | null>(null)

//   const handleMarkerHover = (info: { name: string; desc: string } | null, pos: [number, number, number] | null) => {
//     setTooltipInfo(info)
//     setTooltipPos(pos)
//   }

//   return (
//     <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg">
//       <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 2, 2]} intensity={4} />
//         <Suspense fallback={null}>
//           <ModelWithMarkers onMarkerHover={handleMarkerHover} />
//           <Tooltip info={tooltipInfo} position={tooltipPos} />
//         </Suspense>
//         <OrbitControls
//           target={[121, -30, -139]}
//           minPolarAngle={-Math.PI / 2}
//           maxPolarAngle={Math.PI / 3}
//           enablePan={false}
//         />
//       </Canvas>
//     </div>
//   )
// }

"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

// 建築物資料結構擴充
interface BuildingInfo {
  name: string;
  desc: string;
  // 可以加入更多資訊如開放時間、功能等
  openHours?: string;
  functions?: string[];
}

interface Building {
  name: string;
  label: string;
  info: BuildingInfo;
  // 可以加入自定義位置偏移
  offset?: [number, number, number];
}

// 建築物資料
const buildings: Building[] = [
  { 
    name: 'library', 
    label: '1', 
    info: { 
      name: '台大圖書館', 
      desc: '這是圖書館介紹，提供豐富的學術資源與安靜的讀書環境。',
      openHours: '週一至週五 8:00-22:00',
      functions: ['借閱服務', '自習空間', '電子資源']
    },
    offset: [0, 6, 0] // 自定義標籤位置偏移
  },
  { 
    name: 'gym', 
    label: '2', 
    info: { 
      name: '體育館', 
      desc: '這是體育館介紹，提供各種運動設施與場地。',
      openHours: '週一至週日 6:00-22:00',
      functions: ['籃球場', '游泳池', '健身房']
    },
    offset: [0, 7, 0]
  },
  // ...更多建築物
]

// 標記組件
function Markers({ scene, onMarkerHover }: { 
  scene: THREE.Scene; 
  onMarkerHover: (info: BuildingInfo | null, pos: [number, number, number] | null, meshName: string | null) => void 
}) {
  const { camera } = useThree();
  const markersRef = useRef<THREE.Group[]>([]);
  
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
      {buildings.map((building, index) => {
        const mesh = scene.getObjectByName(building.name);
        if (!mesh) return null;
        
        // 取得 mesh 的世界座標
        const pos = new THREE.Vector3();
        mesh.getWorldPosition(pos);
        
        // 應用自定義偏移或使用默認偏移
        const offset = building.offset || [0, 5, 0];
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
            {/* 可點擊的標記 */}
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation();
                onMarkerHover(building.info, markerPos, building.name);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={(e) => { 
                e.stopPropagation(); 
                onMarkerHover(null, null, null);
                document.body.style.cursor = 'auto';
              }}
              renderOrder={999}
            >
              <sphereGeometry args={[2.5, 16, 16]} />
              <meshStandardMaterial 
                color="orange" 
                emissive="orange"
                emissiveIntensity={1}
                toneMapped={false}
              />
            </mesh>
            
            {/* 數字標籤 - 始終面向相機 */}
            <Html center distanceFactor={10}>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold border border-gray-300 shadow-md transform transition-transform hover:scale-110">
                {building.label}
              </div>
            </Html>
          </group>
        );
      })}
    </>
  );
}

// 增強的提示框組件
function Tooltip({ info, position, active }: { 
  info: BuildingInfo | null; 
  position: [number, number, number] | null;
  active: boolean;
}) {
  if (!info || !position) return null;
  
  return (
    <Html position={position} center distanceFactor={10}>
      <div className={`
        bg-white text-black p-3 rounded-lg shadow-xl 
        min-w-[200px] max-w-[300px] text-sm pointer-events-none
        transform transition-all duration-300 
        ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}>
        <div className="font-bold text-lg border-b border-gray-200 pb-1 mb-2">{info.name}</div>
        <div className="mb-2">{info.desc}</div>
        
        {/* 顯示額外資訊 */}
        {info.openHours && (
          <div className="mt-2">
            <span className="font-semibold">開放時間:</span> {info.openHours}
          </div>
        )}
        
        {info.functions && info.functions.length > 0 && (
          <div className="mt-2">
            <span className="font-semibold">提供服務:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {info.functions.map((func, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {func}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Html>
  );
}

// 高亮顯示選中的建築物
function HighlightedBuilding({ scene, highlightedName }: {
  scene: THREE.Scene;
  highlightedName: string | null;
}) {
  useEffect(() => {
    // 恢復所有建築物的材質
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(mat => {
            if (mat.userData.originalColor) {
              mat.color.set(mat.userData.originalColor);
              mat.emissive?.set(0x000000);
            }
          });
        } else {
          if (object.material.userData.originalColor) {
            object.material.color.set(object.material.userData.originalColor);
            object.material.emissive?.set(0x000000);
          }
        }
      }
    });

    // 如果有高亮的建築物，改變其材質
    if (highlightedName) {
      const building = scene.getObjectByName(highlightedName);
      if (building) {
        building.traverse((object) => {
          if (object instanceof THREE.Mesh && object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(mat => {
                // 保存原始顏色
                if (!mat.userData.originalColor) {
                  mat.userData.originalColor = mat.color.clone();
                }
                // 設置高亮效果
                mat.emissive?.set(0x555555);
              });
            } else {
              // 保存原始顏色
              if (!object.material.userData.originalColor) {
                object.material.userData.originalColor = object.material.color.clone();
              }
              // 設置高亮效果
              object.material.emissive?.set(0x555555);
            }
          }
        });
      }
    }
  }, [scene, highlightedName]);

  return null;
}

function ModelWithMarkers({ 
  onMarkerHover 
}: { 
  onMarkerHover: (info: BuildingInfo | null, pos: [number, number, number] | null, meshName: string | null) => void 
}) {
  const { scene } = useGLTF('/ntu_map2.glb');
  
  return (
    <group>
      <primitive object={scene} />
      <Markers scene={scene as unknown as THREE.Scene} onMarkerHover={onMarkerHover} />
    </group>
  );
}

export default function ModelViewer() {
  const [tooltipInfo, setTooltipInfo] = useState<BuildingInfo | null>(null);
  const [tooltipPos, setTooltipPos] = useState<[number, number, number] | null>(null);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [highlightedBuilding, setHighlightedBuilding] = useState<string | null>(null);
  const { scene } = useGLTF('/ntu_map2.glb');

  const handleMarkerHover = (
    info: BuildingInfo | null, 
    pos: [number, number, number] | null,
    meshName: string | null
  ) => {
    setTooltipInfo(info);
    setTooltipPos(pos);
    setHighlightedBuilding(meshName);
    
    // 添加延遲顯示效果
    if (info) {
      setTimeout(() => setIsTooltipActive(true), 50);
    } else {
      setIsTooltipActive(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg relative">
      {/* 可以添加頂部導航或說明 */}
      <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-80 p-2 rounded shadow-md">
        <h2 className="text-lg font-bold">台大校園導覽</h2>
        <p className="text-sm text-gray-600">將滑鼠移至標記點查看建築資訊</p>
      </div>
      
      <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={4} />
        <Suspense fallback={null}>
          <ModelWithMarkers onMarkerHover={handleMarkerHover} />
          <Tooltip 
            info={tooltipInfo} 
            position={tooltipPos} 
            active={isTooltipActive}
          />
          {/* <HighlightedBuilding 
            scene={scene as unknown as THREE.Scene}
            highlightedName={highlightedBuilding}
          /> */}
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
