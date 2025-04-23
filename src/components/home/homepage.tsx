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



// 註冊 ScrollTrigger 插件
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const fullText = "NTU Artfest";
    const fullText2 = "           -《潮汐》";
    const [index, setIndex] = useState(0);
    // const [language, setLanguage] = useState("EN");
    const [scrollY, setScrollY] = useState(0);
  
    const containerRef = useRef<HTMLDivElement>(null);
  
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
    
  
  useEffect(() => {
    // 確保在客戶端執行
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // 設置左側進入的文字動畫
      gsap.from(".text-left1", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-left1",
          start: "top 60%", 
          // end: "top 50%", 
          toggleActions: "play", 
          markers: false   
        }
      });
      
      // 設置右側進入的文字動畫
      gsap.from(".text-right1", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-right1",
          start: "top 60%",
          // end: "top 50%",
          toggleActions: "play ",
          markers: false
        }
      });
      
     // 設置左側進入的文字動畫
      gsap.from(".text-left2", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-left2",
          start: "top 60%", 
          // end: "top 50%",  
          toggleActions: "play", 
          markers: false   
        }
      });
      // 設置左側進入的文字動畫
      gsap.from(".text-right2", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-right2",
          start: "top 60%", 
          // end: "top 50%",  
          toggleActions: "play", 
          markers: false    
        }
      });
    }, containerRef);
    
    return () => ctx.revert(); // 清理動畫
  }, []);
  

    const calculateOpacity = () => 0.6 + scrollY/2000; 
    const calculateOpacity1 = () => Math.max(0, 1 - scrollY / 500); // 最大透明度为1，
  
    const calculateOpacity2 = () => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        // 當 scrollY 越大，透明度 (opacity) 越小；此處以 500 為分界值
        return Math.min(0.3 + scrollY / 500, 1);
    };
    const scrolly_calcultae = () => (-365 + scrollY * 0.1);
  
  
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
                {["ARG", "Polis", "Who-Art-You"].map((item) => (
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

        <div className="relative z-17 mt-[100vh] h-[100vh]">
            <div className='relative '>
              <div className="w-full absolute top-0 left-0" >
                  <Image 
                      src="/bg.png"
                      alt="背景圖片"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full object-cover  brightness-100"
                      priority
                      style={{
                          opacity: calculateOpacity2(), // 使用 opacity 而非 color
                          transition: "opacity 0.3s ease",
                      }}
                  />
              </div>

              {/* Second main section : horizontal scroll */}
              <div className="min-h-screen flex items-center justify-center z-20 pt-40 pt-10"> 
                  <div className="relative w-[70%] backdrop-blur-sm rounded-md"> 
                      <h2 className="text-6xl font-bold ">展場地圖</h2> 
                      <ModelViewer/>
                  </div>
              </div>
              {/* First main section : introduction */}
              <div className="h-[500px] flex items-center justify-center">
                  <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-end">
                      <div className="md:w-1/2 md:mt-0 z-20">
                          <h2 className="text-6xl font-bold mb-4 tracking-wider" >人與人的連結</h2>

                      </div>
                  </div>
              </div>

              <div className="h-[500px] flex items-center justify-center">
                  <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-center">
    
                      <div className="md:w-1/2 mt-10 md:mt-0 z-20">
                          <h2 className="text-6xl font-bold mb-4 tracking-wider" >或許</h2>

                      </div>
                  </div>
              </div>

              <div className="h-[800px] ">
                  <div className="w-full mx-auto flex flex-col md:flex-row items-center md:justify-center">
                      <div className="md:w-1/2 md:mt-[200px] mt-20 z-20 flex justify-center">
                      <h2
                          className="text-6xl font-bold mb-4 tracking-wider"
                          style={{
                          writingMode: "vertical-rl",    
                          textOrientation: "upright",    
                          }}
                      >
                          也是一種潮汐
                      </h2>
                      </div>
                  </div>
              </div>
            </div>
            
            
            {/* Third main section : arg */}
            <div className="h-[700px] relative overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-[calc(100%+200px)]" // 增加高度以允許視差移動
                style={{
                  transform: `translateY(${scrolly_calcultae()}px)`,
                }}
              >
                <Image 
                  src="/arg/arg.png"
                  alt="背景圖片"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
                {/* <div className="absolute h-[700px] flex items-center justify-center bg-black/50"></div> */}
              </div>
              
            </div>
              
            
            <div ref={containerRef} className="pt-20 py-16 bg-gray-50 w-full h-[90vh] relative opacity-80">
              <div className="relative container mx-auto px-4 ">
                <div className="max-w-4xl mx-auto space-y-12"> 

                  <div className="text-left1 p-8 ">
                    <h3 className="text-3xl font-semibold text-black">你是否生活厭倦了呢？</h3>
                  </div>
                  
                  <div className="text-right1 p-8 text-right">
                    <h3 className="text-3xl font-semibold text-black">又或是在日常生活中找不到那所謂的快感</h3>
                  </div>
                  
                  <div className="text-left2 p-8">
                    <h3 className="text-3xl font-semibold text-black">你是否曾幻想過，在現實生活過著虛擬的生活啊</h3>
                  </div>
                  
                  <div className="text-right2 p-8 text-right mb-10">
                    <h3 className="text-3xl font-semibold mb-10 text-orange-600">如果有的話，那就來玩 ARG 吧！</h3>
                    <Link href="/arg" className="text-lg text-bold text-gray-700 hover:text-gray-900 hover:underline ">
                      來 我帶你走 〉〉
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>

{/*   
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
              </div> */}

          {/* Fourth main section : mbti */}
            <section className="py-10  h-screen flex flex-col items-center justify-center relative bg-white">
                <div className='h-[300px]'>
                  <h2 className="text-center text-[50px] font-bold mt-10">你</h2>
                  <h2 className="text-center text-[50px] font-bold ">又是什麼潮間帶生物呢</h2>
                </div>
                
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
                className="w-full h-full "
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
            <section id="final-block" className="py-20 text-center w-full">
              <h2 className="text-[100px] md:text-[70px] sm:text-[40px]">參與公共議題，人人有責</h2>
              <div className="flex justify-end mt-4 px-4 w-[80%]">
                <Link href="/polis" className="text-blue-600 hover:text-blue-800 underline">
                  了解更多公共議題
                </Link>
              </div>
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
  