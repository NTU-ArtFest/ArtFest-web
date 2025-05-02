"use client";

import { useState } from "react";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";
import { ResponsiveFloatingButton } from "@/components/mbti/FloatingImageButton";
import localFont from "next/font/local";

const titleFont = localFont({
    src: "./SourceHanSerifTC-VF.ttf",
});

export default function Page8() {
  const [name, setName] = useState("");
  // Trimming name to meet effective length ≤ 6
  const trimNameToValidLength = (str: string) => {
    let result = "";
    let len = 0;

    for (const char of str) {
      let charWeight = 1.0; // default for numbers, symbols

      if (/[\u4e00-\u9fa5\u3100-\u312Fˊˇˋ˙]/.test(char)) {
        charWeight = 1.5; // Chinese + Zhuyin
      } else if (/[A-Z]/.test(char)) {
        charWeight = 1.1; // Uppercase English
      } else if (/[a-z]/.test(char)) {
        charWeight = 0.85; // Lowercase English
      }

      if (len + charWeight > 6.0) {
        break; // ❗ Exceeding 6, stop
      }

      result += char;
      len += charWeight;
    }

    return result;
  };

  return (
    <div className="w-screen h-screen sm:h-auto overflow-y-auto sm:overflow-visible md:bg-gradient-to-b md:from-[#68C9CF] md:via-[#FFFFFF] md:to-[#ABDEE7]">
      <div className="relative w-screen md:h-screen">
        <div className="relative w-full aspect-[869/1884] md:aspect-auto md:h-full">
          <BackgroundImage src="/who-art-you/p8.png" />
          <ResponsiveFloatingButton
            imageSrc="/who-art-you/p8-btn.png"
            page={8}
            choice={trimNameToValidLength(name)}
            imageWidth={869}
            imageHeight={1884}
            x={309}
            y={1389}
            btnWidth={534}
            btnHeight={396}
            disabled={name.trim() === ""}
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`
								${titleFont.className}
								font-bold
								text-[#2B7687]
								text-center
								outline-none
								bg-transparent
								absolute
								left-[49.93%]          /* Mobile: centered horizontally */
								bottom-[44.5%]         /* Mobile: higher from bottom */
								-translate-x-1/2
								-translate-y-1/2
								w-[26%]                /* Mobile: wider */
								h-[4.5%]
						`}
          />
        </div>
      </div>
    </div>
  );
}