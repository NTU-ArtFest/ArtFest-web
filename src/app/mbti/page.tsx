"use client";

import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import { BackgroundImage } from "@/components/mbti/BackgroundImage";

export default function Mbti() {
    return (
        <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-b from-[#F4F4B5] from-20% via-[#E8ECC0] via-35% to-[#90D5CC] to-65%">
            {/* Background SVG */}
            <div className="relative h-full w-auto max-w-full max-h-full aspect-[9/16]">
                <BackgroundImage src="/mbti/index.svg" />
                <FloatingImageButton
                    imageSrc="/mbti/index-btn.svg"
                    page={0}
                    choice={"start"}
                    left="left-[65%]"
                    bottom="bottom-[-7.5%]"
                    width="w-[50%]"
                />
            </div>
        </div>
    );
}
