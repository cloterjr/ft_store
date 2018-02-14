import { PriceWsDTO } from "./price";
import { PriceRangeWsDTO } from "./price-range";
import { StockWsDTO } from "./stock";

export interface Product {
    availableForPickup: boolean;
    averageRating: number;
    code: string;
    description: string;
    manufacturer: string;
    multidimensional: boolean;
    name: string;
    price: PriceWsDTO;
    priceRange: PriceRangeWsDTO;
    stock: StockWsDTO;
    summary: string;
    url: string;
}