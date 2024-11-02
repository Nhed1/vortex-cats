export interface BreedData {
  name: string;
  origin: string;
  life_span: string;
  description: string;
}

export interface CatsData {
  breeds: BreedData[];
  url: string;
  id: string;
  name: string;
}
