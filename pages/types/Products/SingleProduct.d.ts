export interface SingleProduct {
    data: Product;
    extensions: Extensions;
  }
  export interface Product {
    productByHandle: ProductByHandle;
  }
  export interface ProductByHandle {
    title: string;
    description: string;
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
    edges?: (EdgesEntity)[] | null;
  }
  export interface EdgesEntity {
    node: Node;
  }
  export interface Node {
    url: string;
    altText?: null;
  }
  export interface Extensions {
    cost: Cost;
  }
  export interface Cost {
    requestedQueryCost: number;
    actualQueryCost: number;
    throttleStatus: ThrottleStatus;
  }
  export interface ThrottleStatus {
    maximumAvailable: number;
    currentlyAvailable: number;
    restoreRate: number;
  }
  