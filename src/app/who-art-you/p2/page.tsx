"use client";

import { useEffect, useState } from "react";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";

export default function Page2() {
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
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#88A4CA] from-20% via-[#F0F5AA] via-50% to-[#F8EFD9] overflow-hidden"
            style={{ height: vh }}
        >
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <Image
                    src="/mbti/p2.svg"
                    alt="MBTI Background"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-1.svg"
                    page={2}
                    choice="p"
                    left="left-[43%]"
                    bottom="bottom-[12%]"
                    width="w-[65%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-2.svg"
                    page={2}
                    choice="j"
                    left="left-[65%]"
                    bottom="bottom-[2%]"
                    width="w-[70%]"
                />
            </div>
        </div>
    );
}
