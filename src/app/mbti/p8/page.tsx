"use client";

import { BackgroundImage } from "@/components/mbti/BackgroundImage";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const titleFont = localFont({
    src: "../SourceHanSerifTC-VF.ttf",
});

export default function Page8() {
    const router = useRouter();
    const [name, setName] = useState("");
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
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            localStorage.setItem("username", name);
            setName("");
            router.push("/mbti/result");
        }
    };
    return (
        <div
            className="relative flex items-center justify-center w-full bg-gradient-to-b from-[#68C9CF] from-20% via-[#FFFFFF] via-50% to-[#ABDEE7] to-70% overflow-hidden"
            style={{ height: vh }}
        >
            {/* Background SVG */}
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <BackgroundImage src="/mbti/p8.svg" />
                <FloatingImageButton
                    imageSrc="p8-btn.svg"
                    page={8}
                    choice={name}
                    left="left-[69.7%]"
                    bottom="bottom-[-11%]"
                    width="w-[42.5%]"
                />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`
                    ${titleFont.className}
                    font-bold
                    text-[#2B7687]
                    text-center
                    outline-none
                    bg-transparent
                    absolute 
                    left-[50%]          /* Mobile: centered horizontally */
                    bottom-[44.5%]         /* Mobile: higher from bottom */
                    -translate-x-1/2 
                    -translate-y-1/2 
                    w-[26%]             /* Mobile: wider */
                    h-[4.5%]
                `}
                />
            </div>
        </div>
    );
}
