"use client";

import { useState } from "react";
import { Filters } from "./filters";
import { CatsList } from "./list";

export default function Home() {
  const [filterId, setFilterId] = useState<number | undefined>();

  return (
    <div className="flex flex-col gap-2 py-4 mt-8 mx-auto w-full">
      <div className="flex flex-col px-8 gap-4 md:px-16 lg:px-24">
        <Filters setFilterId={setFilterId} filterId={filterId} />
        <CatsList filterId={filterId} />
      </div>
    </div>
  );
}
