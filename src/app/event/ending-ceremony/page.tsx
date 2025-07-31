import Image from 'next/image';

export default function EndingCeremonyActivity() {
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
          src="/all/ending-ceremony/17.png"
          alt="Activity Background"
        />
        
        {/* 手機版布局 - 調整標題和資訊文字大小和位置 */}
        <div className="md:hidden relative z-20 h-screen w-full flex flex-col">
          {/* 左上標題 - 縮小字體 */}
          <div className="self-start mt-8 ml-6">
            <h1 className="text-xl sm:text-3xl font-bold tracking-wider mb-1 uppercase">第30屆臺大藝術季</h1>
            <h2 className="text-lg sm:text-2xl font-bold tracking-wider mb-1 uppercase">閉幕式回顧</h2>
            <p className="text-xs sm:text-base tracking-wide">Closing Ceremony Recap</p>
          </div>
                    
          {/* 右下展覽資訊 - 調整文字大小和位置以符合邊框 */}
          <div className="absolute bottom-6 right-6 text-right text-xs space-y-1">
            <p className="mb-1"><span className="font-bold text-[8px]">策劃團隊 Curatorial Team</span><br />
            <span className="text-[6px]">
            張恩齊、蔡宇恩、邱禹甄、洪涵溱、蔡佩渝
            </span></p>

            <p className="mb-1"><span className="font-bold text-[8px]">文案撰寫 Copywriting</span><br />
            <span className="text-[6px]">張恩齊</span></p>

            <p className="mb-1"><span className="font-bold text-[8px]">文案翻譯 Transcreation</span><br />
            <span className="text-[6px]">陳子安</span></p>

            <p className="mb-1"><span className="font-bold text-[8px]">平面設計 Graphic Designer</span><br />
            <span className="text-[6px]">林鴻</span></p>
            
            <p><span className="font-bold text-[8px]">活動時間 Activity Dates</span><br />
            <span className="text-[6px]">5/16 17:00-22:00</span></p>
            
            <p><span className="font-bold text-[8px]">活動地點 Activity Venue</span><br />
            <span className="text-[6px]">國立臺灣大學 振興草坪</span></p>

            <p className="mb-1"><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
            <span className="text-xs md:text-sm">
                劉韋辰、黃楷翔、游雨婕、周世倫、蘇晏禾、劉韋杰、周宜葇、廖尹淇、王芓勻、江卉柔
            </span></p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider mb-1">第30屆臺大藝術季</h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider mb-2">閉幕式回顧</h2>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Closing Ceremony Recap</p>
            </div>
            
            {/* 右下展覽資訊 - 調整出血位置和文字大小 */}
            <div className="absolute bottom-10 right-10 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14 text-right max-w-md space-y-2">
              <p className="mb-1"><span className="font-bold text-sm md:text-base">策劃團隊 Curatorial Team</span><br />
              <span className="text-xs md:text-sm">
                  張恩齊、蔡宇恩、邱禹甄、洪涵溱、蔡佩渝
              </span></p>

              <p className="mb-1"><span className="font-bold text-sm md:text-base">文案撰寫 Copywriting</span><br />
              <span className="text-xs md:text-sm">張恩齊</span></p>

              <p className="mb-1"><span className="font-bold text-sm md:text-base">文案翻譯 Transcreation</span><br />
              <span className="text-xs md:text-sm">陳子安</span></p>

              <p className="mb-1"><span className="font-bold text-sm md:text-base">平面設計 Graphic Designer</span><br />
              <span className="text-xs md:text-sm">林鴻</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動時間 Activity Dates</span><br />
              <span className="text-xs md:text-sm">5/16 17:00-22:00</span></p>
              
              <p><span className="font-bold text-sm md:text-base">活動地點 Activity Venue</span><br />
              <span className="text-xs md:text-sm">國立臺灣大學 振興草坪</span></p>

              <p className="mb-1"><span className="font-bold text-sm md:text-base">活動紀錄 Activity Documentation</span><br />
              <span className="text-xs md:text-sm">
                  劉韋辰、黃楷翔、游雨婕、周世倫、蘇晏禾、劉韋杰、周宜葇、廖尹淇、王芓勻、江卉柔
              </span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 中文回顧內容 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">閉幕式回顧</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              烏雲飄過的午後，沒有火燒椰林大道的絕美景象，振興草坪上卻充滿歡笑聲與音樂。<br />
              這片平靜的海波，連泫然欲泣的天空都不忍心打擾。<br />
              在五月十六號的那個下午，我們借用了一個不下雨的願望，汲取一些愜意，注入這個空間。
            </p>
            
            <p className="text-left">
              閉幕式與潮汐的交會——是在奔騰、善變與混亂的潮流中，回歸自我的【我們】與【延續】。
            </p>
            
            <p className="text-left">
              <strong>｜藍汐午後｜</strong><br />
              木棧板搭建的舞臺因為不平整而有些搖搖晃晃，正巧構築了一艘小船。<br />
              以表演者與主持人為船員，在交談聲與歡笑聲中，我們徐徐地航行在音樂劃開的水波紋上，輕踩過藝術季留下的痕跡，在表演者與參與者、藝術空間和人群中，建立起連結。<br />
              誠摯感謝參與的所有人員，用歌聲與樂聲，將藝術以平易近人的形式，輕巧地在潮水中，掀起漣漪。
            </p>
            
            <p className="text-left">
              <strong>｜瓶間寄語｜</strong><br />
              「寫一封信給你、給未知的他人，它將會在夜晚的光點中，靜靜地漂流向遠方。」<br />
              從沙灘、海岸交界線、透光層、中層海，最後降落在深海。<br />
              你在哪一處找到自己？在哪一處選擇放下？<br />
              不論是陽光所及之處，抑或是黑暗沉靜的海底，期許你的話語、念想與情感，也能在這片海洋中，找到歸處。
            </p>
            
            <p className="text-left">
              <strong>｜潮間映夜｜</strong><br />
              天漸漸暗下來，草坪正中的螢幕投影出的影像在黑夜中更顯顏色。<br />
              從藝術季MV到《海街日記》，在某一個畫面、音樂或對話中，也許漂流的心已經得到安放。
            </p>
            
            <p className="text-left">
              潮水退去，留在沙灘上的石礫，是我們用力生活的痕跡。<br />
              感謝所有從策劃、討論到執行的過程中，曾經駐足過，與我們一起奮力在潮汐中開展一條旅途的工作人員們。
            </p>
            
            <p className="text-left">
              潮起潮落，陰晴圓缺。<br />
              五月十六號的閉幕式，第30屆臺大藝術季【潮汐】落幕，但是地與月仍會繼續牽引，而我們亦會持續漂流、向前。
            </p>
          </div>
        </div>
      </div>

      {/* 英文回顧內容 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Closing Ceremony Recap</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              On a cloudy May afternoon with no fiery sunset, no glowing boulevard, but Zhenxing Lawn lit up with music and laughter.<br />
              We borrowed a wish for no rain and let ourselves ease into the moment.<br />
              The tide was wild, ever-changing. But we found our own rhythm.
            </p>
            
            <p className="text-left">
              <strong>｜A Gentle Drift｜</strong><br />
              The stage wobbled a little, like a boat about to set sail.<br />
              Performers and hosts became our crew.<br />
              As music rippled through the grass, we drifted together through conversations, through laughter, through the memories art left behind.<br />
              Thank you to everyone who joined us, your voices stirred the water in the softest, most beautiful way.
            </p>
            
            <p className="text-left">
              <strong>｜Message in a Bottle｜</strong><br />
              "Write a letter to yourself, or someone you haven't met yet."<br />
              Let it float across a sea of light: from the beach to the deep.<br />
              Where did you find yourself? Where did you choose to let go?<br />
              Whether under sunlight or in the quiet dark, may your words find a place to rest.
            </p>
            
            <p className="text-left">
              <strong>｜Tide x Screen x Night｜</strong><br />
              As the sky dimmed, the screen came to life.<br />
              From our season MV to scenes from Our Little Sister, maybe a drifting heart found a soft landing.
            </p>
            
            <p className="text-left">
              The tide went out, but traces remain — proof we lived it fully.<br />
              To every planner, dreamer, and doer: thank you for sailing through this with us.<br />
              Tides rise and fall, but the pull continues.<br />
              So do we.
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
            {Array.from({ length: 26 }, (_, index) => (
              <div 
                key={index + 1} 
                className="relative overflow-hidden rounded-lg" 
                style={{ aspectRatio: '3/2' }}
              >
                <Image
                  src={`/all/ending-ceremony/${index + 1}.png`}
                  alt={`Ending Ceremony Activity ${index + 1}`}
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