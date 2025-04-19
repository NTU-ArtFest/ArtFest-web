"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Mbti() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-b from-[#F4F4B5] from-20% via-[#E8ECC0] via-35% to-[#90D5CC] to-65%">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/index.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />

                {/* Clickable Button SVG - positioned relative to parent container */}

                <div
                    className="
                    absolute 
                    left-[68%]          /* Mobile: centered horizontally */
                    md:left-[54.5%]     /* Desktop: offset to right */
                    bottom-[-10%]         /* Mobile: higher from bottom */
                    md:bottom-[-7%]      /* Desktop: different bottom position */
                    -translate-x-1/2 
                    -translate-y-1/2 
                    w-[55%]             /* Mobile: wider */
                    md:w-[20%]          /* Desktop: narrower */
                    max-w-[200px] 
                    md:max-w-[230px]
                    "
                >
                    <button
                        onClick={() => router.push("/mbti/p1")}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/index-btn.svg"
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
