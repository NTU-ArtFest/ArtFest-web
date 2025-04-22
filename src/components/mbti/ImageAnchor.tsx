import Image from "next/image";
import Link from "next/link";

interface ImageAnchorProps {
    imageSrc: string;
    link: string;
    left?: string;
    bottom?: string;
    width?: string;
}

export const ImageAnchor: React.FC<ImageAnchorProps> = ({
    imageSrc,
    left,
    bottom,
    width,
    link,
}) => {
    return (
        <div
            className={`
                absolute
                ${left}
                ${bottom}
                -translate-x-1/2
                -translate-y-1/2
                ${width}
                opacity-0
            `}
        >
            <Link
                href={link}
                target="_blank"
                download={`${localStorage.getItem(
                    "username"
                )} - MBTI results.png`}
                className="w-full"
            >
                <Image
                    src={imageSrc}
                    alt="Floating Button"
                    width={140}
                    height={140}
                    className="w-full h-auto"
                />
            </Link>
        </div>
    );
};
