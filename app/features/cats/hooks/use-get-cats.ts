import { catApi } from "@/app/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const CATS_LIMIT = 5;

interface CatsData {
  breeds: string[];
  url: string;
  id: string;
  name: string;
}

export const useGetCats = () => {
  const fetchCats = async ({ pageParam = 1 }): Promise<CatsData[]> => {
    const response = await catApi.get("/images/search", {
      params: {
        page: pageParam,
        limit: CATS_LIMIT,
      },
    });
    return response.data;
  };

  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: fetchCats,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });
};
