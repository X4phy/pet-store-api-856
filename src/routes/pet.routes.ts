import { Request, Response } from 'express';
import * as petService from '../services/pet.service';

export const getAll = (req: Request, res: Response): void => {

  const species = req.query.species as string | undefined;
  const pets = petService.getAllPets(species);
  res.status(200).json(pets);
};

export const getOne = (req: Request, res: Response): void => {

  const { id } = req.params;
  const pet = petService.getPetById(id);
  if (!pet) {
    res.status(404).json({ message: 'Pet not found' });
    return;
  }
  res.status(200).json(pet);
};

export const create = (req: Request, res: Response): void => {

  const { name, species, age, price, available } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({ message: 'name is required and must be a non-empty string' });
    return;
  }
  if (!petService.isValidSpecies(species)) {
    res.status(400).json({ message: 'species must be one of: dog, cat, bird, fish, other' });
    return;
  }
  if (typeof age !== 'number' || age < 0) {
    res.status(400).json({ message: 'age must be a number >= 0' });
    return;
  }
  if (typeof price !== 'number' || price <= 0) {
    res.status(400).json({ message: 'price must be a number > 0' });
    return;
  }
  if (typeof available !== 'boolean') {
    res.status(400).json({ message: 'available must be a boolean' });
    return;
  }

  const newPet = petService.createPet({ name, species, age, price, available });
  res.status(201).json(newPet);
};

export const update = (req: Request, res: Response): void => {

  const { id } = req.params;
  const { name, species, age, price, available } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({ message: 'name is required and must be a non-empty string' });
    return;
  }
  if (!petService.isValidSpecies(species)) {
    res.status(400).json({ message: 'species must be one of: dog, cat, bird, fish, other' });
    return;
  }
  if (typeof age !== 'number' || age < 0) {
    res.status(400).json({ message: 'age must be a number >= 0' });
    return;
  }
  if (typeof price !== 'number' || price <= 0) {
    res.status(400).json({ message: 'price must be a number > 0' });
    return;
  }
  if (typeof available !== 'boolean') {
    res.status(400).json({ message: 'available must be a boolean' });
    return;
  }

  const updatedPet = petService.updatePet(id, { name, species, age, price, available });
  if (!updatedPet) {
    res.status(404).json({ message: 'Pet not found' });
    return;
  }
  res.status(200).json(updatedPet);
};

export const remove = (req: Request, res: Response): void => {

  const { id } = req.params;
  const deleted = petService.deletePet(id);
  if (!deleted) {
    res.status(404).json({ message: 'Pet not found' });
    return;
  }
  res.status(200).json({ message: 'Pet deleted successfully' });
};