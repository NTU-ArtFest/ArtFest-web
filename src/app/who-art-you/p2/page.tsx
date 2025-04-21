"use client";

import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Problem2() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#88A4CA] from-20% via-[#F0F5AA] via-70% to-[#F8EFD9] overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p2.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-1.svg"
                    onClick={() => router.push("/who-art-you/p3")}
                    left="left-[40%]"
                    mdLeft="md:left-[47%]"
                    bottom="bottom-[10%]"
                    mdBottom="md:bottom-[14%]"
                    width="w-[70%]"
                    mdWidth="md:w-[18%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-2.svg"
                    onClick={() => router.push("/who-art-you/p3")}
                    left="left-[75%]"
                    mdLeft="md:left-[55.6%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[3%]"
                    width="w-[70%]"
                    mdWidth="md:w-[20%]"
                />
            </div>
        </div>
    );
}
