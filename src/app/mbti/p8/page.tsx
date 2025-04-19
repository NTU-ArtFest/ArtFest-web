"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

// const myFont = localFont({ src: "/SourceHanSerifTC-VF.ttf" }); 思源宋體

export default function Page7() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#68C9CF] from-20% via-[#FFFFFF] via-50% to-[#ABDEE7] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p8.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
            </div>
            <input
                className={`
                    ${"myFont.className"}
                    bg-transparent
                    text-[#2B7687]
                    text-center
                    outline-none
                    absolute 
                    left-[0%]          /* Mobile: centered horizontally */
                    md:left-[50%]     /* Desktop: offset to right */
                    bottom-[40%]         /* Mobile: higher from bottom */
                    md:bottom-[45%]      /* Desktop: different bottom position */
                    -translate-x-1/2 
                    -translate-y-1/2 
                    w-[70%]             /* Mobile: wider */
                    md:w-[19%]
                    lg:w-[8%]          /* Desktop: narrower */
                    lg:h-[4.4%]
                    `}
            />
        </div>
    );
}
