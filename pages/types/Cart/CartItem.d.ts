export interface CartType {
  data: Data | null;
}
export interface Data {
  cart: Cart;
  userErrors: UserError[];
}
export interface UserError {
  message: string;
  field: string;
}
export interface Cart {
  id: string;
  lines: Lines;
  attributes?: AttributesEntity[] | null;
  createdAt: string;
}
export interface Lines {
  edges?: EdgesEntity[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  id: string;
  quantity: number;
  merchandise: Merchandise;
}
export interface Merchandise {
  id: string;
  product: Product;
}
export interface Product {
  handle: string;
  title: string;
  priceRange: PriceRange;
  images: Images;
}
export interface Images {
  edges?: EdgesEntity1[] | null;
}
export interface EdgesEntity1 {
  node: Node1;
}
export interface Node1 {
  url: string;
  altText: string;
}
export interface PriceRange {
  maxVariantPrice: MaxVariantPrice;
}
export interface MaxVariantPrice {
  amount: string;
}
export interface AttributesEntity {
  key: string;
  value: string;
}
