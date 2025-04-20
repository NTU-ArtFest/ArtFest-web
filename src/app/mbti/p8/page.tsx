"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

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
                <Image
                    src="/mbti/p8.svg"
                    alt="MBTI Background"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
            </div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`
                    ${"myFont.className"}
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
                    w-[8%]             /* Mobile: wider */
                    h-[4.5%]
                `}
            />
        </div>
    );
}
