"use client";

import { FilterSelect } from "./filter-select";
import { Dispatch, SetStateAction } from "react";
import { useGetFilters } from "./hooks/use-get-filters";

export const Filters = ({
  setFilterId,
}: {
  setFilterId: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const { data = [], isError, isLoading } = useGetFilters();

  const selectFilter = (id: number) => {
    setFilterId(id);
  };

  if (isError) return "error";
  if (isLoading) return "loading";

  return (
    <div className="gap-6 flex">
      {data.map((filter) => (
        <FilterSelect
          key={filter.id}
          title={filter.name}
          selectFilter={() => selectFilter(filter.id)}
        />
      ))}
    </div>
  );
};
