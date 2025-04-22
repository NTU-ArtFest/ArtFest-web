"use client";

import { useEffect, useState } from "react";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";

export default function Page4() {
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
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#F5E49D] from-20% via-[#F6D8B4] via-50% to-[#D4D5DD] to-70% overflow-hidden"
            style={{ height: vh }}
        >
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <Image
                    src="/mbti/p4.svg"
                    alt="MBTI Background"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-hat.svg"
                    page={4}
                    choice="hat"
                    left="left-[30%]"
                    bottom="bottom-[20%]"
                    width="w-[40%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-hp.svg"
                    page={4}
                    choice="headphones"
                    left="left-[70%]"
                    bottom="bottom-[17.6%]"
                    width="w-[30%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-sg.svg"
                    page={4}
                    choice="sunglasses"
                    left="left-[30%]"
                    bottom="bottom-[7.5%]"
                    width="w-[45%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-bt.svg"
                    page={4}
                    choice="bowtie"
                    left="left-[70%]"
                    bottom="bottom-[0%]"
                    width="w-[30%]"
                />
            </div>
        </div>
    );
}
