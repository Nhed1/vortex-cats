"use client";
import { FilterSelect } from "./filter-select";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useGetFilters } from "./hooks/use-get-filters";
import { Error } from "@/app/components/error";
import { LoadingIcon } from "@/app/components/loading-icon";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Filters = ({
  filterId,
  setFilterId,
}: {
  filterId?: number;
  setFilterId: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const router = useRouter();
  const { data = [], isError, isLoading, refetch } = useGetFilters();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectFilter = (id: number) => {
    const newFilterId = filterId === id ? undefined : id;
    setFilterId(newFilterId);

    const params = new URLSearchParams(searchParams.toString());
    if (newFilterId !== undefined) {
      params.set("filterId", newFilterId.toString());
    } else {
      params.delete("filterId");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const filterIdParam = searchParams.get("filterId");
    if (filterIdParam) {
      setFilterId(Number(filterIdParam));
    }
  }, [searchParams, setFilterId]);

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
