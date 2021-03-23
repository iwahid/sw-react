/**
 * Interface for character domain model
 */
export interface CharacterModel {
  /** Birth year format: "number"BBY */
  birthYear: string;
  /** Date of creation character in database */
  created: string;
  /** Date of last editing character document in database */
  edited: string;
  /** Color of eye */
  eyeColor: string;
  /** Character gender */
  gender: string;
  /** Color of hair */
  hairColor: string;
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
  skinColor: string;
  /** Id of the document */
  docId: string;
}
