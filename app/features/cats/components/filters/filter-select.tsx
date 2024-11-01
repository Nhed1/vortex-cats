"use client";

interface FilterSelectProps {
  title: string;
  selectFilter: () => void;
}

export const FilterSelect = ({ title, selectFilter }: FilterSelectProps) => {
  return <button onClick={selectFilter}>{title}</button>;
};
