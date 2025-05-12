import Image from 'next/image';

export default function ConveyanceExhibition() {
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
          src="/all/conveyance/1.png"
          alt="Exhibition Background"
          fill
          sizes="100vw"
          priority
          quality={20}
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">傳遞</h1>
            <p className="text-xs sm:text-base tracking-wide">Conveyance《•• • • • ••》</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策展團隊</span><br />
            <span className="text-[6px]">
            李宥辰、封親靈
            </span></p>
            
            <p><span className="font-bold text-[8px]">參展單位</span><br />
            <span className="text-[6px]">陳楷恩藝術家</span></p>
            
            <p><span className="font-bold text-[8px]">創作團隊</span><br />
            <span className="text-[6px]">李宥辰、封親靈、蔡政峰、黃楷翔、劉韋杰<br/>王厚仁、林昱安、屈言真、蘇晏禾、林冠鋐<br/>江侑蓁、臧逸新、徐婕芸、李嘉昕、張芷嫣<br/>陳亮穎、陳睿瀚、陳昱璇</span></p>
            
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
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">傳遞：情感關係中的漫反射</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Conveyance《•• • • • ••》:Diffuse Reflections in Emotional Relationships</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策展團隊</span><br />
              <span className="text-xs md:text-sm">
                  李宥辰、封親靈
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">參展單位</span><br />
              <span className="text-xs md:text-sm">陳楷恩藝術家</span></p>
              
              <p><span className="font-bold text-sm md:text-base">創作團隊</span><br />
              <span className="text-xs md:text-sm">
                李宥辰、封親靈、蔡政峰、黃楷翔、劉韋杰<br/>
                王厚仁、林昱安、屈言真、蘇晏禾、林冠鋐<br/>
                江侑蓁、臧逸新、徐婕芸、李嘉昕、張芷嫣<br/>
                陳亮穎、陳睿瀚、陳昱璇
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
              當光線穿過不同介質，會因折射率的差異產生漫反射，光不再朝單一方向傳遞，而是四散、模糊、彎折。
            </p>
            <p className="text-left">
              本展以此自然現象為比喻，探討情感在不同世代、不同人際、不同感知之間的傳遞過程。當「我」與「你」之間存在著價值觀的差異、語境的斷裂，情緒如同光線進入不均勻介質，無法直接映照，只能在重重折返與失焦中，緩慢流動。
            </p>
            <p className="text-left">
              展覽透過影像、聲音、互動裝置等多媒材，模擬情感訊號在世代交錯中的傳導、衰減與迴響，回應那些未被理解的話語、停留在中間地帶的溫柔與遺憾，也邀請觀者重新思考，在彼此「不一致」的介質中，是否仍有可能建立起微光的共感。
            </p>
            <p className="text-left">
              這場展覽，試圖讓你體會——<br/>
              在情感難以直通的時代，我們或許都只能在漫反射中，<br/>
              以一種模糊卻溫柔的方式，與彼此靠近。<br/>
              每段訊息，都是一次觸碰。<br/>
              每段傳遞，都是一次理解的練習。<br/>
              °⭑ 願我們能在彼此的不一致中，找到共鳴的光斑。˖°. ⋆˙
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
              When light passes through different media, variations in refractive index cause diffuse reflection. Light no longer travels in a single, direct path—it scatters, blurs, and bends.
            </p>
            <p className="text-left">
              This exhibition draws from that natural phenomenon as a metaphor for the transmission of emotion across generations, interpersonal dynamics, and modes of perception.
            </p>
            <p className="text-left">
              When differences in values or ruptures in language arise between "you" and "me," emotions become like light entering an uneven medium—unable to reflect clearly, they flow slowly through layers of redirection and defocus.
            </p>
            <p className="text-left">
              Through video, sound, and interactive installations, the exhibition simulates the way emotional signals transmit, decay, and echo across generational intersections. It responds to unspoken words, tenderness suspended in the in-between, and lingering regrets. Viewers are invited to reconsider: in the midst of our fragmented perceptions, is it still possible to forge subtle, glimmering connections?
            </p>
            <p className="text-left">
              This exhibition invites you to feel—<br/>
              In an era where emotions rarely reach their destination intact,<br/>
              perhaps all we can do is draw near through diffuse reflections—<br/>
              a blurred, but gentle approach to closeness.<br/>
              Every signal is a moment of contact.<br/>
              Every transmission is a practice in understanding.<br/>
              °⭑May we find glimmers of resonance<br/>
              amid the dissonance between us. ˖°. ⋆˙
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
                src="/all/conveyance/1.png" 
                alt="Conveyance Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/conveyance/2.png" 
                alt="Conveyance Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/conveyance/3.png" 
                alt="Conveyance Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/conveyance/4.png" 
                alt="Conveyance Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品5 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/conveyance/5.png" 
                alt="Conveyance Exhibition 5" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品6 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/conveyance/6.png" 
                alt="Conveyance Exhibition 6" 
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