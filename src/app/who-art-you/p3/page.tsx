"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page3() {
    return (
      <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#FFFFFF] md:via-[#F6D8B4] md:to-[#C1E9B4]">
        <div className="relative w-screen md:h-screen">
          <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
            <BackgroundImage src="/who-art-you/p3.png" />

            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p3-btn-1.png"
              page={3}
              choice="e"
              imageWidth={869}
              imageHeight={1884}
              x={276}
              y={1385}
              btnWidth={530}
              btnHeight={118}
            />
            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p3-btn-2.png"
              page={3}
              choice="i"
              imageWidth={869}
              imageHeight={1884}
              x={258}
              y={1559.3}
              btnWidth={559}
              btnHeight={143}
            />
          </div>
        </div>
      </div>
    );
}


