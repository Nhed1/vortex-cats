import { BreedData } from "@/app/(cats)/components/interfaces";
import InfoText from "./info-text";

export const CatInfo = ({ catInfo }: { catInfo: BreedData | null }) => {
  return (
    <div className="flex flex-col self-start gap-4">
      {catInfo ? (
        <>
          <InfoText label="Name:" value={catInfo?.name} />
          <InfoText label="Description:" value={catInfo?.description} />
          <InfoText label="Life Span:" value={catInfo?.life_span} />
          <InfoText label="Origin:" value={catInfo?.origin} />
        </>
      ) : (
        <p className="font-semibold">
          No breed information available for this cat.
        </p>
      )}
    </div>
  );
};
