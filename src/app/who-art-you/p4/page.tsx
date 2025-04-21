"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";

export default function Page4() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#F5E49D] from-20% via-[#F6D8B4] via-50% to-[#D4D5DD] to-70% overflow-hidden">
            {/* Background SVG */}
            <div className="relative w-full h-full">
                <Image
                    src="/mbti/p4.svg"
                    alt="MBTI Background"
                    fill
                    className="object-cover md:object-contain pointer-events-none"
                    sizes="100vw"
                    priority
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-hat.svg"
                    onClick={() => {
                        router.push("/who-art-you/p5");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[44%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[20%]"
                    width="w-[70%]"
                    mdWidth="md:w-[12%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-hp.svg"
                    onClick={() => {
                        router.push("/who-art-you/p5");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[56%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[15%]"
                    width="w-[70%]"
                    mdWidth="md:w-[9%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-sg.svg"
                    onClick={() => {
                        router.push("/who-art-you/p5");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[45%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[7%]"
                    width="w-[70%]"
                    mdWidth="md:w-[14%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p4-bt.svg"
                    onClick={() => {
                        router.push("/who-art-you/p5");
                    }}
                    left="left-[75%]"
                    mdLeft="md:left-[56%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[2%]"
                    width="w-[70%]"
                    mdWidth="md:w-[8%]"
                />
            </div>
        </div>
    );
}
