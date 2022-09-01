import React from "react";
import { GetServerSideProps } from "next";
import { storeFront } from "../utils/storeFront";
import { productByHandle } from "../graphql/queries";

import type { SingleProduct } from "../types/Products/SingleProduct";
import ProductPage from "../Components/Product/ProductPage";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data }: { data: { productByHandle: SingleProduct } } =
    await storeFront(productByHandle, {
      handle: params.handle,
    });
  return {
    props: {
      productByHandle: data.productByHandle,
    },
  };
};

const ProductItem = ({
  productByHandle,
}: {
  productByHandle: SingleProduct;
}) => {
  return <ProductPage productByHandle={productByHandle} />;
};

export default ProductItem;
