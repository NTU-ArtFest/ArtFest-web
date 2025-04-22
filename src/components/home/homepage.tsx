"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Globe as GlobeIcon } from "lucide-react"; 

import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModelViewer from './map';


export default function Home() {
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const fullText = "NTU Artfest";
    const fullText2 = "           -《潮汐》";
    const [index, setIndex] = useState(0);
    // const [language, setLanguage] = useState("EN");
    const [scrollY, setScrollY] = useState(0);
  
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
  
    // 監聽滾動事件
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // 文字打字效果1
    useEffect(() => {
      if (index < fullText.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [index]);


    // 文字打字效果1
    useEffect(() => {
        if (index < fullText2.length) {
          const timeout = setTimeout(() => {
            setText1((prev) => prev + fullText2[index]);
            setIndex(index + 1);
          }, 200);
          return () => clearTimeout(timeout);
        }
      }, [index]);
    



    // gsap
    useEffect(() => {
      // 注册 ScrollTrigger 插件
      gsap.registerPlugin(ScrollTrigger);
  
      // 设置水平滚动动画
      const horizontalScroll = gsap.to(horizontalRef.current, {
        x: () => horizontalRef.current ? -(horizontalRef.current.scrollWidth - window.innerWidth) : 0, // 水平滚动的距离
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current, // 触发器
          start: "top top", // 滚动开始位置
          end: () => horizontalRef.current ? `+=${horizontalRef.current.scrollWidth}` : "+=0", // 滚动结束位置
          scrub: true, // 平滑滚动
          pin: true, // 固定容器
          anticipatePin: 1,
          
        },
      });
  
      return () => {
        horizontalScroll.kill(); // 清除动画实例
      };
    }, []);

    const calculateOpacity = () => 0.6 + scrollY/2000; 
    const calculateOpacity1 = () => Math.max(0, 1 - scrollY / 500); // 最大透明度为1，
  
    const calculateOpacity2 = () => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        // 當 scrollY 越大，透明度 (opacity) 越小；此處以 500 為分界值
        return Math.min(0.3 + scrollY / 500, 1);
    };
    const scrolly_calcultae = () => (-880 + scrollY * 0.1);
  
  
    const slides = [
      { id: 1, description: "圖片 1", color: "bg-red-500", caption: "這是圖片 1 的描述"},
      { id: 2, description: "圖片 2", color: "bg-blue-500",  caption: "這是圖片 2 的描述" },
      { id: 3, description: "圖片 3", color: "bg-green-500", caption: "這是圖片 3 的描述" },
      { id: 4, description: "圖片 4", color: "bg-yellow-500", caption: "這是圖片 4 的描述" },
      { id: 5, description: "圖片 5", color: "bg-purple-500", caption: "這是圖片 5 的描述" },
    ];
  
    return (
      <div> 
        {/* Header */}
        <header
            className={`fixed top-0 left-0 w-full text-black z-50 shadow-lg transition duration-300 bg-white`}
            style={{
              backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`, 
              transition: "background-color 0.3s ease",
          }}
          >
          <nav className="w-full py-6">
            <div className="container mx-auto flex items-center justify-center space-x-6">
              {/* Home Icon */}
              <Link href="/" className="flex items-center space-x-1 text-xl font-bold text-white hover:text-gray-300 hover:scale-105 transition-transform">
                Artfest
              </Link>
  
              {/* Separator */}
              <span className="text-white">|</span>
  
              {/* Navigation Links */}
              <div className="flex space-x-6">
                {["ARG", "Polis", "who-art-you"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-gray-300 hover:scale-105 transition-transform"
                  >
                    {item}
                  </Link>
                ))}
              </div>
                
            </div>
          </nav>
        </header>
  
        {/* Hero Section */}
        <div className="h-screen w-full fixed top-0 left-0 z-2">
            <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-white">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/all/propoganda.mp4" type="video/mp4" />
                </video>

                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 z-10`}
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`,
                        transition: "background-color 0.3s ease",
                    }}
                ></div>

                <div className="text-5xl font-bold md:w-1/2 z-20 relative mb-5">
                    <motion.span
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        color: `rgba(256, 256, 256, ${calculateOpacity1()})`, 
                        transition: "color 0.3s ease",
                    }}
                    >
                    {text}
                    </motion.span>
                </div>
                <div className="text-5xl font-bold md:w-1/2 z-20 relative ml-[150px]">
                    <motion.span
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        color: `rgba(256, 256, 256, ${calculateOpacity1()})`, 
                        transition: "color 0.3s ease",
                    }}
                    >
                    {text1}
                    </motion.span>
                </div>
            </section>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 to-black/50"></div>

        <div className="relative z-17 mt-[100vh]">
            <div className=''>
              <div className="w-full absolute">
                  <Image 
                      src="/bg.png"
                      alt="背景圖片"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover  brightness-100"
                      priority
                      style={{
                          opacity: calculateOpacity2(), // 使用 opacity 而非 color
                          transition: "opacity 0.3s ease",
                      }}
                  />
              </div>
              {/* First main section : introduction */}
              <div className=" min-h-screen flex items-center justify-center">
                  <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-end">
    
                      <div className="md:w-1/2 mt-10 md:mt-0 z-20">
                          <h2 className="text-6xl font-bold mb-4 tracking-wider" >人與人的連結</h2>

                      </div>
                  </div>
              </div>

              <div className="flex items-center justify-center">
                  <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-center">
    
                      <div className="md:w-1/2 mt-10 md:mt-0 z-20">
                          <h2 className="text-6xl font-bold mb-4 tracking-wider" >或許</h2>

                      </div>
                  </div>
              </div>

              <div className="min-h-screen flex items-center justify-center">
                  <div className="w-full mx-auto flex flex-col md:flex-row items-center md:justify-center">
                      <div className="md:w-1/2 mt-20 md:mt-[450px] z-20 flex items-center justify-center">
                      <h2
                          className="text-6xl font-bold mb-4 tracking-wider"
                          style={{
                          writingMode: "vertical-rl",    // 或者 "vertical-lr" 根據你希望文字排列的方向
                          textOrientation: "upright",    // 保持文字直立
                          }}
                      >
                          也是一種潮汐
                      </h2>
                      </div>
                  </div>
              </div>
            </div>
            
            
            {/* Second main section : horizontal scroll */}
            <div className="min-h-screen flex items-center justify-center z-20 pt-40"> 
                <div className="relative w-[70%] backdrop-blur-sm rounded-md"> 
                    <h2 className="text-6xl font-bold ">展場介紹</h2> 
                    <ModelViewer/>
                </div>
            </div>
            

            {/* Third main section : arg */}
            <div
                className="h-[700px] bg-cover bg-center z-20"
                style={{
                    backgroundImage: "url('/arg/arg.png')", // 替换为实际背景图片路径
                    backgroundPositionY: `${scrolly_calcultae()}px`,
                }}
                >
                <div className="h-full flex items-center justify-center bg-black/50">
                </div>
            </div>
            
            <div ref={containerRef} className="relative h-screen overflow-hidden">
                <div
                ref={horizontalRef}
                className="top-0 left-0 flex h-full"
                >
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-black">
                        <h2 className="text-4xl font-bold text-white">story 1</h2>
                    </div>
    
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-black">
                        <h2 className="text-4xl font-bold text-white">story 2</h2>
                    </div>
    
                    <div className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-black">
                        <h2 className="text-4xl font-bold text-white">story 3 </h2>
                    </div>
                </div>
            </div>
               
  
            <div className="w-full absolute h-[1150px]">
                  <Image 
                      src="/bg.png"
                      alt="背景圖片"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover  brightness-100"
                      priority
                      style={{
                          opacity: calculateOpacity2(), // 使用 opacity 而非 color
                          transition: "opacity 0.3s ease",
                      }}
                  />
              </div>
          {/* Fourth main section : mbti */}
            <section className="py-10  h-screen flex flex-col items-center justify-center relative">
                <h2 className="text-center text-[50px] font-bold m-[100px]">想知道自己是什麼浪潮間帶生物嗎</h2>
                <Swiper
                modules={[Autoplay, EffectCoverflow, Navigation]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} 
                loop={true} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                coverflowEffect={{
                    rotate: 0, 
                    stretch: 10, 
                    depth: 100,
                    modifier: 1,
                    slideShadows: false, 
                }}
                className="w-full h-full"
                >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="flex flex-col items-center justify-center">
                    
                    <div className="flex items-center justify-center h-[300px] w-full">
                        <div
                        className={`w-[150px] h-[150px] rounded-full flex items-center justify-center text-white ${slide.color} hover:scale-110 transition-transform`}
                        >
                        {slide.description}
                        </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-center">{slide.caption}</p>
                    </SwiperSlide>
                ))}
                </Swiper>
                <p className="mt-4 text-gray-500">想了解更多，歡迎玩玩我們的測驗！</p>
            </section>
  
  
          {/* Fifth main section : polis */}
            <div className="h-screen flex items-center justify-center bg-white">
                <section id="final-block" className="py-20  text-center">
                <h2 className="text-[100px]">參與公共議題，人人有責</h2>
                {/* <p>你喜歡浪潮嗎？</p> */}
                </section>
            </div>
          
            {/* Footer */}
            <footer className="bg-gray-300 py-10 text-center relative">
              <div className="container mx-auto px-4">
                <Image
                  src="/Footer.png"
                  alt="Footer logo"
                  width={200}
                  height={100}
                  className="mx-auto mb-4 object-contain"
                />
                <h2 className="text-black font-medium">© 30th NTU Artfestival. All Rights Reserved.</h2>
              </div>
            </footer>
        </div>
      </div>
    );
  }
  