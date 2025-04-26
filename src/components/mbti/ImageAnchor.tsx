import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageAnchorProps {
  imageSrcMobile: string;
  imageSrcDesktop: string;
  link: string;
  x: number; // button X coordinate in original image
  y: number; // button Y coordinate in original image
  btnWidth: number; // button width in original image
  btnHeight: number; // button height in original image
  imageWidth: number; // original image width
  imageHeight: number; // original image height
}

export const ImageAnchor: React.FC<ImageAnchorProps> = ({
	imageSrcMobile,
  imageSrcDesktop,
  link,
  x,
  y,
  btnWidth,
  btnHeight,
  imageWidth,
  imageHeight,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [left, setLeft] = useState<string | null>(null);
  const [bottom, setBottom] = useState<string | null>(null);
  const [width, setWidth] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth >= 768) {
        // Desktop mode
        const scaledImageHeight = screenHeight;
        const scaledImageWidth = (imageWidth / imageHeight) * scaledImageHeight;
        const imageLeft = (screenWidth - scaledImageWidth) / 2;

        const buttonWidthPx = (btnWidth / imageWidth) * scaledImageWidth;
        const buttonLeftPx =
          imageLeft + scaledImageWidth * (x / imageWidth) + buttonWidthPx / 2;

        const leftPercent = (buttonLeftPx / screenWidth) * 100;
        const widthPercent = (buttonWidthPx / screenWidth) * 100;

        const buttonBottomPx =
          screenHeight -
          (scaledImageHeight * ((y + btnHeight * 1.5) / imageHeight));
        const bottomPercent = (buttonBottomPx / screenHeight) * 100;

        setLeft(leftPercent.toFixed(2));
        setWidth(widthPercent.toFixed(2));
        setBottom(bottomPercent.toFixed(2));
      } else {
        // Mobile mode
        const scaledImageWidth = screenWidth;
        const scaledImageHeight = (imageHeight / imageWidth) * scaledImageWidth;
        const buttonWidthPx = (btnWidth / imageWidth) * scaledImageWidth;
        const buttonLeftPx =
          scaledImageWidth * (x / imageWidth) + buttonWidthPx / 2;

        const leftPercent = (buttonLeftPx / screenWidth) * 100;
        const widthPercent = (buttonWidthPx / screenWidth) * 100;

        const buttonBottomPx =
          scaledImageHeight -
          scaledImageHeight * ((y + btnHeight * 1.5) / imageHeight);
        const bottomPercent = (buttonBottomPx / scaledImageHeight) * 100;

        setLeft(leftPercent.toFixed(2));
        setWidth(widthPercent.toFixed(2));
        setBottom(bottomPercent.toFixed(2));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageWidth, imageHeight, x, y, btnWidth, btnHeight]);

  if (!left || !width || !bottom) return null;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${left}%`,
        bottom: `${bottom}%`,
        width: `${width}%`,
      }}
    >
      <Link
        href={link}
        target="_blank"
        download={`${localStorage.getItem("username") || "MBTI Result"}.png`}
        className="w-full"
      >
        <Image
          src={isMobile ? imageSrcMobile : imageSrcDesktop}
          alt="Floating Button"
          width={185.72}
          height={44.21}
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
};