import React from "react";

export interface allProducts {
  products: Products;
}
export interface Products {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  title: string;
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


const ProductItem = ({product}: {product:Node}) => {
  const image = product.images.edges[0].node.url
  const title = product.title;
  const price = product.priceRange.minVariantPrice.amount;
  return (
    <div className="container max-w-sm border-gray-700 shadow-sm border mx-auto mb-5  hover:-translate-y-2">
      <img className="w-full object-cover" src={image} />
      <div className=" border-b-2">
        <span className="text-gray-700 font-bold md:text-2xl  m-4">{title}</span>
      </div>
      <div className="text-right">
        <span className="text-gray-700 text-md md:text-2xl font-bold m-4 ">
          $ {price}MXN
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
