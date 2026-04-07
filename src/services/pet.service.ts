import { v4 as uuidv4 } from 'uuid';
import { Pet, Species, petStore } from '../models/pet.model';



const VALID_SPECIES: Species[] = ['dog', 'cat', 'bird', 'fish', 'other'];

export const isValidSpecies = (value: unknown): value is Species =>
  VALID_SPECIES.includes(value as Species);


export const getAllPets = (species?: string): Pet[] => {

  if (species !== undefined) {
    return petStore.filter((pet) => pet.species === species);
  }
  return petStore;
};

export const getPetById = (id: string): Pet | undefined => {

  return petStore.find((pet) => pet.id === id);
};

export const createPet = (data: Omit<Pet, 'id'>): Pet => {

  const newPet: Pet = { id: uuidv4(), ...data };
  petStore.push(newPet);
  return newPet;
};

export const updatePet = (id: string, data: Omit<Pet, 'id'>): Pet | null => {

  const index = petStore.findIndex((pet) => pet.id === id);
  if (index === -1) return null;
  const updatedPet: Pet = { id, ...data };
  petStore[index] = updatedPet;
  return updatedPet;
};

export const deletePet = (id: string): boolean => {

  const index = petStore.findIndex((pet) => pet.id === id);
  if (index === -1) return false;
  petStore.splice(index, 1);
  return true;
};