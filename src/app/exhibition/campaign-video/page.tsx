import Image from 'next/image';

export default function CampaignVideoExhibition() {
    return (
      <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
        {/* 黑色底圖層 */}
        <div className="fixed inset-0 z-0 bg-black"></div>
  
        {/* 主視覺區塊 - 手機和桌面共用背景，調整為 3:2 比例 */}
        <div className="relative w-full z-10 h-[100vh]">
          {/* 背景圖 */}
          <Image
            className="w-full h-full object-cover absolute inset-0 z-0"
            src="/all/campaign-video/1.png"
            alt="Exhibition Background"
            fill
            sizes="100vw"
            priority
            quality={40}
          />
          
          {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
          <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
            {/* 不顯示左上標題 */}
            <div className="self-start mt-8 ml-6 opacity-0">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">潮汐</h1>
              <p className="text-xs sm:text-base tracking-wide">Rise & Fall</p>
            </div>
          </div>
  
          {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
          <div className="hidden md:block relative w-full h-full z-10">
            
            {/* 左上標題與右下資訊 */}
            <div className="relative h-full w-full">
              {/* 不顯示左上標題 */}
              <div className="absolute top-12 left-12 opacity-0">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">潮汐</h1>
                <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Rise & Fall</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* 中文內容區塊 - 調整文字大小 */}
        <div className="relative z-10 py-10 md:py-14 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">理念</h2>
  
            <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
              <p className="text-left">
                青春，是被時光悄悄圈起的一段潮間帶。
              </p>
              <p className="text-left">
                在人群來去的間隙中，她常感到自己滯留在原地，像座無形島嶼，被潮汐靜靜圈起——循環反覆間，她所認識的自己模糊在人群裡。
              </p>
              <p className="text-left">
                她把說不出口的思緒，一張張寫進紙裡，封入瓶中，用遞交取代逃逸的方式：她將自己交付給潮水，任其漂流、等待，或是抵達。
              </p>
              <p className="text-left">
                潮聲未曾回應，卻在夜裡一次次回返。時間如海水般緩慢卻堅定，將她雕琢成與世界更契合的形狀。
              </p>
              <p className="text-left">
                直到某天清晨，她看見遠方有個熟悉的身影，踩著海光走來。她奔跑、駐足，心中的流動有了節奏。
              </p>
              <p className="text-left">
                不是所有夢都需要喧囂，有些夢，只需沉默地生長於光的邊緣。
              </p>
              <p className="text-left">
                她拾起一顆被海磨平的石頭，感受指尖的溫涼，那些未說出的話，未寫完的信，都未被遺忘，而是在潮間慢慢長出自己的形狀。
              </p>
              <p className="text-left">
                她站起身，不再等待，也不再回頭。
              </p>
              <p className="text-left">
                朝著潮水的方向踏出步伐，輕巧而堅定。倒影隨步伐與海平線重疊——
              </p>
            </div>
          </div>
        </div>
  
        {/* 英文內容區塊 */}
        <div className="relative z-10 py-10 md:py-14 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Concept</h2>
  
            <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
              <p className="text-left">
                Youth is an intertidal zone enclosed by time.
              </p>
              <p className="text-left">
                In the crowd, she felt stranded as an island circled by tides. Within the repeated flows, her self blurred into faceless masses.
              </p>
              <p className="text-left">
                She folded unspoken thoughts and sealed them in bottles.
              </p>
              <p className="text-left">
                She handed them over to the tides. They didn't answer, but always returned on quiet nights. Time moved—slow yet unwavering—sculpting her to fit within the world.
              </p>
              <p className="text-left">
                One morning, she saw another version of herself bathed in shimmering sea light. She stood still. There was no sound, only a steady flow from within.
              </p>
              <p className="text-left">
                The tides arrived. She returned to her desk. Moonlight spilled over her handwriting. They had not faded; but hidden in the texture of time.
              </p>
              <p className="text-left">
                From afar, that other self gazed quietly, saying: You've always been progressing. You just never look back at yourself.
              </p>
              <p className="text-left">
                She picked up a stone smoothed by the sea. A subtle tremor pulsed through. Those unfinished sentences were not washed away —they had taken shape within the tides.
              </p>
              <p className="text-left">
                And so she walked toward the incoming sea.
              </p>
              <p className="text-left">
                She marched in the intertidal zone. Her reflection aligned, quietly, with the horizon.
              </p>
            </div>
          </div>
        </div>
  
        {/* 製作團隊區塊 - 電影片尾風格 */}
        <div className="relative z-10 py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center space-y-10">
              <div className="space-y-2">
                <p className="text-x font-light">導演 Director</p>
                <p className="text-x font-light">何建緯 Marshall Ho</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">監製 Executive Producer</p>
                <p className="text-x font-light">李宥辰 Humphrey Li</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">製片 Producer</p>
                <p className="text-x font-light">黃楷翔 Kai</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">演員 Actor/Actress</p>
                <p className="text-x font-light">李芷妤 ivy lee</p>
                <p className="text-x font-light">陳綺涵</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">攝影 DOP</p>
                <p className="text-x font-light">吳澤昊 wuzo</p>
                <p className="text-x font-light">張煥霖 chled</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">攝影助理 Assistant Camera</p>
                <p className="text-x font-light">陳書淳</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">花絮攝影 BTS Photographer</p>
                <p className="text-x font-light">林鈺程 JKKK</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">燈光 Gaffer</p>
                <p className="text-x font-light">温皓晨 Hao Chen Wen</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">燈光助理 Best Boy</p>
                <p className="text-x font-light">許牧學 Xu Mu-Hsueh</p>
                <p className="text-x font-light">莊正威 William Zhuang</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">美術 Art Director</p>
                <p className="text-x font-light">黃姵昕 PX HUANG</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">美術助理 Art Assistant</p>
                <p className="text-x font-light">施妍安 YanAn Shih</p>
                <p className="text-x font-light">蔡柏諒 Bo Liang Tsai</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">後期導演 Post-production Director</p>
                <p className="text-x font-light">邱奕筌 ERCYN</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">調光師 Colorist</p>
                <p className="text-x font-light">小帥</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-[6px] font-light">聲音設計 Sound Design</p>
                <p className="text-x font-light">顏英琪 Coca</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">文案 Copywriter</p>
                <p className="text-x font-light">李宥辰 Humphrey Li</p>
                <p className="text-x font-light">陳子安 Gillian</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-[6px] font-light">製片助理 Production Assistant</p>
                <p className="text-x font-light">賴晉億 Chin Yi Lai</p>
                <p className="text-x font-light">劉韋杰 Jerry Mice</p>
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