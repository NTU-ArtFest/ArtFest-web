import Image from 'next/image';

export default function HealingExhibition() {
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
          src="/all/imbalance/1.jpg"
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
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">失衡 | 潮差</h1>
            <p className="text-xs sm:text-base tracking-wide">Imbalance</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">專案管理</span><br />
            <span className="text-[6px]">
            曾子珉
            </span></p>
            
            <p><span className="font-bold text-[8px]">專案組員</span><br />
            <span className="text-[6px]">洪翊軒、楊睿桐</span></p>
            
            <p><span className="font-bold text-[8px]">活動講者</span><br />
            <span className="text-[6px]">陳麗雅 學輔專員/諮商心理師</span></p>

            <p><span className="font-bold text-[8px]">展演演員</span><br />
            <span className="text-[6px]">陳鈺潔、賀茂庭、許又云</span></p>
            
            <p><span className="font-bold text-[8px]">活動時間</span><br />
            <span className="text-[6px]">4月23日（星期三）18:00 ~ 20:30</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點</span><br />
            <span className="text-[6px]">國立臺灣大學 學生第二活動中心 沃思空間</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">失衡 | 潮差</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Imbalance</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">專案管理</span><br />
              <span className="text-xs md:text-sm">
                曾子珉
              </span></p>
              
              <p><span className="font-bold text-sm md:text-base">專案組員</span><br />
              <span className="text-xs md:text-sm">洪翊軒、楊睿桐</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動講者</span><br />
              <span className="text-xs md:text-sm">許藍方 博士</span></p>

              <p><span className="font-bold text-[8px]">展演演員</span><br />
              <span className="text-[6px]">陳鈺潔、賀茂庭、許又云</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動時間</span><br />
              <span className="text-xs md:text-sm">4月23日（星期三）18:00 ~ 20:30</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 學生第二活動中心 沃思空間</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 展覽介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">活動介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              當愛與依附變得難以分辨，當關係裡的付出與控制開始失衡，我們是否仍有選擇的空間？
            </p>
            <p className="text-left">
              《失衡》是一場以情緒勒索與不對等關係為主題的互動式劇場展演。劇情取材自大學生的日常情境，邀請觀眾以RPG玩家的方式親身參與，透過即時選擇左右故事走向，感受人際關係中的張力與複雜性。
            </p>
            <p className="text-left">
              活動由學輔專員/諮商心理師參與劇本設計與現場引導，融合劇場演出、多結局 RPG 體驗與分組討論三種形式，讓參與者在沉浸式的互動中啟動思辨，進一步反思自身的人際模式，並學習辨識與回應不健康的關係互動。特別適合關心情緒勒索、人際互動與心理議題的學生與大眾，從劇場中找回與自我和他人對話的能力。
            </p>
          </div>
        </div>
      </div>

      {/* 英文展覽介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Event Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              When love and attachment become hard to tell apart, when giving and control in relationships start to lose balance, do we still have room to choose?
            </p>
            <p className="text-left">
              "Imbalance" is an interactive theater performance focused on emotional manipulation and unequal relationships. The story draws from everyday college life situations, inviting audiences to participate as RPG players, making real-time choices that shape the story's direction and experiencing the tension and complexity of human relationships.
            </p>
            <p className="text-left">
              The event involves student counselors and counseling psychologists in script design and live guidance, combining three formats: theater performance, multiple-ending RPG experience, and group discussions. This allows participants to engage in critical thinking through immersive interaction, reflect on their own relationship patterns, and learn to identify and respond to unhealthy relationship dynamics. It's especially suitable for students and the general public who care about emotional manipulation, interpersonal interactions, and psychological issues, helping them rediscover the ability to communicate with themselves and others through theater.
            </p>
          </div>
        </div>
      </div>

      {/* 作品展示區 - 採用 3:2 比例展示圖片 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">活動照片 Event Photos</h2>
          
          {/* 網格畫廊 - 固定 3:2 比例 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 作品1 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/imbalance/2.jpg"
                alt="Gravity Exhibition 1" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品2 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/imbalance/3.jpg"
                alt="Gravity Exhibition 2" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品3 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/imbalance/4.jpg"
                alt="Gravity Exhibition 3" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
              />
            </div>
            
            {/* 作品4 */}
            <div className="overflow-hidden rounded-lg relative" style={{ aspectRatio: '3/2' }}>
              <Image 
                src="/all/imbalance/5.jpg"
                alt="Gravity Exhibition 4" 
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