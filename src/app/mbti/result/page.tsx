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
    const BASE_URL = "https://artfest.ntu.edu.tw:2001/public/mbti/results/";
    const [imageURL, setImageURL] = useState("");
    const [username, setUsername] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [mbti, setMbti] = useState("");
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
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const getFinalMBTI = (traits: MBTI): string | null => {
        const { EI, NS, FT } = traits;
        if (EI && NS && FT) {
            const mbti = `${EI.toUpperCase()}${NS.toUpperCase()}${FT.toUpperCase()}`;
            return VALID_FINAL_TYPES.includes(mbti) ? mbti : null;
        }
        return null;
    };

    const formatNumber = (n: number): string => {
        return ("00" + n.toString()).slice(-3);
    };

    const handleDownload = async () => {
        if (!imageContainerRef.current) {
            console.error("Image container ref not found.");
            alert("Could not initiate download. Please try again.");
            return;
        }
        if (!username) {
            alert("Username not loaded yet. Please wait.");
            return;
        }

        setIsDownloading(true); // Set loading state

        try {
            // Target the specific div containing the image and text
            const elementToCapture = imageContainerRef.current;
            // Use html2canvas to capture the element
            const canvas = await html2canvas(elementToCapture, {
                useCORS: true, // Important if the image source is cross-origin (proxy helps)
                allowTaint: true, // May be needed depending on image source and browser
                backgroundColor: null, // Keep transparency if any (though image likely opaque)
                // Increase scale for potentially higher resolution output
                scale: 2,
            });
            // Convert the canvas to a PNG data URL
            const dataUrl = canvas.toDataURL("image/png");
            // Create a temporary link element
            const link = document.createElement("a");
            link.href = dataUrl;
            // Create a filename, make it user-specific
            link.download = `mbti-result-${username.replace(/\s+/g, "_")}.png`; // Replace spaces in username
            // Append link to body (needed for Firefox)
            document.body.appendChild(link);
            // Programmatically click the link to trigger download
            link.click();
            // Remove the link from the body
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error generating image:", error);
            alert("An error occurred while generating the image for download.");
        } finally {
            setIsDownloading(false); // Reset loading state
        }
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

                const picNum = Math.floor(Math.random() * 400) + 1;
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
                    className={`relative h-full w-auto max-w-full max-h-full aspect-[9/16]`}
                >
                    {/* Background Image */}
                    {imageURL && ( // Conditionally render image if URL exists
                        <Image
                            src={imageURL}
                            alt="MBTI Result Background 1"
                            fill // Fill the aspect ratio container
                            className="object-contain pointer-events-none" // Keep image contained
                            sizes="100vw"
                            priority // Or adjust as needed
                        />
                    )}
                    {username && ( // Only render if username is fetched
                        <p
                            className={`
                            ${titleFont.className}
                            absolute top-[4.5%] left-[8.5%] z-10
                            text-[48px]
                            text-black
                            font-bold
                            select-none
                        `}
                        >
                            {username}
                        </p>
                    )}
                </div>
            </div>
            {/* <button
                onClick={handleDownload}
                disabled={isDownloading || !username || !imageURL}
                className={`
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition duration-150 ease-in-out
                `}
            >
                {isDownloading ? "Generating..." : "Download Result"}
            </button> */}
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
