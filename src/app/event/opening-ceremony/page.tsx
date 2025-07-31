import Image from 'next/image';

export default function OpeningCeremonyActivity() {
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
          src="/all/opening-ceremony/16.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-xl sm:text-3xl font-bold tracking-wider mb-1 uppercase">第30屆臺大藝術季</h1>
            <h2 className="text-lg sm:text-2xl font-bold tracking-wider mb-1 uppercase">開幕式</h2>
            <p className="text-xs sm:text-base tracking-wide">Rise & Fall</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策劃團隊 Curatorial Team</span><br />
            <span className="text-[6px]">
            張恩齊、邱禹甄、蔡宇恩、洪涵溱、蔡佩渝
            </span></p>
            
            <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
            <span className="text-xs md:text-sm">屈言真、王厚仁、游雨婕、林于萱、蘇晏禾</span></p> 

            <p><span className="font-bold text-[8px]">活動時間 Activity Dates</span><br />
            <span className="text-[6px]">5/2 15:00-22:00</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點 Activity Venue</span><br />
            <span className="text-[6px]">國立臺灣大學 振興草坪</span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider mb-1">第30屆臺大藝術季</h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider mb-2">開幕式</h2>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Rise & Fall</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2.5">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策劃團隊 Curatorial Team</span><br />
              <span className="text-xs md:text-sm">
                  張恩齊、邱禹甄、蔡宇恩、洪涵溱、蔡佩渝
              </span></p>

              <p><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
              <span className="text-xs md:text-sm">屈言真、王厚仁、游雨婕、林于萱、蘇晏禾</span></p> 
              
              <p><span className="font-bold text-sm md:text-base">活動時間 Activity Dates</span><br />
              <span className="text-xs md:text-sm">5/2 15:00-22:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點 Activity Venue</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 振興草坪</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">活動介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝ 人與人之間的鏈結，在這場盛宴中被藝術之潮牽引，擺動著內心的自我與對世界的認識。 ❞
            </p>
            <p className="text-left">
              <strong>5月2日（五）的開幕式</strong>中，我們為第30屆藝術季——『潮汐』拉開序幕。以浪潮迭起與「引力」交織的概念，鋪墊接下來兩週的精彩活動，讓每位參與者都能感受到藝術與社會、個人與群體之間的流動與牽引。
            </p>
            <p className="text-left">
              <strong>｜「潮浪集」Ｘ 議題互動市集</strong><br />
              開幕式舉辦之「潮浪集」市集，邀請關注不同社會議題的非營利組織，包括綠色和平、人生百味、賽珍珠基金會、暖暖、撐傘者後盾等。透過議題宣導與互動設計，這場市集將掀起一波與社會引力拉扯的對話，在討論與交流間激盪新的浪潮。
            </p>
            <p className="text-left">
              <strong>｜「逐浪之境」Ｘ 表演舞臺</strong><br />
              夜幕降臨，開幕式進入高潮——「逐浪之境」表演舞臺。我們邀請藝人柏霖 Polin、Control T、Theseus忒修斯，以及本校的嘻哈研究社、肚皮舞社、火舞社，透過視覺與聽覺的交錯演繹，展現潮汐的節奏感。從漲潮的激昂、滿潮的狂放，到退潮的餘韻，讓觀眾在音樂與舞蹈的流動之間，感受潮汐的吸引力與張力。
            </p>
            <p className="text-left">
              本次開幕式將透過多元媒介與參與形式，激盪出藝術與社會、個人與群體間的對話。隨著潮汐推進，藝術季的旅程在5/2的開幕式中，正式展開。
            </p>
          </div>
        </div>
      </div>

      {/* 英文活動介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Activity Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-center italic">
              ❝ In this grand feast, the tides of art pull the invisible threads between people, swaying both the self and our understanding of the world. ❞
            </p>
            <p className="text-left">
              On May 2nd (Friday), the opening ceremony set the stage for the 30th NTU Arts Festival —Rise & Fall. Inspired by the intertwining themes of waves and gravity, the event kicks off two weeks of vibrant activities, inviting participants to experience the ebb and flow between art and society, individuals and communities.
            </p>
            <p className="text-left">
              <strong>｜"Wave Bazaar" X Social Dialogue Market</strong><br />
              At the heart of the opening ceremony is the "Wave Bazaar," a marketplace that gathers NGOs focusing on diverse social issues — including Greenpeace, Do You a Flavor, Pearl S. Buck Foundation, Nuan Nuan, and Umbrella Supporters. Through advocacy and interactive installations, the market becomes a site of dialogue where the gravitational pull of society is explored, sparking waves of new conversations and reflections.
            </p>
            <p className="text-left">
              <strong>｜"Where the Waves Begin" X Performance Stage</strong><br />
              As night falls, the ceremony reaches its climax on the "Where the Waves Begin" performance stage. Featuring artists Polin, Control T, and Theseus, alongside NTU's Hip Hop Society, Belly Dance Club, and Fire Dance Club, the stage will come alive with a sensory interplay of music and visuals. From the crashing intensity of high tide to the exuberance of peak tide, and finally the lingering calm of ebb tide, the performances will guide audiences through the dynamic tensions and allure of the tides.
            </p>
            <p className="text-left">
              Through diverse media and participatory formats, this opening ceremony aims to stir dialogue between art and society, the self and the collective. As the tides rise and fall, the journey of the 30th NTU Arts Festival officially begins on May 2nd.
            </p>
          </div>
        </div>
      </div>

      {/* 開幕式紀錄影片區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">開幕式紀錄影片 Opening Ceremony Video</h2>
          
          {/* YouTube 影片容器 - 16:9 比例 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zwWJ4mOUH1s"
                title="第30屆臺大藝術季開幕式紀錄影片"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
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
                  src={`/all/opening-ceremony/${index + 1}.png`} 
                  alt={`Opening Ceremony Activity ${index + 1}`} 
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