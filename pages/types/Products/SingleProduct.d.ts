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
    priceRangeV2: PriceRangeV2;
    images: Images;
  }
  export interface PriceRangeV2 {
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
  