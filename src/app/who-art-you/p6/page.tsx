"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page6() {
    return (
      <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#F9F4C3] md:via-[#F6D8B4] md:to-[#C1E9B4]">
        <div className="relative w-screen md:h-screen">
          <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
            <BackgroundImage src="/who-art-you/p6.png" />

            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p6-btn-1.png"
              page={6}
              choice="s"
              imageWidth={869}
              imageHeight={1884}
              x={51}
              y={1282}
              btnWidth={768}
              btnHeight={175}
            />

            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p6-btn-2.png"
              page={6}
              choice="n"
              imageWidth={869}
              imageHeight={1884}
              x={60}
              y={1469}
              btnWidth={750}
              btnHeight={165}
            />
          </div>
        </div>
      </div>
    );
}
