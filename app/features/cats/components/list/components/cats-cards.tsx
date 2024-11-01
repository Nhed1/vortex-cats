"use client";

import CatCard from "../../cat-card";
import { CatsData } from "../../interfaces";

export default function CatsCards({ catGroups }: { catGroups: CatsData[][] }) {
  return (
    <>
      {catGroups.map((group) =>
        group.map((cat) => (
          <CatCard
            key={cat.id}
            name={cat.breeds ? cat.breeds[0].name : undefined}
            url={cat.url}
            id={cat.id}
          />
        ))
      )}
    </>
  );
}
