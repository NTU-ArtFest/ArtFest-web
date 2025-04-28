"use client";

import { useEffect, useState } from "react";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";

export default function Page6() {
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
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#F9F4C3] from-20% via-[#F6D8B4] via-50% to-[#C1E9B4] to-70% overflow-hidden"
            style={{ height: vh }}
        >
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <Image
                    src="/mbti/p6.svg"
                    alt="MBTI Background"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p6-btn-1.svg"
                    page={6}
                    choice="s"
                    left="left-[50%]"
                    bottom="bottom-[17%]"
                    width="w-[70%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p6-btn-2.svg"
                    page={6}
                    choice="n"
                    left="left-[50%]"
                    bottom="bottom-[7.5%]"
                    width="w-[70%]"
                />
            </div>
        </div>
    );
}
