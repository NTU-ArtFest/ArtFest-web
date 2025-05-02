"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModelViewer from './map';

// enroll
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


export default function Home() {

    //  --- var ---

    // for typing text effect 
    // const [text, setText] = useState("");
    // const [text1, setText1] = useState("");
    // const fullText = "NTU Artfest";
    // const fullText2 = "           -《潮汐》";
    // const [index, setIndex] = useState(0);

    // for scrolling 
    const [scrollY, setScrollY] = useState(0);
  
    // for gsap animation
    const containerRef = useRef<HTMLDivElement>(null);

    // to check whether user use phone or computer 
    const [windowWidth, setWindowWidth] = useState(1024); 

    // to adjust the height of the arg propoganda pic
    const minDistance = windowWidth < 768 ? -395 : -365; 

    // to prevent from hydrate error
    const [opacity, setOpacity] = useState<number | undefined>(0.3);
    
    // menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // last part 
    const finalBlockRef = useRef<HTMLDivElement>(null);


    // --- function --- 

    // calculate  alot about opacity
    const calculateOpacity = () => 0 + scrollY/800; 
    // const calculateOpacity1 = () => Math.max(0, 1 - scrollY / 500); 
  
    const calculateOpacity2 = () => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        return Math.min(0.3 + scrollY / 500, 1);
    };
    const scrolly_calcultae = () => (minDistance + scrollY * 0.1);

    const CAPTION_LIMIT = 32; // 你想要顯示的最大字數
    const [expandedCaptions, setExpandedCaptions] = useState<{ [key: number]: boolean }>({});

    const toggleCaption = (id: number) => {
      setExpandedCaptions((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    // --- useEffect ----

    // listen scrolling event 
    useEffect(() => {
      setWindowWidth(window.innerWidth);
      setOpacity(calculateOpacity2());

      const handleScroll = () => {
        setScrollY(window.scrollY);

        console.log(window.scrollY);
        
        if(scrollY>400)
          setOpacity(1);
        setOpacity(calculateOpacity2());

      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // typing effect 1
    // useEffect(() => {
    //   if (index < fullText.length) {
    //     const timeout = setTimeout(() => {
    //       setText((prev) => prev + fullText[index]);
    //       setIndex(index + 1);
    //     }, 100);
    //     return () => clearTimeout(timeout);
    //   }
    // }, [index]);


    // // typing effect 2
    // useEffect(() => {
    //     if (index < fullText2.length) {
    //       const timeout = setTimeout(() => {
    //         setText1((prev) => prev + fullText2[index]);
    //         setIndex(index + 1);
    //       }, 200);
    //       return () => clearTimeout(timeout);
    //     }
    //   }, [index]);
    
    // gsap
    useEffect(() => {

      if (typeof window === 'undefined') return;
      
      const ctx = gsap.context(() => {

        // from left
        gsap.from(".text-left1", {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".text-left1",
            start: "top 60%", 
            toggleActions: "play", 
            markers: false   
          }
        });
        
        // from right
        gsap.from(".text-right1", {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".text-right1",
            start: "top 60%",
            toggleActions: "play ",
            markers: false
          }
        });
        
      // from left
        gsap.from(".text-left2", {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".text-left2",
            start: "top 60%", 
            toggleActions: "play", 
            markers: false   
          }
        });
        // from right
        gsap.from(".text-right2", {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".text-right2",
            start: "top 60%", 
            toggleActions: "play", 
            markers: false    
          }
        });
      }, containerRef);
      
      return () => ctx.revert(); 
    }, []);

    

    // 檢測螢幕大小變化
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };

      // 初始檢查
      checkScreenSize();

      // 監聽視窗大小變化
      window.addEventListener('resize', checkScreenSize);
      
      // 清理監聽器
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    
    // last part 
    useEffect(() => {
      if (!finalBlockRef.current) return;
      gsap.fromTo(
        finalBlockRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalBlockRef.current,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);
  
    const slides = [
      { id: 1, description: "ISP", color: "bg-red-500", caption: "招寄居蟹一生都在尋找合適的新殼，展現出對自由和靈活生活方式的追求", url: '/who-art-you/001_without_bg.png'},
      { id: 2, description: "ESP", color: "bg-blue-500",  caption: "招潮蟹的英文名稱為「Fiddler crabs」，在泥灘上揮舞蟹螯的他們是天生的提琴演奏家，除了吸引異性之外，也是力量的象徵", url: '/who-art-you/001.png' },
      { id: 3, description: "ISJ", color: "bg-green-500", caption: "藤壺是潮間帶的釘子戶，一旦找到合適的地方，就牢牢黏住不放，無論是岩石、船底，甚至鯨魚身上都能見到牠的蹤影，是潮間帶低調的強者", url: '/who-art-you/ENF001.png' },
      { id: 4, description: "ENF", color: "bg-yellow-500", caption: "跳跳魚是潮間帶的活力高手，能在水中游動，也能在泥灘上靈活跳躍，像個不受拘束的探險家", url: '/who-art-you/ESJ001_without_bg.png' },
      { id: 5, description: "INF", color: "bg-purple-500", caption: "海兔是海底的神秘遊俠，柔軟的身軀隨著海流飄動，優雅穿梭於珊瑚與沙地之間。", url: '/who-art-you/INF001_without_bg.png' },
    ];
  
    return (


      <div className="w-full text-black"> 

        {/* header */}
        <header
          className={`fixed top-0 left-0 w-full text-black z-50 shadow-lg transition duration-300 bg-white w-screen
            ${scrollY > 300? 'shadow-lg' : 'shadow-none'}
            `}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`,
            transition: "background-color 0.3s ease",
          }}
        >
          <nav className="w-full py-6">
            <div className="container mx-auto px-4">

              {/* desktop navi */}
              <div className="hidden md:flex items-center justify-center space-x-6 text-center">
                <Link href="/" className="flex items-center space-x-1 text-xl font-bold text-white hover:text-gray-300 hover:scale-105 transition-transform">
                  NTU Artfest
                </Link>

                <span className="text-white">|</span>

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
                <div className="flex items-center space-x-4">
                  <Link href="https://www.instagram.com/ntuartfest/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.facebook.com/NTUartfest?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* phone navi */}
              <div className="md:hidden flex items-center justify-between">
                <div className="flex-1"></div> {/* 左側空白區域，用於置中 */}
                <Link href="/" className="flex-1 text-center text-2xl font-bold text-white">
                  Artfest
                </Link>
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    {/* 漢堡選單圖示 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* menu */}
              {isMobile && (
                <div
                  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-4 py-2">
                    {["ARG", "Polis", "Who-Art-You"].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-white hover:text-gray-300 w-full text-center py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6 pt-5 pb-1 border-t border-gray-600 w-full justify-center mt-2">
                      <Link href="https://www.instagram.com/ntuartfest/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </Link>
                      <Link href="https://www.facebook.com/NTUartfest?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </Link>
                    </div>
                </div>
              )}
            </div>
          </nav>
        </header>
  
        <div className="w-screen h-screen fixed top-0 left-0 z-2">
            <section id="hero" className="relative h-screen text-white">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/SeaWave.mov" type="video/mp4" />
                </video>

                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 z-10`}
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`,
                        transition: "background-color 0.3s ease",
                    }}
                ></div>

                {/* <div className="absolute left-[150px] bottom-[150px] z-20 mb-8 ml-8 md:ml-16 md:mb-12">
                    <motion.span
                    className="inline-block text-3xl md:text-5xl font-bold"
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
                <div className="absolute left-[230px] bottom-[90px] z-20 mb-8 ml-8 md:ml-16 md:mb-12">
                    <motion.span
                    className="inline-block text-3xl md:text-5xl font-bold"
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
                </div> */}
            </section>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 to-black/50 h-screen"></div>
        <div className='relative'>
          <div 
            className="w-full absolute top-0 left-0 h-[5400px]"  // 他預設只有一個 h-screen 不能有 h-full
            style={{
              backgroundImage: `url('/bg.png')`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100% auto',
              opacity: opacity,
              transition: "opacity 0.3s ease",
              boxShadow: "inset 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 -10px 20px -10px rgba(0,0,0,0.5)"
            }}
          ></div>
          <div 
            className="absolute inset-0 h-[5400px]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(1px)', 
            }}
          />
          <div className="relative z-17 mt-[100vh] h-[100vh] ">
          
              <div className='relative'>

                {/* Second main section : horizontal scroll */}
                <div className="min-h-screen md:min-h-screen flex items-center justify-center z-20 pt-40"> 
                    <div className="relative w-[85%] md:w-[70%] backdrop-blur-sm rounded-md"> 
                        <h2 className="pb-10 text-5xl text-center md:text-left font-bold md:text-6xl ">展場地圖</h2> 
                        <ModelViewer/>
                    </div>
                </div>
                {/* First main section : introduction */}
                <div className="h-[500px] flex items-center justify-center relative ">
                    <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-end">
                        <div className="md:w-1/2 md:mt-0 z-20 ">
                            <h2 className="text-4xl md:text-6xl font-bold backdrop-blur-sm mb-4 tracking-wider p-10 " >人與人的連結</h2>
                        </div>
                    </div>
                    <div className="w-full absolute top-0 left-0" >
                </div>

                </div>

                <div className="h-[500px] flex items-center justify-center">
                    <div className=" container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-center">
      
                        <div className="md:w-1/2 mt-10 md:mt-0 z-20">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider backdrop-blur-sm" >或許</h2>

                        </div>
                    </div>
                </div>

                <div className="h-[500px] md:h-[800px]">
                    <div className="w-full mx-auto flex flex-col md:flex-row items-center md:justify-center">
                        <div className="md:w-1/2 md:mt-[200px] mt-20 z-20 flex justify-center">
                        <h2
                            className="text-4xl md:text-6xl font-bold mb-4 tracking-wider backdrop-blur-sm"
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
              <div className="h-[370px] md:h-[700px] relative">
                <div 
                  className="absolute inset-0 w-full overflow-hidden" 
                >
                  <div 
                    className="absolute inset-0 w-[120%] md:w-full h-[calc(100%+200px)]"
                    style={{
                      transform: `translateY(${scrolly_calcultae()}px)`,
                      left: windowWidth < 768 ? '-15%' : '0%',
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
                  </div>
                </div>
              </div>
                
              {/* gsap amimation */}
              <div ref={containerRef} className="pt-10 py-16 bg-gray-50 w-full h-[90vh] relative opacity-70 overflow-x-hidden">
                <div className="relative container mx-auto px-4 ">
                  <div className="max-w-4xl mx-auto space-y-12"> 

                    <div className="text-left1 p-8 mt-6">
                      <h3 className="text-xl md:text-3xl font-semibold text-black">你是否厭倦生活了呢？</h3>
                    </div>
                    
                    <div className="text-right1 p-8 text-right">
                      <h3 className="text-xl md:text-3xl font-semibold text-black">又或是在日常生活中找不到那所謂的快感</h3>
                    </div>
                    
                    <div className="text-left2 p-8">
                      <h3 className="text-xl md:text-3xl font-semibold text-black">你是否曾幻想過，在現實生活過著虛擬的生活啊</h3>
                    </div>
                    
                    <div className="text-right2 p-8 text-right mb-10">
                      <h3 className="text-xl md:text-3xl font-semibold mb-10 text-orange-600">如果有的話，那就來玩 ARG 吧！</h3>
                      <Link href="/arg" className="text-lg text-bold text-gray-700 hover:text-gray-900 hover:underline ">
                        來 我帶你走 〉〉
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </div>


            {/* Fourth main section : mbti */}
              <section className="py-10  min-h-screen flex flex-col items-center justify-center relative bg-white">
                  <div className='h-[200px]'>
                    <h2 className="text-center text-[30px] md:text-[50px] font-bold mt-10">在遊玩 ARG 的同時</h2>
                    <h2 className="text-center text-[30px] md:text-[50px] font-bold ">你又屬於哪個潮間帶生物呢</h2>
                  </div>
                  
                  <Swiper
                  modules={[Autoplay, EffectCoverflow, Navigation]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2} 
                  loop={true} 
                  // autoplay={{
                  //     delay: 3000, 
                  //     disableOnInteraction: false, 
                  // }}
                  coverflowEffect={{
                      rotate: 0, 
                      stretch: 10, 
                      depth: 100,
                      modifier: 1,
                      slideShadows: false, 
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  className="w-full h-[440px] md:h-[640px]"
                  >
                  {slides.map((slide) => (
                      <SwiperSlide key={slide.id} className="flex flex-col items-center justify-center text-center">
                        <Image 
                          src={slide.url}
                          alt="背景圖片"
                          height={500}
                          width={500}
                          // fill
                          sizes="10vw"
                          className="object-cover object-center23 scale-100 hover:scale-[1.2] transition duration-300"
                          priority
                        />
                      <div className="flex items-center justify-center h-[50px] w-full ">
                          <div>
                          {slide.description}
                          </div>
                      </div>
                      <div className="flex justify-center h-[100px] w-full">
                        <p className="mt-4 text-gray-700 w-[70%]">
                          {slide.caption.length > CAPTION_LIMIT && !expandedCaptions[slide.id]
                            ? (
                              <>
                                {slide.caption.slice(0, CAPTION_LIMIT)}...
                                <button
                                  className="text-gray-500 ml-2 "
                                  onClick={() => toggleCaption(slide.id)}
                                  type="button"
                                >
                                  打開
                                </button>
                              </>
                            )
                            : (
                              <>
                                {slide.caption}
                                {slide.caption.length > CAPTION_LIMIT && (
                                  <button
                                    className="text-gray-500 ml-2"
                                    onClick={() => toggleCaption(slide.id)}
                                    type="button"
                                  >
                                    收起
                                  </button>
                                )}
                              </>
                            )
                          }
                        </p>
                      </div>
                      </SwiperSlide>
                  ))}
                  </Swiper>
                  <p className="mt-10 md:mt-1 text-gray-500">想了解更多可愛生物嗎，歡迎玩玩我們的<Link href='/who-art-you' className='text-[#ff9500]'> 測驗 </Link>！</p>
              </section>
    
    
            {/* Fifth main section : polis */}
            
              <div  className="h-screen flex items-center justify-center bg-white z-20">
                
                <section ref={finalBlockRef} id="final-block" className="py-20 text-center w-full bg-white">
                  <h2 className="md:text-[70px] text-[45px]">最後</h2>
                  <h2 className="md:text-[70px] text-[45px]">說說你內心的聲音吧！</h2>
                  <div className="flex justify-end mt-4 px-4 w-[80%]">
                    <Link href="/polis" className="hover:text-gray-900 underline text-gray-700">
                      點我了解更多公共議題
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
      </div>
    );
  }
  