"use client";
import Image from "next/image";

interface Cat {
  url?: string;
  name?: string;
}

const PLACEHOLDER_URL = "https://placehold.co/200x240/black/white";

export default function CatCard({ url = "", name = "---" }: Cat) {
  return (
    <div className="rounded-xl gap-6 border-2 border-black w-fit">
      <div className="relative w-[209px] h-[240px] rounded-xl overflow-hidden">
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
