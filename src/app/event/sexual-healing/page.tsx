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
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">性慾‧癒 | 潮起</h1>
            <p className="text-xs sm:text-base tracking-wide">sexual & healing</p>
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
            <span className="text-[6px]">許藍方 博士</span></p>
            
            <p><span className="font-bold text-[8px]">活動時間</span><br />
            <span className="text-[6px]">4月18日（星期五） 19:10 ~ 21:30</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點</span><br />
            <span className="text-[6px]">國立臺灣大學 新生教學館 405 教室</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">性慾‧癒 | 潮起</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">sexual & healing</p>
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
              
              <p><span className="font-bold text-sm md:text-base">活動時間</span><br />
              <span className="text-xs md:text-sm">4月18日（星期五） 19:10 ~ 21:30</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 新生教學館 405 教室</span></p>
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
              性慾如海潮般來去自如，卻長期被社會視為禁忌與羞於啟齒的話題
            </p>
            <p className="text-left">
              《性慾・癒》講座以「漲潮」象徵人類的原始慾望，邀請參與者在理性與溫柔的空間中，重新看見性慾的本質與多元樣貌。
            </p>
            <p className="text-left">
              本場活動由性教育專家許藍方博士主講，深入探討性慾從生理需求到心理影響、從個人成長到身體自主的全貌。講座將帶領觀眾拆解性議題的迷思與社會框架，進一步理解何為健康的性意識，如何與自身慾望和平共處，並在探索與接納之中，找回對自我身心的尊重與療癒。
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
              Sexual desire flows like the tide, coming and going naturally, yet society has long treated it as forbidden and shameful to discuss.
            </p>
            <p className="text-left">
              The "Sexual Desire · Healing" lecture uses "high tide" as a symbol for human's basic desires, inviting people to enter a gentle and thoughtful space where they can see sexuality in its true nature and many forms.
            </p>
            <p className="text-left">
              This event is led by Dr. Xu Lanfang, an expert in sexual education, who will explore sexuality from physical needs to mental effects, from personal growth to body freedom. The lecture will help the audience break down myths and social rules about sex, understand what healthy sexual awareness means, learn how to live peacefully with their own desires, and through exploring and accepting themselves, find respect and healing for their body and mind.

In this safe space of learning and care, we move toward wholeness—where desire is not fought against but welcomed, not silenced but honored as an important part of being human.
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
                src="/all/Gravity/1.png" 
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
                src="/all/Gravity/2.png" 
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
                src="/all/Gravity/3.png" 
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
                src="/all/Gravity/4.png" 
                alt="Gravity Exhibition 4" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={40}
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