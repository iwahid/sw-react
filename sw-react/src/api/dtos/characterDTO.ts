// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for character dto
 */
export interface CharacterDTO {
  /** Birth year of character */
  birth_year: string;
  /** Date of creation character in database */
  created: string;
  /** Date of last editing character document in database */
  edited: string;
  /** Color of eye */
  eye_color: string;
  /** Character gender */
  gender: string;
  /** Color of hair */
  hair_color: string;
  /** Character height in meters */
  height: string;
  /** Id of homeworld */
  homeworld: number;
  /** Link to image with this character */
  image: string;
  /** Mass of character in kg */
  mass: string;
  /** Character name */
  name: string;
  /** Color of skin */
  skin_color: string;
}
