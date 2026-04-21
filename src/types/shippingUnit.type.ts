export interface ShippingUnit {
    id: number;
    description: string;
    weight: number; // in tons
    height: number; // in meters
    width: number;  // in meters
    length: number; // in meters
    volume: number; // in cubic meters
}

export interface ShippingUnitRequest {
    id?: number;
    description: string;
    weight: number; // in tons
    height: number; // in meters
    width: number;  // in meters
    length: number; // in meters
    volume?: number; // in cubic meters
}