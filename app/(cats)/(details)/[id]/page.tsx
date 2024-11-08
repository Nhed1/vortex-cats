import CatDetails from "../cat-details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <CatDetails id={id} />;
}
