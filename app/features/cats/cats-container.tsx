import CatsList from "./components/list/cats-list";

export default function CatsContainer() {
  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <h1 className="font-bold text-5xl">CATKNOW</h1>

      <CatsList />
    </div>
  );
}
