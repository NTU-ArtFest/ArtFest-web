import Image from 'next/image';

export default function TidewatchPavilionExhibition() {
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
          src="/all/tidewatch-pavilion/1.png"
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
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">觀潮亭</h1>
            <p className="text-xs sm:text-base tracking-wide">Tidewatch Pavilion</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">設計團隊</span><br />
            <span className="text-[6px]">
            李宥辰、林鴻
            </span></p>
            
            <p><span className="font-bold text-[8px]">製作團隊</span><br />
            <span className="text-[6px]">李宥辰、林鴻、悅山工坊</span></p>
            
            <p><span className="font-bold text-[8px]">展覽時間</span><br />
            <span className="text-[6px]">5/2~5/24 10:00-19:00</span></p>
            
            <p><span className="font-bold text-[8px]">展覽地點</span><br />
            <span className="text-[6px]">國立臺灣大學總圖前振興草皮</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">觀潮亭</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Tidewatch Pavilion</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">設計團隊</span><br />
              <span className="text-xs md:text-sm">
                  李宥辰、林鴻
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">製作團隊</span><br />
              <span className="text-xs md:text-sm">李宥辰、林鴻、悅山工坊</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
              <span className="text-xs md:text-sm">5/2~5/24 10:00-19:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學總圖前振興草皮</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 展覽介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">展品介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝潮水總在不經意間靠近，捎來回聲，也捲走遺忘；我們都在流動中，逐漸成形。❞
            </p>
            <p className="text-left">
              如同潮水中浮現的一方棲身之所，《觀潮亭》邀請人們駐足、凝視，在本屆以「潮間帶」作為臺大校園隱喻的藝術季中，重新與自己在時間與生命的流動裡相遇。
            </p>
            <p className="text-left">
              它矗立於總圖與椰林大道之間為一處過渡的節點，讓我們在過往與未來之間，短暫停留、緩慢凝視。
            </p>
            <p className="text-left">
              以曲線構築的空間設計， 承載著對「潮汐」與「觀看」的雙重隱喻。白日如展亭，開放凝望；夜晚則是結合光影裝置，以律動的燈光模擬潮汐起伏， 陪伴觀者在日夜交替中，思索變動、成長與時間的方向。
            </p>
            <p className="text-left">
              我們期盼，《觀潮亭》不僅是一件裝置藝術，更是一座象徵性的地標——它承載藝術季三十年來的集體記憶，也召喚著那些尚未說出口的故事、尚未完成的理想。
            </p>
            <p className="text-center my-4">
              ˙⟡ 潮來潮往之間，你會發現，原來你也正在流動之中。 જ⁀˙
            </p>
          </div>
        </div>
      </div>

      {/* 英文展覽介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Installation Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝Tides always arrive unexpectedly—bringing echoes, carrying away the forgotten. We are all shaped by the flow.❞
            </p>
            <p className="text-left">
              Like a shelter emerging from the tide, Tidewatch Pavilion invites visitors to pause and reflect.
            </p>
            <p className="text-left">
              In this year's NTU Arts Festival—where the "intertidal zone" serves as a metaphor for campus life—we are invited to meet ourselves again in the flow of time and life.
            </p>
            <p className="text-left">
              Standing between the Main Library and Palm Boulevard, the pavilion becomes a transitional space, offering a moment of stillness between the past and the future.
            </p>
            <p className="text-left">
              Its curving structure embodies dual metaphors of "tide" and "gaze." By day, it opens like a viewing pavilion; by night, light installations mimic the rhythmic ebb and flow of tides, guiding visitors through shifting light and shadow to contemplate change, growth, and the passage of time.
            </p>
            <p className="text-left">
              We hope this pavilion is not just an installation, but a symbolic landmark—carrying the collective memory of the Arts Festival's 30-year journey, and calling forth stories yet untold, dreams yet fulfilled.
            </p>
            <p className="text-center my-4">
              ˙⟡ In the coming and going of the tide, you may realize: you, too, are in motion. જ⁀˙
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
                src="/all/tidewatch-pavilion/1.png" 
                alt="Tidewatch Pavilion Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/tidewatch-pavilion/2.png" 
                alt="Tidewatch Pavilion Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/tidewatch-pavilion/3.png" 
                alt="Tidewatch Pavilion Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>

            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/tidewatch-pavilion/4.png" 
                alt="Tidewatch Pavilion Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>

            {/* 作品5 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/tidewatch-pavilion/5.png" 
                alt="Tidewatch Pavilion Exhibition 5" 
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