"use client";
import { useGetCats } from "./hooks/use-get-cats";
import CatContainer from "./cat-container";

export default function CatsList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetCats();
  if (isFetching) return "Loading...";

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
        <div>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </>
    </div>
  );
}
