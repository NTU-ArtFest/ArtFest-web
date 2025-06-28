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
          src="/all/key_visual/1.png"
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
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wider mb-1 uppercase">主視覺</h1>
            <p className="text-xs sm:text-base tracking-wide">Key Visual</p>
          </div>
        </div>

        {/* 主視覺區塊 - 平板和桌面版 - 調整文字與容器比例 */}
        <div className="hidden md:block relative w-full h-full z-10">
          
          {/* 左上標題與右下資訊 */}
          <div className="relative h-full w-full">
            <div className="absolute top-12 left-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2">主視覺</h1>
              <p className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide">Key Visual</p>
            </div>
          </div>
        </div>
      </div>

      {/* 展覽介紹區塊 - 調整文字大小 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">主視覺介紹</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              這次的設計理念圍繞著「潮起潮落」對我們的影響。我們並非只是靜止不變的石頭，而是被時間與經歷不斷沖刷、雕刻出的形態
            </p>
            <p className="text-left">
              與其關注石頭本身，我們選擇放大那些沖刷的痕跡——那些被時間侵蝕的紋理、那些不均勻的裂縫與曲線，正是這些痕跡形塑了今天的我們。
            </p>
            <p className="text-left">
              在視覺表現上，我們刻意削弱具體形態，轉而聚焦於水與時間流經的痕跡，讓畫面充滿動態的層次感，營造一種未曾靜止的流動狀態。藍綠色調與不規則的肌理象徵潮水的侵蝕與沉積，黑色的文字則像是記錄這些過程的印記，交錯間隱含著時間的推移。
            </p>
            <p className="text-left">
              這不只是關於個體的變化，更是對「我們如何被環境形塑」的提問。那些沖刷過我們的痕跡，究竟帶走了什麼，又留下了什麼？這些變化，是消逝，還是成就？或許，真正值得關注的，不是石頭如何存在，而是它如何被改變。
            </p>
          </div>
        </div>
      </div>

      {/* 英文展覽介紹區塊 */}
      <div className="relative z-10 py-10 md:py-14 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-base md:text-2xl font-light mb-6 md:mb-10 tracking-wider text-center uppercase">Key Visual Introduction</h2>

          <div className="max-w-3xl mx-auto text-xs md:text-base leading-relaxed space-y-4 font-light">
            <p className="text-left">
              This design concept centers on the impact of “rise and fall” in our lives. We are not motionless stones—we are forms continuously shaped and sculpted by time and experience.
            </p>
            <p className="text-left">
              Rather than focusing on the stone itself, we chose to highlight the traces left behind by erosion—those textures worn down by time, those uneven cracks and curves—because it is these very marks that have shaped who we are today.
            </p>
            <p className="text-left">
              Visually, we deliberately downplayed concrete forms, shifting the focus to the traces left by water and time. The composition evokes a dynamic sense of movement, a state of constant flow. The blue-green hues and irregular textures symbolize erosion and sedimentation caused by tides, while the black typography acts as an imprint—quietly marking the passage of time.
            </p>
            <p className="text-left">
              This is not just a reflection on individual transformation, but a question of how we are shaped by our environments. What have the tides taken from us? What have they left behind? Are these changes signs of loss, or of becoming?
Perhaps the real question isn’t how the stone exists—but how it has been changed.
            </p>
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