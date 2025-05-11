export default function TheWaveExhibition() {
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
          src="/all/the-wave/1.png"
          alt="Exhibition Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">海浪</h1>
            <p className="text-xs sm:text-base tracking-wide">The Wave Installation Art</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策劃團隊</span><br />
            <span className="text-[6px]">
            李宥辰、林鴻
            </span></p>
            
            <p><span className="font-bold text-[8px]">製作團隊</span><br />
            <span className="text-[6px]">李宥辰、林鴻、石英佐、魏銘志、林祈安、林致碩、謝磊</span><br />
            <span className="text-[6px]">張芷嫣、陳郁庭、戴其恩、江妍恩、曾子庭、林揚傑、吳驊祐</span><br />
            <span className="text-[6px]">楊楀潔、蔡宇恩、李逸寬、雷婷羽、王若瑜</span></p>

            <p><span className="font-bold text-[8px]">展出地點</span><br />
            <span className="text-[6px]">國立臺灣大學振興草皮</span></p>
            
            <p><span className="font-bold text-[8px]">展出時間</span><br />
            <span className="text-[6px]">05/05 – 05/15 10:00–19:00</span></p>
            
            <p><span className="font-bold text-[8px]">留言地點</span><br />
            <span className="text-[6px]">國立臺灣大學總圖一樓小展廳</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">海浪</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">The Wave Installation Art</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策劃團隊</span><br />
              <span className="text-xs md:text-sm">
                  李宥辰、林鴻
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">製作團隊</span><br />
                <span className="text-xs md:text-sm">李宥辰、林鴻、石英佐、魏銘志、林祈安、林致碩、謝磊</span><br />
                <span className="text-xs md:text-sm">張芷嫣、陳郁庭、戴其恩、江妍恩、曾子庭、林揚傑、吳驊祐</span><br />
                <span className="text-xs md:text-sm">楊楀潔、蔡宇恩、李逸寬、雷婷羽、王若瑜</span></p>

              <p><span className="font-bold text-sm md:text-base">展出地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學振興草皮</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展出時間</span><br />
              <span className="text-xs md:text-sm">05/05 – 05/15 10:00–19:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">留言地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學總圖一樓小展廳</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 展覽介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">展覽介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝願這片星海，替你收藏下那句還沒說的話，也將這段旅程，悄悄照亮❞
            </p>
            <p className="text-left">
              如同潮汐之間微光閃爍的願望，《星想事成》邀請人們寫下心中那句尚未說出口的話，將情感透過星星紙，輕輕置入流動的海浪之中，替無聲的祝福、悄悄的願望，尋得一處安放之所。
            </p>
            <p className="text-left">
              作為第30屆臺大藝術季「浪潮30動態地景藝術」專案之一，此活動結合互動書寫、空間裝置與拍照紀念，邀請參與者透過留言、串入《海浪》裝置藝術，隨著每日群眾參與，而有所變化，最終將每一個人的思念，編織成眾人共同記憶的流光。
            </p>
            <div className="text-center space-y-2 my-6">
              <p>✧˖°⭑ ⋆˙✧˖°. ⋆˙</p>
              <p>白日裡，星星如願望閃耀，</p>
              <p>夜晚隨海浪起伏，在燈影中微微顫動——</p>
              <p>每一張紙，都是某段人生的片語；</p>
              <p>每一顆星，都是某段情感的遙望。</p>
              <p>✧˖°⭑ ⋆˙✧˖°. ⋆˙</p>
            </div>
            <p className="text-left">
              我們期盼，《星想事成》不僅是一場互動體驗，更是一次與自己誠實對話的過程。
            </p>
            <p className="text-left">
              願這片星海，替你收藏下那句還沒說的話，也將這段旅程，悄悄照亮。
            </p>
          </div>
        </div>
      </div>

      {/* 英文展覽介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Exhibition Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝May this sea of stars hold the words you've yet to speak—and quietly light the path of your journey.❞
            </p>
            <p className="text-left">
              Like flickering wishes between the ebb and flow of tides, Starlit Whispers invites participants to write down the words left unspoken. Emotions are gently placed into the moving waves on star-shaped paper—creating a resting place for silent blessings and secret hopes.
            </p>
            <p className="text-left">
              As part of the 30th NTU Arts Festival Tide 30: Kinetic Land Art project, this installation combines interactive writing, spatial art, and commemorative photography. Participants are invited to leave messages that will become part of The Wave—an evolving installation that changes with daily contributions. Together, these pieces of remembrance form a luminous tapestry of collective memory.
            </p>
            <div className="text-center space-y-2 my-6">
              <p>✧˖°⭑ ⋆˙✧˖°. ⋆˙</p>
              <p>By day, the stars shimmer like wishes.</p>
              <p>By night, they sway with the waves, quivering in the glow—</p>
              <p>Each piece of paper, a fragment of someone's story;</p>
              <p>Each star, a distant gaze toward a feeling unspoken.</p>
              <p>✧˖°⭑ ⋆˙✧˖°. ⋆˙</p>
            </div>
            <p className="text-left">
              We hope Starlit Whispers is more than an interactive artwork—it is a quiet moment of honest dialogue with oneself.
            </p>
            <p className="text-left">
              May this sea of stars hold the words you've yet to speak—and quietly light the path of your journey.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">作品展示 Featured Works</h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 作品1 */}
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
              <img 
                src="/all/the-wave/1.png" 
                alt="The Wave Exhibition 1" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: '3/2' }}>
              <img 
                src="/all/the-wave/2.png" 
                alt="The Wave Exhibition 2" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
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