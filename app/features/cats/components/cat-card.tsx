"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Cat {
  url?: string;
  name?: string;
  id?: string;
  className?: string;
}

const PLACEHOLDER_URL = "https://placehold.co/200x240/black/white";

export default function CatCard({
  url = "",
  name = "Unknown Cat",
  id,
  className,
}: Cat) {
  const router = useRouter();
  return (
    <div
      className={`rounded-xl gap-6 max-h-[280px] border-2 border-black ${
        id && "cursor-pointer"
      } `}
      onClick={() => id && router.push(`/${id}`)}
    >
      <div
        className={`relative w-full h-[240px] rounded-xl overflow-hidden ${className}`}
      >
        <Image
          src={url}
          alt={name}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={PLACEHOLDER_URL}
        />
      </div>

      <div className="p-2 text-center font-semibold">
        <p>{name}</p>
      </div>
    </div>
  );
}
