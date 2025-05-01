"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Mbti() {
  return (
    <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b from-[#F4F4B5] from-20% via-[#E8ECC0] via-35% to-[#90D5CC] to-65%">
      <div className="relative w-screen md:h-screen">
        <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
          <BackgroundImage src="/who-art-you/index.png" />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/index-btn.png"
            page={0}
            choice="start"
            imageWidth={869}
            imageHeight={1884}
            x={292}
            y={1341}
            btnWidth={577}
            btnHeight={465}
          />
        </div>
      </div>
    </div>
  );
}
