import { CharacterModel } from "../../models/characterModel";
import { CharacterDTO } from "../dtos/characterDTO";

/** Mapper for character */
export function mapCharacterDtoToCharacterModel(character: CharacterDTO, docId: number): CharacterModel {
  return {
    birthYear: character.birth_year,
    created: character.created,
    edited: character.edited,
    eyeColor: character.eye_color,
    gender: character.gender,
    hairColor: character.hair_color,
    height: character.height,
    homeworld: character.homeworld,
    image: character.image,
    mass: character.mass,
    name: character.name,
    skinColor: character.skin_color,
    docId,
  }
}
