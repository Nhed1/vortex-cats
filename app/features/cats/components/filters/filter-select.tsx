"use client";

interface FilterSelectProps {
  title: string;
  selectFilter: () => void;
  id: number;
  selectedId?: number;
}

export const FilterSelect = ({
  title,
  selectFilter,
  id,
  selectedId,
}: FilterSelectProps) => {
  const isSelected = id === selectedId;

  return (
    <button
      onClick={selectFilter}
      className={`px-4 py-2 border-2 rounded-lg transition-colors duration-200 ${
        isSelected
          ? "bg-black text-white border-black"
          : "bg-white text-black border-black"
      }`}
    >
      {title}
    </button>
  );
};
