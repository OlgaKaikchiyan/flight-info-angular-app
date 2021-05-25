export interface FlightInterface {
    id: number;
    airlineLogo: string;
    airportCode: string;
    location: string[];
    milestoneType: string[];
    productCode: string;
    productGroup: string;
    DoW: string[];
    openTime1: string;
    closeTime1: string;
    openTime2: string;
    closeTime2: string;
    OPType: string;
    validFrom: string;
    validTo: string;
    nfd: string;
    exception: string;
}
