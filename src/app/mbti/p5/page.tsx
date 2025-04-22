"use client";

import { useEffect, useState } from "react";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Page5() {
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
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#F4EECA] from-20% via-[#EAB684] via-50% to-[#73B8CF] to-80% overflow-hidden"
            style={{ height: vh }}
        >
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <BackgroundImage src="/mbti/p5.svg" />
                <FloatingImageButton
                    imageSrc="/mbti/p5-btn-1.svg"
                    page={5}
                    choice="f"
                    left="left-[60%]"
                    bottom="bottom-[17%]"
                    width="w-[60%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p5-btn-2.svg"
                    page={5}
                    choice="t"
                    left="left-[60%]"
                    bottom="bottom-[7.5%]"
                    width="w-[60%]"
                />
            </div>
        </div>
    );
}
