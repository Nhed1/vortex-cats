"use client";

import { Error as ErrorComponent } from "@/app/components/error";

export default function Error() {
  return <ErrorComponent onRetry={() => window.location.reload()} />;
}
