/**
 * Interface for film domain model
 */
export interface FilmModel {
  /** Ids of character that appeared in film */
  characters: number[];
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
  planets: number[];
  /** Full name of film producer */
  producer: string;
  /** Film release date */
  releaseDate: string;
  /** Ids of specie that appeared in film */
  species: number[];
  /** Ids of starships that appeared in film */
  starships: number[];
  /** Title of film */
  title: string;
  /** Ids of vehicles that appeared in film */
  vehicles: number[];
  /** Id of document in database */
  docId: string;
}
