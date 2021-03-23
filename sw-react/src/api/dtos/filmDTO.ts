// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for film domain model
 */
export interface FilmDTO {
  /** Ids of character that appeared in film */
  characters: number[];
  /** Date of creation film in database */
  created: string;
  /** Director of film */
  director: string;
  /** Date of last editing film document in database */
  edited: string;
  /** Id of episode in star wars universe */
  episode_id: number;
  /** Description of film */
  opening_crawl: string;
  /** Ids of planet that appeared in film  */
  planets: number[];
  /** Full name of film producer */
  producer: string;
  /** Film release date */
  release_date: string;
  /** Ids of specie that appeared in film */
  species: number[];
  /** Ids of starships that appeared in film */
  starships: number[];
  /** Title of film */
  title: string;
  /** Ids of vehicles that appeared in film */
  vehicles: number[];
}
