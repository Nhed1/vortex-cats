"use client";
import { useQuery } from "@tanstack/react-query";
import { catApi } from "./utils/api";

export default function Home() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["cats"],
    queryFn: async () => {
      const response = await catApi.get(
        "v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
      );
      return await response;
    },
  });

  if (isPending) return "Loading...";

  if (isError) return "An error has occurred: ";

  console.log(data);
  return <div>Hello World</div>;
}
