// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for planet domain model
 */
export interface PlanetDTO {
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
  orbital_period: string;
  /** Population of planet */
  population: string;
  /** Rotated period in days */
  rotation_period: string;
  /** Kind of water on surface */
  surface_water: string;
  /** Terrain of planet */
  terrain: string;
}
