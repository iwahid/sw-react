/** Interface that represent domain model of metadata */
export interface MetadataModel {
  /** Quantity of films in database */
  totalFilms: number;
  /** Quantity of people / characters in database */
  totalPeople: number;
  /** Quantity of planets in database */
  totalPlanets: number;
  /** Quantity of species in database */
  totalSpecies: number;
  /** Quantity of starships in database */
  totalStarships: number;
  /** Quantity of transports in database */
  totalTransport: number;
  /** Quantity of vehicles in database */
  totalVehicles: number;
}
