"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import localFont from "next/font/local";
import { FloatingImageButton } from "@/components/mbti/FloatingImageButton";
import { ImageAnchor } from "@/components/mbti/ImageAnchor";

// --- Font Setup ---
const titleFont = localFont({ src: "../SourceHanSerifTC-VF.ttf" });

// --- Constants ---
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
const BASE_URL = "https://artfest.ntu.edu.tw:2025/public/mbti/results/";

// --- Types ---
type MBTI = {
    EI?: "e" | "i";
    NS?: "n" | "s";
    FT?: "f" | "t";
    JP?: "j" | "p";
    accessory?: "sunglasses" | "hat" | "bowtie" | "headphone";
    weapon?: "sword" | "wand" | "shield" | "hammer";
};

// --- Component ---
export default function Result() {
    // --- State ---
    const [initialImageURL, setInitialImageURL] = useState(""); // Blob URL for initial image + blur
    const [finalImageURL, setFinalImageURL] = useState(""); // Data URL for final composited image
    const [username, setUsername] = useState("");
    const [mbti, setMbti] = useState(""); // Determined MBTI type for section 2
    const [isComposited, setIsComposited] = useState(false); // Flag: true after html2canvas completes
    const [isMobile, setIsMobile] = useState(false); // Flag: true for smaller screens
    const [isLoading, setIsLoading] = useState(true); // True during fetch and composition
    const [error, setError] = useState<string | null>(null); // Stores any error messages

    // --- Refs ---
    const imageContainerRef = useRef<HTMLDivElement>(null); // Ref for the div to be captured by html2canvas
    // --- Effects ---
    // Effect: Set viewport height CSS variable

    useEffect(() => {
        const updateVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        updateVh();
        window.addEventListener("resize", updateVh);
        return () => window.removeEventListener("resize", updateVh);
    }, []);

    // Effect: Check if the device is mobile based on width
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Effect: Fetch username from local storage
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            console.warn("Username not found in localStorage.");
            setError("Username not found. Cannot generate result.");
            setIsLoading(false); // Stop loading if essential data is missing
            // setUsername("Guest"); // Optional: Provide a default
        }
    }, []);

    // Effect: Fetch initial image (blob URL) after username is loaded
    useEffect(() => {
        // Exit if username is not yet available (required for composition later)
        if (!username) return;

        let currentBlobUrl = ""; // Variable to hold the blob URL for cleanup

        async function fetchResultImage() {
            setError(null); // Clear previous errors
            setIsLoading(true); // Ensure loading is true when fetch starts

            const mbtiTraitsStr = localStorage.getItem("mbti-traits");
            if (!mbtiTraitsStr) {
                console.error("MBTI traits not found in localStorage.");
                setError("MBTI traits not found.");
                setIsLoading(false);
                return;
            }

            try {
                const finalTraits: MBTI = JSON.parse(mbtiTraitsStr);
                const finalMBTI = getFinalMBTI(finalTraits);

                if (!finalMBTI) {
                    console.error(
                        "Could not determine final MBTI type:",
                        finalTraits
                    );
                    setError("Could not determine result type.");
                    setIsLoading(false);
                    return;
                }
                setMbti(finalMBTI); // Set state for the second section's background

                if (!finalTraits.accessory || !finalTraits.weapon) {
                    console.error("Incomplete MBTI traits found:", finalTraits);
                    setError("Incomplete result traits found.");
                    setIsLoading(false);
                    return;
                }

                // Determine image details
                const maxPicNum = ["ENF", "ENT", "ESJ"].includes(finalMBTI)
                    ? 400
                    : 100;
                const picNum = Math.floor(Math.random() * maxPicNum) + 1;
                const targetImageUrl = `${BASE_URL}${finalMBTI}/${
                    finalTraits.accessory
                }_${finalTraits.weapon}/${formatNumber(picNum)}.png`;
                const proxyApiUrl = `/api/mbti/proxy-image?url=${encodeURIComponent(
                    targetImageUrl
                )}`;

                console.log("Fetching initial image via proxy:", proxyApiUrl);
                const response = await fetch(proxyApiUrl);

                if (!response.ok) {
                    let errorMsg = `Proxy error fetching image! Status: ${response.status}`;
                    try {
                        const errorJson = await response.json();
                        errorMsg += ` - ${
                            errorJson.error || "Unknown proxy error"
                        }`;
                    } catch (_) {
                        /* Ignore if response isn't JSON */
                    }
                    throw new Error(errorMsg);
                }

                const blob = await response.blob();
                currentBlobUrl = URL.createObjectURL(blob);
                setInitialImageURL(currentBlobUrl); // Set the state for the initial blob URL
                // -> isLoading remains true, waiting for composition
            } catch (e: any) {
                console.error("Error fetching result image:", e);
                setError(`Failed to load image: ${e.message || String(e)}`);
                setIsLoading(false); // Stop loading on fetch error
            }
        }

        fetchResultImage();

        // Cleanup function to revoke the blob URL when the component unmounts or refetches
        return () => {
            if (currentBlobUrl) {
                URL.revokeObjectURL(currentBlobUrl);
                console.log("Revoked blob URL:", currentBlobUrl);
            }
        };
    }, [username]); // Re-run fetch if username changes (or becomes available)

    // Effect: Generate final composited image (data URL) using html2canvas
    useEffect(() => {
        // Exit if conditions aren't met: no initial image, ref not ready, username missing, or already composited
        if (
            !initialImageURL ||
            !imageContainerRef.current ||
            !username ||
            isComposited
        ) {
            return;
        }

        // Use a small timeout to ensure the browser has painted the initial image and text
        // before html2canvas tries to capture it.
        const timer = setTimeout(async () => {
            if (!imageContainerRef.current) return; // Double-check ref inside async callback

            console.log("Starting html2canvas composition...");
            try {
                const canvas = await html2canvas(imageContainerRef.current, {
                    useCORS: true, // Necessary if fetching external resources (though proxy helps)
                    allowTaint: true, // Often used with useCORS
                    backgroundColor: null, // Keep transparency
                    scale: 2, // Increase resolution for better quality
                    scrollX: -window.scrollX, // Capture from viewport origin
                    scrollY: -window.scrollY,
                    windowWidth: imageContainerRef.current.scrollWidth, // Use element dimensions
                    windowHeight: imageContainerRef.current.scrollHeight,
                });
                const generatedImageUrl = canvas.toDataURL("image/png"); // Get image as base64 data URL

                console.log("Composition complete. Setting final data URL.");
                setFinalImageURL(generatedImageUrl); // Set the final image state
                setIsComposited(true); // Mark as composited
                setIsLoading(false); // <<< FINALLY, set loading to false
            } catch (error) {
                console.error("Error during html2canvas composition:", error);
                setError("Failed to generate final image.");
                setIsLoading(false); // Stop loading on composition error
            }
        }, 100); // Delay in milliseconds (adjust if needed)

        // Cleanup function to clear the timeout if dependencies change before it runs
        return () => clearTimeout(timer);
    }, [initialImageURL, username, isComposited]); // Dependencies for this effect

    // --- Helper Functions ---
    const getFinalMBTI = (traits: MBTI): string | null => {
        const { EI, NS, FT, JP } = traits;
        if (EI && NS && FT && JP) {
            const mbti1 = `${EI.toUpperCase()}${NS.toUpperCase()}${FT.toUpperCase()}`;
            const mbti2 = `${EI.toUpperCase()}${NS.toUpperCase()}${JP.toUpperCase()}`;
            // Check which 3-letter combo is valid
            return VALID_FINAL_TYPES.includes(mbti1)
                ? mbti1
                : VALID_FINAL_TYPES.includes(mbti2)
                ? mbti2
                : null; // Return null if neither is valid
        }
        return null;
    };

    const formatNumber = (n: number): string => {
        return ("00" + n.toString()).slice(-3); // Pad number to 3 digits (e.g., 5 -> "005")
    };

    // --- Render Logic ---
    return (
        <div className="w-full">
            {/* --- Section 1: Result Image --- */}
            <div
                className="relative flex items-center justify-center w-full overflow-hidden bg-gradient-to-b from-[#F4F4B5] from-20% via-[#C7ECB8] via-50% to-[#8DCEA2]"
                style={{
                    minHeight: "100vh",
                    height: "calc(var(--vh, 1vh) * 100)", // Use dynamic viewport height
                }}
            >
                {/* Error Display Area (Shows above everything if error occurs) */}
                {error && !isLoading && (
                    <div className="absolute z-[100] p-4 m-4 text-center text-red-800 bg-red-100 rounded-md shadow-lg">
                        <p className="font-bold">Error:</p>
                        <p>{error}</p>
                    </div>
                )}

                {/* Loading Text Indicator (Shows only if loading AND no initial image yet) */}
                {isLoading && !initialImageURL && !error && (
                    <div
                        className={`${titleFont.className} absolute z-50 text-lg font-bold text-black`}
                    >
                        結果生成中...
                    </div>
                )}

                {/* Blurred Image Overlay (Visible ONLY during loading phase AFTER initial image arrives) */}
                {isLoading && initialImageURL && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        {/* Container to maintain aspect ratio for the blurred image */}
                        <div className="relative h-screen w-auto max-w-full max-h-full aspect-[9/16]">
                            <Image
                                src={initialImageURL}
                                fill
                                alt="Loading MBTI Result - Blurred"
                                className="object-contain blur-md brightness-75" // Apply visual effects
                                unoptimized // Often helps with blob URLs performance
                                priority // Load this placeholder quickly
                                sizes="100vw" // Responsive sizing hint
                            />
                        </div>
                    </div>
                )}
                {/* Main Image Container (Used for html2canvas capture AND final display) */}
                <div
                    ref={imageContainerRef}
                    className={`absolute transition-opacity duration-500 ease-in-out h-screen w-auto max-w-full max-h-full aspect-[9/16] ${
                        isLoading ? "z-0 pointer-events-none" : "z-20"
                    }`}
                >
                    {(finalImageURL || initialImageURL) && (
                        <Image
                            // Key forces React to treat it as a new element when src changes (important for transition)
                            key={finalImageURL || initialImageURL}
                            // Source: Use final composited URL if available, otherwise the initial one (for capture)
                            src={finalImageURL || initialImageURL}
                            fill
                            alt="Final MBTI Result"
                            className="object-contain pointer-events-none" // Final image is sharp
                            quality={100}
                            priority={!!finalImageURL}
                            sizes="100vw"
                        />
                    )}
                    {initialImageURL && !isComposited && username && (
                        <div
                            className={`${
                                titleFont.className
                            } absolute text-black font-bold select-none z-30 ${
                                isMobile
                                    ? "top-[5.5%] left-[8.5%] text-[36px]"
                                    : "top-[3%] left-[8.5%] text-[48px]"
                            }`}
                        >
                            {username}
                        </div>
                    )}
                </div>
            </div>

            {/* --- Section 2: MBTI Info Background --- */}
            {finalImageURL && (
                <div
                    className="relative flex items-center justify-center w-full overflow-hidden bg-gradient-to-b from-[#8DCEA2] to-[#F4F4B5]" // Reversed gradient
                    style={{
                        minHeight: "100vh",
                        height: "calc(var(--vh, 1vh) * 100)",
                    }}
                >
                    {/* Container to maintain aspect ratio */}
                    <div className="relative h-screen w-auto max-w-full max-h-full aspect-[9/16]">
                        {/* Render background only if MBTI type was successfully determined */}
                        {mbti && !error && (
                            <Image
                                src={`/mbti/${mbti}.jpg`} // Use determined MBTI type for image path
                                alt={`MBTI ${mbti} Background`}
                                fill
                                className="object-contain pointer-events-none"
                                sizes="100vw"
                                priority // Load this background quickly too
                            />
                        )}
                        <ImageAnchor
                            imageSrc="/mbti/link.svg"
                            link={finalImageURL}
                            left="left-[31%]"
                            bottom="bottom-[89.5%]"
                            width="w-[17.5%]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
