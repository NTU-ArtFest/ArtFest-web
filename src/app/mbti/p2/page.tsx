"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Problem2() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#88A4CA] overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p2.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />

                {/* Title SVG - different positioning for mobile vs desktop */}
                <div
                    className="
                        absolute 
                        left-1/2 
                        top-[9%]          /* Mobile: lower position */
                        md:top-[12%]       /* Desktop: higher position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]            /* Mobile: wider */
                        md:w-[30%]         /* Desktop: narrower */
                        max-w-[250px] 
                        md:max-w-[250px]
                        "
                >
                    <Image
                        src="/mbti/p2-title.svg"
                        alt="Title"
                        width={320}
                        height={205}
                        className="w-full h-auto"
                    />
                </div>

                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <div
                    className="
                        absolute 
                        left-[40%]          /* Mobile: centered horizontally */
                        md:left-[47%]     /* Desktop: offset to right */
                        bottom-[10%]         /* Mobile: higher from bottom */
                        md:bottom-[14%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[20%]
                        lg:w-[18%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            alert("直覺！");
                            // router.push("/mbti/p3");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p2-btn-1.svg"
                            alt="Cool Button"
                            width={140}
                            height={140}
                            className="w-full h-auto"
                        />
                    </button>
                </div>
                <div
                    className="
                        absolute 
                        left-[75%]          /* Mobile: centered horizontally */
                        md:left-[55.6%]     /* Desktop: offset to right */
                        bottom-[0%]         /* Mobile: higher from bottom */
                        md:bottom-[3%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[20%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            alert("仔細研究！");
                            // router.push("/mbti/p3");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p2-btn-2.svg"
                            alt="Cool Button"
                            width={140}
                            height={140}
                            className="w-full h-auto"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
