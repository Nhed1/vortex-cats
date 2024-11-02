"use client";

interface FilterSelectProps {
  title: string;
  selectFilter: () => void;
  isSelected: boolean;
}

export const FilterSelect = ({
  title,
  selectFilter,
  isSelected,
}: FilterSelectProps) => {
  return (
    <button
      onClick={selectFilter}
      className={`px-4 py-2 border-2 rounded-3xl transition-colors duration-200 border-black ${
        isSelected ? "bg-black text-white " : "bg-white text-black "
      }`}
    >
      {title}
    </button>
  );
};
