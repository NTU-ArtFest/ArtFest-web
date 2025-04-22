"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import { Globe as GlobeIcon } from "lucide-react"; 

import { motion } from "framer-motion";
// import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


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
  
    // const calculateOpacity2 = () => {
    //     const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    //     // 當 scrollY 越大，透明度 (opacity) 越小；此處以 500 為分界值
    //     return Math.min(0 + scrollY / 500, 1);
    // };
    // const scrolly_calcultae = () => (-880 + scrollY * 0.1);
  
  
    // const slides = [
    //   { id: 1, description: "圖片 1", color: "bg-red-500", caption: "這是圖片 1 的描述"},
    //   { id: 2, description: "圖片 2", color: "bg-blue-500",  caption: "這是圖片 2 的描述" },
    //   { id: 3, description: "圖片 3", color: "bg-green-500", caption: "這是圖片 3 的描述" },
    //   { id: 4, description: "圖片 4", color: "bg-yellow-500", caption: "這是圖片 4 的描述" },
    //   { id: 5, description: "圖片 5", color: "bg-purple-500", caption: "這是圖片 5 的描述" },
    // ];
  
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
                
              {/* Language Toggle */}
              {/* <button
                onClick={() => setLanguage(language === "EN" ? "CN" : "EN")}
                className="flex items-center space-x-2 text-white hover:text-gray-300 hover:scale-105 transition-transform"
              >
                <GlobeIcon className="w-5 h-5" />
                <span>EN</span>
              </button> */}
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
        
      </div>
    );
  }
  