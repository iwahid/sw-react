// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/** 
 * Interface for vehicle domain model
 */
export interface VehicleDTO {
  /** Pilots ids of vehicle */
  pilots: number[];
  /** Class of vehicle */
  vehicle_class: string;
}
