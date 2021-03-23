/**
 * Interface for starship domain model
 */
export interface StarshipModel {
  /** Megalight per hour (transport speed) */
  MGLT: string;
  /** Rating of starship hyperdrive */
  hyperdriveRating: string;
  /** Pilots ids of starship */
  pilots: number[];
  /** Class of starship */
  starshipClass: string;
  /** Id of the document */
  docId: number;
}
