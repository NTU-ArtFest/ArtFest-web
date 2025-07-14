export default function EndingCeremonyActivity() {
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
          src="/all/ending-ceremony/17.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-xl sm:text-3xl font-bold tracking-wider mb-1 uppercase">第30屆台大藝術季</h1>
            <h2 className="text-lg sm:text-2xl font-bold tracking-wider mb-1 uppercase">閉幕式</h2>
            <p className="text-xs sm:text-base tracking-wide">Rise & Fall</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策劃團隊</span><br />
            <span className="text-[6px]">
            張恩齊、邱禹甄、蔡宇恩、洪涵溱、蔡佩渝
            </span></p>

            <p className="mb-1"><span className="font-bold text-sm md:text-base">活動紀錄</span><br />
            <span className="text-xs md:text-sm">
                劉韋杰、周世倫、蘇晏禾、劉韋辰、周宜葇、游兩婕、吳士昕、廖尹淇、王芋勻、江卉柔、黃楷翔
            </span></p>
            
            <p><span className="font-bold text-[8px]">活動時間</span><br />
            <span className="text-[6px]">5/16 17:00-22:00</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點</span><br />
            <span className="text-[6px]">國立臺灣大學 振興草坪</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider mb-1">第30屆台大藝術季</h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider mb-2">閉幕式</h2>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Rise & Fall</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策劃團隊</span><br />
              <span className="text-xs md:text-sm">
                  張恩齊、邱禹甄、蔡宇恩、洪涵溱、蔡佩渝
              </span></p>

              <p className="mb-1"><span className="font-bold text-sm md:text-base">活動紀錄</span><br />
              <span className="text-xs md:text-sm">
                  劉韋杰、周世倫、蘇晏禾、劉韋辰、周宜葇、游兩婕、吳士昕、廖尹淇、王芋勻、江卉柔、黃楷翔
              </span></p>

            
              
              <p><span className="font-bold text-sm md:text-base">活動時間</span><br />
              <span className="text-xs md:text-sm">5/16 17:00-22:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 振興草坪</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">活動介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝ 潮水退去，抹淨了淚痕與足跡，帶不走在心中漾起的漣漪。 ❞
            </p>
            <p className="text-left">
              <strong>5月16日（五）的閉幕式</strong>中，我們將引領參與者收斂這兩週以來的體驗與感受。以「延續」為核心概念，讓『潮汐』在心中激起的浪花持續蕩漾，延展藝術季的餘韻。
            </p>
            <p className="text-left">
              <strong>｜ 「藍汐午後」 野餐 Ｘ 不插電樂團</strong><br />
              5/16下午16:30起，我們將在振興草坪上展開「野餐」活動，伴隨紅眼班機、The Wicked Witches、森日和三組學生樂團的不插電演出。音樂將如微風輕撫，讓藝術季的情感與回憶透過旋律流轉，牽引著最後的餘波。
            </p>
            <p className="text-left">
              <strong>｜ 「瓶間寄語」 Ｘ 瓶中信互動裝置</strong><br />
              同時間，草坪上將展出互動裝置「瓶中信」，透過戶外藝術裝置呈現海洋的淺層 / 中層 / 深層，象徵我們在人生旅程中的漂流與交會。在這片藝術海域裡，參與者可以透過書寫與交換瓶中信，讓訊息在人與人之間傳遞，讓溫度得以延續。
            </p>
            <p className="text-left">
              <strong>｜ 「潮間映夜」Ｘ 露天電影</strong><br />
              傍晚19:20，藝術季將進入最後的章節——「電影放映」。我們將播放藝術季的紀錄片，回顧這段旅程的點滴，並精選一部電影——《海街日記》，邀請大家在銀幕前沈澱心境，與自身對話。在光影交錯間，藝術季的記憶將再次浮現，而潮汐的共鳴，也將在心中緩緩擴散。
            </p>
            <p className="text-left">
              閉幕式將以恬靜而溫暖的氛圍落幕，然而，這場藝術的浪潮，仍將繼續流動，陪伴我們走向更遼闊的未知之境。
            </p>
          </div>
        </div>
      </div>

      {/* 英文活動介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Activity Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝ As the tide recedes, it washes away the tears and footprints, but leaves behind ripples that continue to stir within our hearts. ❞
            </p>
            <p className="text-left">
              On May 16th (Friday), the closing ceremony invites participants to gather the reflections and emotions from the past two weeks. Centered around the theme of "Continuum," we hope the waves stirred by Rise & Fall will linger and resonate, extending the festival's gentle afterglow.
            </p>
            <p className="text-left">
              <strong>｜"Blue Tide Afternoon" X Picnic & Unplugged Performances</strong><br />
              Starting at 4:30 PM on the Zhenxing Lawn, join us for a laid-back picnic accompanied by unplugged performances from student bands Red-Eye Flight, The Wicked Witches, and Mori Hiwa. Let the melodies drift like a soft breeze, carrying the festival's memories and sentiments into the lingering waves of farewell.
            </p>
            <p className="text-left">
              <strong>｜"Message in a Bottle" X Interactive Installation</strong><br />
              At the same time, explore the interactive installation Messages in Bottles on the lawn, an outdoor art piece portraying the ocean's surface, mid, and deep layers—symbolizing our drifting and encounters along life's journey. Here, participants can write and exchange messages in bottles, allowing words and warmth to continue their voyage between people.
            </p>
            <p className="text-left">
              <strong>｜Tide-lit Night – Open-Air Cinema</strong><br />
              At 7:20 PM, the festival enters its final chapter with an open-air cinema. We'll screen the Arts Festival documentary, revisiting the moments shared throughout this journey, followed by a special feature film, <em>Our Little Sister</em>. Under the shimmering night sky, we invite everyone to quietly reflect and reconnect with themselves. In the dance of light and shadow, the memories of the festival will resurface, and the echoes of the tides will continue to ripple gently within.
            </p>
            <p className="text-left">
              The closing ceremony will end in a tranquil, heartfelt atmosphere—but the tides of art will keep flowing, accompanying us as we journey toward new and boundless horizons.
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
            {Array.from({ length: 26 }, (_, index) => (
              <div key={index + 1} className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
                <img 
                  src={`/all/ending-ceremony/${index + 1}.png`} 
                  alt={`Ending Ceremony Activity ${index + 1}`} 
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