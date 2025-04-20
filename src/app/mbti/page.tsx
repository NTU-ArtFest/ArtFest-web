"use client";

import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Mbti() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-b from-[#F4F4B5] from-20% via-[#E8ECC0] via-35% to-[#90D5CC] to-65%">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/index.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/index-btn.svg"
                    page={0}
                    choice={"start"}
                    left="left-[68%]"
                    mdLeft="md:left-[54.5%]"
                    bottom="bottom-[-10%]"
                    mdBottom="md:bottom-[-7%]"
                    width="w-[55%]"
                    mdWidth="md:w-[15%]"
                />
            </div>
        </div>
    );
}
