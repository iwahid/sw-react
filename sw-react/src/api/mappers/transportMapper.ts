import { TransportModel } from '../../models/transportModel';
import { TransportDTO } from '../dtos/transportDTO';

export function mapTransportDtoToTransportModel(transportDTO: TransportDTO, docId: string): TransportModel {
  return {
    cargoCapacity: transportDTO.cargo_capacity,
    consumables: transportDTO.consumables,
    costInCredits: transportDTO.cost_in_credits,
    created: transportDTO.created,
    crew: transportDTO.crew,
    edited: transportDTO.edited,
    image: transportDTO.image,
    length: transportDTO.length,
    manufacturer: transportDTO.manufacturer,
    maxAtmospheringSpeed: transportDTO.max_atmosphering_speed,
    model: transportDTO.model,
    name: transportDTO.name,
    passengers: transportDTO.passengers,
    docId,
  }
}