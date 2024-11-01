import { catApi } from "@/app/utils/api";
import { CatsData } from "../interfaces";
import CatCard from "../cat-card";
import InfoText from "./components/info-text";

export default async function CatDetails({ id }: { id: string }) {
  const catData = (await catApi.get<CatsData>(`/images/${id}`)).data;
  const catInfo = catData.breeds[0];

  return (
    <div className="flex flex-col gap-8 w-full px-12 my-14 md:flex-row lg:px-56">
      <CatCard
        name={catInfo.name}
        url={catData.url}
        className="w-full md:w-[400px] md:max-h-[300px]"
      />

      <div className="flex flex-col self-start gap-4">
        <InfoText label="Name:" value={catInfo.name} />
        <InfoText label="Description:" value={catInfo.description} />
        <InfoText label="Life Span:" value={catInfo.life_span} />
        <InfoText label="Origin:" value={catInfo.origin} />
      </div>
    </div>
  );
}
