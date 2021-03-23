// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
/**
 * Interface for transport domain model
 */
export interface TransportDTO {
  /** Cargo capacity of transport in tonn */
  cargo_capacity: string,
  /** Consumables on board transport in tonn */
  consumables: string,
  /** Cost of transport in credits */
  cost_in_credits: string,
  /** Date of creation transport in database */
  created: string,
  /** Crew of the transport */
  crew: string,
  /** Date of last editing specie document in database */
  edited: string,
  /** Image of the transport */
  image: string,
  /** Langth of the transport */
  length: string,
  /** The shipyard where it was built */
  manufacturer: string,
  /** Transport speed ( Kilometer per hour) */
  max_atmosphering_speed: string,
  /** What class does the transport belong to */
  model: string,
  /** Name of Transport */
  name: string,
  /** Passengers on board transport in sinful souls */
  passengers: string,
}
