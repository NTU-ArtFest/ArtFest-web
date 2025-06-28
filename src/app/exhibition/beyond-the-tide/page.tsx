import Image from 'next/image';

export default function BeyondTheTideExhibition() {
    return (
      <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue'" }}>
        {/* 黑色底圖層 */}
        <div className="fixed inset-0 z-0 bg-black"></div>
  
        {/* 主視覺區塊 - 手機和桌面共用背景，調整為 3:2 比例 */}
        <div className="relative w-full z-10 h-[100vh]">
          {/* 背景圖 - 亮度調低 */}
          <div className="absolute inset-0 bg-black z-0"></div>
          <Image
            className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
            src="/all/beyond-the-tide/1.png"
            alt="Exhibition Background"
            fill
            sizes="100vw"
            priority
            quality={40}
          />
          {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
          <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
            {/* 左上標題 - 縮小字體 */}
            <div className="self-start mt-8 ml-6">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">潮之外：錯位與形變</h1>
              <p className="text-xs sm:text-base tracking-wide">Beyond the Tide: Displacement and Transformation</p>
            </div>
                      
            {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
            <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
              <p className="mb-1"><span className="font-bold text-[8px]">策展團隊</span><br />
              <span className="text-[6px]">
              張瑜真、封親靈、江侑蓁
              </span></p>
              
              <p><span className="font-bold text-[8px]">參展單位</span><br />
              <span className="text-[6px]">徐瑞藝術家、陳健文藝術家、王奕凡藝術家</span></p>
              
              <p><span className="font-bold text-[8px]">合作單位</span><br />
              <span className="text-[6px]">寶藏巖國際藝術村 Treasure Hill Artist Village</span></p>
              
              <p><span className="font-bold text-[8px]">展覽媒材</span><br />
              <span className="text-[6px]">聲音互動裝置、影音作品</span></p>
              
              <p><span className="font-bold text-[8px]">展覽時間</span><br />
              <span className="text-[6px]">5/2~5/16 9:00-17:00（The exhibition is closed on Mondays）</span></p>
              
              <p><span className="font-bold text-[8px]">展覽地點</span><br />
              <span className="text-[6px]">水源市場2樓059號空間</span></p>
            </div>
          </div>
  
          {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
          <div className="hidden md:block relative w-full h-full z-10">
            
            {/* 左上標題與右下資訊 */}
            <div className="relative h-full w-full">
              <div className="absolute top-12 left-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">潮之外：錯位與形變</h1>
                <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Beyond the Tide: Displacement and Transformation</p>
              </div>
              
              {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
              <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
                <p className="mb-1"><span className="font-bold text-sm md:text-base">策展團隊</span><br />
                <span className="text-xs md:text-sm">
                    張瑜真、封親靈、江侑蓁
                </span></p>
                
                <p><span className="font-bold text-sm md:text-base">參展單位</span><br />
                <span className="text-xs md:text-sm">徐瑞藝術家、陳健文藝術家、王奕凡藝術家</span></p>
                
                <p><span className="font-bold text-sm md:text-base">合作單位</span><br />
                <span className="text-xs md:text-sm">寶藏巖國際藝術村 Treasure Hill Artist Village</span></p>
                
                <p><span className="font-bold text-sm md:text-base">展覽媒材</span><br />
                <span className="text-xs md:text-sm">聲音互動裝置、影音作品</span></p>
                
                <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
                <span className="text-xs md:text-sm">5/2~5/16 9:00-17:00（The exhibition is closed on Mondays）</span></p>
                
                <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
                <span className="text-xs md:text-sm">水源市場2樓059號空間</span></p>
              </div>
            </div>
          </div>
        </div>
  
        {/* 展覽介紹區塊 - 調整文字大小 */}
        <div className="relative z-10 py-10 md:py-14 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">展覽介紹</h2>
  
            <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
              <p className="text-left">
                海洋中的潮汐正常每天會經歷兩次漲潮與退潮的週期，相隔約12小時25分鐘，但因為受到月球繞地球公轉的影響，使得每天的週期時間會有一些不同，而人們仍將潮汐視為一種具規律性的自然循環。
              </p>
              <p className="text-left">
                人如同潮汐受外在環境制約、影響，我們不時向世界傳達自我意識，卻也遵循著社會規範，被形塑出看似一致且規律的身體與作息。然而生活不會總是照著寫好的劇本走，偶爾會因為突發事件，或僅僅是個人特質，我們在一次、兩次的落後中，逐漸脫離規律，緩緩潛入所謂的「混亂」。在進入「混亂」的時區後，我們突然從惶恐與挫敗中領悟到：我們或許從來不認識自己。外在社會與內在的自我互相牽絆拉扯，拉扯的過程或許會經歷痛苦與自我懷疑，但這些都讓我們更認識自己，也逐步摸索出自己最舒適的時區，然後開始思考：社會規範的規律與規則，真的是「正常」嗎？應該學習適應環境還是突破困境，或是，我們有其他選擇呢？
              </p>
            </div>
          </div>
        </div>
  
        {/* 英文展覽介紹區塊 */}
        <div className="relative z-10 py-10 md:py-14 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Exhibition Introduction</h2>
  
            <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
              <p className="text-left">
                Tides in the ocean typically go through two high and low tides each day, with intervals of about 12 hours and 25 minutes. However, due to the moon's orbit around the Earth, this cycle varies slightly each day. Still, people regard tides as a form of regular natural rhythm.
              </p>
              <p className="text-left">
                Humans, like tides, are influenced and constrained by the external environment. We constantly express our self-awareness to the world, yet follow social norms that shape us into seemingly consistent and regulated bodies and routines. However, life doesn't always follow a predetermined script. Sometimes, unexpected events or even just personal traits lead us to fall behind once or twice, gradually drifting away from regularity and slowly entering what is considered "chaos."
              </p>
              <p className="text-left">
                After entering this "chaotic" timezone, we suddenly come to realize through fear and frustration that perhaps we never truly knew ourselves. The push and pull between external society and the internal self may be painful and filled with self-doubt, but it also helps us better understand who we are, and gradually discover the time zone we feel most comfortable in. Then we begin to question: are the routines and rules defined by social norms really "normal"? Should we adapt to the environment, break through adversity, or—is there another choice?
              </p>
            </div>
          </div>
        </div>
  
        {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">作品展示 Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 作品1 */}
            


            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/beyond-the-tide/1.png" 
                alt="Beyond the Tide Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/beyond-the-tide/2.png" 
                alt="Beyond the Tide Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/beyond-the-tide/3.png" 
                alt="Beyond the Tide Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/beyond-the-tide/4.png" 
                alt="Beyond the Tide Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品5 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/beyond-the-tide/5.png" 
                alt="Beyond the Tide Exhibition 5" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
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