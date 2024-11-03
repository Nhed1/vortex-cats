import { LoadingIcon } from "@/app/components/loading-icon";
import { useInfiniteScroll } from "../hooks";

export function LoadMore({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}) {
  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <div ref={observerRef} className="self-center" data-testid="load-more">
      {isFetchingNextPage ? (
        <LoadingIcon className="my-8" />
      ) : (
        !hasNextPage && <div className="mt-6">Nothing more o load</div>
      )}
    </div>
  );
}
