"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page7() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#ABDEE7] from-20% via-[#FFFFFF] via-50% to-[#ABDEE7] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p7.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="p7-hammer.svg"
                    onClick={() => {
                        router.push("/mbti/p8");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[45%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[38%]"
                    width="w-[70%]"
                    mdWidth="md:w-[8%]"
                />
                <FloatingImageButton
                    imageSrc="p7-wand.svg"
                    onClick={() => {
                        router.push("/mbti/p8");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[55%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[38%]"
                    width="w-[70%]"
                    mdWidth="md:w-[8%]"
                />
                <FloatingImageButton
                    imageSrc="p7-sword.svg"
                    onClick={() => {
                        router.push("/mbti/p8");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[45%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[29%]"
                    width="w-[70%]"
                    mdWidth="md:w-[8%]"
                />
                <FloatingImageButton
                    imageSrc="p7-shield.svg"
                    onClick={() => {
                        router.push("/mbti/p8");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[55.5%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[29%]"
                    width="w-[70%]"
                    mdWidth="md:w-[8%]"
                />
            </div>
        </div>
    );
}
