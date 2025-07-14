export default function ImmeasurableEmptinessActivity() {
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
          src="/all/immeasurable-emptiness/3.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">無量空處</h1>
            <p className="text-xs sm:text-base tracking-wide">Immeasurable Emptiness</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">專案管理</span><br />
            <span className="text-[6px]">
            曾子珉
            </span></p>
            
            <p><span className="font-bold text-[8px]">專案組員</span><br />
            <span className="text-[6px]">宋恩祈、蔡郁程</span></p>

            <p><span className="font-bold text-sm md:text-base">活動紀錄</span><br />
            <span className="text-xs md:text-sm">王芋勻</span></p>  
            
            <p><span className="font-bold text-[8px]">活動時間</span><br />
            <span className="text-[6px]">5月3日 13:30-14:40</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點</span><br />
            <span className="text-[6px]">舊體2樓舞蹈教室</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">無量空處</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Immeasurable Emptiness</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">專案管理</span><br />
              <span className="text-xs md:text-sm">
                  曾子珉
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">專案組員</span><br />
              <span className="text-xs md:text-sm">宋恩祈、蔡郁程</span></p>

              <p><span className="font-bold text-sm md:text-base">活動紀錄</span><br />
              <span className="text-xs md:text-sm">王芋勻</span></p>          
              
              <p><span className="font-bold text-sm md:text-base">活動時間</span><br />
              <span className="text-xs md:text-sm">5月3日 13:30-14:40</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點</span><br />
              <span className="text-xs md:text-sm">舊體2樓舞蹈教室</span></p>
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
              在成長的旅途中，每一次選擇都像是風吹、沙磨與浪濤沖擊下的石頭痕跡，悄悄形塑我們成為如今的模樣。《無量空處》以石頭的風化過程為靈感，打造一場沉浸式的人格探索體驗，引導參與者從生活中的抉擇出發，反思內在動機與性格輪廓。
            </p>
            <p className="text-left">
              參與者將在活動中化身為「潮汐旅者」，隨著劇本情境做出選擇，並觸碰象徵不同動機的「元素球」，例如責任、夢想、成就或友情。每一道題目都不只是選擇，更是一段與自我對話的歷程。活動最後，參與者將獲得專屬的「石頭小卡」，從選擇中回望性格形塑的軌跡，也與他人分享彼此的經歷與觀點。
            </p>
            <p className="text-left">
              這不只是一次遊戲，而是一段面向內在的探索旅程：探索選擇的力量，發現心之所向。
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
              Along the journey of growth, every choice leaves marks—like stones shaped by wind, sand abrasion, and crashing waves—quietly molding who we are today. <em>Boundless Void</em> draws inspiration from the weathering process of stones to create an immersive personality exploration experience, guiding participants to reflect on their inner motivations and character profiles through the lens of life's decisions.
            </p>
            <p className="text-left">
              Participants become "Tide Travelers" in the experience, making choices based on scripted scenarios and touching "Element Spheres" representing different motivations—such as responsibility, dreams, achievement, or friendship. Each question is more than a choice; it is a journey of self-dialogue. At the end, participants receive a personalized "Stone Card," reflecting on the trajectory of character formation through their choices, and sharing experiences and perspectives with others.
            </p>
            <p className="text-left">
              This is more than a game—it is a journey inward: exploring the power of choice and discovering the heart's true direction.
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
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index + 1} className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
                <img 
                  src={`/all/immeasurable-emptiness/${index + 1}.png`} 
                  alt={`Immeasurable Emptiness Activity ${index + 1}`} 
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