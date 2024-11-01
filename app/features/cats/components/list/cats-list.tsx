"use client";

import { Loading } from "@/app/components/loading";
import { useGetCats } from "./hooks";
import { Error } from "@/app/components/error";
import { LoadMore } from "./components/load-more";
import CatsCards from "./components/cats-cards";

export default function CatsList({ filterId }: { filterId?: number }) {
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    refetch,
  } = useGetCats({
    categoryIds: filterId ? [filterId] : [],
  });

  if (isPending) return <Loading />;
  if (isError) return <Error onRetry={refetch} />;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
        <CatsCards catGroups={data.pages} />
      </div>
      <LoadMore
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}
