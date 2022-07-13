import Link from "next/link";
import React from "react";

import type { Node } from "../../types/Products/Products";

const ProductItem = ({ product }: { product: Node }) => {
  const image = product.images.edges[0].node.url;
  const title = product.title;
  const price = product.priceRange.minVariantPrice.amount;
  return (
    <div className="container md:max-w-sm max-w-xs   mx-auto mb-5  hover:-translate-y-2">
      <Link href={`/product/${product.handle}`}>
        <a>
          <img
            className="w-full object-cover max-w-[384px] max-h-[338px] "
            src={image}
          />
        </a>
      </Link>
      <div className=" border-b-2">
        <span className="text-gray-700 font-bold md:text-xs text-[.65rem]  m-auto">
          {title}
        </span>
      </div>
      <div className="text-right">
        <span className="text-gray-700 text-md md:text-xl font-bold m-4 ">
          $ {price}MXN
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
