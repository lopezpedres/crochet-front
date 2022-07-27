
export interface CartType {
    data: Data;
  }
  export interface Data {
    cart: Cart;
  }
  export interface Cart {
    id: string;
    lines: Lines;
    attributes?: (AttributesEntity)[] | null;
    createdAt: string;
  }
  export interface Lines {
    edges?: (EdgesEntity)[] | null;
  }
  export interface EdgesEntity {
    node: Node;
  }
  export interface Node {
    quantity: number;
    merchandise: Merchandise;
  }
  export interface Merchandise {
    product: Product;
  }
  export interface Product {
    handle: string;
    title: string;
    priceRange: PriceRange;
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
  