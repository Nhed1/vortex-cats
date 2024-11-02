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
    <div className="gap-2 flex flex-wrap justify-center md:justify-normal lg-mx:auto">
      {data.map((filter) => (
        <FilterSelect
          key={filter.id}
          title={filter.name}
          isSelected={filter.id === filterId}
          selectFilter={() => selectFilter(filter.id)}
        />
      ))}
    </div>
  );
};
