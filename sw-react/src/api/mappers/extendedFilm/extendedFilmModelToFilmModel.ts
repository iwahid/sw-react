import {ExtendedFilmModel} from "../../../models/extendedFilmModel";
import {FilmModel} from "../../../models/filmModel";

/** Mapper for film from extended film */
export const mapExtendedFilmToFilmModel = (film: ExtendedFilmModel): FilmModel => ({
    docId: film.docId,
    vehicles: film.vehicles.map(vehicle => Number(vehicle.docId)),
    species: film.species.map(specie => Number(specie.docId)),
    starships: film.starships.map(starship => Number(starship.docId)),
    planets: film.planets.map(planet => Number(planet.docId)),
    characters: film.characters.map(character => Number(character.docId)),
    releaseDate: film.releaseDate,
    director: film.director,
    openingCrawl: film.openingCrawl,
    producer: film.producer,
    episodeId: film.episodeId,
    title: film.title,
    edited: film.edited,
    created: film.created,
  })
