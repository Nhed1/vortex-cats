interface Breed {
  name: string;
  origin: string;
  life_span: string;
  description: string;
}

export interface CatsData {
  breeds: Breed[];
  url: string;
  id: string;
  name: string;
}
