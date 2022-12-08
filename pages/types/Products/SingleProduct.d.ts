export interface SingleProduct {
  variants: Variants;
  title: string;
  description: string;
  priceRange: PriceRange;
  images: Images;
}
export interface Variants {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  id: string;
}
export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}
export interface MinVariantPrice {
  amount: string;
}
export interface Images {
  edges?: (EdgesEntity1)[] | null;
}
export interface EdgesEntity1 {
  node: Node1;
}
export interface Node1 {
  url: string;
  altText?: null;
}
