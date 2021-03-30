// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for specie domain model
 */
export interface SpecieDTO {
  /** Average height of specie in cm */
  average_height: string;
  /** Average lifespan of specie in years */
  average_lifespan: string;
  /** Classification of specie */
  classification: string;
  /** Date of creation specie in database */
  created: string;
  /** Designation of specie */
  designation: string;
  /** Date of last editing specie document in database */
  edited: string;
  /** Colors of eye that might be. Comma separated */
  eye_colors: string;
  /** Colors of hair that might be. Comma separated */
  hair_colors: string;
  /** Id of specie homeworld */
  homeworld: number;
  /** Language of specie */
  language: string;
  /** Name of specie */
  name: string;
  /** Characters id that is representing this specie  */
  people: number[];
  /** Colors of skin that might be. Comma separated */
  skin_colors: string;
}
