"use client";

import { useState } from "react";
import { Filters } from "./components/filters/filters";
import CatsList from "./components/list/cats-list";

export default function CatsContainer() {
  const [filterId, setFilterId] = useState<number | undefined>();

  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <h1 className="font-bold text-5xl">CATKNOW</h1>
      <Filters setFilterId={setFilterId} filterId={filterId} />
      <CatsList filterId={filterId} />
    </div>
  );
}
