/**
 * Interface for planet domain model
 */
export interface PlanetModel {
  /** Type of climate on planet */
  climate: string;
  /** Date of creation planet in database */
  created: string;
  /** Diameter of planet in meters */
  diameter: string;
  /** Date of last editing planet document in database */
  edited: string;
  /** Gravity on planet. In standard metric */
  gravity: string;
  /** Planet image */
  image: string,
  /** Planet name */
  name: string;
  /** Orbital period in days */
  orbitalPeriod: string;
  /** Population of planet */
  population: string;
  /** Rotated period in days */
  rotationPeriod: string;
  /** Kind of water on surface */
  surfaceWater: string;
  /** Terrain of planet */
  terrain: string;
  /** Id of the document */
  docId: number;
}
