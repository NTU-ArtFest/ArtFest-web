import { useState, useEffect, useRef } from 'react';

interface ExhibitionProps {
    params?: any;
  }
  
export default function Exhibition({ params }: ExhibitionProps) {
    
    return (
      <div className="w-full min-h-screen bg-black text-white">

        {/* 黑色底圖層 */}
        <div className="fixed inset-0 z-0 bg-black"></div>


        {/* 嵌入影片區：全螢幕播放，無進度條 */}
        <div className="sticky top-0 w-full aspect-video overflow-hidden z-0">
            <video
                className="w-full h-full object-cover"
                src="/all/wave.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>

        {/* 展覽主視覺區塊 */}
        <div className="relative w-full min-h-screen z-10">

            {/* 背景圖 */}
            <img
                className="w-full min-h-screen object-cover absolute inset-0 z-0"
                src="/all/sea.jpg"
                alt="Exhibition Background"
            />
  
            {/* 黑色遮罩 */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/90"></div>

            {/* 文字區塊 */}
            <div className="absolute left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-8 text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center w-full">《潮間帶》影像展 </h1>
                    <div className="max-w-4xl text-lg md:text-xl space-y-6 leading-relaxed text-left ml-4">
                        <p>
                        <br /><br /><br />
                        臺大是潮間帶，我們比任何人都還要貼近這個時代。這裡是高溫高鹽的環境，環境因子變化好大......<br /><br /><br />
                        但同時呀，這裡具有高營養價值，也是輕盈河流奔赴向穩當大海的過渡帶。<br /><br /><br />
                        大大的星球拉動著整個世界的海，小小的我們在陸地邊界，努力學習，逐漸地找到我們的特質、我們的生存法則。而你，具備什麼特質呢？
                        </p>
                    </div>
            </div>
  
        </div>

        {/* 展覽說明區塊 */}
        <div className="relative w-full min-h-screen z-10">
            <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 z-10">
                {/* 左側圖片 */}
                <img
                    src="/all/sea.jpg"
                    alt="展示圖片"
                    className="w-64 h-64 object-cover shadow-lg"
                />

                {/* 右側文字 */}
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-2xl font-bold mb-4">這是黑底白字區塊</h2>
                    <p className="text-lg leading-relaxed">
                    左邊是圖片，右邊是文字，整個區塊置中排列。這段話可以是展覽介紹、作品說明、或活動引言。
                    </p>
                </div>
            </div>

            <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 z-10">
                {/* 左側圖片 */}
                <img
                    src="/all/wave.jpg"
                    alt="展示圖片"
                    className="w-64 h-64 object-cover shadow-lg"
                />

                {/* 右側文字 */}
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-2xl font-bold mb-4">這是黑底白字區塊</h2>
                    <p className="text-lg leading-relaxed">
                    左邊是圖片，右邊是文字，整個區塊置中排列。這段話可以是展覽介紹、作品說明、或活動引言。
                    </p>
                </div>
            </div>

            <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 z-10">
                {/* 左側圖片 */}
                <img
                    src="/all/wave.jpg"
                    alt="展示圖片"
                    className="w-64 h-64 object-cover shadow-lg"
                />

                {/* 右側文字 */}
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-2xl font-bold mb-4">展覽資訊</h2>
                    <p className="text-lg leading-relaxed">
                    展期：2025年 5月 6日 星期二 - 2025年 5月 15日 星期四<br />
                    地點：臺大總圖書館一樓展覽廳<br />
                    開放時間：18:30-21:00
                    </p>
                </div>
            </div>

            {/* 底部黑色區塊 */}
            <div className="w-full h-1/2 bg-black z-10">
                <div className="container mx-auto px-8 py-16">
                    <div className="max-w-4xl mx-auto text-white">
                    </div>
                </div>
            </div>

        </div>


      </div>
    );
  }

  