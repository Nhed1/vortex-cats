import Link from "next/link";
import { Arrow } from "./icons/arrow";

export function ReturnLink({ href = "/", className = "" }) {
  return (
    <Link href={href} className={className}>
      <Arrow />
    </Link>
  );
}
