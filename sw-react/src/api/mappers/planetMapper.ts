import { PlanetModel } from "../../models/planetModel";
import { PlanetDTO } from "../dtos/planetDTO";

/** Mapper planet */
export function mapPlanetDtoToPlanetModel(planetDto: PlanetDTO, docId: number): PlanetModel {
  return {
    climate: planetDto.climate,
    created: planetDto.created,
    diameter: planetDto.diameter,
    edited: planetDto.edited,
    gravity: planetDto.gravity,
    image: planetDto.image,
    name: planetDto.name,
    orbitalPeriod: planetDto.orbital_period,
    population: planetDto.population,
    rotationPeriod: planetDto.rotation_period,
    surfaceWater: planetDto.surface_water,
    terrain: planetDto.terrain,
    docId,
  }
}
