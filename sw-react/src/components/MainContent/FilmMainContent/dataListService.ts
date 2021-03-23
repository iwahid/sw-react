/* Получение списка с нужными данными по каждой из категорий */
import { ExtendedFilmModel } from '../../../models/extendedFilmModel';

/** Result list interface */
export interface IResultList {
  id: string,
  title: string[],
  subTitle?: string[],
  image?: string
}

export const getPlanetsList = (currentFilm: ExtendedFilmModel):IResultList[] => {
  const planetsList: IResultList[] = currentFilm.planets.map(planet => ({
      id: planet.docId,
      title: ['Name', planet.name],
      subTitle: ['Diameter', planet.diameter],
      image: planet.image
    }))
  return planetsList
}

export const getCharactersList = (currentFilm: ExtendedFilmModel):IResultList[] => {
  const charactersList: IResultList[] = currentFilm.characters.map(character => ({
      id: character.docId,
      title: ['Name', character.name],
      subTitle: ['Gender', character.gender],
      image: character.image
    }))
  return charactersList
}

export const getSpeciesList = (currentFilm: ExtendedFilmModel):IResultList[] => {
  const speciesList: IResultList[] = currentFilm.species.map(specie => ({
      id: specie.docId,
      title: ['Name', specie.name],
      subTitle: ['Language',specie.language]
    }))
  return speciesList
}

export const getStarshipsList = (currentFilm: ExtendedFilmModel):IResultList[] => {
  const starshipsList: IResultList[] = currentFilm.starships.map(starship => ({
      id: starship.docId,
      title: ['Vehicle class', starship.starshipClass],
      subTitle: ['MGLT', starship.MGLT]
    }))
  return starshipsList
}

export const getVehiclesList = (currentFilm: ExtendedFilmModel):IResultList[] => {
  const vehiclesList: IResultList[] = currentFilm.vehicles.map(vehicle => ({
      id: vehicle.docId,
      title: ['Vehicle class', vehicle.vehicleClass]
    }))
  return vehiclesList
}