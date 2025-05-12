import Image from 'next/image';

export default function ContinuumExhibition() {
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
            src="/all/continuum/2.png"
            alt="Exhibition Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            quality={40}
            placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          
          {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
          <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
            {/* 左上標題 - 縮小字體 */}
            <div className="self-start mt-8 ml-6">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">延續</h1>
              <p className="text-xs sm:text-base tracking-wide">Continuum</p>
            </div>
                      
            {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
            <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
              <p className="mb-1"><span className="font-bold text-[8px]">策展團隊</span><br />
              <span className="text-[6px]">
              李宥辰、江侑蓁、曾子珉
              </span></p>
              
              <p><span className="font-bold text-[8px]">平面設計</span><br />
              <span className="text-[6px]">黃丞琳</span></p>
              
              <p><span className="font-bold text-[8px]">展覽時間</span><br />
              <span className="text-[6px]">5/2~5/16 10:00-20:00</span></p>
              
              <p><span className="font-bold text-[8px]">展覽地點</span><br />
              <span className="text-[6px]">國立臺灣大學第一學生活動中心B 藝文展示室</span></p>
            </div>
          </div>
  
          {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
          <div className="hidden md:block relative w-full h-full z-10">
            
            {/* 左上標題與右下資訊 */}
            <div className="relative h-full w-full">
              <div className="absolute top-12 left-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">延續</h1>
                <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Continuum</p>
              </div>
              
              {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
              <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
                <p className="mb-1"><span className="font-bold text-sm md:text-base">策展團隊</span><br />
                <span className="text-xs md:text-sm">
                    李宥辰、江侑蓁、曾子珉
                </span></p>
                
                <p><span className="font-bold text-sm md:text-base">平面設計</span><br />
                <span className="text-xs md:text-sm">黃丞琳</span></p>
                
                <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
                <span className="text-xs md:text-sm">5/2~5/16 10:00-20:00</span></p>
                
                <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
                <span className="text-xs md:text-sm">國立臺灣大學第一學生活動中心B 藝文展示室</span></p>
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
                ❝如同年輪刻劃於樹幹或石面上悄然浮現的紋理。《生長紋》是時間留下的藝術肌理，也是三十年臺大藝術季共同累積的生命紋路。❞
              </p>
              <p className="text-left">
                展覽試圖以歷屆主視覺、創作物件與過往活動的實體紀錄為經緯，梳理藝術季如何在時代更迭中漸漸成形——
              </p>
              <p className="text-left">
                從最初的學生行動到逐步建構的策劃體系，每一屆的創作、每一次的嘗試，都在石面上刻下一道獨屬當時的生長痕跡。
              </p>
              <p className="text-left">
                延續，不是靜止的保存，而是在記憶與創造之間，持續生成的動態過程。
              </p>
              <p className="text-left">
                《生長紋》回望的不只是歷史，更是一次邀請，邀請你傾聽藝術與校園文化如何在層層積累中，成為今日我們所處的場域與視野。
              </p>
              <p className="text-left">
                願每個人能夠在這些沉靜的紋理中，看見時間如何塑形、藝術如何滲透，也看見自己，在這條尚未結束的紋路上，正慢慢延續著新的故事。
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
                ❝Like the subtle lines that emerge on the surface of tree trunks or stone over time, Striations of Growth captures the textured imprint of time—an artistic grain left behind by thirty years of the NTU Art Festival.❞
              </p>
              <p className="text-left">
                This exhibition seeks to trace the formation of the NTU Art Festival across decades, weaving together past key visuals, creative objects, and archival documentation.
              </p>
              <p className="text-left">
                From its origins in student-led initiatives to the evolution of a structured curatorial system, each edition has carved its own distinct striation into the stone—marking time through art.
              </p>
              <p className="text-left">
                To "continue" is not to preserve in stillness, but to remain in motion—constantly regenerating between memory and creation.
              </p>
              <p className="text-left">
                Striations of Growth is not only a retrospective, but also an invitation: an invitation to listen to how art and campus culture have formed, layer by layer, shaping the space we now inhabit and the perspectives we now hold.
              </p>
              <p className="text-left">
                May every viewer, through these quiet striations, witness how time sculpts, how art permeates, and how each of us carries forth a new story—one that gently extends across this still-unfolding terrain of growth.
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
                          src="/all/continuum/2.png" 
                          alt="Continuum Exhibition 1" 
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