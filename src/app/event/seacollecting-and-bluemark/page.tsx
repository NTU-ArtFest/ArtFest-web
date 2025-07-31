import Image from 'next/image';

export default function SeaCollectingBlueMarkActivity() {
  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
      {/* 黑色底圖層 */}
      <div className="fixed inset-0 z-0 bg-black"></div>

      {/* 主視覺區塊 - 手機和桌面共用背景，調整為 3:2 比例 */}
      <div className="relative w-full z-10 h-[100vh]">
        {/* 背景圖 - 亮度調低 */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <img
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
          src="/all/seacollecting-and-bluemark/2.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">拾海‧藍印</h1>
            <p className="text-xs sm:text-base tracking-wide">Sea·Blueprint</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">專案管理 Project Manager </span><br />
            <span className="text-[6px]">
            曾子珉
            </span></p>
            
            <p><span className="font-bold text-[8px]">專案組員 Project Team</span><br />
            <span className="text-[6px]">沈庭苙、照本麻瑛</span></p>

            <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
            <span className="text-xs md:text-sm">周宜葇</span></p> 
            
            <p><span className="font-bold text-[8px]">活動時間 Activity Dates</span><br />
            <span className="text-[6px]">5月11日 09:30-18:30</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點 Activity Venue</span><br />
            <span className="text-[6px]">新北市 福隆海灘</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">拾海‧藍印</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Sea·Blueprint</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">專案管理 Project Manager </span><br />
              <span className="text-xs md:text-sm">
                  曾子珉
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">專案組員 Project Team</span><br />
              <span className="text-xs md:text-sm">沈庭苙、照本麻瑛</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
              <span className="text-xs md:text-sm">周宜葇</span></p> 

              <p><span className="font-bold text-sm md:text-base">活動時間 Activity Dates</span><br />
              <span className="text-xs md:text-sm">5月11日 09:30-18:30</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點 Activity Venue</span><br />
              <span className="text-xs md:text-sm">新北市 福隆海灘</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">活動介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              當我們從城市出發，走向海岸，是否也在找回與土地的連結？《拾海・藍印》結合海岸淨灘與藍曬藝術創作，邀請參與者親自撿拾海廢，再以陽光、海水與心意，將廢棄物轉化為藍白交錯的創作印記。
            </p>
            <p className="text-left">
              在行動中認識環境，在創作中記錄思緒。這場與臺大學生會永續執行組共同策劃的戶外專案，讓參與者透過雙手與感官，重新思考自己與自然、與海洋的關係，並為地球留下一份溫柔的回應。
            </p>
          </div>
        </div>
      </div>

      {/* 英文活動介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Activity Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              As we leave the city and head toward the coast, are we also seeking to restore our connection with the land? <strong>Sea Collecting and Blue Mark</strong> blends coastal cleanup with cyanotype art, inviting participants to collect marine debris by hand, and use sunlight, seawater, and intention to transform discarded waste into blue-and-white artistic impressions.
            </p>
            <p className="text-left">
              Understanding the environment through action, and recording reflection through creation. This outdoor project, co-curated with the Department of Sustainability at NTUSA, invites participants to engage with nature through their hands and senses. In doing so, they are encouraged to rethink their relationship with the natural world and the sea, and to leave behind a gentle response to the Earth.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">
            活動紀錄 Activity Documentation
          </h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 13 }, (_, index) => (
              <div 
                key={index + 1} 
                className="relative overflow-hidden rounded-lg" 
                style={{ aspectRatio: '3/2' }}
              >
                <Image
                  src={`/all/seacollecting-and-bluemark/${index + 1}.png`} 
                  alt={`Sea collecting and blue mark Activity ${index + 1}`} 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 6} // 只對前 6 張圖片使用 priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部版權聲明 */}
      <footer className="relative z-10 py-5 md:py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-[8pt]">
            © 2025 臺大藝術季團隊 NTU ARTFEST 30TH
          </p>
        </div>
      </footer>
    </div>
  );
}