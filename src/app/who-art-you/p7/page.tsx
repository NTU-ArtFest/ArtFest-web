"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page7() {
    const [vh, setVh] = useState("100vh");

    useEffect(() => {
        // Fix for mobile browser vh issues
        const updateVh = () => {
            const height = window.innerHeight * 0.01;
            setVh(`${height * 100}px`);
        };

        updateVh(); // initial run
        window.addEventListener("resize", updateVh);

        return () => window.removeEventListener("resize", updateVh);
    }, []);
    return (
        <div
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#ABDEE7] from-20% via-[#FFFFFF] via-50% to-[#ABDEE7] to-70% overflow-hidden"
            style={{ height: vh }}
        >
            {/* Background SVG */}
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <Image
                    src="/mbti/p7.svg"
                    alt="MBTI Background"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p7-hammer.svg"
                    page={7}
                    choice="hammer"
                    left="left-[32.5%]"
                    bottom="bottom-[37.5%]"
                    width="w-[30%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p7-wand.svg"
                    page={7}
                    choice="wand"
                    left="left-[65.5%]"
                    bottom="bottom-[37.5%]"
                    width="w-[30%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p7-sword.svg"
                    page={7}
                    choice="sword"
                    left="left-[32.5%]"
                    bottom="bottom-[27.5%]"
                    width="w-[30%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p7-shield.svg"
                    page={7}
                    choice="sword"
                    left="left-[67.5%]"
                    bottom="bottom-[27%]"
                    width="w-[30%]"
                />
            </div>
        </div>
    );
}
