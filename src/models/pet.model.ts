import { v4 as uuidv4 } from 'uuid';

export type Species = 'dog' | 'cat' | 'bird' | 'fish' | 'other';

export type Pet = {
  id: string;
  name: string;
  species: Species;
  age: number;
  price: number;
  available: boolean;
};

// This is your in-memory "database".
// All pets are stored here. It starts with a few seeded entries so you can test GET right away.
export const petStore: Pet[] = [
  {
    id: uuidv4(),
    name: 'Buddy',
    species: 'dog',
    age: 3,
    price: 500,
    available: true,
  },
  {
    id: uuidv4(),
    name: 'Whiskers',
    species: 'cat',
    age: 2,
    price: 300,
    available: true,
  },
  {
    id: uuidv4(),
    name: 'Tweety',
    species: 'bird',
    age: 1,
    price: 150,
    available: false,
  },
];