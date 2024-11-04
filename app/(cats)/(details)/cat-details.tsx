import { catApi } from "@/app/utils/api";
import { ReturnLink } from "@/app/components/return-link";
import { CatsData } from "../interfaces";
import CatCard from "../components/cat-card";
import { CatInfo } from "./components/cat-info";

export default async function CatDetails({ id }: { id: string }) {
  const catData = (await catApi.get<CatsData>(`/images/${id}`)).data;
  const catInfo = catData.breeds ? catData.breeds[0] : null;

  return (
    <div className="flex flex-col gap-8 w-full px-12 my-14 md:flex-row lg:w-2/3 lg:mx-auto">
      <ReturnLink />
      <CatCard
        name={catInfo?.name}
        url={catData.url}
        className="w-full md:w-[400px] md:max-h-[300px]"
      />
      <CatInfo catInfo={catInfo} />
    </div>
  );
}
