import { SerialVersionUID } from "./serial-version-uid";

export interface StockWsDTO {
    serialVersionUID: SerialVersionUID;
    stockLevelStatus: string;
    stockLevel: number;
}