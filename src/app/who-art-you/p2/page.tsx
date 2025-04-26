"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page2() {
    return (
      <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#88A4CA] md:via-[#F0F5AA] md:to-[#F8EFD9]">
        <div className="relative w-screen md:h-screen">
          <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
            <BackgroundImage src="/who-art-you/p2.png" />

            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p2-btn-1.png"
              page={2}
              choice="p"
              imageWidth={869}
              imageHeight={1884}
              x={52}
              y={1392.2}
              btnWidth={651}
              btnHeight={148}
            />
            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p2-btn-2.png"
              page={2}
              choice="j"
              imageWidth={869}
              imageHeight={1884}
              x={158}
              y={1579}
              btnWidth={649.5}
              btnHeight={153}
            />
          </div>
        </div>
      </div>
    );
}