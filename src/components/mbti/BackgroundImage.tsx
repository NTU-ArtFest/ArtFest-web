import Image from "next/image";

type backgroundImageType = {
  src: string;
};

export const BackgroundImage = ({ src }: backgroundImageType) => {
  return (
    <Image
      src={src}
      alt="Background"
      fill
      className="object-contain pointer-events-none"
      sizes="100vw"
      priority
    />
  );
};
