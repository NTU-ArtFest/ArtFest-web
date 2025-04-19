"use client";

import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page6() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#F9F4C3] from-20% via-[#F6D8B4] via-50% to-[#C1E9B4] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p6.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <FloatingImageButton
                    imageSrc="/mbti/p6-btn-1.svg"
                    onClick={() => router.push("/mbti/p7")}
                    left="left-[50%]"
                    mdLeft="md:left-[50%]"
                    bottom="bottom-[10%]"
                    mdBottom="md:bottom-[17%]"
                    width="w-[70%]"
                    mdWidth="md:w-[20%]"
                />

                <FloatingImageButton
                    imageSrc="/mbti/p6-btn-2.svg"
                    onClick={() => router.push("/mbti/p7")}
                    left="left-[75%]"
                    mdLeft="md:left-[50.5%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[8%]"
                    width="w-[70%]"
                    mdWidth="md:w-[20%]"
                />
            </div>
        </div>
    );
}
