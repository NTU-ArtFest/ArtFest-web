"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page6() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#F9F4C3] from-20% via-[#F6D8B4] via-50% to-[#C1E9B4] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p6.svg"
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
                        left-[50%]          /* Mobile: centered horizontally */
                        md:left-[50%]     /* Desktop: offset to right */
                        bottom-[10%]         /* Mobile: higher from bottom */
                        md:bottom-[17%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[20%]
                        lg:w-[20%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            // do some stuff to save the answer.
                            router.push("/mbti/p7");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p6-btn-1.svg"
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
                        md:left-[50.5%]     /* Desktop: offset to right */
                        bottom-[0%]         /* Mobile: higher from bottom */
                        md:bottom-[8%]      /* Desktop: different bottom position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]             /* Mobile: wider */
                        md:w-[20%]          /* Desktop: narrower */
                        "
                >
                    <button
                        onClick={() => {
                            // do some stuff to save the answer.
                            router.push("/mbti/p7");
                        }}
                        className="w-full"
                    >
                        <Image
                            src="/mbti/p6-btn-2.svg"
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
