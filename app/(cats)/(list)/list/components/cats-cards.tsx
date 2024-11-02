"use client";

import CatCard from "@/app/(cats)/components/cat-card";
import { CatsData } from "@/app/(cats)/interfaces";

export default function CatsCards({ catGroups }: { catGroups: CatsData[][] }) {
  return (
    <>
      {catGroups.map((group) =>
        group.map((cat) => (
          <CatCard
            key={cat.id}
            name={cat.breeds ? cat.breeds[0]?.name : undefined}
            url={cat.url}
            id={cat.id}
          />
        ))
      )}
    </>
  );
}
