"use client";
import { useGetCats } from "./hooks/use-get-cats";
import CatContainer from "./cat-container";
import { useEffect, useRef } from "react";

export default function CatsList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useGetCats();

  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
