"use client";

import { useState } from "react";
import { Filters } from "./components/filters/filters";
import CatsList from "./components/list/cats-list";

export default function CatsContainer() {
  const [filterId, setFilterId] = useState<number | undefined>();

  return (
    <div className="flex flex-col gap-2 py-4 mt-4 mx-auto w-fit">
      <Filters setFilterId={setFilterId} filterId={filterId} />
      <CatsList filterId={filterId} />
    </div>
  );
}
