import Image from "next/image";
import { useRouter } from "next/navigation";

interface FloatingImageButtonProps {
    imageSrc: string;
    left?: string;
    bottom?: string;
    width?: string;
    choice: string;
    page: number;
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
    const key = traitMap[choice];
    if (key) {
        return { ...traits, [key]: choice as any };
    }
    return traits;
};

export const FloatingImageButton: React.FC<FloatingImageButtonProps> = ({
    imageSrc,
    left = "left-[75%]",
    bottom = "bottom-[0%]",
    width = "w-[70%]",
    choice,
    page,
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
        if (page == 8) {
            localStorage.setItem("username", choice);
            router.push("/mbti/result");
        } else if (page < 8) {
            router.push(`/mbti/p${page + 1}`);
        }
    };

    return (
        <div
            className={`
                absolute
                ${left}
                ${bottom}
                -translate-x-1/2
                -translate-y-1/2
                ${width}
            `}
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
