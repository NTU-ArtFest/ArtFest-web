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

                <div
                    className="
                        absolute 
                        left-1/2 
                        top-[9%]          /* Mobile: lower position */
                        md:top-[12%]       /* Desktop: higher position */
                        -translate-x-1/2 
                        -translate-y-1/2 
                        w-[70%]            /* Mobile: wider */
                        md:w-[30%]         /* Desktop: narrower */
                        max-w-[250px] 
                        md:max-w-[250px]
                        "
                >
                    <Image
                        src="/mbti/p2-title.svg"
                        alt="Title"
                        width={320}
                        height={205}
                        className="w-full h-auto"
                    />
                </div>
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-1.svg"
                    onClick={() => router.push("/mbti/p3")}
                    left="left-[40%]"
                    mdLeft="md:left-[47%]"
                    bottom="bottom-[10%]"
                    mdBottom="md:bottom-[14%]"
                    width="w-[70%]"
                    mdWidth="w-[18%]"
                />
                <FloatingImageButton
                    imageSrc="/mbti/p2-btn-2.svg"
                    onClick={() => router.push("/mbti/p3")}
                    left="left-[75%]"
                    mdLeft="md:left-[55.6%]"
                    bottom="bottom-[0%]"
                    mdBottom="md:bottom-[3%]"
                    width="w-[70%]"
                    mdWidth="w-[20%]"
                />
            </div>
        </div>
    );
}
