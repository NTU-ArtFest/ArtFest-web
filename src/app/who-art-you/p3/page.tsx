"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page3() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#FFFFFF] from-20% via-[#F6D8B4] via-50% to-[#C1E9B4] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p3.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />

                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <FloatingImageButton
                    imageSrc="/mbti/p3-btn-1.svg"
                    onClick={() => router.push("/who-art-you/p4")}
                    left="left-[40%]"
                    mdLeft="md:left-[52%]"
                    bottom="bottom-[10%]"
                    mdBottom="md:bottom-[15%]"
                    width="w-[70%]"
                    mdWidth="md:w-[16%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p3-btn-2.svg"
                    onClick={() => router.push("/who-art-you/p4")}
                    left="left-[75%]"
                    mdLeft="md:left-[52%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[5%]"
                    width="w-[70%]"
                    mdWidth="md:w-[16%]"
                />
            </div>
        </div>
    );
}
