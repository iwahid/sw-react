import { CharacterModel } from "./characterModel";
import { PlanetModel } from "./planetModel";
import { StarshipModel } from "./starshipModel";
import { VehicleModel } from "./vehicleModel";
import { SpecieModel } from './specieModel';

/**
 * Interface for extended film domain model
 */
export interface ExtendedFilmModel {
  /** Ids of character that appeared in film */
  characters: CharacterModel[];
  /** Date of creation film in database */
  created: string;
  /** Director of film */
  director: string;
  /** Date of last editing film document in database */
  edited: string;
  /** Id of episode in star wars universe */
  episodeId: number;
  /** Description of film */
  openingCrawl: string;
  /** Ids of planet that appeared in film  */
  planets: PlanetModel[];
  /** Full name of film producer */
  producer: string;
  /** Film release date */
  releaseDate: string;
  /** Ids of specie that appeared in film */
  species: SpecieModel[];
  /** Ids of starships that appeared in film */
  starships: StarshipModel[];
  /** Title of film */
  title: string;
  /** Ids of vehicles that appeared in film */
  vehicles: VehicleModel[];
  /** Poster of the film */
  imageBackground: string;
  /** Background poster of the film */
  imagePoster: string;
  /** Id of document in database */
  docId: number;
}
