"use client";

import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page4() {
    return (
      <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#F5E49D] md:via-[#F6D8B4] md:to-[#D4D5DD]">
        <div className="relative w-screen md:h-screen">
          <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
            <BackgroundImage src="/who-art-you/p4.png" />

            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p4-hat.png"
              page={4}
              choice="hat"
              imageWidth={869}
              imageHeight={1884}
              x={38}
              y={1012}
              btnWidth={392}
              btnHeight={321}
            />
            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p4-hp.png"
              page={4}
              choice="headphones"
              imageWidth={869}
              imageHeight={1884}
              x={465}
              y={1035}
              btnWidth={291}
              btnHeight={316}
            />
            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p4-sg.png"
              page={4}
              choice="sunglasses"
              imageWidth={869}
              imageHeight={1884}
              x={33}
              y={1361}
              btnWidth={466}
              btnHeight={246}
            />
            <ResponsiveFloatingButton
              imageSrc="/who-art-you/p4-bt.png"
              page={4}
              choice="bowtie"
              imageWidth={869}
              imageHeight={1884}
              x={513}
              y={1387}
              btnWidth={291}
              btnHeight={291}
            />
          </div>
        </div>
      </div>
    );
}

