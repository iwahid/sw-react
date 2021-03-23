import { VehicleModel } from "../../models/vehicleModel";
import { VehicleDTO } from "../dtos/vehicleDTO";


export function mapVehicleDtoToVehicleModel(vehicleDto: VehicleDTO, docId: string): VehicleModel {
  return {
    pilots: vehicleDto.pilots,
    vehicleClass: vehicleDto.vehicle_class,
    docId,
  }
}