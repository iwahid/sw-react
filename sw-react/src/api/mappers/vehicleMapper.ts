import { VehicleModel } from "../../models/vehicleModel";
import { VehicleDTO } from "../dtos/vehicleDTO";


export function mapVehicleDtoToVehicleModel(vehicleDto: VehicleDTO, docId: number): VehicleModel {
  return {
    pilots: vehicleDto.pilots,
    vehicleClass: vehicleDto.vehicle_class,
    docId,
  }
}
