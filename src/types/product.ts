

export type Category = "All" | "Skincare" | "Makeup" | "Fragrance" | "Haircare";

export interface Product {
    id: number;
    name: string;
    category: Exclude<Category, "All">;
    price: number;
    tag?:string;
    image:string
}