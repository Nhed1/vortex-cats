import { CatsData } from "@/app/(cats)/interfaces";
import { catApi } from "@/app/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const CATS_LIMIT = 20;

export const useGetCats = ({
  categoryIds = [],
}: {
  categoryIds?: number[];
}) => {
  const fetchCats = async ({ pageParam = 1 }): Promise<CatsData[]> => {
    const response = await catApi.get("/images/search", {
      params: {
        page: pageParam,
        limit: CATS_LIMIT,
        has_breeds: categoryIds.length === 0,
        category_ids: categoryIds.length > 0 ? categoryIds.join(",") : null,
      },
    });
    return response.data;
  };

  return useInfiniteQuery({
    staleTime: Infinity,
    queryKey: ["cats", categoryIds],
    queryFn: fetchCats,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });
};
