import { FilmDTO } from "../dtos/filmDTO";
import { FilmModel } from "../../models/filmModel";

/** Mapper for film */
export function mapFilmDtoToFilmModel(filmDto: FilmDTO, docId: number): FilmModel {
  return {
    characters: filmDto.characters,
    created: filmDto.created,
    director: filmDto.director,
    edited: filmDto.edited,
    episodeId: filmDto.episode_id,
    openingCrawl: filmDto.opening_crawl,
    planets: filmDto.planets,
    producer: filmDto.producer,
    releaseDate: filmDto.release_date,
    species: filmDto.species,
    starships: filmDto.starships,
    title: filmDto.title,
    vehicles: filmDto.vehicles,
    imageBackground: filmDto.image_background,
    imagePoster: filmDto.image_poster,
    docId,
  }
}
