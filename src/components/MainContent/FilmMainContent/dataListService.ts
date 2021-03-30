/** Getting a list with the necessary data in a certain format, for each of the categories */
import { ExtendedFilmModel } from '../../../models';

/** Result list interface */
export interface ResultList {
  id: number,
  title: string[],
  subTitle?: string[],
  image?: string
}

export const getPlanetsList = (currentFilm: ExtendedFilmModel):ResultList[] => {
  const planetsList: ResultList[] = currentFilm.planets.map(planet => ({
      id: planet.docId,
      title: ['Name', planet.name],
      subTitle: ['Diameter', planet.diameter],
      image: planet.image
    }))
  return planetsList
}

export const getCharactersList = (currentFilm: ExtendedFilmModel):ResultList[] => {
  const charactersList: ResultList[] = currentFilm.characters.map(character => ({
      id: character.docId,
      title: ['Name', character.name],
      subTitle: ['Gender', character.gender],
      image: character.image
    }))
  return charactersList
}

export const getSpeciesList = (currentFilm: ExtendedFilmModel):ResultList[] => {
  const speciesList: ResultList[] = currentFilm.species.map(specie => ({
      id: specie.docId,
      title: ['Name', specie.name],
      subTitle: ['Language',specie.language]
    }))
  return speciesList
}

export const getStarshipsList = (currentFilm: ExtendedFilmModel):ResultList[] => {
  const starshipsList: ResultList[] = currentFilm.starships.map(starship => ({
      id: starship.docId,
      title: ['Vehicle class', starship.starshipClass],
      subTitle: ['MGLT', starship.starshipSpeed]
    }))
  return starshipsList
}

export const getVehiclesList = (currentFilm: ExtendedFilmModel):ResultList[] => {
  const vehiclesList: ResultList[] = currentFilm.vehicles.map(vehicle => ({
      id: vehicle.docId,
      title: ['Vehicle class', vehicle.vehicleClass]
    }))
  return vehiclesList
}