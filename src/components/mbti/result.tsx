"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import localFont from "next/font/local";

const titleFont = localFont({ src: "./SourceHanSerifTC-VF.ttf" });

const VALID_FINAL_TYPES = [
    "ENF",
    "ENT",
    "ESJ",
    "ESP",
    "INF",
    "INT",
    "ISJ",
    "ISP",
];

type MBTI = {
    EI?: "e" | "i";
    NS?: "n" | "s";
    FT?: "f" | "t";
    JP?: "j" | "p";
    accessory?: "sunglasses" | "hat" | "bowtie" | "headphone";
    weapon?: "sword" | "wand" | "shield" | "hammer";
};

export default function Result() {
    const BASE_URL = "https://artfest.ntu.edu.tw:2025/public/mbti/results/";
    const [imageURL, setImageURL] = useState("");
    const [username, setUsername] = useState("");
    const isDownloading = false ;
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [mbti, setMbti] = useState("");
    const [isComposited, setIsComposited] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        updateVh();

        window.addEventListener("resize", updateVh);
        return () => window.removeEventListener("resize", updateVh);
    }, []);
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint is 768px
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const getFinalMBTI = (traits: MBTI): string | null => {
        const { EI, NS, FT, JP } = traits;
        if (EI && NS && FT && JP) {
            const mbti1 = `${EI.toUpperCase()}${NS.toUpperCase()}${FT.toUpperCase()}`;
            const mbti2 = `${EI.toUpperCase()}${NS.toUpperCase()}${JP.toUpperCase()}`;
            return VALID_FINAL_TYPES.includes(mbti1) ? mbti1 : mbti2;
        }
        return null;
    };

    const formatNumber = (n: number): string => {
        return ("00" + n.toString()).slice(-3);
    };

    useEffect(() => {
        async function fetchResultImage() {
            const mbtiTraitsStr = localStorage.getItem("mbti-traits");
            if (!mbtiTraitsStr) {
                console.error("MBTI traits not found in localStorage.");
                return;
            }
            try {
                const finalTraits: MBTI = JSON.parse(mbtiTraitsStr);
                const finalMBTI = getFinalMBTI(finalTraits);
                setMbti(finalMBTI!);
                if (
                    !finalMBTI ||
                    !finalTraits.accessory ||
                    !finalTraits.weapon
                ) {
                    console.error("Incomplete MBTI traits found:", finalTraits);
                    return;
                }

                const maxPicNum = ["ENF", "ENT", "ESJ"].includes(finalMBTI)
                  ? 400
                  : 100;
                const picNum = Math.floor(Math.random() * maxPicNum) + 1;
                const targetImageUrl = `${BASE_URL}${finalMBTI}/${
                    finalTraits.accessory
                }_${finalTraits.weapon}/${formatNumber(picNum)}.png`;

                console.log("Fetching image via proxy from:", targetImageUrl);

                const proxyApiUrl = `/api/mbti/proxy-image?url=${encodeURIComponent(
                    targetImageUrl
                )}`;

                console.log("Fetching image via proxy:", proxyApiUrl);

                // Use GET request to your proxy endpoint
                const response = await fetch(proxyApiUrl); // Defaults to GET

                if (!response.ok) {
                    // Try to get error message from proxy response if it's JSON
                    let errorMsg = `Proxy error! Status: ${response.status}`;
                    try {
                        const errorJson = await response.json();
                        errorMsg += ` - ${errorJson.error || "Unknown error"}`;
                    } catch (_) {
                        console.error("Failed to parse error response:", _);
                        // Ignore if response is not JSON
                    }
                    throw new Error(errorMsg);
                }

                const blob = await response.blob();
                setImageURL(URL.createObjectURL(blob));
            } catch (e) {
                console.error("Error fetching result image:", e);
            }
        }

        fetchResultImage();

        return () => {
            if (imageURL) {
                URL.revokeObjectURL(imageURL);
            }
        };
    }, []);
    useEffect(() => {
        async function generateFinalImage() {
            if (
                imageContainerRef.current &&
                imageURL.startsWith("blob:") &&
                username
            ) {
                const canvas = await html2canvas(imageContainerRef.current, {
                    useCORS: true,
                    allowTaint: true,
                    background: undefined,
                    // scale: 2,
                    // scrollX: 0,
                    // scrollY: 0,
                });
                const generatedImageUrl = canvas.toDataURL("image/png");
                setImageURL(generatedImageUrl);
                setIsComposited(true);
            }
        }

        generateFinalImage();
    }, [imageURL, username]);

    return (
      <div className="w-full">
        {/* --- Section 1: First Image --- */}
        <div
          className="relative flex items-center justify-center w-full overflow-hidden bg-gradient-to-b from-[#F4F4B5] from-20% via-[#C7ECB8] via-50% to-[#8DCEA2]"
          style={{
            minHeight: "100vh",
            height: "calc(var(--vh, 1vh) * 100)",
          }}
        >
          <div
            ref={imageContainerRef}
            className={`${
              isDownloading ? "leading-[0.5]" : ""
            } relative h-full w-auto max-w-full max-h-full aspect-[9/16]`}
          >
            {/* Background Image */}
            {imageURL && (
              <img
                src={imageURL}
                alt="Final MBTI Result"
                className="object-contain w-full h-full"
                crossOrigin="anonymous"
                draggable={false}
              />
            )}
            {imageURL && !isComposited && username && (
              <div
                className={`
                    ${titleFont.className}
                    ${
                      isMobile
                        ? "absolute top-[3%] left-[8.5%] z-10"
                        : "absolute top-[4%] left-[8.5%] z-10"
                    }
                    
                    ${isMobile ? "text-[36px]" : "text-[48px]"}
                    text-black
                    font-medium
                    select-none
                `}
              >
                {username}
              </div>
            )}
          </div>
        </div>
        <div
          className="relative flex items-center justify-center w-full overflow-hidden bg-gradient-to-b from-[#8DCEA2] from-20% via-[#C7ECB8] via-50% to-[#F4F4B5]" // Section 2 background (adjust gradient as needed)
          // Set height using the --vh CSS variable
          style={{
            minHeight: "100vh",
            height: "calc(var(--vh, 1vh) * 100)",
          }}
        >
          <div
            className={`relative h-full w-auto max-w-full max-h-full aspect-[9/16]`}
          >
            {/* Background Image 2 */}
            <Image
              src={`/mbti/${mbti}.jpg`}
              alt="MBTI Result Background 2"
              fill
              className="object-contain pointer-events-none"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    );
}
