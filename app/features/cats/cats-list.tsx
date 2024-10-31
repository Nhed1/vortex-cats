"use client";
import CatContainer from "./cat-container";
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
    <div className="bg-white">
      <>
        {data?.pages.map((group, i) => (
          <div key={i}>
            {group.map((cat) => (
              <CatContainer key={cat.id} name={cat.name} url={cat.url} />
            ))}
          </div>
        ))}
      </>
      <div ref={observerRef}>
        {isFetchingNextPage
          ? "Loading more..."
          : !hasNextPage && "Nothing more to load"}
      </div>
    </div>
  );
}
