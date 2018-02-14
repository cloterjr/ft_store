import { CurrentQuery } from "../pagination/current-query";
import { Pagination } from "../pagination/pagination";
import { Product } from "./product";
import { Sort } from "../pagination/sort";

    export interface ProductCategorySearchPageWsDTO {
        type: string;
        currentQuery: CurrentQuery;
        freeTextSearch: string;
        pagination: Pagination;
        products: Product[];
        sorts: Sort[];
    }