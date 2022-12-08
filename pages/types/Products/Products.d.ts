export interface Products {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  title: string;
  handle: string;
  priceRange: PriceRange;
  images: Images;
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
