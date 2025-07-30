export default function InSearchOfFlowActivity() {
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
          src="/all/insearch-of-flow/21.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">尋流‧相映</h1>
            <p className="text-xs sm:text-base tracking-wide">Tracing the Tides·Reflections</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">專案管理 Project Manager </span><br />
            <span className="text-[6px]">
            曾子珉
            </span></p>
            
            <p><span className="font-bold text-sm md:text-base">活動講者 Lecturer</span><br />
            <span className="text-xs md:text-sm">Sofia 城市浪人執行長 x 李宥辰 臺大藝術季第三十屆總召</span></p>


            <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
            <span className="text-xs md:text-sm">吳士昕、鄭鉯儒</span></p> 
            
            <p><span className="font-bold text-[8px]">活動時間 Activity Dates</span><br />
            <span className="text-[6px]">5月12日 19:10-21:10</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點 Activity Venue</span><br />
            <span className="text-[6px]">博雅教學館312教室</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">尋流‧相映</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Tracing the Tides·Reflections</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">專案管理 Project Manager </span><br />
              <span className="text-xs md:text-sm">
                  曾子珉
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動講者 Lecturer</span><br />
              <span className="text-xs md:text-sm">Sofia 城市浪人執行長 x 李宥辰 臺大藝術季第三十屆總召</span></p>

              <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
              <span className="text-xs md:text-sm">吳士昕、鄭鉯儒</span></p> 
              
              <p><span className="font-bold text-sm md:text-base">活動時間 Activity Dates</span><br />
              <span className="text-xs md:text-sm">5月12日 19:10-21:10</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點 Activity Venue</span><br />
              <span className="text-xs md:text-sm">博雅教學館312教室</span></p>
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
              我們的人生總在移動之中，有時順流、有時逆行。在每一次轉彎的路口，我們都在學習如何與變動共處，重新理解自己。
            </p>
            <p className="text-left">
              《尋流・相映》是一場結合對談講座與創作工作坊的沉浸式活動。講者 Sofia Kung 曾在城市浪人、品牌行銷與國際交換間穿梭，現為城市浪人育成協會執行長；她將與本屆藝術季總召李宥辰展開對談，分享他們如何在職涯轉折、責任壓力與實踐行動之中，不斷重塑自身定位，並在流動的節奏中尋得方向。
            </p>
            <p className="text-left">
              下半場由藝術季活動組引導參與者繪製「生命潮汐圖」，透過圖像方式整理個人的生命歷程。藉由書寫與創作，我們將回望過去的高低起伏，映照出每個人獨特的樣貌，也讓變動成為理解自我的起點。
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
              Our lives are constantly in motion—sometimes flowing with the current, sometimes against it. At every turning point, we are learning to live with change and to rediscover who we are.
            </p>
            <p className="text-left">
              <em>Tidal Reflections</em> is an immersive experience that blends dialogue and creative expression. Guest speaker Sofia Kung, now the Executive Director of The Big Issue Foundation Taiwan, has moved between urban nomadism, brand marketing, and international exchange. In conversation with NTU Art Festival's 30th Director-in-Chief, Yu-Chen Lee, the two will share how they have redefined themselves through career shifts, responsibility, and action — and how they navigate direction amid life's constant flow.
            </p>
            <p className="text-left">
              In the second half, participants will be guided to create a personal "Tide Map of Life," visually charting the highs and lows of their journey. Through writing and artistic reflection, we revisit the tides that shaped us, reveal the unique contours of our experience, and allow change to become the beginning of deeper self-understanding.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">活動紀錄 Activity Documentation</h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 21 }, (_, index) => (
              <div key={index + 1} className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
                <img 
                  src={`/all/insearch-of-flow/${index + 1}.png`} 
                  alt={`In search of flow Activity ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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