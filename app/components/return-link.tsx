"use client";
import { Arrow } from "./icons/arrow";
import { useRouter } from "next/navigation";

export function ReturnLink() {
  const { back } = useRouter();
  return (
    <button onClick={() => back()} className="absolute top-0 left-2">
      <Arrow />
    </button>
  );
}
