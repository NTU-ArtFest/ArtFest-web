"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page1() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#F4F4B5] from-20% via-[#C7ECB8] via-50% to-[#8DCEA2] overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p1.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                {/* Clickable Button SVG - different positioning for mobile vs desktop */}
                <FloatingImageButton
                    imageSrc="/mbti/p1-ready-btn.svg"
                    onClick={() => router.push("/mbti/p2")}
                    left="left-[80%]"
                    mdLeft="md:left-[57.9%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[2%]"
                    width="w-[10%]"
                    mdWidth="w-[10%]"
                />
            </div>
        </div>
    );
}
