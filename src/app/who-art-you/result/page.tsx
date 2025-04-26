"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import localFont from "next/font/local";

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
  const [screenWidth, setScreenWidth] = useState(0);
  const hasDescenderLetter = /[gjpqy]/i.test(username);

  let percentFontSize = "", percentFontTop = "";

    if (screenWidth < 768) {
      percentFontSize = "9.7vw";
      const aspectRatio = 1920 / 1080; 
      const scaledHeight = screenWidth * aspectRatio; 
      const topPx = scaledHeight * 0.04; 
      percentFontTop = ((topPx / screenWidth) * 100).toFixed(2) + "vw";
    } else {
      percentFontSize = "5.2vh";
      percentFontTop = "4.2vh";
    }

    if (hasDescenderLetter) {
      if (percentFontTop.endsWith("vh")) {
        const topValue = parseFloat(percentFontTop);
        percentFontTop = `${(topValue - 0.65).toFixed(2)}vh`;
      } else if (percentFontTop.endsWith("vw")) {
        const topValue = parseFloat(percentFontTop);
        percentFontTop = `${(topValue - 0.5).toFixed(2)}vw`;
      }
    }

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
    const checkUserAgent = () => {
      const mobileRegex =
        /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };

    checkUserAgent(); // Run once on mount
  }, []);

  // Effect: Update the ScreenHeight for name size and position setting
  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };
    updateSize(); // Initial call
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
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
          console.error("Could not determine final MBTI type:", finalTraits);
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
        const maxPicNum = ["ENF", "ENT", "ESJ"].includes(finalMBTI) ? 400 : 100;
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
            errorMsg += ` - ${errorJson.error || "Unknown proxy error"}`;
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
    <div
      className="w-screen sm:h-auto overflow-y-auto sm:overflow-visible
                 md:bg-gradient-to-b md:from-[#F4F4B5] md:via-[#C7ECB8] md:to-[#8DCEA2]"
    >
      <div className="w-full">
        {/* --- Section 1: Result Image --- */}
        <div className="w-screen md:h-screen bg-gradient-to-b from-[#F4F4B5] via-[#C7ECB8] to-[#8DCEA2]">
          <div className="relative w-full aspect-[1080/1920] md:aspect-auto md:h-full">
            {/* Error Display Area */}
            {error && !isLoading && (
              <div className="absolute z-[100] p-4 m-4 text-center text-red-800 bg-red-100 rounded-md shadow-md  sm:aspect-auto sm:min-h-screen">
                <p className="font-bold">Error:</p>
                <p>{error}</p>
              </div>
            )}

            {/* Loading Text */}
            {isLoading && !initialImageURL && !error && (
              <div
                className={`${titleFont.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-md font-bold text-black`}
              >
                結果生成中...
              </div>
            )}

            {/* Blurred Image Overlay */}
            {isLoading && initialImageURL && (
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <Image
                  src={initialImageURL}
                  fill
                  alt="Loading MBTI Result - Blurred"
                  className="object-contain blur-md brightness-75"
                  unoptimized
                  priority
                  sizes="100vw"
                />
              </div>
            )}

            {/* Final Composited Image */}
            <div
              ref={imageContainerRef}
              className={`relative w-full aspect-[1080/1920] md:h-screen md:w-auto md:mx-auto transition-opacity duration-500 ease-in-out ${
                isLoading ? "z-0 pointer-events-none" : "z-20"
              }`}
            >
              {(finalImageURL || initialImageURL) && (
                <img
                  src={finalImageURL || initialImageURL}
                  alt="Final MBTI Result"
                  className="object-contain w-full h-auto pointer-events-auto"
                  draggable="true"
                />
              )}

              {initialImageURL && !isComposited && username && (
                <div
                  className={`${titleFont.className} absolute text-black font-semibold select-none z-30`}
                  style={{
                    top: percentFontTop,
                    left: "8.9%",
                    fontSize: percentFontSize,
                  }}
                >
                  {username}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- Section 2: MBTI Info Background --- */}
        {finalImageURL && (
          <div className="w-screen md:h-screen bg-gradient-to-b from-[#8DCEA2] to-[#F4F4B5]">
            <div className="relative w-full aspect-[1080/1920] md:aspect-auto md:h-full">
              {mbti && !error && (
                <Image
                  src={`/who-art-you/${mbti}-${
                    isMobile ? "mobile" : "comp"
                  }.png`}
                  alt={`MBTI ${mbti} Background`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="100vw"
                  priority
                />
              )}
              {/* The original download button*/}
              {/* <ImageAnchor
                  imageSrcMobile="/who-art-you/link-mobile.png"
                  imageSrcDesktop="/who-art-you/link-comp.png"
                  link={finalImageURL}
                  x={238.77}
                  y={136.1}
                  btnWidth={185.72}
                  btnHeight={44.21}
                  imageWidth={1080}
                  imageHeight={1920}
                />*/}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
