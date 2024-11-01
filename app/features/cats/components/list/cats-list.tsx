"use client";

import { Loading } from "@/app/components/loading";
import CatCard from "../cat-card";
import { useGetCats, useInfiniteScroll } from "./hooks";
import { Error } from "@/app/components/error";
import { LoadingIcon } from "@/app/components/loading-icon";

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

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (isPending) return <Loading />;
  if (isError) return <Error onRetry={refetch} />;

  return (
    <div className="flex flex-col items-center">
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
      <div ref={observerRef}>
        {isFetchingNextPage ? (
          <LoadingIcon />
        ) : (
          !hasNextPage && <div className="mt-6">Nothing more o load</div>
        )}
      </div>
    </div>
  );
}
