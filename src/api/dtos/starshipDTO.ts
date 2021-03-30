// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for starship domain model
 */
export interface StarshipDTO {
  /** MGLT of starship */
  MGLT: string;
  /** Rating of starship hyperdrive */
  hyperdrive_rating: string;
  /** Pilots ids of starship */
  pilots: number[];
  /** Class of starship */
  starship_class: string;
}
