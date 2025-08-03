import Image from 'next/image';

export default function StoneCraftersActivity() {
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
          src="/all/the-stone-crafters/7.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">石尚玩家</h1>
            <p className="text-xs sm:text-base tracking-wide">Rock On: The Stone Artisans</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">專案管理 Project Manager</span><br />
            <span className="text-[6px]">
            曾子珉
            </span></p>
            
            <p><span className="font-bold text-[8px]">專案組員 Project Team</span><br />
            <span className="text-[6px]">黃淳郁、蔡依玲</span></p>

            <p><span className="font-bold text-[8px]">活動紀錄 Activity Documentation</span><br />
            <span className="text-[6px]">王厚仁、周宜葇、王芋勻</span></p>
            
            <p><span className="font-bold text-[8px]">活動時間 Activity Dates</span><br />
            <span className="text-[6px]">5月2日、5月7日、5月10日</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點 Activity Venue</span><br />
            <span className="text-[6px]">振興草皮旁、學一活B1</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">石尚玩家</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Rock On: The Stone Artisans</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">專案管理 Project Manager</span><br />
              <span className="text-xs md:text-sm">
                  曾子珉
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">專案組員 Project Team</span><br />
              <span className="text-xs md:text-sm">黃淳郁、蔡依玲</span></p>

              <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
              <span className="text-xs md:text-sm">王厚仁、周宜葇、王芋勻</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動時間 Activity Dates</span><br />
              <span className="text-xs md:text-sm">5月2日、5月7日、5月10日</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點 Activity Venue</span><br />
              <span className="text-xs md:text-sm">振興草皮旁、學一活B1</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">活動介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              《石尚玩家》活動以石頭在「移動」與「蛻變」中的轉化為隱喻，透過創意手作的過程，讓參與者親手雕刻、裝飾石頭，轉化為代表自我經歷與價值的藝術作品。從材質的選擇到外型的塑造，每一步都是在回應「我是誰，我經歷了什麼，我正成為什麼樣的人」。
            </p>
            <p className="text-left">
              無論你是喜歡手作的創作者、對情感投射有興趣的探索者，還是單純被可愛吸引的路人，都歡迎來到這場迷你實驗場：將石頭轉化為獨屬於自己的「守護石」，也許是一隻療癒小寵物，也可能是一件精巧飾品，承載你對蛻變的想像與記憶。
            </p>
          </div>
        </div>
      </div>

      {/* 英文活動介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Activity Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              <em>The Stone Crafters</em> uses the transformation of stones through "movement" and "metamorphosis" as a metaphor. Through hands-on creative crafting, participants carve and decorate stones, turning them into art pieces that embody their personal experiences and values. From selecting materials to shaping forms, each step poses a quiet reflection: <strong>"Who am I? What have I gone through? Who am I becoming?"</strong>
            </p>
            <p className="text-left">
              Whether you're a passionate crafter, a seeker of emotional expression, or simply a passerby charmed by whimsy, you're invited to this miniature creative lab—where stones become your very own <strong>guardian stones</strong>. Perhaps it's a comforting little companion, or a delicate piece of jewelry— a vessel carrying your imagination of metamorphosis and memory of change.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">
            活動紀錄 Activity Documentation
          </h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 27 }, (_, index) => (
              <div 
                key={index + 1} 
                className="relative overflow-hidden rounded-lg" 
                style={{ aspectRatio: '3/2' }}
              >
                <Image
                  src={`/all/the-stone-crafters/${index + 1}.png`} 
                  alt={`Stone Crafters Activity ${index + 1}`} 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 6} // 只對前 6 張圖片使用 priority
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