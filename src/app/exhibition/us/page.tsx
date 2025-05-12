import Image from 'next/image';

export default function UsExhibition() {
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
          src="/all/us/1.png"
          alt="Exhibition Background"
          fill
          sizes="100vw"
          priority
          quality={80}
        />
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">我們</h1>
            <p className="text-xs sm:text-base tracking-wide">US《 OOoOO》</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策展團隊</span><br />
            <span className="text-[7px]">
            李侑蓁、陳庭妤、林佩㚬
            </span></p>
            
            <p><span className="font-bold text-[8px]">製作團隊</span><br />
            <span className="text-[7px]">李宥辰、許秝榳、佘秉修、江妍恩、石英佐<br/>劉芸辰、楊楀潔、謝磊、戴其恩、沈若涵、黃芷柔</span></p>
            
            <p><span className="font-bold text-[8px]">展覽時間</span><br />
            <span className="text-[7px]">5/2~5/16 10:00-20:00</span></p>
            
            <p><span className="font-bold text-[8px]">展覽地點</span><br />
            <span className="text-[7px]">國立臺灣大學第一學生活動中心B 藝文展示室</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">我們</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">US《OOoOO》</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策展團隊</span><br />
              <span className="text-xs md:text-sm">
                  李侑蓁、陳庭妤、林佩㚬
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">製作團隊</span><br />
              <span className="text-xs md:text-sm">
                李宥辰、許秝榳、佘秉修、江妍恩、石英佐<br/>
                劉芸辰、楊楀潔、謝磊、戴其恩、沈若涵、黃芷柔
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
              <span className="text-xs md:text-sm">5/2~5/16 10:00-20:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學第一學生活動中心B 藝文展示室</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 策劃理念區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">策劃理念</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              你還記得自己原本的模樣嗎？
            </p>
            <p className="text-left">
              從童年的自由塗鴉、家庭的耳語叮嚀、教室裡的密密麻麻筆記，到社會裡那些「你應該」的聲音——我們都在一次次的碰撞中，被磨成了相似卻不同的形狀。
            </p>
            <p className="text-left">
              走進展場，走過那些影響你成長的瞬間。最後、挑一顆石頭，畫上此刻的你，留下你重新定義的模樣。
            </p>
            <p className="text-left">
              本次藝術季透過展覽—我們《OoO》，期望大家能夠摸索、追尋、看見自己的模樣。
            </p>
          </div>
        </div>
      </div>

      {/* 英文策劃理念區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Curatorial Concept</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              Do you still remember what you once were?
            </p>
            <p className="text-left">
              From the carefree doodles of childhood, the soft whispers of family, the densely packed notes in the classroom, to the "you should" voices in society — we have all been shaped, through countless collisions, into forms that are alike yet distinct.
            </p>
            <p className="text-left">
              Step into the exhibition and walk through those moments that have shaped your growth. In the end, choose a stone, draw yourself as you are in this moment, and leave behind your redefined self. 🪨
            </p>
            <p className="text-left">
              Through the exhibition "We Are 《OoO》," the art season hopes to guide everyone in exploring, seeking, and truly seeing who they are.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">作品展示 Featured Works</h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 作品1 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/1.png" 
                alt="US Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/2.png" 
                alt="US Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/3.png" 
                alt="US Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/4.png" 
                alt="US Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品5 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/5.png" 
                alt="US Exhibition 5" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品6 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/6.png" 
                alt="US Exhibition 6" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            
            {/* 作品7 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/us/7.png" 
                alt="US Exhibition 7" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
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