"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page3() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#FFFFFF] from-20% via-[#F6D8B4] via-50% to-[#C1E9B4] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p3.svg"
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
                        left-[54%] 
                        top-[9%]          /* Mobile: lower position */
                        md:top-[15%]       /* Desktop: higher position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]            /* Mobile: wider */
                        md:w-[30%]         /* Desktop: narrower */
                        max-w-[250px] 
                        md:max-w-[200px]
                        "
                >
                    <Image
                        src="/mbti/p3-title.svg"
                        alt="Title"
                        width={320}
                        height={205}
                        className="w-full h-auto"
                    />
                </div>

                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <FloatingImageButton
                    imageSrc="/mbti/p3-btn-1.svg"
                    onClick={() => router.push("/mbti/p4")}
                    left="left-[40%]"
                    mdLeft="md:left-[52%]"
                    bottom="bottom-[10%]"
                    mdBottom="md:bottom-[15%]"
                    width="w-[70%]"
                    mdWidth="w-[16%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p3-btn-2.svg"
                    onClick={() => router.push("/mbti/p4")}
                    left="left-[75%]"
                    mdLeft="md:left-[52%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[5%]"
                    width="w-[70%]"
                    mdWidth="w-[16%]"
                />
            </div>
        </div>
    );
}
