import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface FloatingImageButtonProps {
    imageSrc: string;
    left?: string;
    bottom?: string;
    width?: string;
    choice: string;
    page: number;
    disabled?: boolean;
}

type MBTI = {
  EI?: "e" | "i";
  NS?: "n" | "s";
  FT?: "f" | "t";
  JP?: "j" | "p";
  accessory?: "sunglasses" | "hat" | "bowtie" | "headphone";
  weapon?: "sword" | "wand" | "shield" | "hammer";
};

// Map input choices to trait keys
const traitMap: Partial<Record<string, keyof MBTI>> = {
    e: "EI",
    i: "EI",
    n: "NS",
    s: "NS",
    f: "FT",
    t: "FT",
    j: "JP",
    p: "JP",
    sword: "weapon",
    wand: "weapon",
    shield: "weapon",
    hammer: "weapon",
    sunglasses: "accessory",
    hat: "accessory",
    bowtie: "accessory",
    headphones: "accessory",
};

const updateMBTITraits = (choice: string, traits: MBTI): MBTI => {
  const key = traitMap[choice] as keyof MBTI;
  if (key) {
    return { ...traits, [key]: choice };
  }
  return traits;
};

export const FloatingImageButton: React.FC<FloatingImageButtonProps> = ({
  imageSrc,
  left = "75",
  bottom = "0",
  width = "70",
  choice,
  page,
  disabled,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (choice === "init") {
      const initialTraits: MBTI = {
        EI: undefined,
        NS: undefined,
        FT: undefined,
        JP: undefined,
        accessory: undefined,
        weapon: undefined,
      };
      localStorage.setItem("mbti-traits", JSON.stringify(initialTraits));
    } else if (choice !== "start") {
      const mbtiTraitsStr = localStorage.getItem("mbti-traits");
      if (!mbtiTraitsStr) {
        console.error("MBTI traits not found in localStorage.");
        return;
      }

      const currentTraits: MBTI = JSON.parse(mbtiTraitsStr);
      const updatedTraits = updateMBTITraits(choice, currentTraits);
      localStorage.setItem("mbti-traits", JSON.stringify(updatedTraits));
    }
    if (page === 8 && !disabled) {
      localStorage.setItem("username", choice);
      router.push("/who-art-you/result");
    } else if (page < 8) {
      router.push(`/who-art-you/p${page + 1}`);
    }
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${left}%`,
        bottom: `${bottom}%`,
        width: `${width}%`,
      }}
    >
      <button onClick={handleClick} className="w-full">
        <Image
          src={imageSrc}
          alt="Floating Button"
          width={140}
          height={140}
          className="w-full h-auto"
        />
      </button>
    </div>
  );
};


type Props = {
  imageSrc: string;
  page: number;
  choice: string;
  imageWidth: number;
  imageHeight: number;
  x: number;
  y: number;
  btnWidth: number;
  btnHeight: number;
  disabled?: boolean;
};

export const ResponsiveFloatingButton = ({
  imageSrc,
  page,
  choice,
  imageWidth,
  imageHeight,
  x,
  y,
  btnWidth,
  btnHeight,
  disabled,
}: Props) => {
  const [left, setLeft] = useState<string | null>(null);
  const [width, setWidth] = useState<string | null>(null);
  const [bottom, setBottom] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const scaledImageWidth = window.innerHeight * (imageWidth / imageHeight);
      const imageLeft = (screenWidth - scaledImageWidth) / 2;

      const buttonLeftPx = imageLeft + scaledImageWidth * (x / imageWidth);
      const buttonWidthPx = scaledImageWidth * (btnWidth / imageWidth);

      const leftPercent = (buttonLeftPx / screenWidth) * 100;
      const widthPercent = (buttonWidthPx / screenWidth) * 100;

      setLeft(leftPercent.toFixed(2));
      setWidth(widthPercent.toFixed(2));

      if (y != null && btnHeight != null) {
        const buttonBottomPx =
        screenHeight -
        scaledImageWidth * (y / imageWidth) -
        scaledImageWidth * (btnHeight / imageWidth);
        const bottomPercent = (buttonBottomPx / screenHeight) * 100;
        setBottom(bottomPercent.toFixed(2));
      } else {
        setBottom("10"); // fallback
      }
      if (screenWidth < 768 && btnHeight !== undefined && btnWidth !== undefined) {
        setLeft(((x / imageWidth) * 100).toFixed(2));
        setBottom((((imageHeight - y - btnHeight) / imageHeight) * 100).toFixed(2));
        setWidth(((btnWidth / imageWidth) * 100).toFixed(2));
        console.log(left, width, bottom) ;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageWidth, imageHeight, x, y, btnWidth, btnHeight, bottom, left, width]);

  if (!left || !width || !bottom) return null;

  return (
    <FloatingImageButton
      imageSrc={imageSrc}
      page={page}
      choice={choice}
      left={left}
      bottom={bottom}
      width={width}
      disabled={disabled}
    />
  );
};
