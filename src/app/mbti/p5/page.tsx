"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page5() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#F4EECA] from-20% via-[#EAB684] via-50% to-[#73B8CF] to-80% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p5.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <div
                    className="
                        absolute 
                        left-[40%]          /* Mobile: centered horizontally */
                        md:left-[52%]     /* Desktop: offset to right */
                        bottom-[10%]         /* Mobile: higher from bottom */
                        md:bottom-[17%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[20%]
                        lg:w-[16%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            // do some stuff to save the answer.
                            router.push("/mbti/p6");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p5-btn-1.svg"
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
                        md:left-[52%]     /* Desktop: offset to right */
                        bottom-[0%]         /* Mobile: higher from bottom */
                        md:bottom-[8%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[17%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            // do some stuff to save the answer.
                            router.push("/mbti/p6");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p5-btn-2.svg"
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
