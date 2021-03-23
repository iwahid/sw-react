import { StarshipModel } from "../../models/starshipModel";
import { StarshipDTO } from "../dtos/starshipDTO";

export function mapStarshipDtoToStarshipMode(starshipDto: StarshipDTO, docId: string): StarshipModel {
  return {
    MGLT: starshipDto.MGLT,
    hyperdriveRating: starshipDto.hyperdrive_rating,
    pilots: starshipDto.pilots,
    starshipClass: starshipDto.starship_class,
    docId,
  }
}
