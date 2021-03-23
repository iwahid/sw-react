/** 
 * Interface for vehicle domain model
 */
export interface VehicleModel {
  /** Pilots ids of vehicle */
  pilots: number[];
  /** Class of vehicle */
  vehicleClass: string;
  /** Id of the document */
  docId: string;
}
