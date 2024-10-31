"use client";
import Image from "next/image";

interface Cat {
  url?: string;
  name?: string;
}

export default function CatContainer({ url = "", name = "---" }: Cat) {
  return (
    <div className="rounded-2xl gap-6 border-2 border-black w-fit">
      <div className="relative w-[200px] h-[200px] rounded-2xl overflow-hidden">
        <Image src={url} alt={name} layout="fill" objectFit="cover" />
      </div>
      <p>{name}</p>
    </div>
  );
}
