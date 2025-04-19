import Image from "next/image";

interface FloatingImageButtonProps {
    imageSrc: string;
    onClick: () => void;
    left?: string;
    mdLeft?: string;
    bottom?: string;
    mdBottom?: string;
    width?: string;
    mdWidth?: string;
}

export const FloatingImageButton: React.FC<FloatingImageButtonProps> = ({
    imageSrc,
    onClick,
    left = "left-[75%]",
    mdLeft = "md:left-[50.5%]",
    bottom = "bottom-[0%]",
    mdBottom = "md:bottom-[8%]",
    width = "w-[70%]",
    mdWidth = "md:w-[20%]",
}) => {
    return (
        <div
            className={`
        absolute
        ${left}
        ${mdLeft}
        ${bottom}
        ${mdBottom}
        -translate-x-1/2
        -translate-y-1/2
        ${width}
        ${mdWidth}
      `}
        >
            <button onClick={onClick} className="w-full">
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
