"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Problem1() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#C7ECB8] overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p1.svg"
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
                        w-[80%]            /* Mobile: wider */
                        md:w-[45%]         /* Desktop: narrower */
                        max-w-[300px] 
                        md:max-w-[350px]
                        "
                >
                    <Image
                        src="/mbti/p1-title.svg"
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
                        left-[80%]          /* Mobile: centered horizontally */
                        md:left-[58.6%]     /* Desktop: offset to right */
                        bottom-[0%]         /* Mobile: higher from bottom */
                        md:bottom-[2%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[35%]             /* Mobile: wider */
                        md:w-[20%]          /* Desktop: narrower */
                        max-w-[180px] 
                        md:max-w-[150px]
                        "
                >
                    <button
                        onClick={() => router.push("/mbti/p2")}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p1-ready-btn.svg"
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
