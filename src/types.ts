export interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
      other?: any; // Rendre `other` optionnel partout
    };
    types: { type: { name: string } }[];
    weight: number;
    height: number;
  }