import { FilmModel } from "../../models/filmModel";
import { FilmDTO } from "../dtos/filmDTO";

/** Mapper for film from extend film */
export function mapFilmModelToFilmDto(film: FilmModel): FilmDTO {
  return {
    characters: film.characters,
    created: film.created,
    director: film.director,
    edited: film.edited,
    episode_id: film.episodeId,
    opening_crawl: film.openingCrawl,
    planets: film.planets,
    producer: film.producer,
    release_date: film.releaseDate,
    species: film.species,
    starships: film.starships,
    title: film.title,
    vehicles: film.vehicles,
  }
}
