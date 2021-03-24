import { StarshipModel } from "../../models/starshipModel";
import { StarshipDTO } from "../dtos/starshipDTO";

/** Mapper for starship */
export function mapStarshipDtoToStarshipMode(starshipDto: StarshipDTO, docId: number): StarshipModel {
  return {
    starshipSpeed: starshipDto.MGLT,
    hyperdriveRating: starshipDto.hyperdrive_rating,
    pilots: starshipDto.pilots,
    starshipClass: starshipDto.starship_class,
    docId,
  }
}
