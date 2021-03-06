import {FilmModel} from "../../../models/filmModel";
import {ExtendedFilmModel} from "../../../models/extendedFilmModel";
import {CharacterModel} from "../../../models/characterModel";
import {PlanetModel} from "../../../models/planetModel";
import {SpecieModel} from "../../../models/specieModel";
import {StarshipModel} from "../../../models/starshipModel";
import {VehicleModel} from "../../../models/vehicleModel";

/** Mapper for extend film */
export const mapFilmModelToExtendedFilmModel = (
  film: FilmModel,
  characters?: CharacterModel[],
  planets?: PlanetModel[],
  species?: SpecieModel[],
  starships?: StarshipModel[],
  vehicles?: VehicleModel[],
): ExtendedFilmModel => ({
    characters: characters ?? [],
    created: film.created,
    director: film.director,
    docId: film.docId,
    edited: film.edited, 
    episodeId: film.episodeId,
    openingCrawl: film.openingCrawl,
    planets: planets ?? [],
    producer: film.producer,
    releaseDate: film.releaseDate,
    species: species ?? [],
    starships: starships ?? [],
    title: film.title,
    vehicles: vehicles ?? [],
    imageBackground: film.imageBackground,
    imagePoster: film.imagePoster
  })
