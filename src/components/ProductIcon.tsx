
import Image from "next/image";

type ProductIconProps = {
  image: string;
  name: string;
  className?: string;
};

export default function ProductIcon({
  image,
  name,
  className = "",
}: ProductIconProps) {
  const isImageUrl = /^https?:\/\//i.test(image);

  if (isImageUrl) {
    return (
      <Image
        src={image}
        alt={name}
        width={56}
        height={56}
        sizes="56px"
        className={`size-14 shrink-0 rounded-xl object-contain ${className}`}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={name}
      className={`flex size-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl ${className}`}
    >
      {image || "🛒"}
    </span>
  );
}
