"use client";
import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page5() {
    return (
        <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#F4EECA] md:via-[#EAB684] md:to-[#73B8CF]">
          <div className="relative w-screen md:h-screen">
            <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
            	<BackgroundImage src="/who-art-you/p5.png" />
							<ResponsiveFloatingButton
								imageSrc="/who-art-you/p5-btn-1.png"
								page={5}
								choice="f"
								imageWidth={869}
								imageHeight={1884}
								x={233}
								y={1354}
								btnWidth={562}
								btnHeight={122}
							/>
							<ResponsiveFloatingButton
								imageSrc="/who-art-you/p5-btn-2.png"
								page={5}
								choice="t"
								imageWidth={869}
								imageHeight={1884}
								x={217}
								y={1501}
								btnWidth={595}
								btnHeight={141}
							/>
          </div>
        </div>
      </div>
    );
}