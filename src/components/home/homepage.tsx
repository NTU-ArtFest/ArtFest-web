"use client";

import { useState, useEffect, useRef, useCallback, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from 'framer-motion';
import ModelViewer from './map';
import { useLanguage } from './LanguageContext';

// enroll
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


export default function  Home() {

    //  --- var ---

    // for scrolling 
    const [scrollY, setScrollY] = useState(0);
  
    // for gsap animation
    const containerRef = useRef<HTMLDivElement>(null);

    // to check whether user use phone or computer 
    const [windowWidth, setWindowWidth] = useState(1024); 

    // to adjust the height of the arg propoganda pic
    const minDistance = windowWidth < 768 ? -365 : -365; 

    // to prevent from hydrate error
    const [opacity, setOpacity] = useState<number | undefined>(0.3);
    
    // menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // last part 
    const finalBlockRef = useRef<HTMLDivElement>(null);

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const { lang, setLang } = useLanguage();

    const { t } = useLanguage();

    const text = t('find');

    // 英文時一個字母一行
    // const renderText = () => {
    //   if (lang === 'en') {
    //     // 英文：每個單字一行
    //     return text.split(' ').map((word, idx) => (
    //       <span key={idx} style={{ display: 'block' }}>{word}</span>
    //     ));
    //   }
    //   // 中文：每個字也包一個 span，但不分行
    //   return (
    //     <span style={{ display: 'inline' }}>
    //       {text}
    //     </span>
    //   );
    // };

 const renderText = () => {
  if (lang === 'zh') {
    // 中文：每個字一行，但需要反轉順序以符合由右到左的閱讀習慣
    return text.split('').reverse().map((char, idx) => (
      <span key={idx} style={{ display: 'block' }}>{char}</span>
    ));
  }
  // 英文：正常顯示，不分行
  return (
    <span style={{ display: 'inline' }}>
      {text}
    </span>
  );
};
    // --- function --- 
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
    // calculate  alot about opacity
    // const calculateOpacity = () => 0 + scrollY/800; 
    const calculateOpacity = useCallback(() => 0 + scrollY/800, [scrollY]);
    // const calculateOpacity1 = () => Math.max(0, 1 - scrollY / 500); 
  
    const calculateOpacity2 = () => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        return Math.min(0.3 + scrollY / 500, 1);
    };

    const getTextColor = () => {
      const opacity = calculateOpacity();
      const colorValue = Math.round(255 * (1 - opacity)); // 255 是白色，0 是黑色
      return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    };

    // const getTextColor2 = () => {
    //   const opacity = calculateOpacity();
    //   const colorValue = Math.round(255 * (opacity)); // 255 是白色，0 是黑色
    //   return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    // };

    const scrolly_calcultae = useCallback(() => (minDistance + scrollY * 0.1), [minDistance, scrollY]);

    const CAPTION_LIMIT = 25; // 你想要顯示的最大字數
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
        
        if(scrollY>800)
          setOpacity(1);
        else
          setOpacity(calculateOpacity2());

      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    useEffect(() => {
      if (typeof window === 'undefined') return;
      
      const ctx = gsap.context(() => {
        // 批量處理動畫，減少實例數量
        const elements = [
          { class: ".text-left1", x: -100 },
          { class: ".text-right1", x: 100 },
          { class: ".text-left2", x: -100 },
          { class: ".text-right2", x: 100 },
          { class: ".text-left3", x: 100 },
          { class: ".text-right3", x: 100 }
        ];
    
        elements.forEach(({ class: className, x }) => {
          gsap.from(className, {
            x,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: className,
              start: "top 60%",
              toggleActions: "play",
            }
          });
        });
      }, containerRef);
      
      return () => ctx.revert();
    }, []);
    
    // last part 
    useEffect(() => {
      if (!finalBlockRef.current) return;
      gsap.fromTo(
        finalBlockRef.current,
        { opacity: -100, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalBlockRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);

    const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = (dropdownId: SetStateAction<string | null>) => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        setCloseTimeout(null)
      }
      setActiveDropdown(dropdownId)
    }

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setActiveDropdown(null)
        setHoveredImage("/all/key_visual/1.png")
      }, 400) // 200ms 延遲
      setCloseTimeout(timeout)
    }
  
    type Slide = {
      id: number;
      description: { zh: string; en: string } | string;
      color: string;
      caption: { zh: string; en: string } | string;
      url: string;
    };

    const slides: Slide[] = [
    {
      id: 1,
      description: { zh: "寄居蟹", en: "Hermit Crab" },
      color: "bg-red-500",
      caption: {
        zh: "寄居蟹一生都在尋找合適的新殼，展現出對自由和靈活生活方式的追求",
        en: "Hermit Crab spends its life searching for a suitable new shell, pursuing freedom and flexible lifestyle."
      },
      url: '/who-art-you/001_without_bg.png'
    },
    {
      id: 2,
      description: { zh: "招潮蟹", en: "Fiddler Crab" },
      color: "bg-blue-500",
      caption: {
        zh: "招潮蟹在泥灘上揮舞蟹螯的他們是天生的提琴演奏家，除了吸引異性之外，也是力量的象徵",
        en: "Fiddler Crab, known for waving their claws on mudflats, symbolizing strength and attracting mates."
      },
      url: '/who-art-you/001.png'
    },
    {
      id: 3,
      description: { zh: "藤壺", en: "Barnacle" },
      color: "bg-green-500",
      caption: {
        zh: "藤壺是潮間帶的釘子戶，一旦找到合適的地方，就牢牢黏住不放，無論在哪裡都能見到牠的蹤影，是潮間帶低調的強者",
        en: "Barnacle is a steadfast resident of the intertidal zone, firmly attaching itself wherever it finds a suitable spot."
      },
      url: '/who-art-you/ENF001.png'
    },
    {
      id: 4,
      description: { zh: "跳跳魚", en: "Mudskipper" },
      color: "bg-yellow-500",
      caption: {
        zh: "跳跳魚是潮間帶的活力高手，能在水中游動，也能在泥灘上靈活跳躍，像個不受拘束的探險家",
        en: "Mudskipper is an energetic expert of the intertidal zone, able to swim in water and jump agilely on mudflats."
      },
      url: '/who-art-you/ESJ001_without_bg.png'
    },
    {
      id: 5,
      description: { zh: "海兔", en: "Sea Hare" },
      color: "bg-purple-500",
      caption: {
        zh: "海兔是海底的神秘遊俠，柔軟的身軀隨著海流飄動，優雅穿梭於珊瑚與沙地之間。",
        en: "Sea Hare is a mysterious underwater wanderer, with a soft body drifting with the currents."
      },
      url: '/who-art-you/INF001_without_bg.png'
    },
  ];

    const [hoveredImage, setHoveredImage] = useState("/all/Gravity/1.png");

    const navItems = [
      { id: "ARG", desc: "另類實境解謎" },
      { id: "Polis", desc: "議題討論" },
      { id: "Who Art You", desc: "心理測驗" },
    ];
    const dropdownItems = [
      {
        id: "Key visual", 
        title: "Key visual",
        items: [
          { Engname: "Design", Chiname: "主視覺設計", link: "/key-visual", url: "/all/key_visual/1.png"},
          { Engname: "Merch", Chiname: "周邊商品", link: "/merch", url: "/all/key_visual/3.png"}
        ],
        featuredImage: "/all/key_visual/1.png"
      },
      {
        id: "Exhibitions", 
        title: "Exhibitions",
        items: [
          { Engname: "Gravity", Chiname: "引力", link: "/exhibition/gravity", url: "/all/Gravity/1.png"},
          { Engname: "Conveyance", Chiname: "傳遞", link: "/exhibition/conveyance", url: "/all/conveyance/1.png"},
          { Engname: "Us", Chiname: "我們", link: "/exhibition/us", url: "/all/us/1.png"},
          { Engname: "Continuum", Chiname: "延續", link: "/exhibition/continuum", url: "/all/continuum/2.png"},
          { Engname: "Intertidal Photo Exhibition", Chiname: "潮間帶影像展", link: "/exhibition/photographic_exhibition", url: "/exhibition/sea.png"},
          { Engname: "Beyond the tide", Chiname: "潮之外", link: "/exhibition/beyond-the-tide", url: "/all/beyond-the-tide/1.png"},
          { Engname: "Tidal Pavilion", Chiname: "觀潮亭", link: "/exhibition/tidewatch-pavilion", url: "/all/tidewatch-pavilion/1.png"},
          { Engname: "The wave", Chiname: "海浪", link: "/exhibition/the-wave", url: "/all/the-wave/1.png"},
        ],
        featuredImage: "/all/Gravity/1.png"
      },
      {
        id: "Events",
        title: "Events",
        items: [
          { Engname: "Opening Ceremony", Chiname: "開幕式", link: "/event/opening-ceremony", url: "/all/opening-ceremony/16.png"},
          { Engname: "Desire·Healing", Chiname: "性慾・癒", link: "/event/sexual-healing", url: "/all/sexual-healing/1.jpg"},
          { Engname: "Unbalanced", Chiname: "失衡", link: "/event/imbalance", url: "/all/imbalance/1.jpg"},
          { Engname: "Infinite Void", Chiname: "無量空處", link: "/event/immeasurable-emptiness", url: "/all/immeasurable-emptiness/3.png"},
          { Engname: "Tracing the Tides·Reflections", Chiname: "尋流‧相映", link: "/event/insearch-of-flow", url: "/all/insearch-of-flow/21.png"},
          { Engname: "Sea·Blueprint", Chiname: "拾海‧藍印", link: "/event/seacollecting-and-bluemark", url: "/all/seacollecting-and-bluemark/2.png"},
          { Engname: "Rock On: The Stone Artisans", Chiname: "石尚玩家", link: "/event/the-stone-crafters", url: "/all/the-stone-crafters/8.png"},
          { Engname: "Ending Ceremony", Chiname: "閉幕式", link: "/event/ending-ceremony", url: "/all/ending-ceremony/17.png"},

        ],
        featuredImage: "/all/opening-ceremony/16.png"
      }
    ];

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    
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
              <div className="hidden md:flex items-center justify-center space-x-6 ">
                <Link href="/" className="flex items-center space-x-1 text-xl font-bold text-white hover:text-gray-300 hover:scale-105 transition-transform text-center">
                  NTU ArtFest
                </Link>

                <span className="text-white">|</span>

                <div className="flex space-x-6">
                {dropdownItems.map((dropdown) => (
                  <div 
                    key={dropdown.id}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(dropdown.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="text-white hover:text-gray-300 hover:scale-105 transition-transform flex items-center">
                      {dropdown.title}
                      <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeDropdown === dropdown.id && (
                      <div>
                        {/* 橋接區域 */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 h-2 bg-transparent z-40"></div>
                        
                        {/* 主要下拉選單 */}
                        <div 
                          className="fixed top-[65px] left-0 w-full border-t border-gray-200 shadow-xl z-50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out"
                          style={{
                            backgroundColor: `rgba(255, 255, 255, ${calculateOpacity()})`,
                            color: getTextColor(),
                            transition: "background-color 0.3s ease",
                          }}
                          
                        >
                          <div className="max-w-7xl mx-auto px-6 py-8">
                            <div className="grid grid-cols-12 gap-8 items-center">
                              
                              {/* 左側圖片區域 */}
                              <div className="col-span-3">
                                <div className="relative overflow-hidden rounded-xl shadow-lg group/image w-full "style={{ aspectRatio: '3/2' }}>
                                  <Image 
                                    src={hoveredImage}
                                    alt={`${dropdown.title} featured image`}
                                    className="w-full h-64 object-cover transition-transform duration-500"
                                    fill
                                    sizes="100vw"
                                    placeholder="blur"        // 開啟模糊預覽
                                    blurDataURL="/placeholder-blur.jpg" // 泛用，或每張配對附加
                                    loading="lazy" // 懶加載（非首屏時可用）
                                    priority={false} // 僅首屏圖優先
                                  />  
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                                </div>
                              </div>
                              
                              {/* 中間標題區域 */}
                              <div className="col-span-9">
                                <div className="space-y-8">
                                {/* 上方大標題區域 */}
                                  <div className="ml-[3.5%] pt-4">
                                    <h1 className="text-2xl font-bold tracking-wide mb-2">
                                      {dropdown.title}
                                    </h1>
                                    <div className="w-[167px] h-0.5 bg-gray-900 mb-4"></div>
                                  </div>                                
                                {/* 下方子項目區域 */}
                                <div className="space-y-4">
                                  <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
                                    {dropdown.items.map((subItem, index) => (
                                      <Link
                                        key={index}
                                        href={subItem.link}
                                        className="block hover:text-black transition-all duration-300 hover:border-b-2 transform hover:-translate-y-2"
                                        onMouseEnter={() => setHoveredImage(subItem.url || dropdown.featuredImage || "/default-exhibition.jpg")}
                                      >
                                        <div className="text-center space-y-2 pt-3">
                                          <div className="text-base font-medium group-hover/item:text-white transition-colors text-l">
                                            {lang === 'zh' ? subItem.Chiname : subItem.Engname}
                                          </div>
                                          <div className="mt-3 opacity-0 group-hover/item:opacity-100 transition-opacity flex justify-center">
                                            <svg className="w-5 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}


                {navItems.map((item) => ( 
                  <Link
                  href={`/${item.id.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white hover:text-gray-300 hover:scale-105 transition-transform"
                  onMouseEnter={() => setActiveTooltip(item.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  key={item.id}
                  >
                  <div 
                    key={item.id}
                    className="relative flex items-center group"
                  >
                    {item.id}
                    
                    {activeTooltip === item.id && (
                      <div
                        className='overflow-hidden ml-2 w-0 group-hover:w-auto transition-all duration-300 ease-in-out flex items-center hover:text-gray-300 hover:scale-105 transition-transform'
                      >
                        <span className="text-white text-sm ">
                          {item.desc}
                        </span>
                      </div>
                    )}
                  </div>
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
                  <Link href="https://www.youtube.com/@%E6%BD%AE%E6%B1%90RiseandFall" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.993 2.993 0 0 0-2.109-2.12C19.322 3.5 12 3.5 12 3.5s-7.322 0-9.388.566a2.993 2.993 0 0 0-2.11 2.12C0 8.25 0 12 0 12s0 3.75.502 5.814c.28 1.055 1.104 1.88 2.11 2.12C4.677 20.5 12 20.5 12 20.5s7.322 0 9.388-.566a2.993 2.993 0 0 0 2.109-2.12C24 15.75 24 12 24 12s0-3.75-.502-5.814zM9.753 15.516V8.484l6.518 3.516-6.518 3.516z"/>
                    </svg>
                  </Link>     
                  <button
                    onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                    className="text-white rounded transition-colors flex items-center"
                    aria-label="切換語言"
                  >
                    {/* 地球 SVG 圖示 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className='mr-1.5 text-white hover:text-gray-300 hover:scale-110 transition-transform'>
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                    </svg>
                    <span className='pt-0.5 text-white hover:text-gray-300 hover:scale-110 transition-transform'>{lang === 'zh' ? 'CN' : 'EN'}</span>
                  </button>
                </div>
              </div>

              {/* phone navi */}
              <div className="md:hidden flex items-center justify-between">
                <div className="flex-1"></div>
                <Link href="/" className="flex-1 text-center text-2xl font-bold text-white">
                  <span className="whitespace-nowrap">NTU ArtFest</span>
                </Link>
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                  >
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
                    isMenuOpen ? 'opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-4 py-2 text-center">
                    {dropdownItems.map((dropdown) => (
                      <div key={dropdown.id} className="w-full">
                        <button 
                          className="text-white hover:text-gray-300 hover:scale-105 transition-transform flex items-center justify-center w-full"
                          onClick={() => setActiveMobileDropdown(
                            activeMobileDropdown === dropdown.id ? null : dropdown.id
                          )}
                        >
                          {dropdown.title}
                          <svg 
                            className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                              activeMobileDropdown === dropdown.id ? 'rotate-180' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {activeMobileDropdown === dropdown.id && (
                          <div className="mt-2 w-full">
                            <div 
                              className="w-full border border-gray-200 rounded-lg shadow-lg overflow-hidden text-white"
                              style={{
                                backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`,
                              }}
                            >
                              <div className="py-2">
                                {dropdown.items.map((subItem, index) => (
                                  <Link
                                    key={index}
                                    href={subItem.link}
                                    className="block py-3 px-4 hover:bg-gray-100/20 transition-colors border-b border-gray-200/20 last:border-b-0"
                                    onClick={() => setActiveMobileDropdown(null)}
                                  >
                                    <div className="text-sm font-medium text-center">
                                      {lang === 'zh' ? subItem.Chiname : subItem.Engname}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {navItems.map((item) => ( 
                      <Link
                        href={`/${item.id.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-white hover:text-gray-300 hover:scale-105 transition-transform"
                        onMouseEnter={() => setActiveTooltip(item.id)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        key={item.id}
                      >
                        <div 
                          key={item.id}
                          className="relative flex items-center group"
                        >
                          {item.id}
                          
                          {activeTooltip === item.id && (
                            <div
                              className='overflow-hidden ml-2 w-0 group-hover:w-auto transition-all duration-300 ease-in-out flex items-center hover:text-gray-300 hover:scale-105 transition-transform'
                            >
                              <span className="text-white text-sm ">
                                {item.desc}
                              </span>
                            </div>
                          )}
                        </div>
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
                      <Link href="https://www.youtube.com/@%E6%BD%AE%E6%B1%90RiseandFall" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a2.993 2.993 0 0 0-2.109-2.12C19.322 3.5 12 3.5 12 3.5s-7.322 0-9.388.566a2.993 2.993 0 0 0-2.11 2.12C0 8.25 0 12 0 12s0 3.75.502 5.814c.28 1.055 1.104 1.88 2.11 2.12C4.677 20.5 12 20.5 12 20.5s7.322 0 9.388-.566a2.993 2.993 0 0 0 2.109-2.12C24 15.75 24 12 24 12s0-3.75-.502-5.814zM9.753 15.516V8.484l6.518 3.516-6.518 3.516z"/>
                        </svg>
                      </Link>   
                      <button
                        onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                        className="text-white rounded transition-colors flex items-center"
                        aria-label="切換語言"
                      >
                      {/* 地球 SVG 圖示 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" className='mr-1.5 text-white hover:text-gray-300 hover:scale-110 transition-transform'>
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                      </svg>

                      <span className='pt-0.5 text-white hover:text-gray-300 hover:scale-110 transition-transform'>{lang === 'zh' ? 'CN' : 'EN'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
  
        {/* hero */}
        <div className="w-screen h-screen fixed top-0 left-0 z-2">
            <section id="hero" className="relative h-screen text-white">
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            )}
              <video
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`
                  absolute top-0 left-0 w-full h-full object-cover z-0
                  transition-opacity duration-300
                  ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}
                `}
              >
                <source src="/SeaWave.mp4" type="video/mp4" />
              </video>
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 z-10`}
                    style={{
                        backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})`,
                        transition: "background-color 0.3s ease",
                    }}
                ></div>

            </section>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 to-black/50 h-screen"></div>

        {/* main section */}
        <div className='relative'>

          {/* bg */}
          <div 
            className="w-full absolute top-0 left-0 h-[5400px]"  // 他預設只有一個 h-screen 不能有 h-full
            style={{
              backgroundImage: `url('/bg.png')`,
              backgroundSize: '100% auto',
              opacity: opacity,
              transition: "opacity 0.3s ease",
              boxShadow: "inset 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 -10px 20px -10px rgba(0,0,0,0.5)"
            }}
          ></div>

          {/* bg filter */}
          <div 
            className="absolute inset-0 h-[5400px]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0)', 
              backdropFilter: 'blur(100px)', 
            }}
          />
          <div className="relative z-17 mt-[100vh] h-[100vh] ">
          

            {/* 1st main section : Map 0730 edited */}
            <div className='relative'>

            <div className="min-h-screen md:min-h-screen flex items-center justify-center z-20 pt-40 "> 
                <div className="relative w-[85%] md:w-[70%]  rounded-md"> 
                    <h2 className="pb-10 text-5xl text-center md:text-left md:text-6xl ">{t('map_cap')}</h2> 
                    <ModelViewer lang={lang}/>
                </div>
            </div>

            {/* 2nd main section : Introduction 0730 edited */}
            <div className="h-[500px] flex items-center justify-center relative ">
            </div>

            <div className="h-[200px] flex items-center justify-center relative ">
                <div className=" container mx-auto px-6 flex flex-col items-center text-center">
                    <div className="z-20 ">
                        <motion.h2
                            className="text-8xl md:text-6xl font-light backdrop-blur-sm mb-4 tracking-widest text-slate-700 p-10 "
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{  duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                          >
                            {t('wish')}
                        </motion.h2>
                    </div>
                </div>
                <div className="w-full absolute top-0 left-0" >
                </div>

            </div>

            <div className="h-[100px] flex items-center justify-center">
                <div className=" container mx-auto px-6 flex flex-col items-center text-center  ">
  
                    <div className="mt-10 md:mt-0 z-20 ">
                        <motion.h2
                            className="text-4xl md:text-3xl font-light mb-4 tracking-wider backdrop-blur-sm text-slate-600"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{  duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                          >
                            {t('see')}
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className="h-[0px] md:h-[400px] mb-10">
                <div className="w-full mx-auto flex flex-col items-center justify-center">
                    <div className="md:mt-[10px] mt-5 z-20 flex justify-center">
                        <motion.h2
                            className="text-xl md:text-xl font-light mb-4 tracking-wide backdrop-blur-sm text-slate-500"
                            style={
                              lang === 'zh'
                                ? {
                                    writingMode: "vertical-rl",
                                    textOrientation: "upright",
                                  }
                                : {
                                    lineHeight: "1.3",
                                  }
                            }
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{  duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                          >
                            {renderText()}
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className="h-[200px] flex items-center justify-center relative ">
            </div>

            </div>

            {/* 3rd main section : Arg 0730 edited */}
            <div className="h-[330px] md:h-[800px] relative">
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


              
            {/* gsap amimation 0730 edited - Updated with new layout */}
            
            <div ref={containerRef} className="py-20 w-full min-h-[1000px] relative overflow-x-hidden" 
                 style={{
                   background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                 }}>
              <div className="relative container mx-auto px-6 max-w-5xl">
                
              <div className="h-[100px]"></div>

                {/* Section Title */}
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-4xl font-normal text-gray-800 mb-8" 
                      style={{ letterSpacing: '3px' }}>
                    {t('Arg-1').split('<br/>').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx !== t('Arg-1').split('<br/>').length - 1 && <br />}
                      </span>
                    ))}
                  </h2>
                </div>

                {/* Main Content Card */}
                <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-12 md:p-16 shadow-2xl shadow-black/10 text-center space-y-12">
                  
                  {/* Year Highlight */}
                  <div className="text-left1">
                    <div className="text-xl md:text-5xl font-semibold text-red-500 mb-8" 
                         style={{ letterSpacing: '4px' }}>
                      {t('Arg-2').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-2').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Future Description */}
                  <div className="text-right1 space-y-4">
                    <p className="text-xl md:text-2xl font-normal text-gray-700" 
                       style={{ letterSpacing: '2px', lineHeight: '1.8' }}>
                      {t('Arg-3').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-3').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    
                    <p className="text-lg md:text-2xl font-normal text-gray-700" 
                       style={{ letterSpacing: '2px', lineHeight: '1.8' }}>
                      {t('Arg-4').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-4').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>

                    <p className="text-lg md:text-2xl font-normal text-gray-700" 
                       style={{ letterSpacing: '2px', lineHeight: '1.8' }}>
                      {t('Arg-5').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-5').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Society Description */}
                  <div className="text-left2">
                    <p className="text-lg md:text-xl font-normal text-gray-600" 
                       style={{ letterSpacing: '1px', lineHeight: '1.8' }}>
                      {t('Arg-6').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-6').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    
                    <p className="text-base md:text-lg font-normal text-gray-500 italic mt-2" 
                       style={{ letterSpacing: '1px', lineHeight: '1.8' }}>
                      {t('Arg-7').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-7').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Question Block */}
                  <div className="text-right2">
                    <div className="text-xl md:text-2xl font-medium text-gray-800 mb-4" 
                         style={{ letterSpacing: '2px', lineHeight: '1.6' }}>
                      {t('Arg-8').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-8').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Life Question */}
                  <div className="text-left3">
                    <p className="text-xl md:text-2xl font-medium text-orange-500" 
                       style={{ letterSpacing: '2px', lineHeight: '1.6' }}>
                      {t('Arg-10').split('<br/>').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== t('Arg-10').split('<br/>').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* ARG Button */}
                  <div className="text-center">
                    <Link 
                      href="/arg" 
                      className="inline-block px-10 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #A3B8C2 30%, #D1DDE5 100%)',
                        letterSpacing: '2px',
                        boxShadow: '0 8px 25px rgba(163, 184, 194, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 12px 35px rgba(163, 184, 194, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(163, 184, 194, 0.3)';
                      }}
                    >
                      {t('Arg-11')}
                    </Link>
                  </div>
                  
                </div>

                <div className="h-[400px]"></div>
              </div>
            </div>

                      
            {/* 4th main section : who-art-you */}
            <section className="py-20 min-h-screen flex flex-col items-center justify-center relative pt-[400px]" 
                      style={{
                        background: 'rgba(250, 255, 255, 1)'
                      }}>
              <style jsx>{`
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="max-w-4xl mx-auto mb-16 px-6 w-full">
                <h2 className="text-center text-2xl md:text-4xl font-normal text-gray-800 leading-relaxed mb-8" 
                    style={{ letterSpacing: '3px' }}>
                  {t('wau-1').split('<br/>').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== t('wau-1').split('<br/>').length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed mb-6" 
                    style={{ letterSpacing: '1px', lineHeight: '2' }}>
                  {t('wau-2').split('<br/>').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== t('wau-2').split('<br/>').length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p className="text-center mt-4 mb-8 text-orange-500 text-lg md:text-xl font-medium" 
                    style={{ letterSpacing: '1px' }}>
                  ✧ {t('wau-3').split('<br/>').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== t('wau-3').split('<br/>').length - 1 && <br />}
                    </span>
                  ))} ✧
                </p>
              </div>

              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" 
                      style={{
                        scrollBehavior: 'smooth',
                        WebkitOverflowScrolling: 'touch'
                      }}>
                  {slides.map((slide) => (
                      <div key={slide.id} className="flex-shrink-0 w-80 md:w-96">
                        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 h-full flex flex-col">
                          <div className="flex-shrink-0 mb-4">
                            <Image 
                              src={slide.url}
                              alt="背景圖片"
                              height={300}
                              width={300}
                              sizes="300px"
                              className="object-cover object-center rounded-xl transition-transform duration-300 hover:scale-105 w-full"
                              priority
                            />
                          </div>
                          
                          <div className="flex items-center justify-center mb-4 flex-shrink-0">
                            <h3 className="text-lg md:text-xl font-medium text-gray-800" 
                                style={{ letterSpacing: '2px' }}>
                              {typeof slide.description === 'object' && slide.description !== null
                                ? slide.description[lang]
                                : slide.description}
                            </h3>
                          </div>
                          
                          <div className="flex-grow flex items-start justify-center">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed w-full" 
                                style={{ letterSpacing: '1px', lineHeight: '1.8' }}>
                              {typeof slide.caption === 'object' && slide.caption !== null
                                ? (
                                  slide.caption[lang].length > CAPTION_LIMIT && !expandedCaptions[slide.id]
                                    ? (
                                      <>
                                        {slide.caption[lang].slice(0, CAPTION_LIMIT)}...
                                        <button
                                          className="text-orange-500 ml-2 font-medium hover:text-orange-600 transition-colors"
                                          onClick={() => toggleCaption(slide.id)}
                                          type="button"
                                        >
                                          {t('open')}
                                        </button>
                                      </>
                                    )
                                    : (
                                      <>
                                        {slide.caption[lang]}
                                        {slide.caption[lang].length > CAPTION_LIMIT && (
                                          <button
                                            className="text-orange-500 ml-2 font-medium hover:text-orange-600 transition-colors"
                                            onClick={() => toggleCaption(slide.id)}
                                            type="button"
                                          >
                                            {t('close')}
                                          </button>
                                        )}
                                      </>
                                    )
                                )
                                : (
                                  slide.caption.length > CAPTION_LIMIT && !expandedCaptions[slide.id]
                                    ? (
                                      <>
                                        {slide.caption.slice(0, CAPTION_LIMIT)}...
                                        <button
                                          className="text-orange-500 ml-2 font-medium hover:text-orange-600 transition-colors"
                                          onClick={() => toggleCaption(slide.id)}
                                          type="button"
                                        >
                                          {t('open')}
                                        </button>
                                      </>
                                    )
                                    : (
                                      <>
                                        {slide.caption}
                                        {slide.caption.length > CAPTION_LIMIT && (
                                          <button
                                            className="text-orange-500 ml-2 font-medium hover:text-orange-600 transition-colors"
                                            onClick={() => toggleCaption(slide.id)}
                                            type="button"
                                          >
                                            {t('close')}
                                          </button>
                                        )}
                                      </>
                                    )
                                )
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* WAU Button */}
              <div className="mt-16 px-6 max-w-4xl mx-auto text-center">
                <div className="text-center">
                  <Link 
                    href="/who-art-you" 
                    className="inline-block px-10 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, #A3B8C2 30%, #D1DDE5 100%)',
                      letterSpacing: '2px',
                      boxShadow: '0 8px 25px rgba(163, 184, 194, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.boxShadow = '0 12px 35px rgba(163, 184, 194, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(163, 184, 194, 0.3)';
                    }}
                  >
                    {t('wau_final')}
                  </Link>
                </div>
                <div className="h-[200px]"></div>
              </div>
            </section>
    
    
              {/* Fifth main section : polis */}
              <section className="h-screen flex items-center justify-center bg-white z-20 ">
                <div ref={finalBlockRef} className="max-w-1xl w-full bg-white rounded-xl shadow-xs p-8 md:p-12 space-y-8 scale-90 hover:scale-105 transition-transform duration-300 md:w-[80%] md:text-center leading-relaxed">

                  <h1 className="text-3xl md:text-4xl text-gray-800 mb-4 text-center">{t('polis-1')}</h1>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  {t('polis-2')}
                  </p>

                {/* Polis Button */}
                <div className="mt-16 px-6 max-w-4xl mx-auto text-center">
                  <div className="text-center">
                    <Link 
                      href="/polis" 
                      className="inline-block px-10 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 hover:transform hover:-translate-y-1"

                      style={{
                        background: 'linear-gradient(135deg, #A3B8C2 30%, #D1DDE5 100%)',
                        letterSpacing: '2px',
                        boxShadow: '0 8px 25px rgba(163, 184, 194, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 12px 35px rgba(163, 184, 194, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(163, 184, 194, 0.3)';
                      }}

                    >
                      {t('polis-3')}
                    </Link>
                  </div>
                  <div className="h-[200px]"></div>
                </div>

                </div>
                
              </section>

                      
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
                  <h2 className="text-black font-medium">© 30th NTU ARTFEST. All Rights Reserved.</h2>
                </div>
              </footer>
          </div>
        </div>
      </div>
    );
  }
  
