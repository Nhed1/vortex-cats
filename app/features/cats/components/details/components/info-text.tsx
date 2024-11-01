export default async function InfoText({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2">
      <p className="font-semibold">{label}</p>
      <p>{value}</p>
    </div>
  );
}
