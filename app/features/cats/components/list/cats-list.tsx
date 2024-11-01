"use client";

import { Loading } from "@/app/components/loading";
import CatCard from "../cat-card";
import { useGetCats } from "./hooks";
import { Error } from "@/app/components/error";
import { LoadMore } from "./components/load-more";

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
        {data?.pages.map((group) =>
          group.map((cat) => (
            <CatCard
              key={cat.id}
              name={cat.breeds[0]?.name}
              url={cat.url}
              id={cat.id}
            />
          ))
        )}
      </div>
      <LoadMore
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}
