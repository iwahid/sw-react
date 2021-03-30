/**
 * Interface for specie domain model
 */
export interface SpecieModel {
  /** Average height of specie in cm */
  averageHeight: string;
  /** Average lifespan of specie in years */
  averageLifespan: string;
  /** Classification of specie */
  classification: string;
  /** Date of creation specie in database */
  created: string;
  /** Designation of specie */
  designation: string;
  /** Date of last editing specie document in database */
  edited: string;
  /** Colors of eye that might be. Comma separated */
  eyeColors: string;
  /** Colors of hair that might be. Comma separated */
  hairColors: string;
  /** Id of specie homeworld */
  homeworld: number;
  /** Language of specie */
  language: string;
  /** Name of specie */
  name: string;
  /** Characters id that is representing this specie  */
  people: number[];
  /** Colors of skin that might be. Comma separated */
  skinColors: string;
  /** Id of the document */
  docId: number;
}
