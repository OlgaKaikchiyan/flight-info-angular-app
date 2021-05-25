export interface FlightInterface {
    id: number;
    airlineLogo: string;
    airportCode: string;
    location: string[];
    milestoneType: string[];
    productCode: string;
    productGroup: string;
    dayOfWeek: string[];
    openTime1: string;
    closeTime1: string;
    openTime2: string;
    closeTime2: string;
    opType: string;
    validFrom: string;
    validTo: string;
    nfd: string;
    exception: string;
}
