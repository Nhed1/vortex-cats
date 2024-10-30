"use client";
import Image from "next/image";

interface Cat {
  url?: string;
  name?: string;
}

export default function CatContainer({ url = "", name = "---" }: Cat) {
  return (
    <div className="rounded gap-6 border-2 border-black w-fit text-black">
      <Image src={url} alt={name} width={209} height={209} />
      <p>{name}</p>
    </div>
  );
}
