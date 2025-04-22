export default function About() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black text-bold text-2xl">
        about
      </div>
    );
  }

// "use client"
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { useGLTF, Html, OrbitControls } from '@react-three/drei'
// import { Suspense, useState, useEffect, useRef } from 'react'
// import * as THREE from 'three'

// // 建築物資料結構擴充
// interface BuildingInfo {
//   name: string;
//   desc: string;
//   // 可以加入更多資訊如開放時間、功能等
//   openHours?: string;
//   functions?: string[];
// }

// interface Building {
//   name: string;
//   real_name: string;
//   label: string;
//   info: BuildingInfo;
//   // 可以加入自定義位置偏移
//   offset?: [number, number, number];
// }

// const buildingNames = [
//   'library',
//   'grass',
//   'first_student',
//   'second_library',
//   'new_student',
//   'stadium',
//   'bank',
//   'clock',
//   'second',
//   'gate',
//   'MRT',
//   'market',
//   'lake',
// ]
// // 建築物資料
// const buildings: Building[] = [
//     // ...更多建築物
//   { 
//     name: 'library', 
//     real_name: '台大圖書館',
//     label: '1', 
//     info: { 
//       name: '台大圖書館', 
//       desc: '這是圖書館介紹，提供豐富的學術資源與安靜的讀書環境。',
//       openHours: '週一至週五 8:00-22:00',
//       functions: ['借閱服務', '自習空間', '電子資源']
//     },
//     offset: [0, 6, 0] // 自定義標籤位置偏移
//   },
//   { 
//     name: 'grass', 
//     real_name: '振興草皮',
//     label: '2', 
//     info: { 
//       name: '振興草皮', 
//       desc: '這是體育館介紹，提供各種運動設施與場地。',
//       openHours: '週一至週日 6:00-22:00',
//       functions: ['籃球場', '游泳池', '健身房']
//     },
//     offset: [0, 7, 0]
//   },
//     { 
//         name: 'first_student', 
//         real_name: '第一學生宿舍',
//         label: '3', 
//         info: { 
//         name: '第一學生宿舍', 
//         desc: '這是學生宿舍介紹，提供舒適的住宿環境。',
//         openHours: '24小時開放',
//         functions: ['住宿服務', '自習室']
//         },
//         offset: [0, 5, 0]
//     },
//     { 
//         name: 'second_library', 
//         real_name: '第二圖書館',
//         label: '4', 
//         info: { 
//         name: '第二圖書館', 
//         desc: '這是第二圖書館介紹，提供豐富的學術資源與安靜的讀書環境。',
//         openHours: '週一至週五 8:00-22:00',
//         functions: ['借閱服務', '自習空間', '電子資源']
//         },
//         offset: [0, 6, 0]
//     },
//     {
//         name: 'new_student',
//         real_name: '新生宿舍',
//         label: '5',
//         info: { 
//             name: '新生宿舍',
//             desc: '這是新生宿舍介紹，提供舒適的住宿環境。',
//             openHours: '24小時開放',
//             functions: ['住宿服務', '自習室']
//         },
//         offset: [0, 5, 0]
//     },
//     {
//         name: 'new_student',
//         real_name: '新生宿舍',
//         label: '5',
//         info: { 
//             name: '新生宿舍',
//             desc: '這是新生宿舍介紹，提供舒適的住宿環境。',
//             openHours: '24小時開放',
//             functions: ['住宿服務', '自習室']
//         },
//         offset: [0, 5, 0]
//     }
// ]

// // 標記組件
// function Markers({ scene, onActiveBuilding }: { 
//   scene: THREE.Scene; 
//   onActiveBuilding: (info: String | null) => void; 
// }) {
//   const { camera } = useThree();
//   const markersRef = useRef<THREE.Group[]>([]);
  
//   // 更新標記朝向相機
//   useFrame(() => {
//     markersRef.current.forEach(marker => {
//       if (marker && marker.parent) {
//         marker.lookAt(camera.position);
//       }
//     });
//   });

//   return (
//     <>
//       {buildings.map((building, index) => {
//         const mesh = scene.getObjectByName(building.name);
//         if (!mesh) return null;
        
//         // 取得 mesh 的世界座標
//         const pos = new THREE.Vector3();
//         mesh.getWorldPosition(pos);
        
//         // 應用自定義偏移或使用默認偏移
//         const offset = building.offset || [0, 5, 0];
//         const markerPos: [number, number, number] = [
//           pos.x + offset[0], 
//           pos.y + offset[1], 
//           pos.z + offset[2]
//         ];
        
//         return (
//           <group 
//             key={building.name} 
//             position={markerPos}
//             ref={(el) => {
//               if (el) markersRef.current[index] = el;
//             }}
//           >
//             {/* 可點擊的標記 */}
//             <mesh
//               onPointerOver={(e) => {
//                 buildingNames.forEach(name => {
//                     if (building.name === name) {
//                         onActiveBuilding(name);
//                     }
//                     // 其他 hover 處理
//                 })
                
//               }}
//               onPointerOut={(e) => {
//                 buildingNames.forEach(name => {
//                     if (building.name === name) {
//                         onActiveBuilding(null);
//                     }
//                     // 其他 hover 處理
//                 })
//                 // 其他 out 處理
//               }}
//               onClick={(e) => {
//                 buildingNames.forEach(name => {
//                     if (building.name === name) {
//                         onActiveBuilding(name);
//                     }
//                     // 其他 hover 處理
//                 })
//                 // 其他 click 處理
//               }}
//               renderOrder={999}
//             >

//             </mesh>
            
//             {/* 數字標籤 - 始終面向相機 */}
//             <Html center distanceFactor={300}>
//               <div className=" w-10 h-10 flex items-center justify-center text-xs font-bold transform transition-transform hover:scale-110">
//                 {building.real_name}
//               </div>
//             </Html>
//           </group>
//         );
//       })}
//     </>
//   );
// }

// // 增強的提示框組件
// function Tooltip({ info, position, active }: { 
//   info: BuildingInfo | null; 
//   position: [number, number, number] | null;
//   active: boolean;
// }) {
//   if (!info || !position) return null;
  
//   return (
//     <Html position={position} center distanceFactor={10}>
//       <div className={`
//         bg-white text-black p-3 rounded-lg shadow-xl 
//         min-w-[200px] max-w-[300px] text-sm pointer-events-none
//         transform transition-all duration-300 
//         ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
//       `}>
//         <div className="font-bold text-lg border-b border-gray-200 pb-1 mb-2">{info.name}</div>
//         <div className="mb-2">{info.desc}</div>
        
//         {/* 顯示額外資訊 */}
//         {info.openHours && (
//           <div className="mt-2">
//             <span className="font-semibold">開放時間:</span> {info.openHours}
//           </div>
//         )}
        
//         {info.functions && info.functions.length > 0 && (
//           <div className="mt-2">
//             <span className="font-semibold">提供服務:</span>
//             <div className="flex flex-wrap gap-1 mt-1">
//               {info.functions.map((func, i) => (
//                 <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                   {func}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </Html>
//   );
// }

// // // 高亮顯示選中的建築物
// // function HighlightedBuilding({ scene, highlightedName }: {
// //   scene: THREE.Scene;
// //   highlightedName: string | null;
// // }) {
// //   useEffect(() => {
// //     // 恢復所有建築物的材質
// //     scene.traverse((object) => {
// //       if (object instanceof THREE.Mesh && object.material) {
// //         if (Array.isArray(object.material)) {
// //           object.material.forEach(mat => {
// //             if (mat.userData.originalColor) {
// //               mat.color.set(mat.userData.originalColor);
// //               mat.emissive?.set(0x000000);
// //             }
// //           });
// //         } else {
// //           if (object.material.userData.originalColor) {
// //             object.material.color.set(object.material.userData.originalColor);
// //             object.material.emissive?.set(0x000000);
// //           }
// //         }
// //       }
// //     });

// //     // 如果有高亮的建築物，改變其材質
// //     if (highlightedName) {
// //       const building = scene.getObjectByName(highlightedName);
// //       if (building) {
// //         building.traverse((object) => {
// //           if (object instanceof THREE.Mesh && object.material) {
// //             if (Array.isArray(object.material)) {
// //               object.material.forEach(mat => {
// //                 // 保存原始顏色
// //                 if (!mat.userData.originalColor) {
// //                   mat.userData.originalColor = mat.color.clone();
// //                 }
// //                 // 設置高亮效果
// //                 mat.emissive?.set(0x555555);
// //               });
// //             } else {
// //               // 保存原始顏色
// //               if (!object.material.userData.originalColor) {
// //                 object.material.userData.originalColor = object.material.color.clone();
// //               }
// //               // 設置高亮效果
// //               object.material.emissive?.set(0x555555);
// //             }
// //           }
// //         });
// //       }
// //     }
// //   }, [scene, highlightedName]);

// //   return null;
// // }

// function ModelWithMarkers({ onActiveBuilding }: { 
//   onActiveBuilding: (info: String | null) => void; 
// }) {
//   const { scene } = useGLTF('/ntu_map2.glb');
  
//   return (
//     <group>
//       <primitive object={scene} />
//       <Markers scene={scene as unknown as THREE.Scene} onActiveBuilding={onActiveBuilding} />
//     </group>
//   );
// }

// export default function ModelViewer() {
//     // const [tooltipInfo, setTooltipInfo] = useState<BuildingInfo | null>(null);
//     // const [tooltipPos, setTooltipPos] = useState<[number, number, number] | null>(null);
//     // const [isTooltipActive, setIsTooltipActive] = useState(false);
//     // const [highlightedBuilding, setHighlightedBuilding] = useState<string | null>(null);
//     const [activeBuildingInfo, setBuildingInfo] = useState<BuildingInfo | null>(null);
//     const [activeBuildingname, setActiveBuildingname] = useState<String | null>(null);

//     // const handleMarkerHover = (
//     //     info: BuildingInfo | null, 
//     //     pos: [number, number, number] | null,
//     //     meshName: string | null
//     // ) => {
//     //     setTooltipInfo(info);
//     //     setTooltipPos(pos);
//     //     setHighlightedBuilding(meshName);
        
//     //     // 添加延遲顯示效果
//     //     if (info) {
//     //     setTimeout(() => setIsTooltipActive(true), 50);
//     //     } else {
//     //     setIsTooltipActive(false);
//     //     }
//     // };

//     useEffect(() => {
        
//         if (activeBuildingname) {
//             const building = buildings.find(b => b.name === activeBuildingname);
//             if (building) {
//                 setBuildingInfo(building.info);
//             } else {
//                 setBuildingInfo(null);
//             }
//         } else {
//             setBuildingInfo(null);
//         }
//     }, [activeBuildingname]);

//   return (
//     <div className="w-full h-screen bg-gray-100 rounded-lg shadow-lg relative">
//       {/* 可以添加頂部導航或說明 */}
//       <div className="absolute top-4 left-4 z-20">
//         {activeBuildingInfo && (
//             <div className="bg-white bg-opacity-90 p-4 rounded shadow-lg min-w-[220px] max-w-xs">
//             <div className="font-bold text-lg mb-1">{activeBuildingInfo.name}</div>
//             <div className="text-gray-700 mb-2">{activeBuildingInfo.desc}</div>
//             {activeBuildingInfo.openHours && (
//                 <div className="text-xs text-gray-500 mb-1">開放時間: {activeBuildingInfo.openHours}</div>
//             )}
//             {activeBuildingInfo.functions && (
//                 <div className="flex flex-wrap gap-1">
//                 {activeBuildingInfo.functions.map((f, i) => (
//                     <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{f}</span>
//                 ))}
//                 </div>
//             )}
//             </div>
//         )}
//         </div>
      
//       <Canvas camera={{ position: [151, 100, 100], fov: 75 }}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[2, 2, 2]} intensity={4} />
//         <Suspense fallback={null}>
//           <ModelWithMarkers  onActiveBuilding={setActiveBuildingname}/>
//           {/* <Tooltip 
//             info={tooltipInfo} 
//             position={tooltipPos} 
//             active={isTooltipActive}
//           /> */}
//           {/* <HighlightedBuilding 
//             scene={scene as unknown as THREE.Scene}
//             highlightedName={highlightedBuilding}
//           /> */}
//         </Suspense>
//         <OrbitControls
//           target={[121, -30, -139]}
//           minPolarAngle={-Math.PI / 2}
//           maxPolarAngle={Math.PI / 3}
//           enablePan={false}
//           // 添加阻尼效果使相機移動更平滑
//           enableDamping={true}
//           dampingFactor={0.05}
//           // 限制縮放範圍
//           minDistance={150}
//           maxDistance={300}
//         />
//         {/* 添加環境光和霧效增強視覺效果 */}
//         <fog attach="fog" args={['#f0f0f0', 200, 700]} />
//       </Canvas>
//     </div>
//   );
// }
