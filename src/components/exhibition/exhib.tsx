import type { Exhibition as ExhibitionType } from "../../data/exhib_data";
import { Key } from "react";

interface ExhibitionProps {
  data: ExhibitionType;
}

interface Work {
  title: string;
  image: string;
  description: string[];
}

export default function Exhibition({ data }: ExhibitionProps) {
  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ fontFamily: "'Noto Sans TC', 'Helvetica Neue', sans-serif" }}>
      {/* 黑色底圖層 */}
      <div className="fixed inset-0 z-0 bg-black"></div>

      {/* 嵌入影片區 */}
      {data.videoSrc && (
        <div className="relative w-full aspect-video md:h-screen overflow-hidden z-0">
          <video
            className="w-full h-full object-cover"
            src={data.videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
      )}

      {/* 主視覺區塊 */}
      <div className="relative w-full min-h-screen z-10">
        {/* 背景圖 */}
        <img
          className="w-full h-full object-cover absolute inset-0 z-0"
          src={data.backgroundImage || "/exhibition/sea.jpg"}
          alt="Exhibition Background"
        />
        {/* 黑色漸層遮罩 */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/90"></div>

        {/* 手機版 */}
        <div className="md:hidden relative z-20 h-screen w-full px-6 py-6 flex flex-col justify-between">
          <div className="self-start mt-8">
            <h1 className="text-5xl font-bold tracking-wider mb-1 uppercase">{data.title}</h1>
            <p className="text-lg tracking-wide">{data.subtitle}</p>
          </div>
          <div className="self-end text-right text-xs space-y-2 mb-8">
            <div className="mb-1">
              <p>策劃團隊</p>
              <div className="flex flex-wrap justify-end gap-x-2">
                {data.team.map((name, idx) => (
                  <span key={idx} className="w-1/3">{name}</span>
                ))}
              </div>
            </div>
            {data.advisor && <p>指導單位<br />{data.advisor}</p>}
            {data.cooperation && <p>合作單位<br />{data.cooperation}</p>}
            {data.media && <p>展覽媒材<br />{data.media}</p>}
            {data.date && <p>展覽時間<br />{data.date}</p>}
            {data.location && <p>展覽地點<br />{data.location}</p>}
          </div>
        </div>

        {/* 桌面版 */}
        <div className="hidden md:block relative w-full min-h-screen z-10">
          <div className="relative z-20 h-screen w-full px-12 py-12 flex flex-col justify-between">
            <div className="self-start mt-12">
              <h1 className="text-6xl md:text-7xl font-bold tracking-wider mb-2">{data.title}</h1>
              <p className="text-2xl md:text-3xl font-light tracking-wide">{data.subtitle}</p>
            </div>
            <div className="self-end text-right max-w-md space-y-4 mb-12">
              <div>
                <p>策劃團隊</p>
                <div className="flex flex-wrap justify-end gap-x-2">
                  {data.team.map((name, idx) => (
                    <span key={idx} className="w-1/3">{name}</span>
                  ))}
                </div>
              </div>
              {data.advisor && <p>指導單位<br />{data.advisor}</p>}
              {data.cooperation && <p>合作單位<br />{data.cooperation}</p>}
              {data.media && <p>展覽媒材<br />{data.media}</p>}
              {data.date && <p>展覽時間<br />{data.date}</p>}
              {data.location && <p>展覽地點<br />{data.location}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* 引文 */}
      <div className="relative z-10 py-12 md:py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">引文</h2>
          <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed space-y-6 font-light">
            {data.quotes.map((quote, index) => (
              <p key={index} className="text-center italic whitespace-pre-line">{quote}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 展覽介紹 */}
      {data.introduction.length > 0 && (
        <div className="relative z-10 py-12 md:py-16 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-xl md:text-3xl font-light mb-8 md:mb-12 tracking-wider text-center uppercase">展覽介紹</h2>
            <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed space-y-6 font-light text-left">
              {data.introduction.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 作品展示 */}
      {data.works.length > 0 && (
        <div className="relative z-10 py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-xl md:text-3xl font-light mb-10 md:mb-16 tracking-wider text-center uppercase">作品展示</h2>
            {data.works.map((work, index) => (
              <div key={work.title} className={`max-w-6xl mx-auto ${index !== data.works.length - 1 ? 'mb-16 md:mb-24' : ''}`}>
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start gap-8 md:gap-12`}>
                  <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 tracking-wide uppercase">{work.title}</h3>
                    <div className="space-y-3 md:space-y-4 text-sm md:text-lg font-light leading-relaxed">
                      {work.description.map((paragraph, i) => (
                        <p key={i} className="whitespace-pre-line">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 底部版權 */}
      <footer className="relative z-10 py-6 md:py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-xs md:text-sm">
            {data.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
