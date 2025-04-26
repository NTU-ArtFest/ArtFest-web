"use client";

import { BackgroundImage } from "@/components/mbti/BackgroundImage";
import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";

export default function Page7() {
  return (
    <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#ABDEE7] md:via-[#FFFFFF] md:to-[#ABDEE7]">
      <div className="relative w-screen md:h-screen">
        <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
          <BackgroundImage src="/who-art-you/p7.png" />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p7-hammer.png"
            page={7}
            choice="hammer"
            imageWidth={869}
            imageHeight={1884}
            x={124.1}
            y={932}
            btnWidth={289}
            btnHeight={143}
          />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p7-wand.png"
            page={7}
            choice="wand"
            imageWidth={869}
            imageHeight={1884}
            x={443}
            y={922}
            btnWidth={314}
            btnHeight={163}
          />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p7-sword.png"
            page={7}
            choice="sword"
            imageWidth={869}
            imageHeight={1884}
            x={128}
            y={1094}
            btnWidth={281}
            btnHeight={150}
          />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p7-shield.png"
            page={7}
            choice="shield"
            imageWidth={869}
            imageHeight={1884}
            x={476}
            y={1094}
            btnWidth={281}
            btnHeight={157}
          />
        </div>
      </div>
    </div>
  );
}