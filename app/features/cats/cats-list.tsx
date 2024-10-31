"use client";
import CatCard from "./cat-card";
import { useGetCats, useInfiniteScroll } from "./hooks";

export default function CatsList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useGetCats();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (isPending) return "loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <div className="flex flex-col items-center p-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 mx-auto">
        {data?.pages.map((group) =>
          group.map((cat) => (
            <CatCard key={cat.id} name={cat.breeds[0]?.name} url={cat.url} />
          ))
        )}
      </div>
      <div ref={observerRef}>
        {isFetchingNextPage
          ? "Loading more..."
          : !hasNextPage && "Nothing more to load"}
      </div>
    </div>
  );
}
