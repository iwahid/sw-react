import { SpecieModel } from "../../models/specieModel";
import { SpecieDTO } from "../dtos/specieDTO";

export function mapSpecieDtoToSpecieModel(specieDto: SpecieDTO, docId: string): SpecieModel {
  return {
    averageHeight: specieDto.average_height,
    averageLifespan: specieDto.average_lifespan,
    classification: specieDto.classification,
    created: specieDto.created,
    designation: specieDto.designation,
    edited: specieDto.edited,
    eyeColors: specieDto.eye_colors,
    hairColors: specieDto.hair_colors,
    homeworld: specieDto.homeworld,
    language: specieDto.language,
    name: specieDto.name,
    people: specieDto.people,
    skinColors: specieDto.skin_colors,
    docId,
  }
}
