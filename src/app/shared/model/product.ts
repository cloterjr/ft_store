import { Image } from "./image";
import { BaseEntity } from "./base/baseEntity";

export class Product extends BaseEntity{
    name : string;
    idCategorie : number;
    price: number;
    images: Image[];
    description: string;
    detail: string;
}