/**
 * Interface for starship domain model
 */
export interface StarshipModel {
  /** Speed of starship in MGLT (Megalight per hour) */
  starshipSpeed: string;
  /** Rating of starship hyperdrive */
  hyperdriveRating: string;
  /** Pilots ids of starship */
  pilots: number[];
  /** Class of starship */
  starshipClass: string;
  /** Id of the document */
  docId: number;
}
