"use client";

import { FilterSelect } from "./filter-select";
import { Dispatch, SetStateAction } from "react";
import { useGetFilters } from "./hooks/use-get-filters";

export const Filters = ({
  filterId,
  setFilterId,
}: {
  filterId?: number;
  setFilterId: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const { data = [], isError, isLoading } = useGetFilters();

  const selectFilter = (id: number) => {
    setFilterId((prevSelectedId) => (prevSelectedId === id ? undefined : id));
  };

  if (isError) return "error";
  if (isLoading) return "loading";

  return (
    <div className="gap-2 p-4 justify-center flex flex-wrap">
      {data.map((filter) => (
        <FilterSelect
          key={filter.id}
          title={filter.name}
          id={filter.id}
          selectedId={filterId}
          selectFilter={() => selectFilter(filter.id)}
        />
      ))}
    </div>
  );
};
