"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page1() {
  return (
    <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#F4F4B5] md:via-[#C7ECB8] md:to-[#8DCEA2]">
      <div className="relative w-screen md:h-screen">
        <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
          <BackgroundImage src="/who-art-you/p1.png" />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p1-ready-btn.png"
            page={1}
            choice="init"
            imageWidth={869}
            imageHeight={1884}
            x={547}
            y={1370}
            btnWidth={313}
            btnHeight={256}
          />
        </div>
      </div>
    </div>
  );
}
