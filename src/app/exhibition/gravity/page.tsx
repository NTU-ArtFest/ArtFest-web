import Image from 'next/image';

export default function GravityExhibition() {
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
          src="/all/Gravity/1.png"
          alt="Exhibition Background"
          fill
          sizes="100vw"
          priority
          quality={10}
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">引力</h1>
            <p className="text-xs sm:text-base tracking-wide">Gravity: Trails of Influence</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策展團隊</span><br />
            <span className="text-[6px]">
            莊沛珣、陳姸均、李宜繡、蕭登允
            </span></p>
            
            <p><span className="font-bold text-[8px]">參展單位</span><br />
            <span className="text-[6px]">凌歆慧藝術家、臺大電影節 NTU MovieFest</span></p>
            
            <p><span className="font-bold text-[8px]">展覽媒材</span><br />
            <span className="text-[6px]">新媒體藝術裝置、互動裝置</span></p>
            
            <p><span className="font-bold text-[8px]">展覽時間</span><br />
            <span className="text-[6px]">5/2~5/16 10:00-20:00</span></p>
            
            <p><span className="font-bold text-[8px]">展覽地點</span><br />
            <span className="text-[6px]">臺灣大學第一學生活動中心 一樓 103、104 展示室</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">引力</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Gravity: Trails of Influence</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策展團隊</span><br />
              <span className="text-xs md:text-sm">
                  莊沛珣、陳姸均、李宜繡、蕭登允
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">參展單位</span><br />
              <span className="text-xs md:text-sm">凌歆慧藝術家、臺大電影節 NTU MovieFest</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽媒材</span><br />
              <span className="text-xs md:text-sm">新媒體藝術裝置、互動裝置</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽時間</span><br />
              <span className="text-xs md:text-sm">5/2~5/16 10:00-20:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">展覽地點</span><br />
              <span className="text-xs md:text-sm">臺灣大學第一學生活動中心 一樓 103、104 展示室</span></p>
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
              以「呈現引力」、「詮釋引力」、「互動裝置」策劃概念，回應引力子題核心—探討所受到的牽引是什麼，促使我們主動或被動地向外開啟了探索？
            </p>
            <p className="text-left">
              展覽內容包含藝術季開幕式演出社團對於引力詮釋、臺大電影節合作短片放映以及學生藝術家的藝術創作。
            </p>
            <p className="text-left">
              此展覽試圖呈現人與人、社會與人、自然與人之間的深刻連結。引力存在於生活的每一處，無形中影響著我們的行為與選擇。展覽將自然世界中的引力概念延伸到社會層面，透過視覺化的表現，引導觀眾反思自身所受的各種引力來源以及這些引力如何形塑自我。展覽最終目的是為觀眾提供一個以物觀己的窗口，讓他們在參與中思考並覺察日常生活中形塑自己的各種引力，激發對於個體與社會關係的全新理解與感悟，同時收穫新奇的視覺體驗。
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
              Planned around the concepts of "presenting gravity," "interpreting gravity," and "interactive installations," this exhibition responds to the core sub-theme of gravity—exploring what pulls us, and what prompts us, either actively or passively, to open ourselves to exploration.
            </p>
            <p className="text-left">
              The exhibition includes performances from student clubs interpreting gravity during the opening ceremony, short film screenings in collaboration with the NTU Film Festival, and artworks created by student artists.
            </p>
            <p className="text-left">
              This exhibition attempts to present the deep connections between people, society and individuals, and nature and humans. Gravity exists in every part of life, invisibly influencing our actions and choices. The exhibition extends the concept of gravity from the natural world into the everyday realm, using visual expression to guide viewers in reflecting on the various sources of gravity in their lives and how these forces shape the self. The ultimate goal of the exhibition is to provide the audience with a window for self-observation through objects, encouraging them to think about and become aware of the various forces that shape their everyday lives, inspiring new understandings and insights into individual and societal relationships, while also offering a novel visual experience.
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
                src="/all/Gravity/1.png" 
                alt="Gravity Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/Gravity/2.png" 
                alt="Gravity Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/Gravity/3.png" 
                alt="Gravity Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/Gravity/4.png" 
                alt="Gravity Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
              />
            </div>
            
            {/* 作品5 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/Gravity/5.png" 
                alt="Gravity Exhibition 5" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={75}
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