export enum Categories {
    Shop = "shop",
    Mens = "mens",
    Womens = "womens",
    Kids = "kids"
}

export interface Product {
    id: number;
    name: string;
    image: string;
    new_price: number;
    old_price: number;
    category: string;
}