export default function Exhibition() {
  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
      {/* 黑色底圖層 */}
      <div className="fixed inset-0 z-0 bg-black"></div>

      {/* 嵌入影片區：全螢幕播放，無進度條 */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        {/* 背景圖片 */}
        <img 
          src="/exhibition/video_bg.png"
          alt="Background for video"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        />
        <video
          className="w-full h-full object-contain relative z-10"
          src="/exhibition/tidal.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* <div className="absolute inset-0 bg-black/40 z-20"></div> */}
      </div>

      {/* 主視覺區塊 - 手機和桌面共用背景 */}
      <div className="relative w-full min-h-screen z-10">
        {/* 背景圖 - 亮度調低 */}
        <div className="absolute inset-0 bg-black z-0"></div>
        <img
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
          src="/exhibition/sea.png"
          alt="Exhibition Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">潮間帶</h1>
            <p className="text-xs sm:text-base tracking-wide">影像展</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[10px]">策劃團隊</span><br />
            <span className="text-[8px]">
            游善喆、蔡政峰、劉韋杰<br />
            李宥辰、黃楷翔、邱子芹<br />
            涂峻豪、賴晉億、王厚仁<br />
            蘇晏禾、屈言真、曾得恩<br />
            高翊茗、林昱安
            </span></p>
            
            <p><span className="font-bold text-[10px]">指導單位</span><br />
            <span className="text-[8px]">跨領域藝術課程 — 陶亞倫教授、金天尹助教</span></p>
            
            <p><span className="font-bold text-[10px]">合作單位</span><br />
            <span className="text-[8px]">國立臺灣大學 戲劇學系</span></p>
            
            <p><span className="font-bold text-[10px]">展覽媒材</span><br />
            <span className="text-[8px]">生成式互動影像裝置</span></p>
            
            <p><span className="font-bold text-[10px]">展覽時間</span><br />
            <span className="text-[8px]">5/6-5/15 18:30-21:30</span></p>
            
            <p><span className="font-bold text-[10px]">展覽地點</span><br />
            <span className="text-[8px]">國立臺灣大學 外教中心實驗劇場</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full min-h-screen z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-screen w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">潮間帶</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">影像展</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策劃團隊</span><br />
              <span className="text-xs md:text-sm">
                  游善喆、蔡政峰、劉韋杰<br />
                  李宥辰、黃楷翔、邱子芹<br />
                  涂峻豪、賴晉億、王厚仁<br />
                  蘇晏禾、屈言真、曾得恩<br />
                  高翊茗、林昱安
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">指導單位</span><br />
              <span className="text-xs md:text-sm">跨領域藝術課程 — 陶亞倫教授、金天尹助教</span></p>
              
              <p><span className="font-bold text-sm md:text-base">合作單位</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 戲劇學系</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽媒材</span><br />
              <span className="text-xs md:text-sm">生成式互動影像裝置</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
              <span className="text-xs md:text-sm">5/6-5/15 18:30-21:30</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 外教中心實驗劇場</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 引文區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-5 font-light">
            <p className="text-center italic">
              「臺大是潮間帶，我們比任何人都還要貼近這個時代。
              <br />
              這裡是高溫高鹽的環境，環境因子變化好大……
              <br /><br />
              但同時，這裡具有高營養價值，也是輕盈河流奔赴向穩當大海的過渡帶。」
            </p>
            <p className="text-center italic">
              「大大的星球拉動著整個世界的海，小小的我們在陸地邊界，努力學習，
              <br />
              逐漸地找到我們的特質、我們的生存法則。
              <br /><br />
              而你，將在這片潮間帶裡，發現屬於自己的特質與生存法則。」
            </p>
          </div>
        </div>
      </div>

      {/* 展覽介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">展覽介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              《潮間帶》影像展以生成式藝術為創作核心，運用其隨機性與互動性，探討規律潮汐下的總總「不規律」：觀者的身體與行為將打破規律，以著流動的行動、視線、思考回應潮汐，讓每一次的觀看都成為獨特傑作。
            </p>
            <p className="text-left">
              本次展覽於外教中心實驗劇場打造沉浸式場域，運用三面牆面與地板投影，建構如潮水般包覆身體的影像場景。你將行走在波光與資訊的交界，在當中感受自我與環境之間那若有似無的連結。
            </p>
            <p className="text-left">
              當星球的引力拉動整座海洋，小小的我們，也在陸地邊界學習與成長。而你，將在這片潮間帶裡，發現屬於自己的特質與生存法則。
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">作品展示</h2>
          
          {/* 作品一：光芒中的人們 */}
          <div className="max-w-6xl mx-auto mb-14 md:mb-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10">

              {/* 作品圖片 */}
              <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="/exhibition/ppl_in_light.png" 
                  alt="光芒中的人們" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* 作品說明 - 調整文字大小 */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-base md:text-xl font-medium mb-3 md:mb-5 tracking-wide uppercase">光芒中的人們</h3>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm font-light leading-relaxed">
                  <p>
                    《光芒中的人們》引導觀者緩緩下潛，尋找埋藏於心底最深處的熠熠星光。
                  </p>
                  <p>
                    觀者以肢體主導畫面，回應內在映像。隨著持續下潛，畫面逐步轉化，從現實輪廓中緩緩溶解，進入更純粹而抽象的情感層域。於是，那些被日常掩蓋、被時間遺忘的記憶與情感，在流動的光影中悄然甦醒。
                  </p>
                  <p>
                    當人們與光相遇後，模樣將變得清晰而明亮，彼此映照，交織成一片溫柔光海。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 作品二：群像流 */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10">

              {/* 作品圖片 */}
              <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="/exhibition/ppl_in_wave.png" 
                  alt="群像流" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* 作品說明 - 調整文字大小 */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-base md:text-xl font-medium mb-3 md:mb-5 tracking-wide uppercase">群像流</h3>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm font-light leading-relaxed">
                  <p>
                    在一個如潮汐般律動的通道中，人流無聲地穿梭。這空間不是靜止的，而是流動的，是一條被凝視與回望交織成的河道。觀者步入其間，便彷彿踏入一場被觀看與共感推動的漣漪，身體、意識、視線皆被卷入這無盡的流動當中。
                  </p>
                  <p>
                    《群像流》是一件探索「自我與他者」、「觀看與被觀看」之間關係的互動式影像裝置作品。觀者的身形以影像方式呈現在裝置的最前方，成為作品的核心與起點，而左右兩側無數上半身模型則構成了一條無盡的人海走廊，如同社會中眾聲喧嘩的匿名集體，凝視並包圍著每一位進入場域的人。
                  </p>
                  <p>
                    當照相機週期性地往前與往後運動時，不僅產生視覺上的流動感，也暗示了人與人之間無形的牽引與反饋。觀者在場域內的存在透過鏡像與水波被映射到畫面中，象徵個體在群體中的流動與擾動——每一個行動、每一個存在，皆在無聲之中產生影響與回應。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版權聲明 */}
      <footer className="relative z-10 py-5 md:py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-xs">
            © 2025 《潮間帶》影像展 | 臺大藝術季團隊
          </p>
        </div>
      </footer>
    </div>
  );
}