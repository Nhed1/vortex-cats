import { catApi } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";

interface Filter {
  id: number;
  name: string;
}

export const useGetFilters = () => {
  const fetchFilters = async (): Promise<Filter[]> => {
    const response = await catApi.get("/categories");
    return response.data;
  };

  return useQuery({
    queryKey: ["cat-filters"],
    queryFn: fetchFilters,
  });
};
