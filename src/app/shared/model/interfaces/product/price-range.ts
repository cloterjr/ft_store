import { SerialVersionUID } from "./serial-version-uid";

export interface PriceRangeWsDTO {
    serialVersionUID: SerialVersionUID;
    currencyIso: string;
    value: number;
    priceType: string;
    formattedValue: string;
    minQuantity: number;
    maxQuantity: number;
}