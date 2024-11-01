"use client";

import { FilterSelect } from "./filter-select";
import { Dispatch, SetStateAction } from "react";
import { useGetFilters } from "./hooks/use-get-filters";
import { Error } from "@/app/components/error";
import { LoadingIcon } from "@/app/components/loading-icon";

export const Filters = ({
  filterId,
  setFilterId,
}: {
  filterId?: number;
  setFilterId: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const { data = [], isError, isLoading, refetch } = useGetFilters();

  const selectFilter = (id: number) => {
    setFilterId((prevSelectedId) => (prevSelectedId === id ? undefined : id));
  };

  if (isError) return <Error onRetry={refetch} />;
  if (isLoading) return <LoadingIcon />;

  return (
    <div className="gap-2 py-2  px-6 flex flex-wrap justify-center lg:justify-normal md:px-24 lg:px-0">
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
