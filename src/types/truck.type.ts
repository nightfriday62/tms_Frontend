type TruckType = "RIGID" | "SEMI";
type TrailerType = "FLATBED" | "BOX" | "REFRIGERATED" | "OTHER";


export default interface CreateTruckRequest {
    plateNumber: string;
    truckType: TruckType;
    brand: string;
    model: string;
    volume: number; // in cubic meters
    weight: number; // in tons
    trailerType: TrailerType;
    trailerPlateNumber: string;
    shipments: string[];
}