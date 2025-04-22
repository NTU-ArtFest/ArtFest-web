"use client";

import { useEffect, useState } from "react";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";
import Image from "next/image";

export default function Page1() {
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
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#F4F4B5] from-20% via-[#C7ECB8] via-50% to-[#8DCEA2] overflow-hidden"
            style={{ height: vh }}
        >
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <BackgroundImage src="/mbti/p1.svg" />
                <FloatingImageButton
                    imageSrc="/mbti/p1-ready-btn.svg"
                    page={1}
                    choice="init"
                    left="left-[75.5%]"
                    bottom="bottom-[3%]"
                    width="w-[30%]"
                />
            </div>
        </div>
    );
}
